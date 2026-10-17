export default function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  dark?: boolean;
  center?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={center ? "max-w-3xl" : "max-w-2xl"}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className={`h-section ${dark ? "text-white" : ""}`}>{title}</h2>
        {lead && <p className={`lead mt-5 ${dark ? "!text-white/70" : ""}`}>{lead}</p>}
      </div>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
