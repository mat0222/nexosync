import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "../contacts";
import type { LegalId } from "../legalRoutes";

const UPDATED = "1 de octubre de 2026";

const titles: Record<LegalId, string> = {
  terminos: "Términos y condiciones",
  privacidad: "Política de privacidad",
  cookies: "Política de cookies",
};

const intros: Record<LegalId, string> = {
  terminos:
    "Estas condiciones explican cómo se consultan y se contratan los servicios que NexoSync ofrece desde este sitio. El alcance, el precio y las obligaciones de cada proyecto quedan en una propuesta o contrato escrito.",
  privacidad:
    "Esta política describe los datos que este sitio realmente recaba, para qué se usan y cómo pedir acceso, corrección o eliminación. No cubre los sitios que NexoSync desarrolla para sus clientes, salvo lo que se indica al final.",
  cookies:
    "Este sitio no instala cookies propias de analítica ni de publicidad. Acá se informa qué solicitudes técnicas sí ocurren al navegarlo.",
};

function MailLink() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-800"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

function LegalNav({ current }: { current: LegalId }) {
  const items: { id: LegalId; label: string }[] = [
    { id: "terminos", label: "Términos" },
    { id: "privacidad", label: "Privacidad" },
    { id: "cookies", label: "Cookies" },
  ];

  return (
    <nav aria-label="Documentos legales" className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active = item.id === current;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active ? "page" : undefined}
            className={[
              "rounded-full px-3.5 py-1.5 text-xs font-semibold",
              active
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900",
            ].join(" ")}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3 border-t border-slate-200 pt-8">
      <h2 className="font-display text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-slate-600 md:text-base">
        {children}
      </div>
    </section>
  );
}

