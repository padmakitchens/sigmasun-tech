import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/industries";

export default function IndustryLogosMarquee() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-6">
        {[...industries, ...industries].map((industry, i) => (
          <Link
            key={`${industry.slug}-${i}`}
            href={`/applications/${encodeURIComponent(industry.slug)}`}
            className="hover-lift flex w-36 shrink-0 flex-col items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-6 shadow-[var(--shadow-sm)] sm:w-40"
          >
            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
              <Image src={industry.icon} alt={industry.title} fill unoptimized className="object-contain" />
            </div>
            <span className="text-center text-xs font-semibold uppercase tracking-wide text-[var(--color-text)]">
              {industry.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
