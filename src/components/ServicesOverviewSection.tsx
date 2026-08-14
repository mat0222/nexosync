import React from "react";
import { Server, Wrench, PenTool, CheckCircle2 } from "lucide-react";

const offerings = [
  {
    title: "Creación desde cero",
    description:
      "Definición, diseño y desarrollo de páginas alineadas a tus objetivos comerciales.",
    icon: PenTool,
    items: [
      "Briefing y propuesta UX",
      "Diseño responsive (mobile first)",
      "Implementación en producción",
    ],
  },
  {
    title: "Hosting administrado",
    description:
      "Nos ocupamos de la infraestructura para que tu sitio esté siempre online, rápido y seguro.",
    icon: Server,
    items: [
      "Configuración inicial",
      "Certificado SSL incluido",
      "Monitoreo de uptime",
    ],
  },
  {
    title: "Mantenimiento y soporte",
    description:
      "Actualizaciones, pequeños cambios y mejoras continuas para que tu web no quede obsoleta.",
    icon: Wrench,
    items: [
      "Corrección de errores",
      "Ajustes de contenido",
      "Backups periódicos",
    ],
  },
];

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section id="servicios-completos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-14 px-6 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
            Servicios
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Más que una web, un servicio completo.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Te acompaño desde la idea inicial hasta el mantenimiento técnico,
            para que tu única preocupación sea atender a los clientes que llegan
            por la página.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <article
                key={offering.title}
                className="flex flex-col border border-slate-200 bg-slate-50/80 p-8 transition-colors hover:border-sky-300 hover:bg-white"
              >
                <div className="inline-flex w-fit rounded-xl border border-slate-200 bg-white p-3.5 text-sky-600">
                  <Icon size={24} aria-hidden />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {offering.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {offering.description}
                </p>
                <ul className="mt-8 space-y-3 border-t border-slate-200 pt-6">
                  {offering.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-sky-500"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
