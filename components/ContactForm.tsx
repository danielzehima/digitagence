"use client";

import { useState } from "react";

const SERVICES = [
  "Site web / Landing page",
  "Tunnel de vente",
  "Automatisation email",
  "SaaS sur mesure",
  "Autre",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Erreur");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-navy-soft p-8 text-center">
        <p className="text-2xl">🎉</p>
        <h3 className="mt-2 text-xl font-bold text-white">Demande envoyée !</h3>
        <p className="mt-2 text-sm text-white/70">
          Merci, nous vous recontactons sous 24h. Vérifiez votre boîte mail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Votre nom"
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Votre email"
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </div>
      <select
        name="service"
        defaultValue=""
        className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      >
        <option value="" disabled className="text-ink">
          Votre besoin…
        </option>
        {SERVICES.map((s) => (
          <option key={s} value={s} className="text-ink">
            {s}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Décrivez votre projet (optionnel)"
        className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />

      {status === "error" && (
        <p className="text-sm font-medium text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-gradient-to-r from-gold-light to-gold px-6 py-3.5 font-bold text-navy transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Envoi…" : "Recevoir mon audit gratuit"}
      </button>
    </form>
  );
}
