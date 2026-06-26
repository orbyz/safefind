"use client";

import { useState } from "react";

import { DuplicateWarning } from "@/components/report/DuplicateWarning";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PhotoUploader } from "@/components/report/PhotoUploader";

type MatchCase = {
  _id: string;
  fullName: string;
  city: string;
  state: string;
  status: string;
};

const initialForm = {
  fullName: "",
  city: "",
  state: "",
  lastSeenLocation: "",
  description: "",
  contactName: "",
  contactPhone: "",
  photo: "",
};

export default function ReportPage() {
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState<MatchCase[]>([]);
  const [ignoreMatches, setIgnoreMatches] = useState(false);
  const [form, setForm] = useState(initialForm);

  const hasDuplicates = matches.length > 0 && !ignoreMatches;

  async function update(field: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field !== "fullName") return;

    setIgnoreMatches(false);

    if (value.trim().length < 3) {
      setMatches([]);
      return;
    }

    const res = await fetch(
      `/api/cases/check?name=${encodeURIComponent(value)}`,
    );

    const data: MatchCase[] = await res.json();

    setMatches(data);
  }

  async function submit() {
    setLoading(true);

    try {
      await fetch("/api/cases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          country: "Venezuela",
          gender: "unknown",
          lastSeenAt: new Date(),
        }),
      });

      setForm(initialForm);
      setMatches([]);
      setIgnoreMatches(false);

      window.dispatchEvent(new Event("stats-updated"));

      alert("Caso enviado correctamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Reportar una persona</h1>

      <Input
        placeholder="Nombre completo"
        value={form.fullName}
        onChange={(e) => update("fullName", e.target.value)}
      />

      {hasDuplicates && (
        <DuplicateWarning
          matches={matches}
          onContinue={() => setIgnoreMatches(true)}
        />
      )}

      <Input
        placeholder="Ciudad"
        value={form.city}
        disabled={hasDuplicates}
        onChange={(e) => update("city", e.target.value)}
      />

      <Input
        placeholder="Estado"
        value={form.state}
        disabled={hasDuplicates}
        onChange={(e) => update("state", e.target.value)}
      />

      <Input
        placeholder="Último lugar donde fue vista"
        value={form.lastSeenLocation}
        disabled={hasDuplicates}
        onChange={(e) => update("lastSeenLocation", e.target.value)}
      />

      <Input
        placeholder="Descripción"
        value={form.description}
        disabled={hasDuplicates}
        onChange={(e) => update("description", e.target.value)}
      />

      <PhotoUploader
        value={form.photo}
        onChange={(url) => update("photo", url)}
      />

      <Input
        placeholder="Nombre del contacto"
        value={form.contactName}
        disabled={hasDuplicates}
        onChange={(e) => update("contactName", e.target.value)}
      />

      <Input
        placeholder="Teléfono"
        value={form.contactPhone}
        disabled={hasDuplicates}
        onChange={(e) => update("contactPhone", e.target.value)}
      />

      <Button onClick={submit} disabled={loading || hasDuplicates}>
        {loading ? "Enviando..." : "Reportar persona"}
      </Button>
    </main>
  );
}
