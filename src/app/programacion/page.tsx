import { PageHeader } from '@/components/ui/page-header';
import { StatsSection } from '@/components/ui/stats-section';
import Image from 'next/image';

export default function ProgramacionPage() {
  const stats = [
    { value: '250+', label: 'Programas Emitidos' },
    { value: '10', label: 'Años en el Aire' },
    { value: '1M+', label: 'Audiencia Mensual' },
    { value: '15', label: 'Premios Ganados' },
  ];

  const programas = [
    {
      nombre: 'La Sagrada Eucaristia ',
      horario: '12:00 AM - 1:00 PM',
      descripcion: 'La Sagrada Eucaristia Todos Los Domingos.',
    },
    {
      nombre: 'Noticias Importantes',
      horario: '2:00 PM - 2:30 PM',
      descripcion: 'Noticias Importantes Cada Semana.',
    },
  ];

  const testimonials = [
    {
      author: 'Televidente',
      text: 'Los programas de Teleyolombo TV siempre son interesantes y educativos. Me encanta!',
      rating: 5,
    },
    {
      author: 'TV Pimes, Empresas y Micro Empresas',
      text: 'Motiva a las personas para crear un emprendimiento!',
      rating: 4,
    },
    {
      author: 'Amante del Deporte',
      text: 'Deportes al Día siempre tiene la mejor cobertura de los eventos deportivos. Muy recomendable!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <PageHeader
        title="Programación de Teleyolombo TV"
        subtitle="Explora nuestra variada programación y encuentra tus programas favoritos con facilidad."
        backgroundImage="/images/programacion-bg.webp"
        className="py-32"
      />

      {/* Programming Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Horarios de Programación</h2>
          <p className="text-lg text-zinc-700 mb-10">
            Consulta los horarios de tus programas preferidos y planifica tu
            entretenimiento.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="text-left py-4 px-6 bg-zinc-50 font-semibold">
                    Programas
                  </th>
                  <th className="text-left py-4 px-6 bg-zinc-50 font-semibold">
                    Horario
                  </th>
                  <th className="text-left py-4 px-6 bg-zinc-50 font-semibold">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody>
                {programas.map((programa, index) => (
                  <tr
                    key={programa.nombre}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}
                  >
                    <td className="py-4 px-6 border-b border-zinc-200">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                          <span className="text-red-600 font-medium">
                            {programa.nombre.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{programa.nombre}</p>
                          <p className="text-sm text-zinc-500">
                            {programa.horario}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-zinc-200">
                      {programa.horario}
                    </td>
                    <td className="py-4 px-6 border-b border-zinc-200">
                      {programa.descripcion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-zinc-50 rounded-lg border border-zinc-200">
            <blockquote className="italic text-zinc-700">
              "La programación de Teleyolombo TV siempre ofrece algo interesante
              para ver. Es mi canal favorito!"
            </blockquote>
            <div className="mt-4 text-sm text-zinc-500">
              Ana Gómez, Televidente
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} className="bg-zinc-900 text-white" />

      {/* Top 10 Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold">10</span>
            </div>
            <h2 className="text-3xl font-bold">
              Programas más vistos este mes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programas.map((programa) => (
              <div
                key={programa.nombre}
                className="border border-zinc-200 rounded-lg p-6 hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-2">{programa.nombre}</h3>
                <p className="text-zinc-500 mb-4">{programa.horario}</p>
                <p className="text-zinc-700">{programa.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Opiniones de los Televidentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white p-6 rounded-lg shadow"
              >
                <p className="mb-4 text-zinc-700">{testimonial.text}</p>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-zinc-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Calendario de Programación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Mañana</h3>
              <p className="text-zinc-700 mb-4">
                Noticias y programas matutinos.
              </p>
              <div className="text-sm font-semibold text-red-600">
                Inicio del Día
              </div>
            </div>

            <div className="p-8 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Tarde</h3>
              <p className="text-zinc-700 mb-4">
                Programas para toda la familia.
              </p>
              <div className="text-sm font-semibold text-blue-600">
                Entretenimiento
              </div>
            </div>

            <div className="p-8 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Noche</h3>
              <p className="text-zinc-700 mb-4">
                Las Mejores Peliculas Para Compartir En Familia.
              </p>
              <div className="text-sm font-semibold text-purple-600">
                Primetime
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
