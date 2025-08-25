import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Fondo de la sección */
  variant?: "plain" | "muted" | "elevated" | "brand";
  /** Añade una línea/divisor arriba o abajo */
  dividerTop?: boolean;
  dividerBottom?: boolean;
  /** Clase extra */
  className?: string;
  /** Contenedor centrado (max-w) */
  container?: boolean;
};

export default function Section({
  children,
  variant = "plain",
  dividerTop,
  dividerBottom,
  className = "",
  container = true,
}: Props) {
  const bg =
    variant === "muted"
      ? "bg-white/[0.02]"
      : variant === "elevated"
      ? "bg-white/[0.05]"
      : variant === "brand"
      ? "bg-[radial-gradient(800px_circle_at_10%_-10%,rgba(184,115,51,0.10),transparent_60%)]"
      : "bg-transparent";

  return (
    <section className={`relative py-16 sm:py-20 ${bg} ${className}`}>
      {dividerTop && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      )}
      <div className={container ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" : ""}>
        {children}
      </div>
      {dividerBottom && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
      )}
    </section>
  );
}
