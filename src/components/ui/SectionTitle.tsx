interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  animate?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  light = false,
  align = "center",
  animate = true,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  if (!animate) {
    return (
      <div className={`max-w-3xl mb-14 ${alignClass}`}>
        {subtitle && (
          <span
            className={`label-caps block mb-4 ${
              light ? "text-gold-300" : "text-gold-500"
            }`}
          >
            {subtitle}
          </span>
        )}
        <h2
          className={`font-heading-normal text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-base leading-relaxed ${
              light ? "text-white/75" : "text-slate"
            }`}
          >
            {description}
          </p>
        )}
        <div
          className={`mt-5 accent-bar ${align === "center" ? "mx-auto" : ""}`}
        />
      </div>
    );
  }

  return (
    <div data-reveal-group className={`max-w-3xl mb-14 ${alignClass}`}>
      {subtitle && (
        <span
          data-reveal-item
          className={`label-caps block mb-4 ${
            light ? "text-gold-300" : "text-gold-500"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        data-reveal-item
        className={`font-heading-normal text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal-item
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/75" : "text-slate"
          }`}
        >
          {description}
        </p>
      )}
      <div
        data-reveal-item
        className={`mt-5 accent-bar ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
