import { getStatusLabel } from "@/lib/utils/status";

type Props = {
  status: string;
};

export function Badge({ status }: Props) {
  return <span className="text-sm font-medium">{getStatusLabel(status)}</span>;
}
