import { Link } from "react-router-dom";

type Props = {
  imageSrc: string;
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  ctaTo?: string;
  ctaLabel?: string;
  reverse?: boolean;
};

export default function FeatureRow({
  imageSrc, eyebrow, title, body, bullets = [],
  ctaTo, ctaLabel = "Ver más", reverse = false,
}: Props) {
  return (
    <section
      className={`grid items-center gap-8 md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Imagen */}
      <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
        <img
          src={imageSrc}
          alt={title}
          className="h-64 sm:h-80 md:h-[380px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600";
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] rounded-3xl" />
      </div>

      {/* Texto */}
      <div className="space-y-4">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 text-xs tracking-wider uppercase">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#B87333] to-[#D4AF37]" />
            <span className="text-white/70">{eyebrow}</span>
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        <p className="text-white/80 leading-relaxed">{body}</p>
        {bullets.length > 0 && (
          <ul className="mt-2 grid gap-1 text-white/80 list-disc pl-5">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
        {ctaTo && (
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2
                       bg-gradient-to-r from-[#B87333] to-[#D4AF37]
                       text-black font-medium shadow/30 hover:brightness-110 transition"
          >
            {ctaLabel}
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 17l5-5-5-5v10z"/></svg>
          </Link>
        )}
      </div>
    </section>
  );
}
