import { Phone, Shield, Hospital, Info, TriangleAlert } from "lucide-react";

export function Emergency() {
  const items = [
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "911",
      description: "Emergencias",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "171",
      description: "Protección Civil",
    },
    {
      icon: <Hospital className="h-6 w-6 text-green-600" />,
      title: "Hospitales",
      description: "Acude al centro sanitario más cercano.",
    },
    {
      icon: <Info className="h-6 w-6 text-amber-600" />,
      title: "Información oficial",
      description: "Verifica siempre la información antes de compartirla.",
    },
  ];

  return (
    <section className="mb-12 rounded-3xl border border-red-200 bg-red-50 p-8">
      <div className="mb-8 flex items-center gap-3">
        <TriangleAlert className="h-8 w-8 text-red-600" />

        <div>
          <h2 className="text-2xl font-bold text-red-700">
            Información de emergencia
          </h2>

          <p className="text-red-600">
            Recursos que pueden ser útiles durante una situación de emergencia.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4">{item.icon}</div>

            <h3 className="font-bold">{item.title}</h3>

            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-amber-300 bg-amber-100 p-5">
        <p className="font-semibold text-amber-900">
          ⚠️ Antes de crear un nuevo caso
        </p>

        <p className="mt-2 text-sm text-amber-800">
          Utiliza el buscador para comprobar si la persona ya ha sido reportada.
          Evitar duplicados ayuda a mantener la información organizada y
          facilita el trabajo de familiares y voluntarios.
        </p>
      </div>
    </section>
  );
}
