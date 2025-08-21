import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* grow hace que el contenido ocupe el espacio y empuje al footer abajo */}
      <main id="contenido" className="flex-grow pt-20">
        {/* aquí van tus rutas/secciones */}
        <Hero />
      </main>
      <Footer />
    </div>
  );
}


