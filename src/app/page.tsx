"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Emergency } from "@/components/home/Emergency";
import { CaseGrid } from "@/components/home/CaseGrid";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";

type Case = {
  _id: string;
  fullName: string;
  city: string;
  state: string;
  status: string;
  photo?: string;
  description?: string;
  lastSeenLocation?: string;
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCases() {
      setLoading(true);

      try {
        const res = await fetch(`/api/cases?q=${encodeURIComponent(search)}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("No se pudieron cargar los casos.");
        }

        const data: Case[] = await res.json();

        setCases(data);
      } catch (error) {
        console.error(error);
        setCases([]);
      } finally {
        setLoading(false);
      }
    }

    loadCases();
  }, [search]);

  return (
    <Container>
      <Hero />

      <Stats />

      <section
        id="buscador"
        className="mb-12 rounded-2xl border bg-white p-8 shadow-sm"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Buscar una persona</h2>

          <p className="mt-3 text-slate-600">
            Introduce el nombre o apellido para comprobar si la persona ya ha
            sido reportada.
          </p>

          <div className="mt-6">
            <Input
              placeholder="Nombre y apellido..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {loading ? (
        <div className="py-16 text-center text-slate-500">
          Buscando personas...
        </div>
      ) : cases.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <section className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Personas registradas</h2>

              <p className="text-slate-500">
                {cases.length} caso
                {cases.length !== 1 ? "s" : ""} encontrado
                {cases.length !== 1 ? "s" : ""}
              </p>
            </div>
          </section>

          <CaseGrid cases={cases} />
        </>
      )}

      <section className="mt-16">
        <Emergency />
      </section>

      <section className="mt-12 flex justify-center">
        <Link href="/report">
          <Button className="px-8 py-3">
            Reportar una persona desaparecida
          </Button>
        </Link>
      </section>
    </Container>
  );
}
