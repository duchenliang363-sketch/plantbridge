"use client";

import { FormEvent, useMemo, useState } from "react";
import { isEmailConfigured, isWhatsAppConfigured, site } from "@/lib/site";
import { whatsappHref } from "@/lib/whatsapp";

type InquiryFormProps = {
  defaultMachine: string;
  whatsappMessage: string;
  whatsappLabel: string;
};

type FormState = {
  name: string;
  country: string;
  whatsapp: string;
  email: string;
  destinationPort: string;
  machine: string;
  message: string;
};

export default function InquiryForm({
  defaultMachine,
  whatsappMessage,
  whatsappLabel,
}: InquiryFormProps) {
  const [values, setValues] = useState<FormState>({
    name: "",
    country: "",
    whatsapp: "",
    email: "",
    destinationPort: "",
    machine: defaultMachine,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "prepared">("idle");
  const wa = whatsappHref(whatsappMessage);

  const composed = useMemo(() => {
    return [
      `Name: ${values.name}`,
      `Country: ${values.country}`,
      `WhatsApp: ${values.whatsapp}`,
      `Email: ${values.email}`,
      `Destination Port: ${values.destinationPort}`,
      `Machine: ${values.machine}`,
      "",
      values.message || "Please send the price and more machine details.",
    ].join("\n");
  }, [values]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isEmailConfigured()) {
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
        `Inquiry: ${values.machine}`,
      )}&body=${encodeURIComponent(composed)}`;
      window.location.href = mailto;
      return;
    }
    setStatus("prepared");
  }

  return (
    <div className="border border-steel-200 bg-white p-5 sm:p-6">
      <form className="space-y-4" onSubmit={onSubmit}>
        <Field
          id="name"
          label="Name"
          value={values.name}
          required
          onChange={(name) => setValues((current) => ({ ...current, name }))}
        />
        <Field
          id="country"
          label="Country"
          value={values.country}
          required
          onChange={(country) => setValues((current) => ({ ...current, country }))}
        />
        <Field
          id="buyer-whatsapp"
          label="WhatsApp"
          value={values.whatsapp}
          required
          onChange={(whatsapp) =>
            setValues((current) => ({ ...current, whatsapp }))
          }
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          required
          onChange={(email) => setValues((current) => ({ ...current, email }))}
        />
        <Field
          id="destination-port"
          label="Destination Port"
          value={values.destinationPort}
          onChange={(destinationPort) =>
            setValues((current) => ({ ...current, destinationPort }))
          }
        />
        <Field
          id="machine"
          label="Machine"
          value={values.machine}
          required
          onChange={(machine) => setValues((current) => ({ ...current, machine }))}
        />
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Message</span>
          <textarea
            id="message"
            rows={5}
            className="w-full border border-steel-300 bg-white px-3 py-2 text-sm outline-none focus:border-ink"
            value={values.message}
            onChange={(event) =>
              setValues((current) => ({ ...current, message: event.target.value }))
            }
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-white hover:bg-steel-800"
          >
            Get Price & Shipping Information
          </button>
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center bg-accent px-4 text-sm font-medium text-white hover:bg-accent-hover"
            >
              {whatsappLabel}
            </a>
          ) : (
            <a
              href="/contact/#whatsapp"
              className="inline-flex h-11 items-center justify-center border border-steel-300 px-4 text-sm font-medium hover:border-steel-500"
            >
              {whatsappLabel}
            </a>
          )}
        </div>
      </form>
      {!isEmailConfigured() && !isWhatsAppConfigured() ? (
        <p className="mt-4 text-sm leading-6 text-steel-600">
          WhatsApp and email are configuration items and have not been published
          yet. Submitting this form prepares your inquiry on this page so it can
          be copied once contact details are available.
        </p>
      ) : null}
      {status === "prepared" ? (
        <div className="mt-4 border border-steel-200 bg-steel-50 p-4">
          <p className="text-sm font-medium">Inquiry prepared</p>
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm leading-6 text-steel-800">
            {composed}
          </pre>
        </div>
      ) : null}
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input
        id={id}
        type={type}
        required={required}
        className="h-11 w-full border border-steel-300 bg-white px-3 text-sm outline-none focus:border-ink"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
