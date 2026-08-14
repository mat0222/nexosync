import React from "react";

const steps = [
  {
    title: "Diagnóstico y estrategia",
    description:
      "Definimos objetivos, público y la estructura que necesita tu sitio.",
  },
  {
    title: "Contenido y diseño",
    description:
      "Organizamos la información y construimos una propuesta visual alineada con tu marca.",
  },
  {
    title: "Desarrollo",
    description:
      "Programamos una web responsive, rápida y preparada para formularios e integraciones.",
  },
  {
    title: "Publicación",
    description:
      "Resolvemos dominio, hosting, SSL y la puesta online del sitio.",
  },
  {
    title: "Soporte",
    description:
      "Acompañamos el funcionamiento y el mantenimiento según el servicio contratado.",
  },
];

export const StepsSection: React.FC = () => {
  return (
    <section
      id="paso-a-paso"
      className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50 py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
            Cómo trabajamos
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Todo el proceso, resuelto con claridad.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Organizamos cada etapa para que puedas seguir el proyecto, revisar
            avances y tomar decisiones sin complicaciones.
          </p>
        </div>

        <ol className="mt-16 space-y-0">
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="grid gap-4 border-t border-slate-200 py-8 md:grid-cols-[7rem_1fr] md:gap-10 md:py-10"
            >
              <span className="font-display text-4xl font-extrabold tabular-nums text-sky-500/90 md:text-5xl">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-4 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 md:text-left">
          Un recorrido claro de principio a fin. Siempre sabés en qué etapa está
          el proyecto.
        </p>

        <div className="mt-10 flex justify-center md:justify-start">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-sky-500/35 transition-colors hover:bg-sky-700"
          >
            Agendar una reunión
          </a>
        </div>
      </div>
    </section>
  );
};
