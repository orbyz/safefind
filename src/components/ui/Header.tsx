export function Header() {
  return (
    <header className="mb-10 rounded-xl border border-blue-200 bg-blue-50 p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-900">SafeFind Venezuela</h1>

      <p className="mt-2 text-lg text-slate-700">Ayudando a reunir familias</p>

      <p className="mt-4 text-sm text-slate-600">🇻🇪 Terremoto en Venezuela</p>

      <div className="mt-6 rounded-lg bg-white p-4 text-left">
        <p className="font-medium text-slate-800">
          Si buscas a un familiar o conoces el paradero de una persona, esta
          plataforma puede ayudarte a compartir y localizar información de forma
          rápida.
        </p>
      </div>
    </header>
  );
}
