"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { Header } from "@/components/Header";
import type { LucideIcon } from "lucide-react";
import {
  Clock,
  ShieldCheck,
  Microscope,
  Scissors,
  Smile,
  Sparkles,
  Stethoscope,
  Zap,
  Star,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Dinți Ficși în 24 Ore",
    description:
      "O procedură modernă de reabilitare orală completă, prin care pacienții pot primi o lucrare fixă în decurs de doar 24 de ore de la inserarea implanturilor dentare.",
    icon: Zap,
  },
  {
    title: "Profilaxie Dentară",
    description:
      "Ansamblul de proceduri și măsuri care au ca scop prevenirea apariției cariilor dentare, a bolilor gingivale (parodontozei) și a altor afecțiuni orale.",
    icon: ShieldCheck,
  },
  {
    title: "Endodonție",
    description:
      "Ramura stomatologiei care se ocupă cu biologia și patologia interiorului dintelui (pulpa dentară, țesuturile rădăcinii și a dintelui).",
    icon: Microscope,
  },
  {
    title: "Chirurgie",
    description:
      "Ramura stomatologiei care se ocupă cu diagnosticarea și tratamentul afecțiunilor dento-maxilare ce necesită intervenții chirurgicale.",
    icon: Scissors,
  },
  {
    title: "Implantologie",
    description:
      "Implantologia este o specialitate chirurgicala care are rolul de a inlocui dintii lipsa sau grav deteriorati, in conditii de siguranta.",
    icon: Stethoscope,
  },
  {
    title: "Estetică Dentară",
    description:
      "Obținerea unui zâmbet estetic și echilibrat, adaptat trăsăturilor feței pacientului, fără a compromite sănătatea orală.",
    icon: Sparkles,
  },
  {
    title: "Protetică pe Implant",
    description:
      "Protetica pe implanturi dentare se referă la reconstruirea dentiției, înlocuirea dinților lipsă, cu ajutorul unor proteze (lucrări) care se sprijină pe implanturi dentare.",
    icon: Smile,
  },
  {
    title: "Ortodonție",
    description:
      "Ortodonția este ramura stomatologiei care se ocupă cu diagnosticarea, prevenirea și corectarea pozițiilor incorecte ale dinților și maxilarelor.",
    icon: Smile,
  },
];

const contacts = {
  phone1: "+40 750 487 716",
  phone2: "+40 750 244 382",
  email: "biocaredentalcab@gmail.com",
  address:
    "Calea Moșilor 312, bl. 62, sc. 2, ap. 36, interfon 36, București, Sector 2, România",
} as const;

const testimonials = [
  {
    name: "Maria Popescu",
    text: "Experiență excelentă! Echipa este foarte profesionistă și atentă la detalii. Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Ion Ionescu",
    text: "Am făcut un implant dentar și sunt foarte mulțumit de rezultat. Procedura a fost rapidă și fără durere.",
    rating: 5,
  },
  {
    name: "Elena Dumitrescu",
    text: "Clinică modernă, echipament de ultimă generație. Medicii sunt foarte prietenoși și competenți.",
    rating: 5,
  },
  {
    name: "Andrei Popa",
    text: "Servicii de calitate superioară! Am rezolvat toate problemele dentare într-un timp scurt.",
    rating: 5,
  },
];

const carouselItems = [
  { text: "Implantologie avansată" },
  { text: "Tehnologie digitală" },
  { text: "Laborator propriu" },
  { text: "Echipă experimentată" },
  { text: "Rezultate garantate" },
  { text: "Tratamente moderne" },
  { text: "Consultații gratuite" },
  { text: "Prețuri competitive" },
];

