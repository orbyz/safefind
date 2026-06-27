"use client";

import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { LuLink } from "react-icons/lu";

type Props = {
  fullName: string;
  onClose: () => void;
};

export function ShareModal({ fullName, onClose }: Props) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const text = encodeURIComponent(
    `Ayúdanos a localizar a ${fullName}\n\n${url}`,
  );

  async function copy() {
    await navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles.");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <h2 className="text-2xl font-bold">Compartir caso</h2>

        <p className="mt-2 text-sm text-slate-500">
          Comparte esta ficha para ayudar a localizar a esta persona.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <a
            href={`https://wa.me/?text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-xl border p-5 transition hover:bg-green-50"
          >
            <FaWhatsapp className="mb-3 text-3xl text-green-600" />
            <span className="font-medium">WhatsApp</span>
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-xl border p-5 transition hover:bg-blue-50"
          >
            <FaFacebook className="mb-3 text-3xl text-blue-600" />
            <span className="font-medium">Facebook</span>
          </a>

          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-xl border p-5 transition hover:bg-sky-50"
          >
            <FaTelegram className="mb-3 text-3xl text-sky-500" />
            <span className="font-medium">Telegram</span>
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-xl border p-5 transition hover:bg-slate-100"
          >
            <FaXTwitter className="mb-3 text-3xl text-black" />
            <span className="font-medium">X</span>
          </a>

          <button
            onClick={copy}
            className="col-span-2 flex items-center justify-center gap-3 rounded-xl border p-4 transition hover:bg-slate-100"
          >
            <LuLink className="text-xl" />
            Copiar enlace
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
