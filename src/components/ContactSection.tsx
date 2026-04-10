import React from "react";
import { MapPin, Mail, MessageCircle } from "lucide-react";

/** Etiquetas legibles para el mensaje de WhatsApp */
const PROJECT_TYPE_LABELS: Record<string, string> = {
  landing: "Página publicitaria",
  sitio: "Sitio institucional",
  modernizacion: "Modernización de mi local",
  otro: "Otro",
};

/**
 * Número de WhatsApp solo con dígitos: código país + código de área + número (sin +, sin 0 inicial).
 * Ejemplo Argentina celular: 54 9 351 1234567 → 5493511234567
 * Podés definir VITE_WHATSAPP_NUMBER en un archivo `.env` (Vite) y se usará con prioridad.
 */
function getWhatsAppDigits(): string {
  const fromEnv = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  const raw = fromEnv?.trim() || "5493573414204";
  return raw.replace(/\D/g, "");
}

function buildWhatsAppMessage(input: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}): string {
  const tipo =
    PROJECT_TYPE_LABELS[input.projectType] ||
    input.projectType ||
    "No indicado";
  const detalle = input.message.trim() || "—";

  return [
    "✨ *Nueva consulta — NexoSync*",
    "",
    "📌 *Nombre:*",
    input.name.trim(),
    "",
    "📧 *Email:*",
    input.email.trim(),
    "",
    "🧩 *Tipo de proyecto:*",
    tipo,
    "",
    "💬 *Cuéntame más:*",
    detalle,
    "",
    "──────────",
    "_Enviado desde el formulario de contacto de la web_",
  ].join("\n");
}

export const ContactSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const projectType = String(fd.get("projectType") ?? "");
    const message = String(fd.get("message") ?? "");

    const phone = getWhatsAppDigits();
    if (!phone || phone.length < 10) {
      window.alert(
        "Falta configurar un número de WhatsApp válido. Revisá la constante o la variable VITE_WHATSAPP_NUMBER en el proyecto."
      );
      return;
    }

    const text = buildWhatsAppMessage({
      name,
      email,
      projectType,
      message,
    });
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-start lg:px-12">
        
        {/* Formulario a la izquierda */}
        <form
          className="w-full space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 md:basis-3/5 lg:p-12"
          onSubmit={handleSubmit}
        >
          <div className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-base text-slate-900 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                placeholder="¿Cómo te llamas?"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-base text-slate-900 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                placeholder="tu@correo.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="projectType" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Tipo de proyecto
              </label>
              <select
                id="projectType"
                name="projectType"
                defaultValue=""
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-base text-slate-900 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="landing">Pagina Publicitaria</option>
                <option value="sitio">Sitio institucional</option>
                <option value="modernizacion">Modernización de mi Local</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Cuéntame más
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-base text-slate-900 resize-none transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                placeholder="Objetivo del sitio, público al que apuntas, plazos..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-bold tracking-wide text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30"
          >
            <MessageCircle size={20} aria-hidden />
            Enviar por WhatsApp
          </button>
          <p className="text-center text-xs text-slate-500">
            Se abre WhatsApp con tu mensaje listo para enviar. Podés editarlo antes de mandarlo.
          </p>
        </form>

        {/* Datos y razones a la derecha */}
        <div className="w-full space-y-10 md:basis-2/5 md:pt-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Conversemos sobre tu proyecto
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Cuéntame qué necesitás lograr con tu sitio y coordinamos una breve
              llamada para ver si hacemos buen equipo.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-600">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100">
                <MapPin size={20} className="text-sky-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Ubicación</p>
                <p className="font-medium text-slate-900">Villa del Rosario · Córdoba</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-slate-600">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100">
                <Mail size={20} className="text-sky-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email directo</p>
                <p className="font-medium text-slate-900">nexosync.dev@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-sky-50 p-6 border border-sky-100">
            <p className="font-bold text-sky-900 mb-4 flex items-center gap-2">
              <MessageCircle size={20} />
              ¿Por qué trabajar con NexoSync?
            </p>
            <ul className="space-y-3 text-sm text-sky-800">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>Te ayudo a bajar a tierra tu idea en un plan claro.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>Comunicación cercana, sin tecnicismos innecesarios.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>Sitio moderno, fácil de mantener y orientado al negocio.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
