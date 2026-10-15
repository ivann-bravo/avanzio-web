import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/icon";

type Variant = "primary" | "secondary" | "ink" | "on-violet";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-violet text-bone hover:bg-violet-deep",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ink: "bg-ink text-bone hover:bg-violet",
  "on-violet": "bg-ink text-bone hover:bg-bone hover:text-ink",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  className?: string;
  children: ReactNode;
};

const SIZES = {
  sm: "px-5 py-2.5 text-[0.9375rem] gap-2",
  md: "px-6 py-3.5 text-base gap-2",
  lg: "px-7 py-4 text-base gap-2 sm:text-lg",
} as const;

export function ButtonLink({ href, variant = "primary", size = "md", icon, className = "", children }: ButtonLinkProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap",
    "transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97]",
    SIZES[size],
    VARIANTS[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {icon ? <Icon name={icon} className={size === "lg" ? "size-6" : "size-5"} /> : null}
      <span>{children}</span>
    </>
  );

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
