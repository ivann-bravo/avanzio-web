const TECHS = [
  'TypeScript', 'Node.js', 'Next.js', 'React', 'WordPress',
  'WooCommerce', 'MercadoPago', 'AFIP API', 'PostgreSQL',
  'Tailwind CSS', 'PHP', 'Vercel', 'Git', 'Docker',
]

export function TechTicker() {
  const items = [...TECHS, ...TECHS] // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden border-y border-[#334155] py-3 bg-[#0f172a]">
      {/* Fade masks on edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
      <div className="ticker-track flex gap-0 whitespace-nowrap">
        {items.map((tech, i) => (
          <span key={i} className="inline-flex items-center text-sm text-slate-500 font-medium shrink-0">
            {tech}
            <span className="mx-5 text-[#334155]">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
