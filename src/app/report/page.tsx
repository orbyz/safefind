"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ReportPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    city: "",
    state: "",
    lastSeenLocation: "",
    description: "",
    contactName: "",
    contactPhone: "",
    photo: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function submit() {
    setLoading(true);

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

    setForm({
      fullName: "",
      city: "",
      state: "",
      lastSeenLocation: "",
      description: "",
      contactName: "",
      contactPhone: "",
      photo: "",
    });

    alert("Caso enviado correctamente.");

    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Reportar una persona</h1>

      <Input
        placeholder="Nombre completo"
        value={form.fullName}
        onChange={(e) => update("fullName", e.target.value)}
      />

      <Input
        placeholder="Ciudad"
        value={form.city}
        onChange={(e) => update("city", e.target.value)}
      />

      <Input
        placeholder="Estado"
        value={form.state}
        onChange={(e) => update("state", e.target.value)}
      />

      <Input
        placeholder="Último lugar donde fue vista"
        value={form.lastSeenLocation}
        onChange={(e) => update("lastSeenLocation", e.target.value)}
      />

      <Input
        placeholder="Descripción"
        value={form.description}
        onChange={(e) => update("description", e.target.value)}
      />

      <Input
        placeholder="URL de la fotografía (temporal)"
        value={form.photo}
        onChange={(e) => update("photo", e.target.value)}
      />

      <Input
        placeholder="Nombre del contacto"
        value={form.contactName}
        onChange={(e) => update("contactName", e.target.value)}
      />

      <Input
        placeholder="Teléfono"
        value={form.contactPhone}
        onChange={(e) => update("contactPhone", e.target.value)}
      />

      <Button onClick={submit} disabled={loading}>
        {loading ? "Enviando..." : "Reportar persona"}
      </Button>
    </main>
  );
}
