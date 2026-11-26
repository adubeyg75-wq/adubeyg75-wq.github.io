"use client";

import {
  useId,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

type FieldBase = {
  label: string;
  hint?: string;
  error?: string;
};

const controlClasses =
  "min-h-11 w-full rounded-lg border border-navy/25 bg-white px-3 py-2 text-base text-text shadow-xs focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:shadow-focus aria-[invalid=true]:border-error";

function describedBy(id: string, hint?: string, error?: string): string {
  return [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ");
}

function FieldHint({ id, hint }: { id: string; hint?: string }) {
  if (!hint) return null;

  return (
    <p id={`${id}-hint`} className="text-base leading-6 text-ink">
      {hint}
    </p>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  return (
    <p
      id={`${id}-error`}
      role="alert"
      className="min-h-6 text-base leading-6 text-error"
    >
      {error}
    </p>
  );
}

export type InputProps = FieldBase &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
    id?: string;
  };

export function Input({ label, hint, error, id, ...rest }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="mb-1 block text-base font-semibold text-navy">
        {label}
      </label>
      <FieldHint id={inputId} hint={hint} />
      <input
        id={inputId}
        className={controlClasses}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy(inputId, hint, error)}
        {...rest}
      />
      <FieldError id={inputId} error={error} />
    </div>
  );
}

export type TextareaProps = FieldBase &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & {
    id?: string;
  };

export function Textarea({ label, hint, error, id, ...rest }: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <div className="w-full">
      <label htmlFor={textareaId} className="mb-1 block text-base font-semibold text-navy">
        {label}
      </label>
      <FieldHint id={textareaId} hint={hint} />
      <textarea
        id={textareaId}
        className={`${controlClasses} min-h-32 resize-y`}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy(textareaId, hint, error)}
        {...rest}
      />
      <FieldError id={textareaId} error={error} />
    </div>
  );
}

export type CheckboxProps = FieldBase &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
    id?: string;
  };

export function Checkbox({ label, hint, error, id, ...rest }: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className="w-full">
      <label
        htmlFor={checkboxId}
        className="flex min-h-11 items-start gap-3 rounded-md text-base text-text"
      >
        <input
          id={checkboxId}
          type="checkbox"
          className="mt-0.5 h-5 w-5 shrink-0 accent-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy(checkboxId, hint, error)}
          {...rest}
        />
        <span className="font-medium text-navy">{label}</span>
      </label>
      <FieldHint id={checkboxId} hint={hint} />
      <FieldError id={checkboxId} error={error} />
    </div>
  );
}

export type RadioOption = {
  value: string;
  label: string;
};

export type RadioGroupProps = FieldBase & {
  id?: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
};

export function RadioGroup({
  label,
  hint,
  error,
  id,
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  const generatedId = useId();
  const groupId = id ?? generatedId;

  return (
    <fieldset className="w-full min-w-0">
      <legend className="mb-1 text-base font-semibold text-navy">{label}</legend>
      <FieldHint id={groupId} hint={hint} />
      <div className="grid gap-2">
        {options.map((option, index) => {
          const optionId = `${groupId}-${index}`;
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className="flex min-h-11 items-center gap-3 rounded-md text-base text-text"
            >
              <input
                id={optionId}
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange?.(option.value)}
                className="h-5 w-5 shrink-0 accent-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-describedby={describedBy(groupId, hint, error)}
              />
              <span className="font-medium text-navy">{option.label}</span>
            </label>
          );
        })}
      </div>
      <FieldError id={groupId} error={error} />
    </fieldset>
  );
}
