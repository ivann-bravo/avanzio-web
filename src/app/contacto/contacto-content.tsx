"use client";

import { useState } from "react";
import { WA } from "@/lib/whatsapp";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactoContent() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      servicio: (form.elements.namedItem("servicio") as HTMLSelectElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setErrorMsg("Hubo un error al enviar. Intentá de nuevo o escribinos por WhatsApp.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-[#080612] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all";

  return (
    <>
      {/* HERO */}
      <section className="bg-[#080612] pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="hero-animate hero-animate-1 inline-block py-1 px-3 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 text-sm font-bold tracking-widest mb-6">
            CONTACTO
          </span>
          <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6 text-white max-w-3xl">
            La primera reunión<br />
            <span className="text-[#8B5CF6]">es gratis y sin compromiso.</span>
          </h1>
          <p className="hero-animate hero-animate-3 text-xl text-slate-400 max-w-xl leading-relaxed">
            Contanos qué necesitás y te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="bg-[#080612] border-t border-white/10 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* FORMULARIO (3/5) */}
            <div className="lg:col-span-3 reveal">
              <div className="bg-[#1A1232] border border-white/[0.08] rounded-2xl p-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <span className="material-symbols-outlined text-emerald-400 text-6xl block mb-4">check_circle</span>
                    <h2 className="text-2xl font-bold text-white mb-3">¡Mensaje recibido!</h2>
                    <p className="text-slate-400 leading-relaxed">
                      Te respondemos en menos de 24 horas hábiles. Podés escribirnos también por WhatsApp si necesitás una respuesta más rápida.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-2">Envianos un mensaje</h2>
                    <p className="text-sm text-slate-400 mb-8">Completá el formulario y nos ponemos en contacto a la brevedad.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">Nombre</label>
                          <input
                            name="nombre"
                            type="text"
                            placeholder="Tu nombre"
                            required
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">Empresa / Negocio</label>
                          <input
                            name="empresa"
                            type="text"
                            placeholder="Nombre de tu empresa"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                        <input
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">¿Qué necesitás?</label>
                        <select
                          name="servicio"
                          required
                          defaultValue=""
                          className={inputClass + " appearance-none"}
                        >
                          <option value="" disabled>Seleccioná una opción</option>
                          <option>Sistema a medida</option>
                          <option>Tienda online</option>
                          <option>Panel de gestión</option>
                          <option>Otro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Contanos tu proyecto</label>
                        <textarea
                          name="mensaje"
                          rows={5}
                          placeholder="Describí brevemente tu negocio y qué problema querés resolver. No hace falta que sea técnico."
                          className={inputClass + " resize-none"}
                        />
                      </div>
                      {status === "error" && (
                        <p className="text-sm text-red-400 text-center">{errorMsg}</p>
                      )}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#7C3AED]/25 flex items-center justify-center gap-2"
                      >
                        {status === "loading" ? (
                          <>
                            <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined">send</span>
                            Enviar mensaje
                          </>
                        )}
                      </button>
                      <p className="text-xs text-slate-500 text-center">Te respondemos en menos de 24 horas hábiles.</p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* SIDEBAR (2/5) */}
            <div className="lg:col-span-2 space-y-4">

              {/* WhatsApp */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6 reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white">WhatsApp</p>
                    <p className="text-xs text-slate-400">La forma más rápida</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  ¿Preferís hablar directamente? Escribinos por WhatsApp y respondemos en minutos.
                </p>
                <a
                  href={WA.contacto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-center py-3 rounded-xl font-bold transition-all text-sm"
                >
                  Abrir WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="bg-[#1A1232] border border-white/[0.08] rounded-2xl p-6 reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#7C3AED] text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-xs text-slate-400">Para consultas formales</p>
                  </div>
                </div>
                <p className="text-[#8B5CF6] text-sm font-semibold">hola@avanzio.ar</p>
              </div>

              {/* Ubicación */}
              <div className="bg-[#1A1232] border border-white/[0.08] rounded-2xl p-6 reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-400 text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Ubicación</p>
                    <p className="text-xs text-slate-400">Trabajo 100% remoto</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">Buenos Aires, Argentina</p>
              </div>

              {/* Horarios */}
              <div className="bg-[#1A1232] border border-white/[0.08] rounded-2xl p-6 reveal" style={{ transitionDelay: '0.4s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-amber-400 text-2xl">schedule</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Disponibilidad</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Lun – Vie</span>
                    <span className="text-slate-200 font-medium">9:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sáb</span>
                    <span className="text-slate-200 font-medium">10:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dom</span>
                    <span className="text-slate-500">Cerrado</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* QUÉ PASA DESPUÉS */}
      <section className="bg-[#0F0A20] border-t border-white/10 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold text-white">¿Qué pasa después?</h2>
            <p className="text-slate-400 mt-3">Sin sorpresas. Así funciona el proceso desde el primer contacto.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: "reply",
                iconColor: "text-[#A78BFA]",
                circleBg: "bg-[#7C3AED]/20",
                filled: false,
                title: "Respondemos",
                sub: "En menos de 24hs hábiles",
                delay: '0.05s',
              },
              {
                icon: "video_call",
                iconColor: "text-emerald-400",
                circleBg: "bg-emerald-500/20",
                filled: false,
                title: "Reunión inicial",
                sub: "Gratis, sin compromiso",
                delay: '0.15s',
              },
              {
                icon: "description",
                iconColor: "text-amber-400",
                circleBg: "bg-amber-500/20",
                filled: false,
                title: "Propuesta",
                sub: "Solución + presupuesto claro",
                delay: '0.25s',
              },
              {
                icon: "rocket_launch",
                iconColor: "text-white",
                circleBg: "bg-[#7C3AED]",
                filled: true,
                title: "Arrancamos",
                sub: "Si decidís seguir adelante",
                delay: '0.35s',
              },
            ].map((step) => (
              <div key={step.title} className="bg-[#1A1232] border border-white/[0.08] rounded-2xl p-6 text-center reveal" style={{ transitionDelay: step.delay }}>
                <div
                  className={`w-12 h-12 rounded-full ${step.circleBg} flex items-center justify-center mx-auto mb-4`}
                >
                  <span className={`material-symbols-outlined ${step.iconColor} text-xl`}>{step.icon}</span>
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">{step.title}</h3>
                <p className="text-xs text-slate-400">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
