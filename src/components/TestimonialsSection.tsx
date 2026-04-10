import React from "react";


const brands = [
  {
    name: "FobiBike",
    logo: "/fobibike.png",
  },
];

const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-20">
        
        {/* Sección de Marcas (Logos) */}
        <div className="space-y-8 text-center border-b border-slate-100 pb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Negocios que ya confían en NexoSync
          </p>
          <div className="brand-marquee brand-marquee-full">
            <div className="brand-marquee-track-wrap">
              {marqueeBrands.map((brand, index) => (
                <img
                  key={`${brand.name}-${index}`}
                  src={brand.logo}
                  alt={`Logo de ${brand.name}`}
                  className="brand-marquee-item h-24 w-auto object-contain md:h-28"
                />
              ))}
            </div>
            <div className="brand-marquee-track-wrap" aria-hidden>
              {marqueeBrands.map((brand, index) => (
                <img
                  key={`${brand.name}-clone-${index}`}
                  src={brand.logo}
                  alt=""
                  className="brand-marquee-item h-24 w-auto object-contain md:h-28"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
