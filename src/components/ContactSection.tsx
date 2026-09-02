import React from "react";
import { MapPin, Mail, MessageCircle, Instagram } from "lucide-react";
import { CONTACT_EMAIL, INSTAGRAM_URL, TIKTOK_URL } from "../contacts";
import { TikTokIcon } from "./TikTokIcon";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  landing: "Página publicitaria",
  sitio: "Sitio institucional",
  modernizacion: "Modernización de mi local",
  otro: "Otro",
};

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
    <section id="contacto" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 20%, rgb(14 165 233 / 0.14), transparent 55%), linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
            Empecemos
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Tu negocio merece una web que funcione.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Contanos qué necesitás y te orientamos para definir una página clara,
            profesional y preparada para crecer.
          </p>
        </div>

        <div className="flex w-full flex-col gap-10 md:flex-row md:items-start">
          <form
            className="w-full space-y-5 border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 md:basis-3/5 lg:p-10"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-widest text-slate-500"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-base text-slate-900 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                placeholder="¿Cómo te llamás?"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-widest text-slate-500"
              >
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
              <label
                htmlFor="projectType"
                className="text-xs font-bold uppercase tracking-widest text-slate-500"
              >
                Tipo de proyecto
              </label>
              <select
                id="projectType"
                name="projectType"
                defaultValue=""
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-base text-slate-900 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
              >
                <option value="" disabled>
                  Seleccioná una opción
                </option>
                <option value="landing">Página publicitaria</option>
                <option value="sitio">Sitio institucional</option>
                <option value="modernizacion">Modernización de mi local</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-widest text-slate-500"
              >
                Contame más
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-base text-slate-900 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                placeholder="Objetivo del sitio, público, plazos..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-bold tracking-wide text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30"
            >
              <MessageCircle size={20} aria-hidden />
              Enviar por WhatsApp
            </button>
            <p className="text-center text-xs text-slate-500">
              Se abre WhatsApp con tu mensaje listo. Podés editarlo antes de
              mandarlo.
            </p>
          </form>

          <div className="w-full space-y-8 md:basis-2/5 md:pt-2">
            <div className="space-y-4">
              <a
                href="https://wa.me/5493573414204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-sky-500/30 transition-colors hover:bg-sky-700"
              >
                <MessageCircle size={18} aria-hidden />
                Hablemos por WhatsApp
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <MapPin size={20} className="text-sky-600" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Ubicación
                  </p>
                  <p className="font-medium text-slate-900">
                    Villa del Rosario · Córdoba
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <Mail size={20} className="text-sky-600" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email directo
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-slate-900 hover:text-sky-700"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-600 transition-colors hover:text-sky-700"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <Instagram size={20} className="text-sky-600" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Instagram
                  </p>
                  <p className="font-medium text-slate-900">@nexo.sync</p>
                </div>
              </a>

              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-600 transition-colors hover:text-sky-700"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <TikTokIcon size={20} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    TikTok
                  </p>
                  <p className="font-medium text-slate-900">@mateo.nexosync</p>
                </div>
              </a>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-6">
              <p className="mb-4 flex items-center gap-2 font-bold text-sky-900">
                <MessageCircle size={20} aria-hidden />
                ¿Por qué NexoSync?
              </p>
              <ul className="space-y-3 text-sm text-sky-900/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>Bajamos tu idea a un plan claro y accionable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>Comunicación cercana, sin tecnicismos de más.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>Sitio moderno, mantenible y orientado al negocio.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