function Terms() {
  return (
    <>
      <Section title="1. Quién ofrece los servicios">
        <p>
          NexoSync es un estudio de desarrollo web con base en Villa del Rosario,
          Córdoba, Argentina, a cargo de Mateo. Los canales de contacto de este
          sitio son el correo <MailLink />, WhatsApp +54 9 3573 41-4204,
          Instagram (@nexo.sync) y TikTok (@mateo.nexosync).
        </p>
        <p>
          La identificación fiscal completa —incluida la condición frente a
          impuestos— se confirma en la propuesta o el contrato de cada proyecto.
          Este sitio no publica una razón social ni un CUIT distintos de esa
          constancia.
        </p>
      </Section>

      <Section title="2. Qué regula esta página">
        <p>
          El sitio presenta los servicios y permite iniciar una consulta. Enviar
          el formulario, escribir por WhatsApp o mandar un correo no crea, por
          sí solo, un contrato de desarrollo, hosting o soporte.
        </p>
        <p>
          El contrato de cada cliente es la propuesta o el acuerdo escrito que
          las partes aceptan. Si ese documento y esta página dicen cosas
          distintas, prevalece lo aceptado por escrito para ese proyecto. El
          contrato con el cliente y los textos legales del sitio del cliente son
          documentos distintos.
        </p>
      </Section>

      <Section title="3. Servicios">
        <p>Desde este sitio se ofrecen, según lo que se cotice en cada caso:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Sitios web a medida, páginas publicitarias y sitios institucionales.</li>
          <li>Optimización y modernización de un sitio existente.</li>
          <li>Asesoría para definir qué construir y cómo medirlo.</li>
          <li>Hosting administrado, certificado SSL y monitoreo, cuando estén incluidos.</li>
          <li>Mantenimiento y soporte posteriores, cuando se contraten aparte del desarrollo.</li>
        </ul>
        <p>
          El alcance real —pantallas, integraciones, textos, dominio, hosting,
          repositorio, documentación y restricciones— es el que figura en la
          propuesta. Lo que no está escrito no está incluido.
        </p>
      </Section>

      <Section title="4. Cómo se contrata">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Consulta por el formulario, WhatsApp o correo. El formulario pide
            aceptar la política de privacidad antes de abrir WhatsApp.
          </li>
          <li>
            Propuesta con alcance, entregables, precio, forma de pago, plazos y
            condiciones particulares.
          </li>
          <li>
            Aceptación escrita de esa propuesta —por correo, mensaje o firma— y,
            cuando corresponda, el pago inicial que la propuesta indique.
          </li>
        </ol>
        <p>
          Esa aceptación escrita es la constancia de la contratación. NexoSync
          puede conservarla junto con la propuesta.
        </p>
      </Section>

      <Section title="5. Precio, pagos, impuestos y cancelación">
        <p>
          No hay una tarifa única publicada en el sitio. Cada trabajo se cotiza.
          La propuesta indica moneda, anticipo, hitos o cuotas, y qué ocurre si
          un pago se atrasa, incluida la posibilidad de suspender el trabajo
          hasta regularizarlo.
        </p>
        <p>
          Los impuestos se informan según la condición fiscal de NexoSync y se
          detallan en la propuesta. El sitio no sustituye esa liquidación.
        </p>
        <p>
          Hasta que la propuesta no fue aceptada, cualquiera de las dos partes
          puede dejar la conversación sin cargo. Después de aceptada, la
          cancelación sigue lo pactado: se abona el trabajo ya realizado y los
          costos de terceros ya comprometidos; lo que no se ejecutó se ajusta
          según esa propuesta.
        </p>
      </Section>

      <Section title="6. Aceptación del trabajo y cambios">
        <p>
          La propuesta define cómo se revisa el entregable y cómo se documentan
          las observaciones. Las observaciones cubren lo que estaba acordado.
        </p>
        <p>
          Una funcionalidad nueva, una pantalla extra o cualquier cambio de
          alcance se presupuesta y se aprueba antes de hacerlo. No forma parte
          del soporte ni del mantenimiento, salvo que el acuerdo de
          mantenimiento lo incluya por escrito.
        </p>
      </Section>

      <Section title="7. Propiedad intelectual">
        <p>
          Los programas de computación están protegidos por la Ley 11.723 y la
          Ley 25.036. Pagar el desarrollo no transfiere, por sí solo, todos los
          derechos sobre cada componente del software. Esa distribución se
          escribe en el contrato.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            El material específico del proyecto se licencia o se cede según lo
            que el contrato diga, y no antes.
          </li>
          <li>
            Componentes reutilizables, plantillas, módulos genéricos y el
            know-how de NexoSync siguen siendo de NexoSync. El cliente recibe
            una licencia para usarlos como parte del sitio entregado. No hay
            exclusividad sobre esas piezas salvo pacto expreso.
          </li>
          <li>
            Librerías, frameworks y servicios de terceros se usan bajo sus
            propias licencias, que se respetan y se pueden informar en la
            propuesta.
          </li>
          <li>
            El código fuente y las credenciales se entregan contra el pago
            total, o en los hitos que la propuesta fije.
          </li>
        </ul>
      </Section>

      <Section title="8. Confidencialidad">
        <p>
          Cada parte usa la información comercial, técnica, las credenciales, las
          bases y la documentación de la otra solo para el proyecto, y no las
          divulga a quien no necesite conocerlas para ese fin. La obligación
          continúa después de terminado el servicio mientras la información no
          sea pública, o por el plazo mayor que fije el contrato.
        </p>
      </Section>

      <Section title="9. Datos personales que trata el proyecto del cliente">
        <p>
          Si NexoSync accede a información del cliente o trata datos personales
          para prestar el servicio —formularios, hosting, copias de seguridad,
          correo u otras herramientas—, lo hace por cuenta del cliente y según
          sus instrucciones. No usa esos datos para una finalidad propia
          incompatible con el encargo.
        </p>
        <p>
          La propuesta o el acuerdo de tratamiento indica la finalidad, quiénes
          acceden, qué proveedores intervienen (hosting, copias, mensajería,
          analítica u otros), las medidas de seguridad aplicables al servicio,
          cómo se avisa un incidente y si al finalizar los datos se devuelven,
          migran o eliminan.
        </p>
      </Section>

      <Section title="10. Dominio, hosting, SSL y copias">
        <p>
          La propuesta dice quién contrata, quién paga y quién administra el
          dominio, el hosting, el certificado SSL y las credenciales. Esas
          titularidades no se presumen.
        </p>
        <p>
          Cuando el hosting administrado está incluido, cubre lo que la propuesta
          liste, por ejemplo la configuración inicial, el SSL y el monitoreo. Las
          copias de seguridad y una prueba de restauración solo entran si el
          servicio las incluye. El cliente conserva la titularidad de su dominio
          y de sus contenidos, salvo pacto distinto.
        </p>
      </Section>

      <Section title="11. Mantenimiento, soporte y cierre">
        <p>
          El desarrollo inicial y el mantenimiento posterior son servicios
          distintos. El mantenimiento contratado puede incluir corrección de
          errores del alcance entregado, ajustes chicos de contenido y copias,
          según lo escrito. Páginas nuevas, integraciones y rediseños se
          cotizan aparte.
        </p>
        <p>
          Los canales públicos son WhatsApp y <MailLink />. La respuesta
          habitual a una consulta comercial nueva es del orden de 24 horas. Eso
          describe un hábito de atención: no es una guardia permanente ni un
          plazo de resolución de incidentes del sitio del cliente.
        </p>
        <p>
          Horario, severidades (crítica, alta, media y baja), tiempos de primera
          respuesta y de resolución, y exclusiones del soporte técnico se fijan
          en el acuerdo de mantenimiento. No hay atención 24/7 salvo que ese
          acuerdo lo diga.
        </p>
        <p>
          Al terminar el servicio se coordina la exportación o migración de lo
          que corresponda, la entrega de accesos según la propiedad pactada y el
          cierre de los servicios de terceros que NexoSync administraba, sin
          perjuicio de los pagos que sigan pendientes.
        </p>
      </Section>

      <Section title="12. Portfolio">
        <p>
          Mostrar el nombre, el logo, capturas o un caso de éxito requiere
          autorización del cliente, en el contrato o en un mensaje posterior.
          Sin esa autorización, NexoSync no publica el proyecto como caso.
        </p>
      </Section>

      <Section title="13. Responsabilidad">
        <p>
          NexoSync presta el servicio con la diligencia habitual de este oficio.
          No garantiza una posición en buscadores ni una cantidad de consultas o
          ventas. Esos resultados dependen también del contenido, la oferta y la
          operación del negocio del cliente.
        </p>
        <p>
          Salvo dolo, o cuando la ley no permita limitarla, la responsabilidad
          de NexoSync por un servicio contratado se limita a los honorarios
          pagados por ese servicio. Si quien contrata es consumidor en los
          términos de la Ley 24.240, rigen las protecciones que esa ley no
          permite dejar de lado, incluidos los fueros del consumidor.
        </p>
      </Section>

      <Section title="14. Ley aplicable y contacto">
        <p>
          Estas condiciones se rigen por la ley de la República Argentina. En
          relaciones que no sean de consumo, intervienen los tribunales
          ordinarios de la Provincia de Córdoba.
        </p>
        <p>
          Para ejercer un derecho o hacer una consulta sobre estas condiciones:{" "}
          <MailLink />.
        </p>
        <p>Vigencia de esta versión: {UPDATED}.</p>
      </Section>
    </>
  );
}

