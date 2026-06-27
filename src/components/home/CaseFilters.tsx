type Props = {
  value: string;
  onChange: (value: string) => void;
};

const filters = [
  { value: "", label: "Todos" },
  { value: "pending", label: "Pendientes" },
  { value: "found", label: "Localizados" },
  { value: "verified", label: "Verificados" },
];

export function CaseFilters({ value, onChange }: Props) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            value === filter.value
              ? "bg-blue-600 text-white"
              : "border bg-white hover:bg-slate-100"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
