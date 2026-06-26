"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/Button";

type Props = {
  value: string;
  onChange: (url: string) => void;
};

export function PhotoUploader({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    setUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Error al subir la imagen.");
      }

      const data = await res.json();

      onChange(data.url);
    } catch (error) {
      console.error(error);
      alert("No se pudo subir la fotografía.");
    } finally {
      setUploading(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    upload(file);
  }

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border bg-slate-100">
        {value ? (
          <Image
            src={value}
            alt="Fotografía"
            width={600}
            height={400}
            className="h-64 w-full object-cover"
          />
        ) : (
          <div className="flex h-64 items-center justify-center text-slate-400">
            Sin fotografía
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />

      <Button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
      >
        {uploading ? "Subiendo fotografía..." : "Seleccionar fotografía"}
      </Button>
    </div>
  );
}