function Privacy() {
  return (
    <>
      <Section title="1. Responsable">
        <p>
          El responsable del tratamiento de los datos que se recaban a través de
          este sitio es NexoSync, a cargo de Mateo, con base en Villa del
          Rosario, Córdoba, Argentina. Contacto para privacidad: <MailLink />.
        </p>
        <p>
          Esta política sigue la Ley 25.326 de Protección de los Datos
          Personales y el Decreto 1558/2001, en lo que resulta aplicable a los
          datos que el sitio trata de verdad.
        </p>
      </Section>

      <Section title="2. Qué datos se recaban">
        <p>Este sitio no tiene cuentas de usuario ni un formulario que guarde una base propia. Se tratan estos datos:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Formulario de contacto: nombre, correo electrónico, tipo de proyecto
            y el mensaje, si se completa. Esos datos no se envían a un servidor
            de NexoSync. El navegador arma el texto y abre WhatsApp para que la
            persona lo envíe.
          </li>
          <li>
            Si la consulta llega por WhatsApp, Instagram, TikTok o correo, el
            contenido del mensaje y los datos de ese canal llegan por ahí.
          </li>
          <li>
            Datos técnicos de navegación que generan los servicios externos
            indicados abajo, en particular la dirección IP al pedir las
            tipografías.
          </li>
        </ul>
        <p>
          No se piden documentos, datos bancarios ni contraseñas por este
          formulario. No se venden datos ni se usan para publicidad de terceros.
        </p>
      </Section>

      <Section title="3. Para qué se usan">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Responder la consulta y preparar una propuesta.</li>
          <li>
            Si después hay un contrato, ejecutar el servicio, facturar y
            conservar la constancia de la aceptación.
          </li>
          <li>Cumplir obligaciones legales que correspondan a ese vínculo.</li>
        </ul>
        <p>
          La base es el consentimiento de quien envía la consulta. Si el vínculo
          pasa a ser contractual, el tratamiento también se apoya en esa
          relación.
        </p>
      </Section>

      <Section title="4. Quiénes los reciben">
        <p>
          NexoSync usa herramientas de terceros para comunicarse y para mostrar
          el sitio. Esos proveedores tratan datos según sus propias políticas:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Meta Platforms (WhatsApp e Instagram), si se usan esos canales.</li>
          <li>TikTok, si la consulta llega por esa red.</li>
          <li>
            Google, porque el correo de contacto está en Gmail y porque el sitio
            carga las familias tipográficas Manrope y Outfit desde Google Fonts.
          </li>
        </ul>
        <p>
          Esos servicios pueden tratar datos fuera de Argentina. Al aceptar esta
          política y usar el formulario o esos canales, quien consulta consiente
          esa transferencia en los términos del artículo 12 de la Ley 25.326, en
          la medida necesaria para responder por el medio elegido.
        </p>
      </Section>

      <Section title="5. Conservación">
        <p>
          La consulta se conserva el tiempo necesario para responderla y, si hay
          una propuesta o un contrato, durante esa relación y los plazos en que
          la ley exija o permita guardar la documentación. WhatsApp, las redes y
          Gmail conservan los mensajes según sus propias reglas, que NexoSync no
          controla.
        </p>
        <p>
          Se puede pedir la supresión cuando los datos ya no hagan falta para la
          finalidad o para una obligación legal. El pedido se hace al correo de
          esta política.
        </p>
      </Section>

      <Section title="6. Seguridad">
        <p>
          El formulario de este sitio no almacena contraseñas ni arma una base
          en servidores de NexoSync. La medida principal es no retener de más:
          el mensaje sale por WhatsApp desde el teléfono o el navegador de quien
          consulta.
        </p>
        <p>
          Cuando NexoSync opera el sistema de un cliente, las medidas concretas
          —HTTPS, accesos, copias, registros y gestión de credenciales— se
          documentan en el acuerdo de ese servicio y no en esta página.
        </p>
      </Section>

      <Section title="7. Derechos">
        <p>
          La Ley 25.326 reconoce los derechos de acceso, rectificación,
          actualización y supresión de los datos personales. Quien consultó
          también puede retirar el consentimiento para seguir usando sus datos
          de consulta, sin efecto retroactivo sobre un tratamiento ya hecho.
        </p>
        <p>
          Para ejercerlos, hay que escribir a <MailLink /> e indicar qué derecho
          se quiere usar. El acceso es gratuito en los plazos de la ley, y puede
          requerir acreditar la identidad cuando haga falta para no entregar
          datos a otra persona.
        </p>
        <p>
          Si el tratamiento no respeta la ley, se puede reclamar ante
          la Agencia de Acceso a la Información Pública, Dirección Nacional de
          Protección de Datos Personales (
          <a
            href="https://www.argentina.gob.ar/aaip"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-800"
          >
            argentina.gob.ar/aaip
          </a>
          ).
        </p>
      </Section>

      <Section title="8. Menores">
        <p>
          Este sitio no está dirigido a menores de 18 años y no se buscan sus
          datos a propósito. Si un padre, una madre o un tutor cree que un menor
          escribió, puede pedir la eliminación en <MailLink />.
        </p>
      </Section>

      <Section title="9. Sitios de los clientes">
        <p>
          Quien publica un sitio desarrollado o alojado por NexoSync es, en
          principio, el responsable de los datos personales que ese sitio
          recaba de sus propios visitantes o clientes. NexoSync solo trata esos
          datos si el servicio contratado lo incluye y según las instrucciones
          del cliente. Esa función se regula en el acuerdo del proyecto, no en
          esta política.
        </p>
      </Section>

      <Section title="10. Cambios">
        <p>
          Si esta política cambia, la versión nueva se publica en esta misma
          página. La fecha de esta versión es el {UPDATED}.
        </p>
      </Section>
    </>
  );
}

