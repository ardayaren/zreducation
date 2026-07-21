import Image from "next/image";
import { brandLogo } from "@/data/brand";

interface LogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  size = 52,
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={brandLogo.mark}
        alt="Zreducation"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain object-center"
      />
    </span>
  );
}
