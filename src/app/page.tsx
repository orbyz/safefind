"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Emergency } from "@/components/home/Emergency";
import { CaseGrid } from "@/components/home/CaseGrid";
import { CaseFilters } from "@/components/home/CaseFilters";
import { CaseSkeleton } from "@/components/home/CaseSkeleton";
import type { CaseDTO } from "@/modules/cases/domain/case.dto";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";

export default function Home() {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [cases, setCases] = useState<CaseDTO[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCases() {
      setLoading(true);

      try {
        const res = await fetch(
          `/api/cases?q=${encodeURIComponent(search)}&limit=9`,
          {
            cache: "no-store",
          },
        );

        if (!res.ok) {
          throw new Error("No se pudieron cargar los casos.");
        }

        const data: CaseDTO[] = await res.json();

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

  const filteredCases =
    status === "" ? cases : cases.filter((item) => item.status === status);

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

      <CaseFilters value={status} onChange={setStatus} />

      {loading ? (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <CaseSkeleton key={index} />
          ))}
        </section>
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

          <CaseGrid cases={filteredCases} />
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
