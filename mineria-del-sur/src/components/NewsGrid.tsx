import { Link } from "react-router-dom";

type Item = { to: string; imageSrc: string; title: string; desc: string };

export default function NewsGrid({ items, title = "Proyectos y novedades" }: { items: Item[]; title?: string }) {
  return (
    <section className="my-12">
      <div className="mb-4 flex items-end justify-between">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((n, i) => (
          <Link
            key={i}
            to={n.to}
            className="group rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={n.imageSrc}
                alt={n.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1544829728-e5cb09c0cde1?q=80&w=1600";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5">
              <h4 className="font-medium">{n.title}</h4>
              <p className="mt-1 text-sm text-white/80 line-clamp-2">{n.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white">
                Leer más
                <svg width="16" height="16" viewBox="0 0 24 24" className="transition group-hover:translate-x-0.5">
                  <path fill="currentColor" d="M10 17l5-5-5-5v10z"/>
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
