import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="quienes-somos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
              Quiénes somos
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl md:leading-[1.1]">
              Una web profesional para competir mejor.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Soy Mateo, el nexo entre tu negocio y la web. En NexoSync ayudo a
              emprendedores y empresas a verse confiables, explicar con claridad
              lo que hacen y transformar visitas en consultas.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Nos ocupamos de la estrategia, el diseño, el desarrollo y la puesta
              online para que el proyecto avance de manera ordenada, sin depender
              de varios proveedores.
            </p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {["Emprendedores", "Pymes", "Profesionales", "Comercios"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {tag}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sky-100 via-slate-100 to-sky-50 -z-10"
              aria-hidden
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-slate-800 shadow-2xl shadow-slate-300/50">
              <img
                src="/perfil.jpeg"
                alt="Mateo, fundador de NexoSync"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-7 pt-28">
                <h3 className="text-xl font-bold text-white">Mateo</h3>
                <p className="font-medium text-sky-400">Fundador de NexoSync</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Desarrollador web y aliado digital de tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
