import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Proyecto */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">SafeFind</h2>

          <p className="mt-2 max-w-2xl text-slate-600">
            Proyecto ciudadano sin fines de lucro creado para ayudar a localizar
            personas desaparecidas durante situaciones de emergencia y facilitar
            el reencuentro de las familias.
          </p>
        </section>

        {/* Estado */}
        <section className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">Estado de la plataforma</h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>🟢 API Operativa</li>

              <li>🟢 Base de datos conectada</li>

              <li>🚧 Versión RC1</li>

              <li>
                🕒 Última actualización:{" "}
                {new Date().toLocaleDateString("es-ES")}
              </li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-5">
            <h3 className="font-semibold">Estadísticas</h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>Casos registrados: Próximamente</li>

              <li>Personas localizadas: Próximamente</li>

              <li>Pendientes de verificar: Próximamente</li>
            </ul>
          </div>
        </section>

        {/* OrByZ */}
        <section className="rounded-xl bg-slate-900 p-6 text-white">
          <h3 className="text-xl font-semibold">
            Desarrollado de forma voluntaria
          </h3>

          <p className="mt-3 text-slate-300">
            SafeFind ha sido desarrollado y es mantenido gratuitamente por
            <strong> OrByZ Studio</strong> como una iniciativa tecnológica con
            impacto social para apoyar a las personas afectadas por desastres y
            situaciones de emergencia.
          </p>

          <Link
            href="https://orbyzstudio.dev"
            target="_blank"
            className="mt-5 inline-block font-semibold text-blue-400 hover:text-blue-300"
          >
            🌐 https://orbyzstudio.dev
          </Link>
        </section>

        <div className="mt-8 border-t pt-6 text-center text-sm text-slate-500">
          <p>
            "Cada dato compartido con responsabilidad puede ayudar a reunir una
            familia."
          </p>

          <p className="mt-4">
            © {new Date().getFullYear()} SafeFind · Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
