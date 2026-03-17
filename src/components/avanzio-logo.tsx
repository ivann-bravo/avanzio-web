interface AvanzioLogoProps {
  className?: string;
  /** Width in px. Height scales proportionally (viewBox ratio ≈ 6.13:1). */
  width?: number;
}

/**
 * SVG logo completo de Avanzio.
 * Fills white por defecto — cambiá className para override.
 */
export default function AvanzioLogo({ className = "fill-white", width = 120 }: AvanzioLogoProps) {
  const height = Math.round(width / (845.61 / 137.78));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 845.61 137.78"
      width={width}
      height={height}
      aria-label="Avanzio"
      role="img"
      className={className}
    >
      <g>
        <path d="M120.34,132.79h-37.37l-2.49-6.98c-7.22,6.98-17.94,11.96-34.63,11.96-27.16,0-45.84-13.45-45.84-39.86,0-55.31,80.47-31.39,80.47-53.32,0-4.73-4.24-8.22-13.95-8.22s-14.45,3.49-14.45,7.72H9.97C9.97,8.72,40.61,0,65.77,0s54.56,8.72,54.56,43.85c0,54.06-80.97,29.4-80.97,54.06,0,6.23,5.23,9.72,13.7,9.72,13.7,0,29.65-22.92,46.34-22.92,14.2,0,20.93,6.73,20.93,20.68v27.41Z"/>
        <path d="M251.89,4.98l-42.11,127.81h-39.86L127.82,4.98h41.86l20.18,64.28L210.03,4.98h41.86Z"/>
        <path d="M369.74,132.79h-37.37l-2.49-6.98c-7.23,6.98-17.94,11.96-34.63,11.96-27.16,0-45.84-13.45-45.84-39.86,0-55.31,80.47-31.39,80.47-53.32,0-4.73-4.24-8.22-13.95-8.22s-14.45,3.49-14.45,7.72h-42.11c0-35.38,30.65-44.1,55.81-44.1s54.56,8.72,54.56,43.85c0,54.06-80.97,29.4-80.97,54.06,0,6.23,5.23,9.72,13.7,9.72,13.7,0,29.65-22.92,46.34-22.92,14.2,0,20.93,6.73,20.93,20.68v27.41Z"/>
        <path d="M506.27,133.29h-39.86V63.28c0-16.69-8.72-25.16-22.17-25.16s-22.17,8.22-22.17,24.17v70.51h-39.86V4.98h37.37l2.49,7.47c8.47-8.47,20.43-12.46,34.63-12.46,29.9,0,49.58,17.69,49.58,58.8v74.49Z"/>
        <path d="M518.73,4.98h124.07v39.86l-61.79,48.08h61.79v39.86h-124.07v-39.86l61.79-48.08h-61.79V4.98Z"/>
        <path d="M655.26,132.79V4.98h39.86v127.81h-39.86Z"/>
        <path d="M776.59,0C735.48,0,707.58,27.65,707.58,69.01s27.9,68.76,69.01,68.76,69.01-27.66,69.01-68.76S817.7,0,776.59,0ZM747.85,100.54c2.49-3.07,11.22-14.58,11.03-31.65-.19-17.27-9.4-28.68-11.95-31.65,21.94,10.75,43.88,21.5,65.81,32.25-21.63,10.35-43.26,20.7-64.89,31.05Z"/>
      </g>
    </svg>
  );
}

/**
 * Isotipo: solo la "A" de Avanzio como SVG inline,
 * enmarcada en un cuadrado para usar como ícono.
 */
export function AvanzioIsotipo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl transition-all duration-300 ${className}`}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
      }}
    >
      {/* Path de la "A" del SVG original, centrado dentro de un viewBox propio */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 121 138"
        width={size * 0.55}
        height={size * 0.55}
        aria-hidden="true"
      >
        <path
          fill="white"
          d="M120.34,132.79h-37.37l-2.49-6.98c-7.22,6.98-17.94,11.96-34.63,11.96-27.16,0-45.84-13.45-45.84-39.86,0-55.31,80.47-31.39,80.47-53.32,0-4.73-4.24-8.22-13.95-8.22s-14.45,3.49-14.45,7.72H9.97C9.97,8.72,40.61,0,65.77,0s54.56,8.72,54.56,43.85c0,54.06-80.97,29.4-80.97,54.06,0,6.23,5.23,9.72,13.7,9.72,13.7,0,29.65-22.92,46.34-22.92,14.2,0,20.93,6.73,20.93,20.68v27.41Z"
        />
      </svg>
    </div>
  );
}