function Cookies() {
  return (
    <>
      <Section title="1. Qué usa este sitio">
        <p>
          NexoSync no instala cookies propias para medir audiencia, recordar un
          inicio de sesión ni hacer publicidad. El sitio tampoco guarda
          identificadores de seguimiento en el almacenamiento local del
          navegador.
        </p>
        <p>
          Por eso no se muestra un banner de consentimiento: no hay una cookie
          opcional que activar o rechazar.
        </p>
      </Section>

      <Section title="2. Google Fonts">
        <p>
          Las tipografías se piden a Google Fonts (fonts.googleapis.com y
          fonts.gstatic.com). Esa solicitud técnica puede hacer que Google
          reciba la dirección IP y datos del navegador. No es una cookie creada
          por NexoSync. El detalle del tratamiento está en la{" "}
          <a
            href="#privacidad"
            className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-800"
          >
            Política de privacidad
          </a>
          .
        </p>
      </Section>

      <Section title="3. Canales externos">
        <p>
          Si se abre WhatsApp, Instagram, TikTok o el correo desde un enlace del
          sitio, ese servicio puede instalar sus propias cookies al entrar a su
          plataforma. Esas cookies las administra el servicio externo, no
          NexoSync.
        </p>
      </Section>

      <Section title="4. Cómo limitarlas">
        <p>
          El navegador permite bloquear o borrar cookies. Bloquear las de
          terceros no impide usar el formulario de contacto de este sitio.
        </p>
        <p>
          Si más adelante se incorpora una herramienta de medición, esta página
          se actualiza y, cuando la herramienta no sea imprescindible para
          operar el sitio, se pedirá consentimiento antes de activarla.
        </p>
        <p>Versión del {UPDATED}.</p>
      </Section>
    </>
  );
}

const bodies: Record<LegalId, () => ReactNode> = {
  terminos: Terms,
  privacidad: Privacy,
  cookies: Cookies,
};

export function LegalPage({ id }: { id: LegalId }) {
  const Body = bodies[id];

  return (
    <article className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <a
          href="#inicio"
          className="text-sm font-semibold text-sky-700 hover:text-sky-800"
        >
          ← Volver al inicio
        </a>

        <header className="mt-8 space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
            NexoSync · Argentina
          </p>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            {titles[id]}
          </h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            {intros[id]}
          </p>
          <LegalNav current={id} />
          <p className="text-xs text-slate-500">Actualizado el {UPDATED}.</p>
        </header>

        <div className="mt-10">
          <Body />
        </div>
      </div>
    </article>
  );
}

export function legalDocumentTitle(id: LegalId): string {
  return `${titles[id]} — NexoSync`;
}
