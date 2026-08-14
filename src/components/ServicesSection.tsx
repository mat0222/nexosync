import React from "react";
import { Rocket, RefreshCw, BriefcaseBusiness, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Sitios web a medida",
    description:
      "Landing pages y sitios corporativos orientados a conversión, pensados para mostrar tu propuesta con claridad.",
    pill: "Ideal para emprendedores y pymes",
    icon: Rocket,
  },
  {
    title: "Optimización y modernización",
    description:
      "Renuevo tu sitio actual con mejor performance, diseño responsive y buenas prácticas de UX/UI.",
    pill: "Rediseño y performance",
    icon: RefreshCw,
  },
  {
    title: "Asesoría tech para negocios",
    description:
      "Definimos juntos qué construir, con qué herramientas y cómo medir resultados.",
    pill: "Estrategia digital",
    icon: BriefcaseBusiness,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
            Cómo te ayudamos
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            El formato adecuado para cada negocio.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Unimos diseño, desarrollo y enfoque comercial para que tu presencia
            online trabaje todos los días por vos.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex flex-col border-t-2 border-sky-500 bg-white p-7 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="mb-5 inline-flex rounded-xl bg-sky-50 p-3 text-sky-600">
                  <Icon size={22} aria-hidden />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {service.pill}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 transition-colors group-hover:text-sky-800"
                >
                  Consultar
                  <ArrowRight size={16} aria-hidden />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
