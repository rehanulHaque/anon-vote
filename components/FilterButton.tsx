export default function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm border transition
        ${active
          ? "bg-indigo-500 border-indigo-400"
          : "border-white/10 hover:bg-white/10"}`}
    >
      {children}
    </button>
  );
}