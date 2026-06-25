type Props = {
  children: React.ReactNode;
};

export function Card({ children }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}
