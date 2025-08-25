// src/pages/Home.tsx
import Carousel from "../components/Carousel";
import FeatureRow from "../components/FeatureRow";
import StatsStrip from "../components/StatsStrip";
import NewsGrid from "../components/NewsGrid";
import BandCTA from "../components/BandCTA";
import InfoTile from "../components/InfoTile";

const base = import.meta.env.BASE_URL || "/";

// Slides con textos profesionales + CTA por foto
const slides = [
  {
    src: `${base}Images/mina-1.jpg`,
    alt: "Faena minera al amanecer",
    eyebrow: "Servicios",
    title: "Soluciones integrales de operación",
    subtitle: "Seguridad, productividad y trazabilidad en cada turno.",
    ctaTo: "/servicios",
    ctaLabel: "Ver servicios",
  },
  {
    src: `${base}Images/mina-2.jpg`,
    alt: "Camiones de extracción en operación",
    eyebrow: "Proyectos",
    title: "Resultados medibles en terreno",
    subtitle: "Optimización de flota, gestión hídrica y QA/QC.",
    ctaTo: "/proyectos",
    ctaLabel: "Ver proyectos",
  },
  {
    src: `${base}Images/mina-3.jpg`,
    alt: "Planta de procesamiento",
    eyebrow: "Nosotros",
    title: "Equipo con experiencia y estándares ISO",
    subtitle: "Cultura HSE y vínculo con comunidades.",
    ctaTo: "/nosotros",
    ctaLabel: "Conócenos",
  },
];

export default function Home() {
  return (
    <main id="contenido" className="pt-20 px-4 sm:px-6 lg:px-8">
      {/* Carrusel principal */}
      <Carousel slides={slides} intervalMs={6000} className="mb-10" />

      {/* Cuadrados de info (clicables) */}
      <div className="mx-auto max-w-7xl mb-12">
        <div className="grid gap-6 md:grid-cols-3">
          <InfoTile
            to="/servicios"
            eyebrow="Servicios"
            title="Soluciones operacionales"
            desc="Exploración, operaciones, planta y sustentabilidad con foco en seguridad y rendimiento."
            imageSrc={`${base}Images/mina-1.jpg`}
          />
          <InfoTile
            to="/proyectos"
            eyebrow="Proyectos"
            title="Casos y resultados"
            desc="Optimización de flota, gestión hídrica y QA/QC con impacto medible."
            imageSrc={`${base}Images/mina-2.jpg`}
          />
          <InfoTile
            to="/nosotros"
            eyebrow="Nosotros"
            title="Equipo y cultura"
            desc="Experiencia en minería chilena, estándares ISO y relacionamiento comunitario."
            imageSrc={`${base}Images/mina-3.jpg`}
          />
        </div>
      </div>

      {/* Contenedor ancho y aireado */}
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Sección 1: Operación */}
        <FeatureRow
          eyebrow="Operación"
          title="Minería a cielo abierto con estándares de clase mundial"
          body="Planificación, perforación-tronadura, carguío y transporte con foco en seguridad, productividad y trazabilidad."
          bullets={["Plan minero y control de leyes", "Monitoreo en tiempo real", "Mantenimiento de flota"]}
          imageSrc={`${base}Images/mina-1.jpg`}
          ctaTo="/servicios#operaciones"
          ctaLabel="Ver operaciones"
        />

        {/* Sección 2: Planta (alternada) */}
        <FeatureRow
          reverse
          eyebrow="Procesos"
          title="Planta: desde chancado a producto final"
          body="Optimización de chancado y molienda, recuperación metalúrgica y control de procesos para asegurar calidad."
          bullets={["Chancado & molienda", "Flotación / Lixiviación", "QA/QC de producto"]}
          imageSrc={`${base}Images/mina-3.jpg`}
          ctaTo="/servicios#planta"
          ctaLabel="Ver planta"
        />

        {/* Sección 3: Sustentabilidad */}
        <FeatureRow
          eyebrow="Sustentabilidad"
          title="Gestión ambiental e integración con comunidades"
          body="Gestión hídrica y de relaves, huella de carbono y relacionamiento territorial con enfoque de largo plazo."
          bullets={["Aguas & relaves", "Monitoreo ambiental", "Vínculo comunitario"]}
          imageSrc={`${base}Images/mina-2.jpg`}
          ctaTo="/servicios#sustentabilidad"
          ctaLabel="Ver sustentabilidad"
        />

        {/* KPIs / Números clave */}
        <StatsStrip
          items={[
            { value: "+12", label: "Proyectos ejecutados" },
            { value: "24/7", label: "Operación continua" },
            { value: "0.00", label: "Meta Tasa de Incidencia" },
            { value: "ISO", label: "HSE & Calidad" },
          ]}
        />

        {/* Noticias / Proyectos (resumen) */}
        <NewsGrid
          title="Proyectos y novedades"
          items={[
            {
              to: "/proyectos",
              imageSrc: `${base}Images/mina-1.jpg`,
              title: "Optimización de flota en rajo",
              desc: "Reducción de tiempos de ciclo y mejora de productividad.",
            },
            {
              to: "/proyectos",
              imageSrc: `${base}Images/mina-2.jpg`,
              title: "Gestión hídrica en zonas áridas",
              desc: "Recirculación y control de consumos en procesos críticos.",
            },
            {
              to: "/proyectos",
              imageSrc: `${base}Images/mina-3.jpg`,
              title: "QA/QC de concentrado",
              desc: "Trazabilidad y cumplimiento de especificaciones.",
            },
          ]}
        />

        {/* CTA final */}
        <BandCTA
          imageSrc={`${base}Images/mina-2.jpg`}
          title="¿Listo para conversar tu proyecto?"
          desc="Cuéntanos tus desafíos. Diseñamos soluciones a medida con foco en seguridad, eficiencia y sostenibilidad."
          to="/contacto"
          button="Conversemos"
        />
      </div>
    </main>
  );
}
