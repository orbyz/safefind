import Link from "next/link";

import { FooterStats } from "@/components/footer/FooterStats";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Proyecto */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900">
            SafeFind Venezuela
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Plataforma ciudadana sin fines de lucro creada para ayudar a
            localizar personas desaparecidas, facilitar el reencuentro de
            familias y apoyar a las comunidades afectadas por situaciones de
            emergencia.
          </p>
        </section>

        {/* Estado */}
        <section className="mb-10 rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-lg font-semibold text-slate-900">
            Estado de la plataforma
          </h3>

          <FooterStats />
        </section>

        {/* Colaboración */}
        <section className="rounded-xl bg-slate-900 p-6 text-white">
          <h3 className="text-xl font-semibold">
            Una iniciativa con impacto social
          </h3>

          <p className="mt-4 leading-7 text-slate-300">
            SafeFind ha sido diseñado, desarrollado y mantenido de forma
            completamente voluntaria por <strong>OrByZ Studio</strong>, con el
            objetivo de aportar una herramienta gratuita que facilite la
            búsqueda y localización de personas durante emergencias
            humanitarias.
          </p>

          <p className="mt-4 text-slate-300">
            Creemos que la tecnología debe servir para ayudar cuando más se
            necesita.
          </p>

          <Link
            href="https://orbyzstudio.dev"
            target="_blank"
            className="mt-6 inline-flex items-center rounded-lg border border-blue-500 px-4 py-2 font-medium text-blue-400 transition hover:bg-blue-600 hover:text-white"
          >
            🌐 Conoce OrByZ Studio
          </Link>
        </section>

        {/* Aviso */}
        <section className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-6 text-amber-900">
            <strong>Importante:</strong> La información publicada en SafeFind es
            aportada por ciudadanos y colaboradores. Siempre que sea posible,
            verifica los datos antes de difundirlos y evita crear casos
            duplicados utilizando primero el buscador.
          </p>
        </section>

        {/* Copyright */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-slate-500">
          <p className="italic">
            &lt;&ldquo;Cada dato compartido con responsabilidad puede ayudar a
            reunir una familia.&rdquo;&gt;
          </p>

          <p className="mt-3">🇻🇪 Construido con ❤️ para ayudar a Venezuela.</p>

          <p className="mt-4">
            © {new Date().getFullYear()} SafeFind. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
