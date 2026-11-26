"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { business, contactPage } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { track } from "@/lib/track";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Checkbox,
  Input,
  Textarea,
} from "@/components/ui/form-fields";

type Answers = {
  name: string;
  mobile: string;
  message: string;
  consent: boolean;
  honeypot: string;
};

type FieldKey = "name" | "mobile" | "message" | "consent";
type TextField = Exclude<FieldKey, "consent"> | "honeypot";
type Errors = Partial<Record<FieldKey, string>>;
type Status = "idle" | "submitting" | "success" | "fallback";

const EMPTY_ANSWERS: Answers = {
  name: "",
  mobile: "",
  message: "",
  consent: false,
  honeypot: "",
};

const FIELD_KEYS: FieldKey[] = ["name", "mobile", "message", "consent"];
const SUBMIT_TIMEOUT_MS = 12000;

function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

export function ContactForm() {
  const { t } = useLanguage();
  const form = contactPage.form;
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const fallbackLinkRef = useRef<HTMLAnchorElement>(null);

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();

  useEffect(() => {
    if (status === "fallback") fallbackLinkRef.current?.focus();
  }, [status]);

  function clearError(key: FieldKey) {
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function setTextField(key: TextField, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    if (key !== "honeypot") clearError(key);
  }

  function setConsent(value: boolean) {
    setAnswers((current) => ({ ...current, consent: value }));
    clearError("consent");
  }

  function validate(): Errors {
    const next: Errors = {};
    if (answers.name.trim() === "") next.name = t(form.errors.required);
    if (!/^[6-9]\d{9}$/.test(answers.mobile.trim())) {
      next.mobile = t(form.errors.mobile);
    }
    if (answers.message.trim() === "") {
      next.message = t(form.errors.required);
    }
    if (!answers.consent) next.consent = t(form.errors.consent);
    return next;
  }

  function buildSummary(): string {
    const labels = form.summaryLabels;
    return [
      t(labels.intro),
      `${t(labels.name)}: ${answers.name.trim() || t(labels.notProvided)}`,
      `${t(labels.mobile)}: ${answers.mobile.trim() || t(labels.notProvided)}`,
      `${t(labels.message)}: ${answers.message.trim() || t(labels.notProvided)}`,
    ].join("\n");
  }

  function openWhatsApp(href: string) {
    window.open(href, "_blank", "noopener,noreferrer");
  }

  async function submitContact() {
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

    const payload = {
      source: "contact",
      submittedAt: new Date().toISOString(),
      type: "contact_enquiry",
      name: answers.name.trim(),
      mobile: answers.mobile.trim(),
      message: answers.message.trim(),
      consent: answers.consent,
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
      track("lead_submitted", { source: "contact" });
      setStatus("success");
    } catch {
      setStatus("fallback");
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstField = FIELD_KEYS.find((key) => nextErrors[key]);
      if (firstField) {
        window.requestAnimationFrame(() => {
          document.getElementById(`contact-${firstField}`)?.focus();
        });
      }
      return;
    }

    setErrors({});
    void submitContact();
  }

  const whatsappHref = buildWhatsAppUrl(buildSummary());
  const submitting = status === "submitting";

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-navy/10 bg-white p-5 shadow-md sm:p-8">
      <h3 className="text-2xl font-bold leading-tight text-navy sm:text-3xl">
        {t(form.title)}
      </h3>
      <p className="mt-3 text-base leading-7 text-text">
        {fillTemplate(t(form.subtitle), { hours: t(business.hours) })}
      </p>

      {status === "success" ? (
        <div
          role="status"
          className="mt-6 rounded-xl border border-accent bg-surface p-5"
        >
          <p className="text-lg font-bold text-navy">{t(form.success.title)}</p>
          <p className="mt-2 text-base leading-7 text-text">
            {fillTemplate(t(form.success.body), { hours: t(business.hours) })}
          </p>
          <Button
            href={whatsappHref}
            variant="outline"
            className="mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(form.success.whatsapp)}
          </Button>
        </div>
      ) : null}

      {status === "fallback" ? (
        <div
          role="status"
          className="mt-6 rounded-xl border border-accent bg-surface p-5"
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

      <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="contact-honeypot">{t(form.honeypotLabel)}</label>
          <input
            id="contact-honeypot"
            name="contact-honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={answers.honeypot}
            onChange={(event) => setTextField("honeypot", event.target.value)}
          />
        </div>
        <Input
          id="contact-name"
          label={t(form.name.label)}
          placeholder={t(form.name.placeholder)}
          value={answers.name}
          onChange={(event) => setTextField("name", event.target.value)}
          error={errors.name}
        />
        <Input
          id="contact-mobile"
          type="tel"
          inputMode="numeric"
          pattern="[6-9][0-9]{9}"
          maxLength={10}
          label={t(form.mobile.label)}
          placeholder={t(form.mobile.placeholder)}
          value={answers.mobile}
          onChange={(event) =>
            setTextField("mobile", event.target.value.replace(/\D/g, "").slice(0, 10))
          }
          error={errors.mobile}
        />
        <Textarea
          id="contact-message"
          label={t(form.message.label)}
          placeholder={t(form.message.placeholder)}
          value={answers.message}
          onChange={(event) => setTextField("message", event.target.value)}
          error={errors.message}
        />
        <Checkbox
          id="contact-consent"
          label={t(form.consent.label)}
          checked={answers.consent}
          onChange={(event) => setConsent(event.target.checked)}
          error={errors.consent}
        />
        <div className="flex justify-end pr-16 sm:pr-0">
          <Button type="submit" variant="primary" size="lg" disabled={submitting}>
            {submitting ? t(form.submitting) : t(form.submit)}
          </Button>
        </div>
      </form>
    </div>
  );
}
