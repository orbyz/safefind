"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function createCase() {
    setLoading(true);

    await fetch("/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: "María González",
        age: 38,
        gender: "female",

        city: "Valencia",
        state: "Carabobo",
        country: "Venezuela",

        lastSeenLocation: "Centro de Valencia",

        lastSeenAt: new Date(),

        description: "Vista por última vez cerca de la plaza.",

        contactName: "José González",

        contactPhone: "+584121234567",

        contactEmail: "jose@email.com",
      }),
    });

    alert("Caso creado");

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={createCase}
        disabled={loading}
        className="rounded bg-blue-600 px-6 py-3 font-bold text-white"
      >
        {loading ? "Guardando..." : "Crear Caso de Prueba"}
      </button>
    </main>
  );
}
