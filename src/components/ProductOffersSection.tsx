import type React from "react";

const offers = [
  {
    title: "Valo Spoofer Month",
    currentPrice: "69.04 USD",
    oldPrice: "106.37 USD",
    desc: "Valorant section | 35% off",
    img: "https://ext.same-assets.com/1105907383/4231182572.png"
  },
  {
    title: "Rank ready accounts",
    currentPrice: "4.53 USD",
    oldPrice: "21.06 USD",
    desc: "Valorant | Best price!",
    img: "https://ext.same-assets.com/1105907383/2569941685.png"
  },
  {
    title: "Marvel Rivals Month",
    currentPrice: "34.65 USD",
    oldPrice: null,
    desc: "Marvel Rivals section",
    img: "https://ext.same-assets.com/1105907383/1058964362.png"
  },
  {
    title: "Valorant Public 7 Day",
    currentPrice: "23.99 USD",
    oldPrice: null,
    desc: "Valorant section",
    img: "https://ext.same-assets.com/1105907383/3171402800.png"
  },
  {
    title: "Hyper Month",
    currentPrice: "18.66 USD",
    oldPrice: "34.65 USD",
    desc: "Black ops 6 | 46% off",
    img: "https://ext.same-assets.com/1105907383/2547075291.png"
  },
  {
    title: "Hyper Day",
    currentPrice: "4 USD",
    oldPrice: "10.66 USD",
    desc: "Black ops 6 | 62% off",
    img: "https://ext.same-assets.com/1105907383/10376279.png"
  },
];

export const ProductOffersSection: React.FC = () => (
  <section className="max-w-5xl mx-auto py-8">
    <h2 className="text-2xl font-bold text-primary mb-4">العروض المميزة</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {offers.map((offer) => (
        <div
          key={offer.title}
          className="border border-primary rounded-lg bg-slate/20 p-4 flex flex-col gap-2 hover:bg-primary/10 transition-colors items-center"
        >
          {offer.img && (
            <img
              src={offer.img}
              alt={offer.title}
              className="h-16 mb-2 rounded object-contain shadow-md bg-neutral-900"
              loading="lazy"
            />
          )}
          <div className="font-bold text-primary text-lg text-center">{offer.title}</div>
          {offer.desc && <div className="text-zinc-400 text-xs mb-2">{offer.desc}</div>}
          <div className="flex flex-row gap-2 items-baseline justify-center">
            <span className="text-xl font-extrabold text-primary">{offer.currentPrice}</span>
            {offer.oldPrice && <span className="line-through text-zinc-400 text-sm">{offer.oldPrice}</span>}
          </div>
        </div>
      ))}
    </div>
    <hr className="my-8 border-zinc-800" />
  </section>
);
