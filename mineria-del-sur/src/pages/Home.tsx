// src/pages/Home.tsx
import Carousel from "../components/Carousel";
import FeatureRow from "../components/FeatureRow";
import StatsStrip from "../components/StatsStrip";
import NewsGrid from "../components/NewsGrid";
import BandCTA from "../components/BandCTA";
import InfoTile from "../components/InfoTile";
import Section from "../components/Section";

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
    <main id="contenido" className="px-4 sm:px-6 lg:px-8">
      {/* HERO / CARRUSEL (ocupa todo el ancho, pegado al header) */}
      <Section container={false} className="pt-0 pb-0 -mt-20">
        <Carousel slides={slides} intervalMs={6000} />
      </Section>

      {/* Tiles (muted) */}
      <Section variant="muted" dividerTop dividerBottom>
        <div className="grid gap-8 md:grid-cols-3">
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
      </Section>

      {/* FeatureRow 1 (plain) */}
      <Section>
        <FeatureRow
          eyebrow="Operación"
          title="Minería a cielo abierto con estándares de clase mundial"
          body="Planificación, perforación-tronadura, carguío y transporte con foco en seguridad, productividad y trazabilidad."
          bullets={["Plan minero y control de leyes", "Monitoreo en tiempo real", "Mantenimiento de flota"]}
          imageSrc={`${base}Images/mina-1.jpg`}
          ctaTo="/servicios#operaciones"
          ctaLabel="Ver operaciones"
        />
      </Section>

      {/* FeatureRow 2 (elevated para alternar) */}
      <Section variant="elevated" dividerTop dividerBottom>
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
      </Section>

      {/* FeatureRow 3 (plain) */}
      <Section>
        <FeatureRow
          eyebrow="Sustentabilidad"
          title="Gestión ambiental e integración con comunidades"
          body="Gestión hídrica y de relaves, huella de carbono y relacionamiento territorial con enfoque de largo plazo."
          bullets={["Aguas & relaves", "Monitoreo ambiental", "Vínculo comunitario"]}
          imageSrc={`${base}Images/mina-2.jpg`}
          ctaTo="/servicios#sustentabilidad"
          ctaLabel="Ver sustentabilidad"
        />
      </Section>

      {/* KPIs (brand con brillo sutil) */}
      <Section variant="brand" dividerTop dividerBottom>
        <StatsStrip
          items={[
            { value: "+12", label: "Proyectos ejecutados" },
            { value: "24/7", label: "Operación continua" },
            { value: "0.00", label: "Meta Tasa de Incidencia" },
            { value: "ISO", label: "HSE & Calidad" },
          ]}
        />
      </Section>

      {/* Noticias (muted) */}
      <Section variant="muted">
        <NewsGrid
          title="Proyectos y novedades"
          items={[
            { to: "/proyectos", imageSrc: `${base}Images/mina-1.jpg`, title: "Optimización de flota en rajo", desc: "Reducción de tiempos de ciclo y mejora de productividad." },
            { to: "/proyectos", imageSrc: `${base}Images/mina-2.jpg`, title: "Gestión hídrica en zonas áridas", desc: "Recirculación y control de consumos en procesos críticos." },
            { to: "/proyectos", imageSrc: `${base}Images/mina-3.jpg`, title: "QA/QC de concentrado", desc: "Trazabilidad y cumplimiento de especificaciones." },
          ]}
        />
      </Section>

      {/* CTA final (plain) */}
      <Section>
        <BandCTA
          imageSrc={`${base}Images/mina-2.jpg`}
          title="¿Listo para conversar tu proyecto?"
          desc="Cuéntanos tus desafíos. Diseñamos soluciones a medida con foco en seguridad, eficiencia y sostenibilidad."
          to="/contacto"
          button="Conversemos"
        />
      </Section>
    </main>
  );
}
