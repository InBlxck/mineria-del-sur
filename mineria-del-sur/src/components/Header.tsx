export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-green-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          Madname
        </a>
        <nav className="hidden sm:flex space-x-6 text-sm font-medium">
          <a href="#inicio" className="hover:text-yellow-300 transition">Inicio</a>
          <a href="#servicios" className="hover:text-yellow-300 transition">Servicios</a>
          <a href="#galeria" className="hover:text-yellow-300 transition">Galería</a>
          <a href="#contacto" className="hover:text-yellow-300 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}