export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5491100000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 rounded bg-[#1e293b] border border-[#334155] px-3 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Hablemos!
      </span>
      {/* Button */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-300">
        <span className="material-symbols-outlined text-3xl">chat</span>
      </span>
    </a>
  );
}
