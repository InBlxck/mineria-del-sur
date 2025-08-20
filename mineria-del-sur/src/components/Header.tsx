import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (innerWidth >= 1024) setOpen(false); };
    addEventListener("resize", onResize);
    return () => removeEventListener("resize", onResize);
  }, []);

  const linkBase =
    "relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2";
  const linkIdle =
    "text-white/90 hover:text-[var(--gold)] focus-visible:ring-[var(--gold)]/50";
  const linkActive =
    "text-[var(--gold)] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full";
  const activeUnderline =
    "after:bg-[var(--gold)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        elevated
          ? "backdrop-blur supports-[backdrop-filter]:bg-black/25 shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
          : ""
      }`}
      role="banner"
      style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 100%)" }}
    >
      {/* Franja superior cobre-dorado */}
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--copper) 0%, var(--gold) 35%, var(--sand) 70%, var(--copper) 100%)",
        }}
      />

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 z-[60] rounded bg-[var(--gold)] px-3 py-1 text-[var(--coal)]"
      >
        Saltar al contenido
      </a>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Principal">
        <div className="flex h-16 items-center justify-between">
          {/* Marca */}
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/50"
          >
            {/* Ícono pico minero */}
            <span
              className="grid h-10 w-10 place-items-center rounded-xl shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, var(--copper) 0%, var(--gold) 100%)",
                color: "var(--coal)",
                boxShadow: "0 6px 20px rgba(0,0,0,.35)",
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M3 6.5c4-3.5 8.8-3.7 13.2-.5l1.8-1.8a1 1 0 0 1 1.4 1.4L17.6 7c3.1 4.4 3 9.3-.5 13.2a1 1 0 0 1-1.6-.2l-3.2-5-2.1 2.1a1 1 0 0 1-1.4-1.4l2.1-2.1-5-3.2a1 1 0 0 1-.2-1.6c.5-.6 1.2-1.2 1.5-1.6Z" />
              </svg>
            </span>
            <div className="leading-tight">
              <span className="block text-white text-base font-semibold tracking-tight">
                Minería del Sur
              </span>
              <span className="block text-[11px] uppercase tracking-[0.18em]"
                style={{ color: "color-mix(in srgb, var(--dust) 85%, white 15%)" }}>
                Ingeniería & Operaciones
              </span>
            </div>
          </Link>

          {/* Nav desktop */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? `${linkActive} ${activeUnderline}` : linkIdle}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/cotizar"
              className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm transition"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold) 0%, var(--sand) 100%)",
                color: "var(--coal)",
                borderColor: "color-mix(in srgb, var(--gold) 60%, black 40%)",
              }}
            >
              Cotizar
            </Link>
          </div>

          {/* Hamburguesa */}
          <button
            type="button"
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/50 lg:hidden"
          >
            <svg className={`${open ? "hidden" : "block"}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
            </svg>
            <svg className={`${open ? "block" : "hidden"}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        <div id="mobile-menu" className={`lg:hidden ${open ? "block" : "hidden"}`}>
          <ul className="space-y-1 pb-4 pt-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-sm ${
                      isActive
                        ? "text-[var(--gold)]"
                        : "text-white/90 hover:bg-white/5"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="px-4 pt-2">
              <Link
                to="/cotizar"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm transition"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold) 0%, var(--sand) 100%)",
                  color: "var(--coal)",
                  borderColor: "color-mix(in srgb, var(--gold) 60%, black 40%)",
                }}
              >
                Cotizar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
