import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-slate-200 to-slate-300 border-b border-slate-200/80"
    >
      {/* 2. Marcos: Ahora abarcan todo el ancho y alto del section */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-4 border-4 border-sky-500" />
        <div className="absolute inset-8 border-4 border-sky-500" />
      </div>

      {/* 3. Contenedor del contenido: Mantiene el texto centrado y no permite que toque los bordes */}
      <div className="relative z-10 mx-auto max-w-7xl px-12 py-16 md:px-24 md:py-24">
        <div className="max-w-xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
            NexoSync · Desarrollo Web
          </p>
          <h1 className="text-5xl font-extrabold leading-[0.9] tracking-tight text-slate-900 md:text-6xl">
            Tu Negocio
            <br />
            <span className="text-sky-600">En la Red</span>
          </h1>
          <p className="text-xl font-semibold text-slate-800">
            Hacemos que la tecnología trabaje a tu favor.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            Diseño y desarrollo sitios para empresas que necesitan una
            presencia digital clara, moderna y que transmita confianza desde
            el primer impacto.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-sky-500/40 hover:bg-sky-700"
            >
              Agendar una reunión
            </a>
            <a
              href="#servicios-completos"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-800 hover:border-sky-500 hover:text-sky-700"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

