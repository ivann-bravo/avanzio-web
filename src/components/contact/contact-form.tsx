"use client";

import { useState, type FormEvent } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import {
  CONTACT_LIMITS,
  HONEYPOT_FIELD,
  SERVICE_OPTIONS,
  payloadFromFormData,
  validateContact,
  type ContactErrors,
  type ContactPayload,
} from "@/lib/contact";
import { waLink } from "@/lib/whatsapp";

type Status = "idle" | "sending" | "sent" | "error";

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

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});

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

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, [HONEYPOT_FIELD]: String(data.get(HONEYPOT_FIELD) ?? "") }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-sand bg-bone p-8">
        <p className="text-title text-2xl">Listo, nos llegó.</p>
        <p className="mt-2 text-ink-soft">
          Te respondemos por mail a la brevedad. Si es urgente,{" "}
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
    <form noValidate onSubmit={onSubmit} className="space-y-5 rounded-[var(--radius-card)] border border-sand bg-bone p-6 sm:p-8">
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
        <label htmlFor="servicio" className="mb-1.5 block text-sm font-semibold">
          ¿Qué necesitás?
        </label>
        <select
          id="servicio"
          name="servicio"
          defaultValue=""
          className={fieldClass}
          aria-invalid={Boolean(errors.servicio)}
          aria-describedby={describedBy("servicio")}
        >
          <option value="" disabled>
            Elegí una opción
          </option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <FieldError id="error-servicio" message={errors.servicio} />
      </div>
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

      {status === "error" ? (
        <div role="alert" className="rounded-xl border border-danger/40 bg-paper p-4 text-sm">
          <p className="font-semibold text-danger">No pudimos enviar el mensaje.</p>
          <p className="mt-1 text-ink-soft">Probá de nuevo en un rato o escribinos directo.</p>
          <ButtonLink href={waLink("contacto")} icon="whatsapp" size="sm" className="mt-3">
            Escribinos por WhatsApp
          </ButtonLink>
        </div>
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
