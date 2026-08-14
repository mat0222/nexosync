import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <img
            src="/logo-nav.png"
            alt="NexoSync"
            className="h-12 w-auto object-contain sm:h-14"
          />
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Desarrollo web, identidad digital y acompañamiento técnico para
            negocios que quieren crecer online.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            Servicios
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#servicios-completos" className="hover:text-white">
                Creación de sitios
              </a>
            </li>
            <li>
              <a href="#servicios-completos" className="hover:text-white">
                Hosting y mantenimiento
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-white">
                Modernización
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-white">
                Asesoría tech
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            Estudio
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#quienes-somos" className="hover:text-white">
                Quiénes somos
              </a>
            </li>
            <li>
              <a href="#paso-a-paso" className="hover:text-white">
                Proceso
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-white">
                Clientes
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5493573414204"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Villa del Rosario · Córdoba</li>
            <li>
              <a
                href="mailto:nexosync.dev@gmail.com"
                className="hover:text-white"
              >
                nexosync.dev@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row lg:px-12">
          <p>© {new Date().getFullYear()} NexoSync · Todos los derechos reservados.</p>
          <p>Desde Córdoba para tu negocio.</p>
        </div>
      </div>
    </footer>
  );
};
