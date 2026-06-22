import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium transition-all duration-500 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

  const styles = {
    primary:
      "bg-accent px-7 py-3.5 text-paper hover:bg-accent-hover hover:-translate-y-0.5",
    ghost:
      "px-5 py-3.5 text-ink hover:text-accent",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {variant === "ghost" && (
        <span
          aria-hidden="true"
          className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </a>
  );
}
