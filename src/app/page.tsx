import Image from "next/image";
import Link from "next/link";
import { StatsSection } from "@/components/ui/stats-section";

export default function Home() {
  const stats = [
    { value: "24/7", label: "Programas en vivo" },
    { value: "Millones", label: "Audiencia global" },
    { value: "10+", label: "Años de experiencia" },
    { value: "Global", label: "Conexión social" },
  ];

  const newsItems = [
    {
      title: "Cobertura exclusiva de eventos locales",
      date: "Octubre 15, 2023",
      description: "Descubre cómo estamos llevando los eventos más importantes directamente a tu pantalla.",
    },
    {
      title: "Actualizaciones en tiempo real",
      date: "Octubre 14, 2023",
      description: "Información al instante para mantenerte siempre al día.",
    },
    {
      title: "Entrevistas exclusivas con líderes locales",
      date: "Octubre 13, 2023",
      description: "Conoce de cerca a las personas que están marcando la diferencia en nuestra comunidad.",
    },
    {
      title: "Historias que inspiran",
      date: "Octubre 12, 2023",
      description: "Explora historias conmovedoras y motivadoras de nuestra gente.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-10 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bienvenido a Teleyolombo TV
            </h1>
            <p className="text-lg mb-8 text-zinc-700">
              Descubre una programación vibrante, noticias de última hora y contenido
              exclusivo que conecta contigo. Nuestro objetivo es informarte, entretenerte e
              inspirarte.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#explore"
                className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition"
              >
                Explorar ahora
              </Link>
              <Link
                href="/programacion"
                className="text-zinc-800 hover:text-zinc-600 px-8 py-3 transition flex items-center"
              >
                Ver programación <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/images/presenter.webp"
              alt="Presentadora de Teleyolombo TV"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} className="bg-zinc-50" />

      {/* News Section */}
      <section id="explore" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Últimas noticias de Teleyolombo TV</h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Mantente informado con las noticias más relevantes del día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsItems.map((item, index) => (
              <div key={item.title} className="bg-white rounded-lg shadow-sm p-6 border border-zinc-100">
                <span className="text-sm text-zinc-500 block mb-3">{item.date}</span>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-600 mb-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestra misión en Teleyolombo TV</h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              En Teleyolombo TV, creemos en la importancia de informar y entretener a
              nuestra audiencia con contenido de calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Nuestra visión</h3>
              <p className="text-zinc-300">
                Ser el canal de televisión preferido por las familias, ofreciendo
                programación que refleje nuestros valores y cultura.
              </p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Nuestra misión</h3>
              <p className="text-zinc-300">
                Trabajamos cada día para crear conexiones significativas con nuestra
                comunidad, inspirando confianza y promoviendo el diálogo.
              </p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Nuestros valores</h3>
              <p className="text-zinc-300">
                Integridad, diversidad, excelencia y responsabilidad social son los pilares
                que nos guían en cada transmisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Conectando contigo cada día</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubre lo mejor de Teleyolombo TV. Explora nuestra programación destacada,
            las últimas noticias y la visión que impulsa nuestro canal.
          </p>
          <Link
            href="/contactenos"
            className="bg-white text-red-600 px-8 py-3 rounded-md font-medium hover:bg-zinc-100 transition inline-block"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
