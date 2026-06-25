type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      className="
        w-full
        rounded-lg
        border
        border-slate-300
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-blue-600
      "
      {...props}
    />
  );
}