const media = {
  heroVideo:
    "/empty-dentist-cabinet-with-medical-equipment-in-ho-2k-2025-12-17-14-00-14-utc.mov",
  images: [
    {
      src: "/dentist-and-patient-at-modern-medical-center-doct-2026-01-08-02-37-53-utc.jpg",
      alt: "Dentist și pacient într-o clinică modernă",
      label: "Consultație",
    },
    {
      src: "/portrait-of-smiling-dentist-standing-with-arms-cro-2026-01-11-10-31-41-utc.jpg",
      alt: "Portret medic dentist",
      label: "Echipă",
    },
    {
      src: "/young-male-dentist-in-clinic-2026-01-09-00-45-51-utc.jpg",
      alt: "Medic dentist în clinică",
      label: "Profesionalism",
    },
    {
      src: "/close-up-of-doctor-examining-patient-2026-01-09-08-41-13-utc.jpg",
      alt: "Examinare dentară",
      label: "Atenție la detalii",
    },
  ],
} as const;

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/80 px-4 py-2 text-sm font-semibold tracking-tight text-gray-900 shadow-sm backdrop-blur-sm">
      <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
      {children}
    </span>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header phone={contacts.phone1} />
      
      {/* Background decorative elements - positioned between sections */}
      <div className="pointer-events-none fixed left-0 top-[120vh] z-0 h-[600px] w-full opacity-20">
        <svg className="h-full w-full" viewBox="0 0 1920 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <circle cx="100" cy="300" r="200" stroke="#37b4b5" strokeWidth="3" strokeDasharray="12 12" />
          <circle cx="100" cy="300" r="140" stroke="#316ea4" strokeWidth="1.5" />
          <rect x="1600" y="100" width="180" height="180" stroke="#37b4b5" strokeWidth="2" rx="16" />
          <rect x="1700" y="350" width="120" height="120" stroke="#316ea4" strokeWidth="1.5" strokeDasharray="6 6" rx="12" />
        </svg>
      </div>
      
      <div className="pointer-events-none fixed left-0 top-[200vh] z-0 h-[600px] w-full opacity-15">
        <svg className="h-full w-full" viewBox="0 0 1920 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M 0 300 Q 480 100 960 300 T 1920 300" stroke="#37b4b5" strokeWidth="2.5" fill="none" />
          <path d="M 0 350 Q 480 150 960 350 T 1920 350" stroke="#316ea4" strokeWidth="1.5" fill="none" strokeDasharray="8 8" />
          <circle cx="1700" cy="150" r="160" stroke="#316ea4" strokeWidth="2" strokeDasharray="15 15" />
        </svg>
      </div>
      
      <div className="pointer-events-none fixed left-0 top-[280vh] z-0 h-[600px] w-full opacity-18">
        <svg className="h-full w-full" viewBox="0 0 1920 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="200" x2="600" y2="200" stroke="#37b4b5" strokeWidth="1.5" />
          <line x1="0" y1="400" x2="600" y2="400" stroke="#316ea4" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="1600" cy="300" r="180" stroke="#37b4b5" strokeWidth="2" strokeDasharray="10 10" />
          <rect x="200" y="50" width="140" height="140" stroke="#316ea4" strokeWidth="1.5" rx="14" />
        </svg>
      </div>
      {/* full-screen hero video */}
      <section id="top" className="relative min-h-[100svh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={media.images[0].src}
        >
          <source src={media.heroVideo} type="video/mp4" />
          <source src={media.heroVideo} type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col px-4">
          <div className="flex items-center justify-between pt-5">
            <a href="#top">
              <Image
                src="/layer_1.webp"
                alt="BioCare Dental"
                width={188}
                height={188}
                priority
                className="h-auto w-[188px] object-contain"
              />
            </a>

            <motion.a
              whileTap={{ scale: 0.98 }}
              href={`tel:${contacts.phone1.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:shadow-xl"
            >
              Sună
            </motion.a>
          </div>

          <div className="flex flex-1 flex-col justify-end pb-16 pt-12">
            <Reveal direction="left">
              <div className="hidden flex-wrap gap-2 sm:flex">
                <Pill>Consultații & tratamente moderne</Pill>
                <Pill>Laborator dentar propriu</Pill>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.05}>
              <h1 className="mt-5 max-w-xl text-balance text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
                <span className="text-[color:var(--accent)]">Stomatologie</span> fără compromisuri
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <p className="mt-4 max-w-prose text-pretty text-lg leading-8 text-[color:var(--muted)]">
                Clinica BioCare Dental oferă servicii complete — profilaxie,
                endodonție, chirurgie, implantologie, estetică, protetică pe
                implant și ortodonție.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] px-6 py-4 text-base font-bold text-white shadow-lg transition hover:shadow-xl"
                >
                  Programează-te
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="#content"
                  className="glass inline-flex items-center justify-center rounded-2xl border-2 border-[color:var(--accent)]/20 px-6 py-4 text-base font-bold text-[color:var(--accent)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/5"
                >
                  Vezi mai jos
                </motion.a>
              </div>
            </Reveal>
          </div>

          <motion.a
            href="#content"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex h-12 w-8 items-end justify-center rounded-full border-2 border-[color:var(--accent)] bg-white/80 p-2 shadow-lg backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-2 rounded-full bg-[color:var(--accent)]"
              />
            </div>
          </motion.a>
        </div>
      </section>


      <main id="content" className="relative mx-auto max-w-6xl px-4 pb-24 pt-10">
        {/* intro - full width layout */}
        <section className="mb-14">
          <Reveal>
            <div className="glass noise decorative-lines rounded-[28px] p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-4xl">
                    Clinică modernă, rezultate predictibile
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">
                    Combinăm tehnologia și estetica într-un flux clar: consult,
                    planificare, tratament și follow-up.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[
                      { k: "24h", v: "Dinți ficși" },
                      { k: "8", v: "Servicii" },
                      { k: "S2", v: "București" },
                    ].map((s) => (
                      <div
                        key={s.k}
                        className="glass rounded-2xl bg-gradient-to-br from-[color:var(--accent3)]/10 to-[color:var(--accent)]/5 p-4 text-center"
                      >
                        <div className="text-2xl font-bold tracking-tight text-[color:var(--accent)]">
                          {s.k}
                        </div>
                        <div className="mt-1 text-sm font-medium text-[color:var(--foreground)]">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass noise relative overflow-hidden rounded-[24px]">
                  <div className="relative h-80 w-full">
                    <Image
                      src={media.images[0].src}
                      alt={media.images[0].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute left-3 top-3 rounded-full bg-[color:var(--accent)]/90 px-3 py-1.5 text-xs font-semibold tracking-tight text-white backdrop-blur">
                    {media.images[0].label}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* services */}
        <section id="servicii" className="mt-14">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              Servicii stomatologice complete
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[color:var(--muted)]">
              Oferim o gamă completă de servicii dentare moderne, adaptate nevoilor fiecărui pacient
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, idx) => (
              <Reveal
                key={s.title}
                delay={idx * 0.05}
              >
                <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all will-change-transform hover:-translate-y-1 hover:border-[color:var(--accent)]/30 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--accent)]/10">
                      <s.icon className="h-6 w-6 text-[color:var(--accent)]" aria-hidden />
                    </div>

                    <h3 className="mt-3 text-sm font-bold tracking-tight text-gray-900">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 flex-1 text-center text-xs leading-6 text-gray-600">
                    {s.description}
                  </p>
                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="mt-4 inline-flex items-center justify-center gap-1 text-xs font-bold text-[color:var(--accent)] transition hover:text-[color:var(--accent2)]"
                  >
                    Detalii →
                  </motion.a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* infinite carousel */}
        <section className="mt-14">
          <InfiniteCarousel items={carouselItems} speed={40} />
        </section>

        {/* counters section */}
        <section className="mt-14">
          <Reveal>
            <div className="glass noise decorative-dots rounded-[28px] p-8 md:p-12">
              <h2 className="text-center text-3xl font-bold tracking-tight text-[color:var(--foreground)] md:text-4xl">
                BioCare Dental în cifre
              </h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <Counter end={2500} suffix="+" />
                  <p className="mt-3 text-base font-semibold text-[color:var(--muted)]">
                    Pacienți mulțumiți
                  </p>
                </div>
                <div className="text-center">
                  <Counter end={15} suffix="+" />
                  <p className="mt-3 text-base font-semibold text-[color:var(--muted)]">
                    Ani de experiență
                  </p>
                </div>
                <div className="text-center">
                  <Counter end={8} />
                  <p className="mt-3 text-base font-semibold text-[color:var(--muted)]">
                    Servicii specializate
                  </p>
                </div>
                <div className="text-center">
                  <Counter end={98} suffix="%" />
                  <p className="mt-3 text-base font-semibold text-[color:var(--muted)]">
                    Rata de satisfacție
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* testimonials section */}
        <section className="mt-14">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              Ce spun pacienții noștri
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="glass noise decorative-curve rounded-[24px] bg-gradient-to-br from-white to-[color:var(--accent)]/5 p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[color:var(--accent)] text-[color:var(--accent)]"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                    "{testimonial.text}"
                  </p>
                  <p className="mt-4 font-bold text-[color:var(--foreground)]">
                    — {testimonial.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* clinic & lab - stacked layout */}
        <section id="despre" className="mt-14">
          <Reveal>
            <div className="glass noise decorative-squares overflow-hidden rounded-[28px]">
              <div className="grid md:grid-cols-[1fr_1.3fr]">
                <div className="relative h-80 w-full md:h-auto">
                  <Image
                    src={media.images[1].src}
                    alt={media.images[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent md:bg-gradient-to-r" />
                  <div className="absolute left-4 top-4 rounded-full bg-[color:var(--blue-green)]/90 px-3 py-1.5 text-xs font-semibold tracking-tight text-white backdrop-blur">
                    {media.images[1].label}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
                    Clinică și laborator
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">
                    La Biocare Dental, ne-am propus să oferim pacienților nu doar
                    tratamente stomatologice de calitate, ci și echipamente de
                    ultimă generație, unul dintre atuurile noastre majore fiind
                    propriul laborator dentar.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["Planificare digitală", "Flux rapid", "Estetică", "Predictibilitate"].map(
                      (b) => (
                        <div
                          key={b}
                          className="glass rounded-2xl bg-gradient-to-br from-[color:var(--accent)]/10 to-transparent px-4 py-3 text-center text-sm font-bold text-[color:var(--foreground)]"
                        >
                          {b}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* team section - reverse stacked layout */}
        <section className="mt-14">
          <Reveal>
            <div className="glass noise decorative-curve overflow-hidden rounded-[28px]">
              <div className="grid md:grid-cols-[1.3fr_1fr]">
                <div className="order-2 p-8 md:order-1 md:p-10">
                  <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
                    Echipă dedicată
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">
                    Medicii noștri sunt specializați în diverse domenii ale
                    stomatologiei moderne, oferind consultații personalizate și
                    tratamente adaptate nevoilor fiecărui pacient.
                  </p>

                  <div className="mt-6 grid gap-3">
                    {["Experiență vastă", "Abordare personalizată", "Tehnologie avansată"].map(
                      (b) => (
                        <div
                          key={b}
                          className="glass rounded-2xl bg-gradient-to-br from-[color:var(--blue-light)]/20 to-transparent px-4 py-3 text-center text-sm font-bold text-[color:var(--foreground)]"
                        >
                          {b}
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="relative order-1 h-80 w-full md:order-2 md:h-auto">
                  <Image
                    src={media.images[2].src}
                    alt={media.images[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent md:bg-gradient-to-l" />
                  <div className="absolute left-4 top-4 rounded-full bg-[color:var(--accent)]/90 px-3 py-1.5 text-xs font-semibold tracking-tight text-white backdrop-blur">
                    {media.images[2].label}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* contact (image distributed here) */}
        <section id="contact" className="mt-14">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
              Contact
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Reveal direction="left">
              <div className="glass noise rounded-[28px] p-6">
                <div className="grid gap-3">
                  <a
                    className="glass rounded-2xl bg-gradient-to-br from-[color:var(--accent)]/10 to-transparent p-5 transition hover:shadow-lg"
                    href={`tel:${contacts.phone1.replace(/\s/g, "")}`}
                  >
                    <div className="text-sm font-semibold text-[color:var(--accent)]">Telefon</div>
                    <div className="mt-1 text-lg font-bold text-[color:var(--foreground)]">
                      {contacts.phone1}
                    </div>
                  </a>
                  <a
                    className="glass rounded-2xl bg-gradient-to-br from-[color:var(--blue-green)]/10 to-transparent p-5 transition hover:shadow-lg"
                    href={`tel:${contacts.phone2.replace(/\s/g, "")}`}
                  >
                    <div className="text-sm font-semibold text-[color:var(--blue-green)]">Telefon</div>
                    <div className="mt-1 text-lg font-bold text-[color:var(--foreground)]">
                      {contacts.phone2}
                    </div>
                  </a>
                  <a
                    className="glass rounded-2xl bg-gradient-to-br from-[color:var(--accent2)]/10 to-transparent p-5 transition hover:shadow-lg"
                    href={`mailto:${contacts.email}`}
                  >
                    <div className="text-sm font-semibold text-[color:var(--accent2)]">Email</div>
                    <div className="mt-1 text-lg font-bold text-[color:var(--foreground)]">
                      {contacts.email}
                    </div>
                  </a>
                </div>

                <div className="mt-4 rounded-3xl border-2 border-[color:var(--accent)]/20 bg-gradient-to-br from-[color:var(--accent3)]/10 to-transparent p-5">
                  <div className="text-sm font-semibold text-[color:var(--accent)]">Adresă</div>
                  <div className="mt-2 text-base font-bold leading-7 text-[color:var(--foreground)]">
                    {contacts.address}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="glass noise overflow-hidden rounded-[28px]">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[color:var(--foreground)]">
                    Unde ne puteți găsi
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    Vizitează-ne la clinica noastră din București, Sector 2
                  </p>
                </div>
                <div className="relative h-[400px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.8!2d26.1!3d44.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI0JzAwLjAiTiAyNsKwMDYnMDAuMCJF!5e0!3m2!1sen!2sro!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-[28px]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="border-t border-[color:var(--stroke)] bg-gradient-to-b from-white to-[color:var(--accent)]/5">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Newsletter */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-[color:var(--foreground)]">
                Abonează-te la newsletter
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Primește cele mai recente oferte și sfaturi pentru sănătatea dentară.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Adresa ta de email"
                  className="glass flex-1 rounded-2xl border border-[color:var(--stroke)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20"
                />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:shadow-xl"
                >
                  Abonează-te
                </motion.button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-[color:var(--foreground)]">
                Urmărește-ne
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--accent)]/10 to-transparent transition hover:scale-110 hover:shadow-lg"
                >
                  <Facebook className="h-5 w-5 text-[color:var(--accent)]" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--accent2)]/10 to-transparent transition hover:scale-110 hover:shadow-lg"
                >
                  <Instagram className="h-5 w-5 text-[color:var(--accent2)]" />
                </a>
                <a
                  href={`mailto:${contacts.email}`}
                  className="glass grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--blue-green)]/10 to-transparent transition hover:scale-110 hover:shadow-lg"
                >
                  <Mail className="h-5 w-5 text-[color:var(--blue-green)]" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-[color:var(--stroke)] pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-3">
                <Image
                  src="/layer_1.webp"
                  alt="BioCare Dental"
                  width={48}
                  height={48}
                  className="h-auto w-12 object-contain"
                />
                <div>
                  <div className="text-sm font-bold text-[color:var(--foreground)]">
                    BioCare Dental
                  </div>
                  <div className="text-xs text-[color:var(--muted)]">
                    Stomatologie fără compromisuri
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-[color:var(--muted)] md:text-right">
                <p>© {new Date().getFullYear()} BioCare Dental. Toate drepturile rezervate.</p>
                <p className="mt-1">București, Sector 2 • {contacts.phone1}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* mobile bottom CTA */}
      <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--stroke)] bg-[color:color-mix(in_oklab,var(--background)_82%,transparent)] backdrop-blur transition-transform duration-300 sm:hidden ${
        isScrolled ? "translate-y-full" : "translate-y-0"
      }`}>
        <div className="mx-auto flex max-w-6xl gap-3 px-4 py-3">
          <motion.a
            whileTap={{ scale: 0.98 }}
            href={`tel:${contacts.phone1.replace(/\s/g, "")}`}
            className="flex-1 rounded-2xl bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent2)] py-3 text-center text-sm font-bold text-white shadow-lg"
          >
            Sună
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="glass flex-1 rounded-2xl border-2 border-[color:var(--accent)]/20 py-3 text-center text-sm font-bold text-[color:var(--accent)]"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </div>
  );
}
