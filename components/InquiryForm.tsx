"use client";

import { FormEvent, useState } from "react";
import { isEmailConfigured, isWhatsAppConfigured, site } from "@/lib/site";
import { whatsappHref } from "@/lib/whatsapp";

type InquiryFormProps = {
  defaultProductName: string;
  defaultModel: string;
  whatsappMessage: string;
  whatsappLabel: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function InquiryForm({
  defaultProductName,
  defaultModel,
  whatsappMessage,
  whatsappLabel,
}: InquiryFormProps) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorText, setErrorText] = useState("");
  const wa = whatsappHref(whatsappMessage);
  const equipmentName = defaultModel
    ? `${defaultProductName} / ${defaultModel}`
    : defaultProductName;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    if (honeypot.trim()) return;

    if (!isEmailConfigured()) {
      setStatus("error");
      setErrorText(
        "The inquiry inbox is not published yet. Please try WhatsApp, or try again later.",
      );
      return;
    }

    setStatus("submitting");
    setErrorText("");

    const submittedAt = new Date().toISOString();
    const payload = {
      name,
      Country: country,
      WhatsApp: whatsapp,
      email,
      Message: message.trim() || "Please send the price and more machine details.",
      "Product / Equipment Name": equipmentName,
      "Current Page URL": window.location.href,
      "Submitted At": submittedAt,
      _subject: `PlantBridge inquiry: ${equipmentName}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const data: { success?: boolean | string; message?: string } =
        await response.json().catch(() => ({}));
      const ok =
        response.ok &&
        (data.success === true || data.success === "true");

      if (!ok) {
        setStatus("error");
        setErrorText(
          data.message ||
            "Your request could not be sent. Please try again or contact us on WhatsApp.",
        );
        return;
      }

      setStatus("success");
      setName("");
      setCountry("");
      setWhatsapp("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorText(
        "Your request could not be sent. Please try again or contact us on WhatsApp.",
      );
    }
  }

  return (
    <div className="border border-steel-200 bg-white p-5 sm:p-6">
      {status === "success" ? (
        <p className="text-sm leading-6 text-steel-800">
          Thank you! Your request has been received. We’ll contact you shortly.
        </p>
      ) : (
        <form className="space-y-4" onSubmit={onSubmit}>
          <p className="text-sm leading-6 text-steel-700">
            Equipment: {equipmentName}
          </p>
          <Field
            id="name"
            label="Name"
            value={name}
            required
            onChange={setName}
          />
          <Field
            id="country"
            label="Country"
            value={country}
            required
            onChange={setCountry}
          />
          <Field
            id="buyer-whatsapp"
            label="WhatsApp"
            value={whatsapp}
            required
            onChange={setWhatsapp}
          />
          <Field
            id="email"
            label="Email"
            type="email"
            value={email}
            required
            onChange={setEmail}
          />
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Message</span>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full border border-steel-300 bg-white px-3 py-2 text-sm outline-none focus:border-ink"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <div className="hidden" aria-hidden="true">
            <input
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex h-11 items-center justify-center bg-ink px-4 text-sm font-medium text-white hover:bg-steel-800 disabled:cursor-wait disabled:opacity-70"
            >
              {status === "submitting" ? "Sending…" : "Request a Quote"}
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
      )}
      {!isEmailConfigured() && !isWhatsAppConfigured() ? (
        <p className="mt-4 text-sm leading-6 text-steel-600">
          WhatsApp and email have not been published yet.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-sm leading-6 text-red-700" role="alert">
          {errorText}
        </p>
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
