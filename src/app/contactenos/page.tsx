import { PageHeader } from "@/components/ui/page-header";

export default function ContactenosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <PageHeader
        title="Contáctenos"
        subtitle="Estamos aquí para responder tus preguntas y escuchar tus sugerencias."
        className="py-32 bg-red-600"
      />

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Escríbenos</h2>
              <p className="text-lg text-zinc-700 mb-8">
                Envía tus consultas o comentarios a nuestro equipo. Nos pondremos en contacto contigo
                lo antes posible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-zinc-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Tu correo electrónico"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-zinc-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-zinc-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={6}
                    className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Información de contacto</h2>
              <p className="text-lg text-zinc-700 mb-8">
                Puedes contactarnos directamente a través de los siguientes canales.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2">Llámanos</h3>
                  <p className="text-zinc-600">
                    Teléfono ServiYol: +57 123 456 7890<br />
                    Teléfono TeleYolombo: +57 987 654 3210

                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2">Visítanos</h3>
                  <p className="text-zinc-600">
                    Parque Principal<br />
                    Yolombo - Antioquia<br />
                    Código Postal: 110111
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2">Horario de atención</h3>
                  <p className="text-zinc-600">
                    Lunes a Viernes: 7:00 AM - 5:00 PM<br />
                    Sábados: 7:00 AM - 2:00 PM<br />
                    Domingos y festivos: Cerrado
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2">Correo electrónico</h3>
                  <p className="text-zinc-600">
                    Información general: info@teleyolombo.tv<br />
                    Soporte técnico: soporte@teleyolombo.tv<br />
                    Recursos humanos: rrhh@teleyolombo.tv
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Síguenos en redes sociales</h2>
          <p className="text-lg text-zinc-700 mb-8 max-w-3xl mx-auto">
            Mantente conectado con Teleyolombo TV a través de nuestras redes sociales
            para conocer nuestras últimas noticias y contenido exclusivo.
          </p>

          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <a
              href="https://web.facebook.com/tele.yolombo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition"
              title="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/teleyolombo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition"
              title="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition"
              title="WhatsApp"
            >
              <span className="sr-only">WhatsApp</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.003 2.002a13.995 13.995 0 00-12.01 21.023L2 30l6.992-1.984A13.997 13.997 0 1016.003 2.002zm7.938 20.355c-.334.937-1.95 1.802-2.688 1.918-.717.114-1.576.162-2.532-.162-2.303-.771-5.008-2.37-6.853-4.744-1.004-1.307-1.78-2.92-1.78-4.58 0-1.54.485-2.723 1.12-3.649.334-.495.743-.57 1.003-.57.25 0 .5.006.72.013.233.006.537-.087.837.636.334.802 1.13 2.772 1.23 2.973.1.2.167.438.033.632-.268.396-.537.565-.973.921-.17.143-.363.3-.154.612.21.312.938 1.547 2.02 2.508 1.385 1.234 2.552 1.615 2.866 1.796.314.181.495.15.678-.086.187-.237.778-.905.986-1.216.2-.3.412-.249.692-.15.28.1 1.77.838 2.073.99.304.152.504.224.577.349.073.125.073.975-.26 1.912z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
