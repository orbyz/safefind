type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props) {
  return <div className="mx-auto w-full max-w-5xl px-4 py-8">{children}</div>;
}
