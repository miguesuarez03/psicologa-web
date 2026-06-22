export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-eyebrow text-muted-soft ${className}`}
    >
      <span className="h-px w-6 bg-hair" aria-hidden="true" />
      {children}
    </span>
  );
}
