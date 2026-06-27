import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Card({ children }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {children}
    </article>
  );
}
