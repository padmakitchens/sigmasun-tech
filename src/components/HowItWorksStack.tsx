export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export default function HowItWorksStack({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative flex flex-col gap-10">
      {steps.map((item, i) => (
        <div
          key={item.step}
          style={{ top: `${112 + i * 28}px`, zIndex: 10 + i }}
          className="group sticky flex min-h-[220px] flex-col items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8 shadow-[var(--shadow-lg)] transition-transform duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-10 lg:p-10"
        >
          <span className="shrink-0 text-6xl font-bold text-[var(--color-accent-gold)]/20 transition-colors duration-[var(--duration-normal)] group-hover:text-[var(--color-accent-gold)]/40 lg:text-8xl">
            {item.step}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] lg:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)] lg:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
