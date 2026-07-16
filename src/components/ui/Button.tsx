import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-gradient-to-r from-gold-600 to-gold-500 text-white hover:from-gold-500 hover:to-gold-400 border border-transparent shadow-[0_4px_16px_rgba(201,168,58,0.3)] hover:shadow-[0_6px_24px_rgba(201,168,58,0.38)] hover:-translate-y-0.5",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 border border-transparent shadow-[0_4px_16px_rgba(14,34,64,0.2)] hover:shadow-[0_6px_20px_rgba(14,34,64,0.28)] hover:-translate-y-0.5",
  outline:
    "border border-navy-600/25 text-navy-700 hover:bg-navy-900 hover:text-white hover:border-navy-900 bg-white/80",
  ghost: "text-navy-700 hover:text-gold-600 hover:bg-gold-50/60",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs font-semibold tracking-wide rounded-full",
  md: "px-7 py-3 text-sm font-semibold tracking-wide rounded-full",
  lg: "px-9 py-4 text-sm font-semibold tracking-wide rounded-full",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
