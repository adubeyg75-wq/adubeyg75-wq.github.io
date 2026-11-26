"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  business,
  projectFinance,
  schemes,
  type FormOption,
} from "@/content/site";
import { useLanguage } from "@/lib/language";
import { track } from "@/lib/track";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Checkbox,
  Input,
  RadioGroup,
} from "@/components/ui/form-fields";

type Answers = {
  projectType: string;
  sector: string;
  loanAmount: string;
  location: string;
  stage: string;
  contribution: string;
  schemeValues: string[];
  name: string;
  mobile: string;
  email: string;
  callTime: string;
  consent: boolean;
  honeypot: string;
};

type FieldKey = keyof Answers;
type Errors = Partial<Record<FieldKey, string>>;
type Status = "idle" | "submitting" | "success" | "fallback";

const EMPTY_ANSWERS: Answers = {
  projectType: "",
  sector: "",
  loanAmount: "",
  location: "",
  stage: "",
  contribution: "",
  schemeValues: [],
  name: "",
  mobile: "",
  email: "",
  callTime: "",
  consent: false,
  honeypot: "",
};

const STEP_FIELDS: FieldKey[][] = [
  ["projectType", "sector", "loanAmount", "location"],
  ["stage", "contribution", "schemeValues"],
  ["name", "mobile", "email", "callTime", "consent"],
];

const NOT_SURE_SCHEME = "__not_sure__";
const SUBMIT_TIMEOUT_MS = 12000;

function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

