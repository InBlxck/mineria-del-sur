import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl text-center py-12">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2 text-white/80">La página que buscas no existe.</p>
      <Link to="/" className="inline-block mt-6 rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20">
        Volver al inicio
      </Link>
    </section>
  );
}
