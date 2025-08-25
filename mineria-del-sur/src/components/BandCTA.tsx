import { Link } from "react-router-dom";

export default function BandCTA({
  imageSrc, title, desc, to, button = "Conversemos",
}: { imageSrc: string; title: string; desc: string; to: string; button?: string }) {
  return (
    <section className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600";
        }}
      />
      <div className="relative z-10 p-8 md:p-12 bg-gradient-to-r from-black/70 via-black/40 to-black/20">
        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        <p className="mt-2 max-w-2xl text-white/80">{desc}</p>
        <Link
          to={to}
          className="mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-2.5
                     bg-gradient-to-r from-[#B87333] to-[#D4AF37]
                     text-black font-medium shadow/30 hover:brightness-110 transition"
        >
          {button}
          <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M10 17l5-5-5-5v10z"/></svg>
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(212,175,55,0.08),transparent_60%)]" />
    </section>
  );
}
