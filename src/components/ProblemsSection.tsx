import React from "react";

const problems = [
  {
    num: "01",
    title: "No explica qué hacés",
    text: "El visitante llega, pero no entiende con rapidez cuál es tu servicio ni por qué debería elegirte.",
  },
  {
    num: "02",
    title: "Se ve desactualizada",
    text: "Una imagen antigua puede hacer que un negocio sólido parezca menos profesional de lo que es.",
  },
  {
    num: "03",
    title: "No conduce a consultar",
    text: "Sin estructura clara ni llamados a la acción, las oportunidades se pierden en el recorrido.",
  },
  {
    num: "04",
    title: "Depende solo de las redes",
    text: "Las redes ayudan a conversar; la web ordena tu propuesta y construye un espacio propio.",
  },
  {
    num: "05",
    title: "Falla en celulares",
    text: "Una carga lenta o una lectura incómoda afecta la experiencia justo cuando alguien quiere contactarte.",
  },
];

export const ProblemsSection: React.FC = () => {
  return (
    <section id="problemas" className="border-y border-slate-200/80 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
            Una web que haga su trabajo
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl md:leading-[1.1]">
            Tener una web no alcanza si no transmite confianza.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Cada decisión del sitio debe ayudar a entender la propuesta, encontrar
            lo importante y avanzar hacia una consulta.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map((item) => (
            <li
              key={item.num}
              className="group relative border-t-2 border-sky-500/80 pt-6 transition-colors hover:border-sky-600"
            >
              <span className="font-display text-3xl font-extrabold tabular-nums text-sky-500/90">
                {item.num}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
