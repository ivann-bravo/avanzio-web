"use client";

import { useState } from "react";

export default function ContactoContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] border border-[#4f46e5]/20 text-sm font-bold tracking-widest mb-6">
            CONTACTO
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6 text-white max-w-3xl">
            La primera reunión<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-indigo-400 to-emerald-400">
              es gratis y sin compromiso.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
            Contanos qué necesitás y te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-16 border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* FORMULARIO (3/5) */}
            <div className="lg:col-span-3">
              <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-8">
                {submitted ? (
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
                    <p className="text-slate-400 text-sm mb-8">Completá el formulario y nos ponemos en contacto a la brevedad.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">Nombre</label>
                          <input
                            type="text"
                            placeholder="Tu nombre"
                            required
                            className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-300 mb-2">Empresa / Negocio</label>
                          <input
                            type="text"
                            placeholder="Nombre de tu empresa"
                            className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          required
                          className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">¿Qué necesitás?</label>
                        <select
                          required
                          defaultValue=""
                          className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 transition-all appearance-none"
                        >
                          <option value="" disabled>Seleccioná una opción</option>
                          <option>Sistema a medida</option>
                          <option>Tienda online</option>
                          <option>Panel de gestión</option>
                          <option>Otro / No sé por dónde empezar</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Contanos tu proyecto</label>
                        <textarea
                          rows={5}
                          placeholder="Describí brevemente tu negocio y qué problema querés resolver. No hace falta que sea técnico."
                          className="w-full bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#4f46e5]/25 flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined">send</span>
                        Enviar mensaje
                      </button>
                      <p className="text-xs text-slate-500 text-center">Te respondemos en menos de 24 horas hábiles.</p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* SIDEBAR (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#25D366] text-2xl">chat</span>
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
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-center py-3 rounded-xl font-bold transition-all text-sm"
                >
                  Abrir WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#4f46e5]/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#4f46e5] text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-xs text-slate-400">Para consultas formales</p>
                  </div>
                </div>
                <p className="text-[#4f46e5] text-sm font-semibold">hola@nexodev.com.ar</p>
              </div>

              {/* Ubicación */}
              <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-400 text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Ubicación</p>
                    <p className="text-xs text-slate-400">Trabajo 100% remoto</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">Banfield, Buenos Aires, Argentina</p>
                <p className="text-slate-500 text-xs mt-1">Atendemos clientes de todo el país y LATAM.</p>
              </div>

              {/* Horarios */}
              <div className="bg-[#1e293b] border border-[#334155] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-amber-400 text-2xl">schedule</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Disponibilidad</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Lunes a Viernes</span>
                    <span className="text-slate-200 font-medium">9:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sábados</span>
                    <span className="text-slate-200 font-medium">10:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Domingos</span>
                    <span className="text-slate-500">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUÉ PASA DESPUÉS */}
      <section className="py-20 bg-[#1e293b]/20 border-t border-[#334155]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">¿Qué pasa después de que nos escribís?</h2>
            <p className="text-slate-400 mt-3">Sin sorpresas. Así funciona el proceso desde el primer contacto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#334155]" />
            {[
              { icon: "reply", color: "text-[#4f46e5]", bg: "bg-[#4f46e5]/20", border: "border-[#4f46e5]", title: "Respondemos", sub: "En menos de 24hs hábiles" },
              { icon: "video_call", color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500", title: "Reunión inicial", sub: "Gratis, sin compromiso" },
              { icon: "description", color: "text-amber-400", bg: "bg-amber-500/20", border: "border-amber-500", title: "Propuesta", sub: "Solución + presupuesto claro" },
              { icon: "rocket_launch", color: "text-[#4f46e5]", bg: "bg-[#4f46e5]/20", border: "border-[#4f46e5]", title: "Arrancamos", sub: "Si decidís seguir adelante" },
            ].map((step) => (
              <div key={step.title} className="text-center relative z-10">
                <div className={`w-12 h-12 rounded-full ${step.bg} border ${step.border} flex items-center justify-center mx-auto mb-4`}>
                  <span className={`material-symbols-outlined ${step.color} text-sm`}>{step.icon}</span>
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
