import { Resend } from "resend";

/**
 * Emails DigitAgence via Resend (serveur uniquement).
 * Vars : RESEND_API_KEY, RESEND_FROM, CONTACT_NOTIFY_TO.
 * Best-effort : une erreur d'envoi ne fait jamais échouer la requête.
 */

const BRAND = "#0a1a3f";
const ACCENT = "#d4af37";
const INK = "#0a1a3f";

const FROM = process.env.RESEND_FROM ?? "DigitAgence <onboarding@digit-agence.com>";
const NOTIFY_TO = process.env.CONTACT_NOTIFY_TO ?? "contact@digit-agence.com";

let resend: Resend | null = null;
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!resend) resend = new Resend(key);
  return resend;
}

export type ContactLead = {
  name: string;
  email: string;
  service: string;
  message: string;
};

function layout(title: string, bodyHtml: string): string {
  return `
  <div style="margin:0;padding:24px;background:#f6f7fb;font-family:Segoe UI,Helvetica,Arial,sans-serif;color:${INK}">
    <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb">
      <div style="background:${INK};padding:22px 28px">
        <span style="font-size:18px;font-weight:800;color:#fff">Digit<span style="color:${ACCENT}">Agence</span></span>
      </div>
      <div style="padding:28px">
        <h1 style="margin:0 0 16px;font-size:20px;color:${INK}">${title}</h1>
        ${bodyHtml}
      </div>
      <div style="padding:16px 28px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280">
        DigitAgence — Sites web, tunnels de vente &amp; automatisation
      </div>
    </div>
  </div>`;
}

async function sendInternalNotification(client: Resend, lead: ContactLead) {
  const html = layout(
    "Nouveau contact 🚀",
    `<p style="margin:0 0 14px">Nouvelle demande via le site :</p>
     <table style="width:100%;border-collapse:collapse;font-size:14px">
       <tr><td style="padding:8px 0;color:#6b7280;width:110px">Nom</td><td style="padding:8px 0;font-weight:600">${lead.name}</td></tr>
       <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${lead.email}" style="color:${BRAND}">${lead.email}</a></td></tr>
       <tr><td style="padding:8px 0;color:#6b7280">Besoin</td><td style="padding:8px 0">${lead.service || "—"}</td></tr>
       <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Message</td><td style="padding:8px 0">${lead.message || "—"}</td></tr>
     </table>`
  );
  const { error } = await client.emails.send({
    from: FROM,
    to: NOTIFY_TO,
    replyTo: lead.email,
    subject: `Nouveau contact — ${lead.name}`,
    html,
  });
  if (error) throw error;
}

async function sendProspectAck(client: Resend, lead: ContactLead) {
  const html = layout(
    `Merci ${lead.name} !`,
    `<p style="margin:0 0 14px">Nous avons bien reçu votre demande. Un membre de
       DigitAgence vous recontacte sous 24h pour échanger sur votre projet.</p>
     <p style="margin:0 0 14px">À très vite,<br/>L'équipe DigitAgence</p>`
  );
  const { error } = await client.emails.send({
    from: FROM,
    to: lead.email,
    subject: "Votre demande — DigitAgence",
    html,
  });
  if (error) throw error;
}

export async function sendContactEmails(lead: ContactLead): Promise<void> {
  const client = getResend();
  if (!client) {
    console.warn("RESEND_API_KEY absente — emails non envoyés (contact tout de même reçu).");
    return;
  }
  const results = await Promise.allSettled([
    sendInternalNotification(client, lead),
    sendProspectAck(client, lead),
  ]);
  results.forEach((r, i) => {
    const which = i === 0 ? "notification interne" : "accusé prospect";
    if (r.status === "rejected") console.error(`Erreur email (${which}) :`, r.reason);
    else console.log(`Email envoyé ✓ (${which})`);
  });
}
