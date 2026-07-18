import Image from "next/image";
import { brandLogo } from "@/data/brand";

interface LogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  size = 48,
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={brandLogo.mark}
      alt="Zreducation"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full shrink-0 shadow-[0_4px_14px_rgba(14,34,64,0.18)] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
