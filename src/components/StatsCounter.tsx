"use client";

import { useEffect, useRef, useState } from "react";

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const DURATION_MS = 1400;

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return value;
}

function StatTile({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div className="flex flex-1 flex-col items-center gap-1 px-4 text-center">
      <span className="text-3xl font-bold text-[var(--color-accent-gold)] sm:text-4xl lg:text-5xl">
        {value}
        {stat.suffix}
      </span>
      <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] sm:text-sm">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 divide-y divide-[var(--color-border)] sm:flex sm:divide-x sm:divide-y-0"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="py-4 sm:py-0">
          <StatTile stat={stat} active={active} />
        </div>
      ))}
    </div>
  );
}
