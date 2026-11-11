import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 grid gap-4 md:mb-14 md:grid-cols-[1fr_1.1fr] md:items-end">
      <div>
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="text-emerald">{index}</span>
          <span className="h-px w-8 bg-sand/20" />
          {label}
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </h2>
      </div>
      {description && <p className="max-w-lg text-pretty text-sand-muted md:justify-self-end">{description}</p>}
    </Reveal>
  );
}