export function QualifyingEnquiryForm() {
  const { t } = useLanguage();
  const form = projectFinance.form;
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [errors, setErrors] = useState<Errors>({});
  const [step, setStep] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const fallbackLinkRef = useRef<HTMLAnchorElement>(null);

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (status === "fallback") fallbackLinkRef.current?.focus();
  }, [status]);

  function setField<K extends FieldKey>(key: K, value: Answers[K]) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function toggleScheme(value: string) {
    const selected = answers.schemeValues.includes(value);
    setField(
      "schemeValues",
      selected
        ? answers.schemeValues.filter((item) => item !== value)
        : [...answers.schemeValues, value],
    );
  }

  function validateField(key: FieldKey): string | undefined {
    switch (key) {
      case "schemeValues":
        return answers.schemeValues.length === 0 ? t(form.errors.schemes) : undefined;
      case "mobile":
        return /^[6-9]\d{9}$/.test(answers.mobile.trim())
          ? undefined
          : t(form.errors.mobile);
      case "email": {
        const email = answers.email.trim();
        if (email === "") return undefined;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? undefined
          : t(form.errors.email);
      }
      case "consent":
        return answers.consent ? undefined : t(form.errors.consent);
      default: {
        const value = answers[key];
        return typeof value === "string" && value.trim() === ""
          ? t(form.errors.required)
          : undefined;
      }
    }
  }

  function validateKeys(keys: FieldKey[]): Errors {
    const next: Errors = {};
    for (const key of keys) {
      const message = validateField(key);
      if (message) next[key] = message;
    }
    return next;
  }

  function focusFirstError(nextErrors: Errors, keys: FieldKey[]) {
    const first = keys.find((key) => nextErrors[key]);
    if (!first) return;

    window.requestAnimationFrame(() => {
      const field = document.querySelector<HTMLElement>(`[data-field="${first}"]`);
      const control = field?.querySelector<HTMLElement>(
        "input, select, textarea, button",
      );
      control?.focus();
      control?.scrollIntoView({ block: "center" });
    });
  }

  function optionLabel(options: FormOption[], value: string): string {
    const option = options.find((item) => item.value === value);
    return option ? t(option.label) : t(form.summaryLabels.notProvided);
  }

  function schemeLabel(value: string): string {
    if (value === NOT_SURE_SCHEME) return t(form.scheme.notSure);
    const scheme = schemes.find((item) => item.name.en === value);
    return scheme ? t(scheme.name) : value;
  }

  function buildSummary(): string {
    const labels = form.summaryLabels;
    return [
      t(labels.intro),
      `${t(labels.projectType)}: ${optionLabel(form.projectType.options, answers.projectType)}`,
      `${t(labels.sector)}: ${optionLabel(form.sector.options, answers.sector)}`,
      `${t(labels.loanAmount)}: ${optionLabel(form.loanAmount.options, answers.loanAmount)}`,
      `${t(labels.location)}: ${answers.location.trim() || t(labels.notProvided)}`,
      `${t(labels.stage)}: ${optionLabel(form.stage.options, answers.stage)}`,
      `${t(labels.contribution)}: ${optionLabel(form.contribution.options, answers.contribution)}`,
      `${t(labels.schemes)}: ${answers.schemeValues.map(schemeLabel).join(", ")}`,
      `${t(labels.name)}: ${answers.name.trim() || t(labels.notProvided)}`,
      `${t(labels.mobile)}: ${answers.mobile.trim() || t(labels.notProvided)}`,
      `${t(labels.email)}: ${answers.email.trim() || t(labels.notProvided)}`,
      `${t(labels.callTime)}: ${optionLabel(form.callTime.options, answers.callTime)}`,
    ].join("\n");
  }

  function openWhatsApp(href: string) {
    window.open(href, "_blank", "noopener,noreferrer");
  }

  async function submitEnquiry() {
    if (status === "submitting") return;

    setStatus("submitting");

    if (answers.honeypot.trim() !== "") {
      setStatus("success");
      return;
    }

    const whatsappHref = buildWhatsAppUrl(buildSummary());

    if (!endpoint) {
      setStatus("fallback");
      openWhatsApp(whatsappHref);
      return;
    }

    const priority = form.highPriorityLoanValues.includes(answers.loanAmount)
      ? "HIGH"
      : "STANDARD";
    const payload = {
      source: "project-finance",
      submittedAt: new Date().toISOString(),
      projectType: answers.projectType,
      sector: answers.sector,
      loanAmount: answers.loanAmount,
      location: answers.location.trim(),
      stage: answers.stage,
      ownContribution: answers.contribution,
      schemes: answers.schemeValues,
      name: answers.name.trim(),
      mobile: answers.mobile.trim(),
      email: answers.email.trim(),
      callTime: answers.callTime,
      consent: answers.consent,
      priority,
    };
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      SUBMIT_TIMEOUT_MS,
    );

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission failed");
      track("lead_submitted", { priority });
      setStatus("success");
    } catch {
      setStatus("fallback");
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  function handleNext() {
    const fields = STEP_FIELDS[step];
    const keysToValidate = isDesktop
      ? fields
      : questionIndex === fields.length - 1
        ? fields
        : [fields[questionIndex]];
    const nextErrors = validateKeys(keysToValidate);

    if (Object.keys(nextErrors).length > 0) {
      setErrors((current) => ({ ...current, ...nextErrors }));
      focusFirstError(nextErrors, keysToValidate);
      return;
    }

    setErrors({});

    if (!isDesktop && questionIndex < fields.length - 1) {
      setQuestionIndex((current) => current + 1);
      return;
    }

    if (step < STEP_FIELDS.length - 1) {
      setStep((current) => current + 1);
      setQuestionIndex(0);
      return;
    }

    void submitEnquiry();
  }

  function handleBack() {
    if (!isDesktop && questionIndex > 0) {
      setQuestionIndex((current) => current - 1);
      return;
    }

    if (step > 0) {
      const previousStep = step - 1;
      setStep(previousStep);
      setQuestionIndex(isDesktop ? 0 : STEP_FIELDS[previousStep].length - 1);
    }
  }

  function fieldWrapper(key: FieldKey, index: number, children: ReactNode) {
    const visible = isDesktop || questionIndex === index;
    return (
      <div
        key={key}
        data-field={key}
        className={`${visible ? "block" : "hidden"} w-full min-w-0`}
      >
        {children}
      </div>
    );
  }

  function renderField(key: FieldKey, index: number) {
    const error = errors[key];

    switch (key) {
      case "projectType":
        return fieldWrapper(
          key,
          index,
          <RadioGroup
            id="pf-project-type"
            name="pf-project-type"
            label={t(form.projectType.label)}
            options={form.projectType.options.map((option) => ({
              value: option.value,
              label: t(option.label),
            }))}
            value={answers.projectType}
            onChange={(value) => setField("projectType", value)}
            error={error}
          />,
        );
      case "sector":
        return fieldWrapper(
          key,
          index,
          <RadioGroup
            id="pf-sector"
            name="pf-sector"
            label={t(form.sector.label)}
            options={form.sector.options.map((option) => ({
              value: option.value,
              label: t(option.label),
            }))}
            value={answers.sector}
            onChange={(value) => setField("sector", value)}
            error={error}
          />,
        );
      case "loanAmount":
        return fieldWrapper(
          key,
          index,
          <RadioGroup
            id="pf-loan-amount"
            name="pf-loan-amount"
            label={t(form.loanAmount.label)}
            options={form.loanAmount.options.map((option) => ({
              value: option.value,
              label: t(option.label),
            }))}
            value={answers.loanAmount}
            onChange={(value) => setField("loanAmount", value)}
            error={error}
          />,
        );
      case "location":
        return fieldWrapper(
          key,
          index,
          <Input
            id="pf-location"
            label={t(form.location.label)}
            placeholder={t(form.location.placeholder)}
            value={answers.location}
            onChange={(event) => setField("location", event.target.value)}
            error={error}
          />,
        );
      case "stage":
        return fieldWrapper(
          key,
          index,
          <RadioGroup
            id="pf-stage"
            name="pf-stage"
            label={t(form.stage.label)}
            options={form.stage.options.map((option) => ({
              value: option.value,
              label: t(option.label),
            }))}
            value={answers.stage}
            onChange={(value) => setField("stage", value)}
            error={error}
          />,
        );
      case "contribution":
        return fieldWrapper(
          key,
          index,
          <RadioGroup
            id="pf-contribution"
            name="pf-contribution"
            label={t(form.contribution.label)}
            options={form.contribution.options.map((option) => ({
              value: option.value,
              label: t(option.label),
            }))}
            value={answers.contribution}
            onChange={(value) => setField("contribution", value)}
            error={error}
          />,
        );
      case "schemeValues": {
        const options = [
          ...schemes.map((scheme) => ({
            value: scheme.name.en,
            label: t(scheme.name),
          })),
          { value: NOT_SURE_SCHEME, label: t(form.scheme.notSure) },
        ];
        return fieldWrapper(
          key,
          index,
          <fieldset className="w-full min-w-0">
            <legend className="mb-1 text-base font-semibold text-navy">
              {t(form.scheme.label)}
            </legend>
            <p id="pf-scheme-hint" className="text-base leading-6 text-ink">
              {t(form.scheme.hint)}
            </p>
            <div className="grid gap-2">
              {options.map((option, optionIndex) => (
                <label
                  key={option.value}
                  htmlFor={`pf-scheme-${optionIndex}`}
                  className="flex min-h-11 items-center gap-3 rounded-md text-base text-text"
                >
                  <input
                    id={`pf-scheme-${optionIndex}`}
                    type="checkbox"
                    className="h-5 w-5 shrink-0 accent-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    checked={answers.schemeValues.includes(option.value)}
                    onChange={() => toggleScheme(option.value)}
                    aria-describedby="pf-scheme-hint"
                  />
                  <span className="font-medium text-navy">{option.label}</span>
                </label>
              ))}
            </div>
            {error ? (
              <p role="alert" className="min-h-6 text-base leading-6 text-error">
                {error}
              </p>
            ) : null}
          </fieldset>,
        );
      }
      case "name":
        return fieldWrapper(
          key,
          index,
          <Input
            id="pf-name"
            label={t(form.name.label)}
            placeholder={t(form.name.placeholder)}
            value={answers.name}
            onChange={(event) => setField("name", event.target.value)}
            error={error}
          />,
        );
      case "mobile":
        return fieldWrapper(
          key,
          index,
          <Input
            id="pf-mobile"
            type="tel"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            label={t(form.mobile.label)}
            placeholder={t(form.mobile.placeholder)}
            value={answers.mobile}
            onChange={(event) =>
              setField("mobile", event.target.value.replace(/\D/g, "").slice(0, 10))
            }
            error={error}
          />,
        );
      case "email":
        return fieldWrapper(
          key,
          index,
          <Input
            id="pf-email"
            type="email"
            label={t(form.email.label)}
            placeholder={t(form.email.placeholder)}
            value={answers.email}
            onChange={(event) => setField("email", event.target.value)}
            error={error}
          />,
        );
      case "callTime":
        return fieldWrapper(
          key,
          index,
          <RadioGroup
            id="pf-call-time"
            name="pf-call-time"
            label={t(form.callTime.label)}
            options={form.callTime.options.map((option) => ({
              value: option.value,
              label: t(option.label),
            }))}
            value={answers.callTime}
            onChange={(value) => setField("callTime", value)}
            error={error}
          />,
        );
      case "consent":
        return fieldWrapper(
          key,
          index,
          <Checkbox
            id="pf-consent"
            label={t(form.consent.label)}
            checked={answers.consent}
            onChange={(event) => setField("consent", event.target.checked)}
            error={error}
          />,
        );
      default:
        return null;
    }
  }

  const fields = STEP_FIELDS[step];
  const showBack = !isDesktop ? step > 0 || questionIndex > 0 : step > 0;
  const whatsappHref = buildWhatsAppUrl(buildSummary());
  const isLastStep = step === STEP_FIELDS.length - 1;
  const submitting = status === "submitting";

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-surface p-5 shadow-md sm:p-8">
      <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
        {t(form.title)}
      </h2>
      <p className="mt-3 text-base leading-7 text-text">{t(form.subtitle)}</p>

      <div className="mt-6">
        <p className="text-base font-semibold text-navy">
          {fillTemplate(t(form.stepProgress), { current: String(step + 1) })}
          {" · "}
          {t(form.stepNames[step])}
        </p>
        <div className="mt-2 flex gap-2" aria-hidden="true">
          {form.stepNames.map((name, index) => (
            <span
              key={name.en}
              className={`h-2 flex-1 rounded-full ${
                index <= step ? "bg-accent" : "bg-navy/15"
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-ink sm:hidden">
          {fillTemplate(t(form.questionProgress), {
            current: String(questionIndex + 1),
            total: String(fields.length),
          })}
        </p>
      </div>

      {status === "success" ? (
        <div
          role="status"
          className="mt-6 rounded-xl border border-accent bg-white p-5 shadow-sm"
        >
          <p className="text-lg font-bold text-navy">{t(form.success.title)}</p>
          <p className="mt-2 text-base leading-7 text-text">
            {fillTemplate(t(form.success.body), { hours: t(business.hours) })}
          </p>
          <Button href={whatsappHref} variant="outline" className="mt-4">
            {t(form.success.whatsapp)}
          </Button>
        </div>
      ) : null}

      {status === "fallback" ? (
        <div
          role="status"
          className="mt-6 rounded-xl border border-accent bg-white p-5 shadow-sm"
        >
          <p className="text-lg font-bold text-navy">{t(form.fallback.title)}</p>
          <p className="mt-2 text-base leading-7 text-text">
            {t(form.fallback.body)}
          </p>
          <a
            ref={fallbackLinkRef}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-navy bg-white px-6 py-3 text-base font-semibold text-navy shadow-sm transition-[translate,box-shadow,background-color,color] duration-[var(--duration-fast)] ease-[var(--ease-out)] motion-reduce:transition-none motion-reduce:translate-none motion-reduce:hover:translate-none hover:-translate-y-px hover:bg-surface hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
          >
            {t(form.fallback.whatsapp)}
          </a>
        </div>
      ) : null}

      <form
        className="mt-6"
        onSubmit={(event) => {
          event.preventDefault();
          handleNext();
        }}
      >
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="pf-honeypot">{t(form.honeypotLabel)}</label>
          <input
            id="pf-honeypot"
            name="pf-honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={answers.honeypot}
            onChange={(event) => setField("honeypot", event.target.value)}
          />
        </div>
        <div className="grid gap-6">{fields.map((key, index) => renderField(key, index))}</div>

        <div className="mt-8 flex flex-col gap-3 pr-20 sm:flex-row sm:pr-0">
          {showBack ? (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleBack}
              disabled={submitting}
            >
              {t(form.back)}
            </Button>
          ) : null}
          <Button type="submit" variant="primary" size="lg" disabled={submitting}>
            {submitting
              ? t(form.submitting)
              : isLastStep
                ? t(form.submit)
                : t(form.next)}
          </Button>
        </div>
      </form>
    </div>
  );
}
