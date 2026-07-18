import Image from "next/image";
import { brandLogo } from "@/data/brand";

interface LogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  size = 56,
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={brandLogo.mark}
      alt="Zreducation — Learn Lead Succeed"
      width={size}
      height={size}
      priority={priority}
      className={`shrink-0 rounded-2xl object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
