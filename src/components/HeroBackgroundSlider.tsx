"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/Exibition/exi5.png",
  "/Manufacturing-Facility/manufacturing-facility-embedded-electronics-1.jpg",
  "/Manufacturing-Facility/mechanical-PCB_yv100_1.jpeg",
  "/Application/laboratoryequip/membranecasting3.jpeg",
];

export default function HeroBackgroundSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-[var(--ease-out)] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
    </div>
  );
}
