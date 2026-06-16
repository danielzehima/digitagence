import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Filter,
  MailCheck,
  Boxes,
  Rocket,
  Target,
  ShieldCheck,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const SERVICES = [
  {
    icon: Globe,
    title: "Sites web & Landing pages",
    text: "Des sites modernes, rapides et optimisés pour le mobile, pensés pour convertir vos visiteurs en clients.",
  },
  {
    icon: Filter,
    title: "Tunnels de vente",
    text: "Des parcours qui capturent les prospects et les guident jusqu'à l'achat, avec formulaires et suivi des leads.",
  },
  {
    icon: MailCheck,
    title: "Automatisation email",
    text: "Relances automatiques, accusés de réception et notifications : vous ne perdez plus jamais un prospect.",
  },
  {
    icon: Boxes,
    title: "SaaS sur mesure",
    text: "Applications web et plateformes métier développées de A à Z, adaptées à votre activité.",
  },
];

const STEPS = [
  {
    icon: Target,
    title: "1. On analyse",
    text: "Audit gratuit de votre présence en ligne et de vos objectifs de croissance.",
  },
  {
    icon: Rocket,
    title: "2. On construit",
    text: "Conception et développement de votre site ou tunnel, du design à la mise en ligne.",
  },
  {
    icon: ShieldCheck,
    title: "3. On optimise",
    text: "Suivi des performances, automatisation et améliorations continues pour plus de résultats.",
  },
];

const PORTFOLIO = [
  {
    name: "MG CERVIS",
    tag: "Tunnel de vente + capture de leads",
    text: "Landing de génération de prospects pour une entreprise d'aménagement : galerie, formulaire de devis, emails automatiques et tableau de bord des leads.",
    image: "/realisations/mg-cervis.jpg",
    url: "https://mg-cervis.vercel.app",
  },
  {
    name: "TableFlow",
    tag: "SaaS — Restaurants",
    text: "Plateforme SaaS de digitalisation des restaurants : menus, réservations, commandes en ligne et paiements, dans un tableau de bord unique.",
    image: "/realisations/tableflow.jpg",
    url: "https://tableflow-gilt.vercel.app",
  },
  {
    name: "GestHotel",
    tag: "SaaS — Gestion hôtelière",
    text: "Solution complète de gestion d'hôtel : réservations, chambres, restaurant QR et facturation Mobile Money, pensée pour l'Afrique de l'Ouest.",
    image: "/realisations/gesthotel.jpg",
    url: "https://gestb-hotel.vercel.app",
  },
  {
    name: "GestBTP",
    tag: "SaaS — Chantiers BTP",
    text: "Plateforme tout-en-un pour piloter les chantiers : rapports, tâches, photos et suivis centralisés pour les entreprises de construction.",
    image: "/realisations/gestbtp.jpg",
    url: "https://gestbtp.vercel.app",
  },
  {
    name: "Mémoires Intactes",
    tag: "Tunnel de vente — capture de leads",
    text: "Landing de capture pour un guide de restauration de photos de famille : page de conversion optimisée, formulaire d'inscription et envoi automatique du guide.",
    image: "/realisations/pageconversion.jpg",
    url: "https://pageconversion.vercel.app",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.jpg"
        alt="Logo DigitAgence"
        width={40}
        height={40}
        className="rounded-lg"
      />
      <span className="text-xl font-extrabold text-white">
        Digit<span className="text-gold">Agence</span>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur">
        <div className="container-section flex h-16 items-center justify-between">
          <a href="#" aria-label="Accueil DigitAgence">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#realisations" className="transition hover:text-white">Réalisations</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-light to-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:opacity-90"
          >
            Audit gratuit
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="container-section relative flex min-h-[88vh] flex-col justify-center py-24 text-white">
          <div className="max-w-3xl animate-fade-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm backdrop-blur">
              <Rocket className="h-4 w-4 text-gold" />
              Agence digitale & funnel building
            </span>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Transformez vos visiteurs en{" "}
              <span className="text-gradient">clients</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              DigitAgence conçoit des sites web, tunnels de vente et systèmes
              d'automatisation qui génèrent des prospects et boostent vos ventes.
              De l'idée à la mise en ligne.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-light to-gold px-7 py-4 font-bold text-navy shadow-xl shadow-gold/20 transition hover:opacity-90"
              >
                Demander un audit gratuit
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#realisations"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="bg-white py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-deep">
              Nos services
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Tout ce qu'il faut pour vendre en ligne
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-stone-200 bg-cream p-6 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-deep">
              Notre méthode
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Simple, rapide, orienté résultats
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RÉALISATIONS ============ */}
      <section id="realisations" className="bg-white py-20 sm:py-28">
        <div className="container-section">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-deep">
              Réalisations
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Des projets qui convertissent
            </h2>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            {PORTFOLIO.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-stone-200 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-stone-200 bg-cream">
                  <Image
                    src={p.image}
                    alt={`Aperçu du projet ${p.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-gold-deep">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 flex items-center gap-2 text-2xl font-extrabold">
                    {p.name}
                    <ArrowRight className="h-5 w-5 -translate-x-1 text-gold opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{p.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="container-section relative">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">
                Parlons de votre projet
              </p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Recevez votre audit gratuit sous 24h
              </h2>
              <p className="mt-5 text-white/70">
                Laissez-nous vos coordonnées et votre besoin. On revient vers vous
                rapidement avec des recommandations concrètes — sans engagement.
              </p>
              <ul className="mt-7 space-y-3 text-white/80">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-gold" />
                  <a href="mailto:digitagence3@gmail.com" className="hover:text-white">
                    digitagence3@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold" />
                  <a href="tel:+2250710075257" className="hover:text-white">
                    +225 07 10 07 52 57
                  </a>
                  <span className="text-white/40">/</span>
                  <a href="tel:+2250564149092" className="hover:text-white">
                    +225 05 64 14 90 92
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-gold" />
                  Abidjan, Yopougon Akadjoba
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-navy-soft p-7 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-navy py-10 text-center text-sm text-white/50">
        <div className="container-section flex flex-col items-center gap-3">
          <Logo />
          <p>
            © {new Date().getFullYear()} DigitAgence — Sites web · Tunnels de vente · Automatisation
          </p>
        </div>
      </footer>
    </main>
  );
}
