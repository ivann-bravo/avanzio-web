import type { CSSProperties, ReactNode } from "react";

/** Círculo mostaza. Regla de marca: como mucho uno por pantalla. */
export function Sticker({
  rotate = -12,
  size = "md",
  animated = false,
  className = "",
  children,
}: {
  rotate?: number;
  size?: "md" | "lg";
  animated?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const dimensions = size === "lg" ? "size-[110px] text-[18px]" : "size-[96px] text-[16px]";
  return (
    <span
      className={`grid place-items-center rounded-full bg-mustard p-2 text-center text-impact leading-[0.95] text-ink select-none ${dimensions} ${
        animated ? "sticker-pop" : ""
      } ${className}`}
      style={{ "--rotate": `${rotate}deg`, transform: animated ? undefined : `rotate(${rotate}deg)` } as CSSProperties}
    >
      {children}
    </span>
  );
}
