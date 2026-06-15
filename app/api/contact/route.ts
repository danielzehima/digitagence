import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Veuillez indiquer votre nom." },
        { status: 400 }
      );
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    console.log("📨 Nouveau contact DigitAgence :", { name, email, service });

    await sendContactEmails({ name, email, service, message });

    return NextResponse.json(
      { success: true, message: "Demande envoyée." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Erreur /api/contact :", err);
    return NextResponse.json(
      { error: "Erreur serveur. Merci de réessayer plus tard." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 });
}
