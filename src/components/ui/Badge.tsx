import { getStatusLabel } from "@/lib/utils/status";

type Props = {
  status: string;
};

const labels = {
  pending: "🟡 Pendiente",
  verified: "🔵 Verificado",
  found: "🟢 Localizada",
  closed: "⚫ Cerrado",
};

export function Badge({ status }: Props) {
  return <span className="text-sm font-medium">{getStatusLabel(status)}</span>;
}
