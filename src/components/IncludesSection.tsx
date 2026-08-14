import React from "react";
import { Check } from "lucide-react";

const includes = [
  {
    title: "Estrategia y arquitectura",
    text: "Ordenamos páginas, secciones y recorridos según tus objetivos comerciales.",
  },
  {
    title: "Diseño profesional",
    text: "Identidad visual coherente, tipografía clara y una interfaz que inspire confianza.",
  },
  {
    title: "Desarrollo responsive",
    text: "La experiencia se adapta a celulares, tablets y pantallas de escritorio.",
  },
  {
    title: "SEO técnico base",
    text: "Metadatos, velocidad, estructura limpia y preparación para Analytics.",
  },
  {
    title: "Infraestructura",
    text: "Dominio, hosting, SSL y puesta online según el alcance acordado.",
  },
  {
    title: "Publicación y soporte",
    text: "Dejamos el sitio online y ofrecemos mantenimiento cuando corresponde.",
  },
];

export const IncludesSection: React.FC = () => {
  return (
    <section id="incluye" className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-400">
            Qué incluye
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Una solución web completa y bien coordinada.
          </h2>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            El alcance final se define según el tipo de proyecto. Estas son las
            prestaciones que resolvemos dentro del servicio.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 transition-colors hover:border-sky-500/40 hover:bg-slate-800/70"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
                <Check size={18} strokeWidth={2.5} aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
