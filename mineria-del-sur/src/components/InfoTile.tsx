import { Link } from "react-router-dom";

type Props = {
  to: string;
  title: string;
  desc: string;
  imageSrc?: string;     // opcional: imagen de fondo
  eyebrow?: string;      // opcional: etiqueta pequeña arriba del título
};

export default function InfoTile({ to, title, desc, imageSrc, eyebrow }: Props) {
  return (
    <Link
      to={to}
      className="group relative block h-48 sm:h-56 md:h-60 overflow-hidden rounded-3xl
                 ring-1 ring-white/10 bg-white/[0.04] hover:bg-white/[0.06]
                 transition-transform duration-300 hover:-translate-y-1"
      aria-label={title}
    >
      {/* Fondo opcional */}
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70
                       transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Gradiente para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </>
      )}

      {/* Borde interior sutil + brillo lateral cobre/dorado */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-[140%] w-40 rotate-12
                      bg-[radial-gradient(closest-side,rgba(212,175,55,0.15),transparent)]" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-end p-5">
        <div className="max-w-[90%]">
          {eyebrow && (
            <p className="mb-1 text-[10px] tracking-widest uppercase text-white/80">
              {eyebrow}
            </p>
          )}
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-white/80 line-clamp-2">{desc}</p>

          {/* CTA visual sutil */}
          <span className="mt-3 inline-flex items-center gap-1 text-sm text-white/80
                           group-hover:text-white">
            Ver más
            <svg width="16" height="16" viewBox="0 0 24 24"
                 className="transition-transform group-hover:translate-x-0.5">
              <path fill="currentColor" d="M10 17l5-5-5-5v10z"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
