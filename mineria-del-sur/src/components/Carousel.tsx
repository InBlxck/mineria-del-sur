import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Slide = {
  src: string;
  alt: string;
  eyebrow?: string;   // etiqueta pequeña
  title?: string;     // titular
  subtitle?: string;  // apoyo breve
  ctaTo?: string;     // ruta interna (ej: "/servicios")
  ctaLabel?: string;  // texto del botón
};

type Props = {
  slides: Slide[];
  intervalMs?: number;
  className?: string;
  /** margen superior para despegar del header fijo */
  offsetTopClass?: string; // ej: "mt-8 sm:mt-12"
};

export default function Carousel({
  slides,
  intervalMs = 6000,
  className = "",
  offsetTopClass = "mt-8 sm:mt-12", // espacio reducido
}: Props) {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [hasFocus, setHasFocus] = useState(true);
  const timerRef = useRef<number | null>(null);

  // pausa autoplay si la pestaña pierde foco
  useEffect(() => {
    const onFocus = () => setHasFocus(true);
    const onBlur = () => setHasFocus(false);
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  // autoplay
  useEffect(() => {
    if (!isHover && hasFocus) {
      timerRef.current = window.setTimeout(
        () => setIndex((i) => (i + 1) % slides.length),
        intervalMs
      );
    }
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, isHover, hasFocus, intervalMs, slides.length]);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // swipe básico
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => (startX.current = e.clientX);
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (dx > 40) prev();
    if (dx < -40) next();
    startX.current = null;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-xl ${offsetTopClass} ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      aria-roledescription="carousel"
    >
      {/* Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative w-full shrink-0">
            {/* Imagen */}
            <img
              src={s.src}
              alt={s.alt}
              className="h-[44vh] sm:h-[56vh] md:h-[68vh] w-full object-cover select-none"
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600";
              }}
            />

            {/* Gradiente para legibilidad (desde abajo) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

            {/* Texto centrado en medio de la foto */}
            {(s.eyebrow || s.title || s.subtitle || s.ctaTo) && (
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center">
                <div
                  className="inline-flex max-w-3xl flex-col gap-2 rounded-2xl
                             bg-black/30 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4
                             ring-1 ring-white/15 animate-[fadeInUp_500ms_ease_1]"
                  style={{
                    animationName: "fadeInUp",
                    animationDuration: "500ms",
                    animationTimingFunction: "ease",
                  }}
                >
                  {s.eyebrow && (
                    <p className="text-[10px] sm:text-xs tracking-wider uppercase text-white/80">
                      {s.eyebrow}
                    </p>
                  )}
                  {s.title && (
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-tight">
                      {s.title}
                    </h3>
                  )}
                  {s.subtitle && (
                    <p className="text-xs sm:text-sm text-white/85">{s.subtitle}</p>
                  )}

                  {s.ctaTo && (
                    <div className="pt-2">
                      <Link
                        to={s.ctaTo}
                        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2
                                   bg-gradient-to-r from-[#B87333] to-[#D4AF37]
                                   text-black font-medium shadow/30 hover:brightness-110 transition"
                      >
                        {s.ctaLabel || "Ver más"}
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        type="button"
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 backdrop-blur px-3 py-2 text-white hover:bg-black/60"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 backdrop-blur px-3 py-2 text-white hover:bg-black/60"
      >
        ›
      </button>

      {/* Puntos */}
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* keyframes locales */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
