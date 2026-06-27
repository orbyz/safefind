type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`
        w-full
        rounded-lg
        bg-blue-600
        py-3
        px-5
        font-semibold
        text-white
        hover:bg-blue-400
        hover:cursor-pointer
        transition
        ${className}
      `}
      {...props}
    />
  );
}
