import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="relative z-40 mt-20"
      style={{ backgroundColor: "#e9e1d0", color: "var(--coal)" }}
    >
      {/* Franja superior degradada */}
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--copper) 0%, var(--gold) 35%, var(--sand) 70%, var(--copper) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, var(--copper) 0%, var(--gold) 100%)",
                  color: "var(--coal)",
                  boxShadow: "0 6px 20px rgba(0,0,0,.35)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M3 6.5c4-3.5 8.8-3.7 13.2-.5l1.8-1.8a1 1 0 0 1 1.4 1.4L17.6 7c3.1 4.4 3 9.3-.5 13.2a1 1 0 0 1-1.6-.2l-3.2-5-2.1 2.1a1 1 0 0 1-1.4-1.4l2.1-2.1-5-3.2a1 1 0 0 1-.2-1.6c.5-.6 1.2-1.2 1.5-1.6Z" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-semibold">Minería del Sur</h2>
                <p className="text-sm text-[var(--coal)]/70">
                  Ingeniería & Operaciones
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--coal)]/70 max-w-xs">
              Soluciones mineras innovadoras desde el norte de Chile.
            </p>
          </div>

          {/* Enlaces */}
          <div className="grid grid-cols-2 gap-6 md:justify-self-center">
            <div>
              <h3 className="text-sm font-semibold text-[var(--copper)]">
                Empresa
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/nosotros" className="hover:text-[var(--gold)]">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/proyectos" className="hover:text-[var(--gold)]">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link to="/servicios" className="hover:text-[var(--gold)]">
                    Servicios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--copper)]">
                Soporte
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/contacto" className="hover:text-[var(--gold)]">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link to="/cotizar" className="hover:text-[var(--gold)]">
                    Cotizar
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:info@mineriadelsur.cl"
                    className="hover:text-[var(--gold)]"
                  >
                    Escríbenos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold text-[var(--copper)]">
              Mantente informado
            </h3>
            <p className="mt-3 text-sm text-[var(--coal)]/70 max-w-xs">
              Recibe noticias y actualizaciones de Minería del Sur.
            </p>
            <form className="mt-3 flex max-w-sm">
              <input
                type="email"
                placeholder="Tu correo"
                className="flex-1 rounded-l-lg px-3 py-2 text-sm text-[var(--coal)] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-lg px-4 py-2 text-sm font-semibold shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold) 0%, var(--sand) 100%)",
                  color: "var(--coal)",
                }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-[var(--coal)]/20 pt-6 text-center text-xs text-[var(--coal)]/70">
          © {new Date().getFullYear()} Minería del Sur. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
