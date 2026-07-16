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
    "bg-gold-600 text-white hover:bg-gold-500 border border-gold-600 hover:border-gold-500 shadow-sm hover:shadow-[0_4px_16px_rgba(201,168,58,0.28)]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 border border-navy-800 hover:border-navy-700 shadow-sm hover:shadow-md",
  outline:
    "border border-navy-600/40 text-navy-700 hover:bg-navy-900 hover:text-white hover:border-navy-900",
  ghost: "text-navy-700 hover:text-gold-600",
};

const sizes = {
  sm: "px-4 py-2 text-xs font-semibold tracking-wide",
  md: "px-6 py-2.5 text-sm font-semibold tracking-wide",
  lg: "px-8 py-3 text-sm font-semibold tracking-wide",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-md transition-all duration-250 ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

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
