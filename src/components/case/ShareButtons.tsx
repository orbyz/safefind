"use client";

import { Button } from "@/components/ui/Button";

type Props = {
  id: string;
  fullName: string;
};

export function ShareButtons({ id, fullName }: Props) {
  function shareWhatsApp() {
    const url = `${window.location.origin}/case/${id}`;

    const text =
      `🔎 Estoy buscando a ${fullName}.\n\n` +
      `Si tienes información sobre esta persona, por favor revisa este enlace:\n\n${url}`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button onClick={shareWhatsApp}>Compartir por WhatsApp</Button>
    </div>
  );
}
