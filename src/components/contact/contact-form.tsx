"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { TurnstileWidget } from "@/components/contact/turnstile-widget";
import { ButtonLink } from "@/components/ui/button-link";
import {
  CONTACT_LIMITS,
  ELAPSED_FIELD,
  HONEYPOT_FIELD,
  SERVICE_OPTIONS,
  payloadFromFormData,
  validateContact,
  type ContactErrors,
  type ContactPayload,
} from "@/lib/contact";
import { TURNSTILE_FIELD } from "@/lib/turnstile";
import { waLink } from "@/lib/whatsapp";

type Status = "idle" | "sending" | "sent" | "error" | "unverified";

/** Sin la clave pública de Cloudflare (por ejemplo, en desarrollo) el formulario funciona solo con el campo trampa y el tiempo mínimo. */
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const fieldClass =
  "w-full rounded-xl border border-sand bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-muted outline-none transition-colors duration-200 focus:border-violet aria-[invalid=true]:border-danger";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-danger">
      {message}
    </p>
  );
}

function FailureNotice({ title, text }: { title: string; text: string }) {
  return (
    <div role="alert" className="rounded-xl border border-danger/40 bg-paper p-4 text-sm">
      <p className="font-semibold text-danger">{title}</p>
      <p className="mt-1 text-ink-soft">{text}</p>
      <ButtonLink href={waLink("contacto")} icon="whatsapp" size="sm" className="mt-3">
        Escribinos por WhatsApp
      </ButtonLink>
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [token, setToken] = useState("");
  // Cada intento fallido vuelve a montar el widget de Turnstile para pedir un token nuevo.
  const [attempt, setAttempt] = useState(0);
  const startedAt = useRef(0);
  const sentTitle = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "sent") sentTitle.current?.focus();
  }, [status]);

  function clearError(name: string) {
    // Email y WhatsApp son alternativos: completar uno resuelve el error "falta un contacto".
    const keys = name === "email" || name === "whatsapp" ? ["email", "whatsapp"] : [name];
    if (keys.some((key) => errors[key as keyof ContactErrors])) {
      setErrors((prev) => {
        const next = { ...prev };
        for (const key of keys) delete next[key as keyof ContactErrors];
        return next;
      });
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = payloadFromFormData(data);
    const found = validateContact(payload);
    setErrors(found);
    const firstInvalid = (Object.keys(CONTACT_LIMITS) as (keyof ContactPayload)[]).find((key) => found[key]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (TURNSTILE_SITE_KEY && !token) {
      setStatus("unverified");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          [HONEYPOT_FIELD]: String(data.get(HONEYPOT_FIELD) ?? ""),
          [ELAPSED_FIELD]: Date.now() - startedAt.current,
          [TURNSTILE_FIELD]: token,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
    setToken("");
    setAttempt((n) => n + 1);
  }

  if (status === "sent") {
    return (
      <div role="status" className="h-full rounded-[var(--radius-card)] border border-sand bg-bone p-8">
        <p ref={sentTitle} tabIndex={-1} className="text-title text-2xl outline-none">
          Listo, nos llegó.
        </p>
        <p className="mt-2 text-ink-soft">
          Te respondemos el mismo día hábil. Si es urgente,{" "}
          <a href={waLink("contacto")} target="_blank" rel="noopener noreferrer" className="font-semibold text-violet underline underline-offset-4">
            escribinos por WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  const describedBy = (key: keyof ContactErrors) => (errors[key] ? `error-${key}` : undefined);

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onChange={(e) => {
        const target = e.target as EventTarget;
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) clearError(target.name);
      }}
      className="h-full space-y-5 rounded-[var(--radius-card)] border border-sand bg-bone p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            autoComplete="name"
            maxLength={CONTACT_LIMITS.nombre}
            className={fieldClass}
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={describedBy("nombre")}
          />
          <FieldError id="error-nombre" message={errors.nombre} />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-1.5 block text-sm font-semibold">
            Negocio <span className="font-normal text-ink-muted">(opcional)</span>
          </label>
          <input id="empresa" name="empresa" autoComplete="organization" maxLength={CONTACT_LIMITS.empresa} className={fieldClass} />
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">¿Cómo te respondemos?</p>
        <p className="mt-0.5 text-sm text-ink-muted">Dejanos al menos uno de los dos.</p>
        <div className="mt-3 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="vos@tunegocio.com"
              maxLength={CONTACT_LIMITS.email}
              className={fieldClass}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
            />
            <FieldError id="error-email" message={errors.email} />
          </div>
          <div>
            <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-semibold">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="11 2345 6789"
              maxLength={CONTACT_LIMITS.whatsapp}
              className={fieldClass}
              aria-invalid={Boolean(errors.whatsapp)}
              aria-describedby={describedBy("whatsapp")}
            />
            <FieldError id="error-whatsapp" message={errors.whatsapp} />
          </div>
        </div>
      </div>

      <fieldset aria-describedby={describedBy("servicio")}>
        <legend className="mb-2 text-sm font-semibold">¿Qué necesitás?</legend>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((option) => (
            <label key={option} className="cursor-pointer">
              <input type="radio" name="servicio" value={option} className="peer sr-only" />
              <span
                className={`inline-flex rounded-full border bg-paper px-4 py-2.5 text-[0.95rem] font-medium transition-[background-color,border-color,color,transform] duration-150 ease-out hover:border-ink active:scale-[0.97] peer-checked:border-ink peer-checked:bg-ink peer-checked:text-bone peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-violet ${
                  errors.servicio ? "border-danger" : "border-sand"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
        <FieldError id="error-servicio" message={errors.servicio} />
      </fieldset>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold">
          Contanos un poco <span className="font-normal text-ink-muted">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          maxLength={CONTACT_LIMITS.mensaje}
          placeholder="Hoy manejo el stock en un Excel y…"
          className={fieldClass}
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={describedBy("mensaje")}
        />
        <FieldError id="error-mensaje" message={errors.mensaje} />
      </div>

      {/* Campo trampa: invisible para personas y lectores de pantalla; los bots lo completan. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor={HONEYPOT_FIELD}>No completar</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      {TURNSTILE_SITE_KEY ? <TurnstileWidget key={attempt} siteKey={TURNSTILE_SITE_KEY} onToken={setToken} /> : null}

      {status === "error" ? (
        <FailureNotice title="No pudimos enviar el mensaje." text="Probá de nuevo en un rato o escribinos directo." />
      ) : null}
      {status === "unverified" ? (
        <FailureNotice
          title="Todavía no pudimos verificar el envío."
          text="Esperá unos segundos y probá de nuevo. Si sigue sin andar, escribinos directo."
        />
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-4 font-semibold text-bone transition-[background-color,transform] duration-200 ease-out hover:bg-violet active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
