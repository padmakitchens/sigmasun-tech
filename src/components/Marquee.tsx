import Image from "next/image";

export type MarqueeItem = {
  src: string;
  alt: string;
};

export default function Marquee({ items }: { items: MarqueeItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-12">
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="relative h-20 w-40 shrink-0 transition-transform duration-[var(--duration-normal)] hover:scale-105 sm:h-24 sm:w-48"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 640px) 192px, 160px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
