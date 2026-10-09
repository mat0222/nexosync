import React from "react";

const brands = [
  {
    name: "FobiBike",
    logo: "/fobibike.png",
    className: "h-[6.4rem] md:h-[7.7rem]",
  },
  {
    name: "Wicel",
    logo: "/wicel-logo.png",
    className: "h-20 md:h-24",
  },
  {
    name: "DEA Bike",
    logo: "/deabike.png",
    className: "h-20 md:h-24",
  },
];

const marqueeBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
            Clientes
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Confianza construida con trabajo real.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Negocios que ya eligieron NexoSync para su presencia digital.
          </p>
        </div>

        <div className="brand-marquee brand-marquee-full">
          <div className="brand-marquee-track-wrap">
            {marqueeBrands.map((brand, index) => (
              <img
                key={`${brand.name}-${index}`}
                src={brand.logo}
                alt={`Logo de ${brand.name}`}
                className={`brand-marquee-item w-auto object-contain ${brand.className}`}
              />
            ))}
          </div>
          <div className="brand-marquee-track-wrap" aria-hidden>
            {marqueeBrands.map((brand, index) => (
              <img
                key={`${brand.name}-clone-${index}`}
                src={brand.logo}
                alt=""
                className={`brand-marquee-item w-auto object-contain ${brand.className}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
