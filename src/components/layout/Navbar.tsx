import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold text-blue-700">SafeFind</span>

          <span className="text-xs text-slate-500">Venezuela</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
          >
            Inicio
          </Link>

          <Link
            href="/report"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Reportar
          </Link>
        </nav>
      </div>
    </header>
  );
}
