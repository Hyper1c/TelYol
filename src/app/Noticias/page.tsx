'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import Image from 'next/image';

export default function NoticiasClient() {
  const noticias = [
    {
      titulo: 'Accidente en la Vía Nacional',
      descripcion:
        'Un camión perdió el control y colisionó con varios vehículos en la vía nacional. Afortunadamente no hubo víctimas mortales.',
      fecha: '2025-04-10',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
      titulo: 'Incendio en el centro de la ciudad',
      descripcion:
        'Un incendio de gran magnitud afectó varios locales comerciales. Los bomberos lograron controlar las llamas después de 3 horas.',
      fecha: '2025-04-11',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
      titulo: 'Choque múltiple en autopista del sur',
      descripcion:
        'Cinco vehículos se vieron involucrados en un choque múltiple durante la madrugada. Se reportaron 7 heridos.',
      fecha: '2025-04-09',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
      titulo: 'Deslizamiento de tierra por fuertes lluvias',
      descripcion:
        'Las lluvias intensas causaron un deslizamiento en la zona montañosa, bloqueando la carretera principal.',
      fecha: '2025-04-08',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
      titulo: 'Motociclista atropellado en avenida central',
      descripcion:
        'Un motociclista fue atropellado por un vehículo que se dio a la fuga. Las autoridades investigan el caso.',
      fecha: '2025-04-07',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
        titulo: 'Motociclista atropellado en avenida central',
        descripcion:
          'Un motociclista fue atropellado por un vehículo que se dio a la fuga. Las autoridades investigan el caso.',
        fecha: '2025-04-07',
        imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
      titulo: 'Motociclista atropellado en avenida central',
      descripcion:
        'Un motociclista fue atropellado por un vehículo que se dio a la fuga. Las autoridades investigan el caso.',
      fecha: '2025-04-07',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
      titulo: 'Motociclista atropellado en avenida central',
      descripcion:
        'Un motociclista fue atropellado por un vehículo que se dio a la fuga. Las autoridades investigan el caso.',
      fecha: '2025-04-07',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
      titulo: 'Motociclista atropellado en avenida central',
      descripcion:
        'Un motociclista fue atropellado por un vehículo que se dio a la fuga. Las autoridades investigan el caso.',
      fecha: '2025-04-07',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
    {
      titulo: 'Motociclista atropellado en avenida central',
      descripcion:
        'Un motociclista fue atropellado por un vehículo que se dio a la fuga. Las autoridades investigan el caso.',
      fecha: '2025-04-07',
      imagen: '/images/noticias-banner.webp.png', // Ruta corregida
    },
  ];

  const [paginaActual, setPaginaActual] = useState(1);
  const noticiasPorPagina = 2;

  const totalPaginas = Math.ceil(noticias.length / noticiasPorPagina);
  const indiceInicial = (paginaActual - 1) * noticiasPorPagina;
  const noticiasActuales = noticias.slice(
    indiceInicial,
    indiceInicial + noticiasPorPagina
  );

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Noticias Teleyolombo TV"
        subtitle="Mantente informado con los hechos más relevantes del momento."
        backgroundImage="/images/programacion-bg.webp" // Ruta corregida
        className="py-100"
      />

      <section
        className="py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('')" }} // Ruta corregida
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

        <div className="relative max-w-6xl mx-auto px-6"> {/* Aumentado el ancho máximo */}
          <h2 className="text-4xl font-bold mb-12 text-center">Últimas Noticias Del Nordeste</h2> {/* Título más grande */}

          <div className="grid gap-12"> {/* Aumentado el espacio entre noticias */}
            {noticiasActuales.map((noticia, index) => (
              <div
                key={index}
                className="border border-zinc-200 rounded-lg p-8 flex flex-col md:flex-row gap-8 bg-white/90 backdrop-blur-sm hover:shadow-lg transition" // Aumentado padding y sombra
              >
                <div className="relative w-full md:w-1/2 h-72 md:h-96"> {/* Imagen más grande */}
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left"> {/* Centrado en móvil, alineado a la izquierda en escritorio */}
                  <h3 className="text-3xl font-semibold mb-4 text-zinc-800"> {/* Título más grande */}
                    {noticia.titulo}
                  </h3>
                  <p className="text-lg text-zinc-500 mb-4">{noticia.fecha}</p> {/* Fecha más grande */}
                  <p className="text-lg text-zinc-700">{noticia.descripcion}</p> {/* Descripción más grande */}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-12"> {/* Más espacio arriba */}
            <button
              onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))}
              disabled={paginaActual === 1}
              className="px-6 py-3 bg-blue-600 text-white rounded disabled:opacity-50 text-lg" // Botón más grande
            >
              Anterior
            </button>
            <span className="text-lg text-zinc-600">
              Página {paginaActual} de {totalPaginas}
            </span>
            <button
              onClick={() =>
                setPaginaActual((prev) => Math.min(prev + 1, totalPaginas))
              }
              disabled={paginaActual === totalPaginas}
              className="px-6 py-3 bg-blue-600 text-white rounded disabled:opacity-50 text-lg" // Botón más grande
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}