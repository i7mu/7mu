import type React from "react";

const categories = [
  { label: "Instagram Numbers", link: "#" },
  { label: "Marvel Rivals", link: "#" },
  { label: "Black Ops 6", link: "#" },
  { label: "Progress (GLB)", link: "#" },
  { label: "Overwatch", link: "#" },
  { label: "Fecurity Chair", link: "#" },
  { label: "LDV3 Chair", link: "#" },
  { label: "Hyper Chair", link: "#" },
  { label: "Valorant Spoofer", link: "#" },
];

export const CategoryGridSection: React.FC = () => (
  <section className="max-w-5xl mx-auto py-10">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {categories.map((cat, i) => (
        <a
          key={i}
          href={cat.link}
          className="flex items-center justify-center h-20 rounded-lg border border-primary hover:bg-primary/10 text-primary font-bold text-lg text-center transition-colors shadow-md rtl"
        >
          {cat.label}
        </a>
      ))}
    </div>
  </section>
);
