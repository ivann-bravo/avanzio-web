"use client";

import { useState, type FormEvent } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { SERVICE_OPTIONS, payloadFromFormData, validateContact, type ContactErrors } from "@/lib/contact";
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
    const payload = payloadFromFormData(new FormData(e.currentTarget));
    const found = validateContact(payload);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
        <p className="mt-2 text-ink-soft">Te respondemos por mail a la brevedad. Si es urgente, escribinos por WhatsApp.</p>
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
          <input id="empresa" name="empresa" autoComplete="organization" className={fieldClass} />
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
        <textarea id="mensaje" name="mensaje" rows={4} placeholder="Hoy manejo el stock en un Excel y…" className={fieldClass} />
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
