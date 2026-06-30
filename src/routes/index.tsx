import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  CalendarClock,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Activity,
  Baby,
  FlaskConical,
  Pill,
  Siren,
  Scissors,
  ArrowRight,
  Quote,
  Star,
  CheckCircle2,
  Clock,
} from "lucide-react";

import heroImg from "@/assets/hero-hospital.jpg";
import physioImg from "@/assets/physiotherapy.jpg";
import { EmergencyBar } from "@/components/site/EmergencyBar";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  HOSPITAL,
  DEPARTMENTS,
  DOCTORS,
  TESTIMONIALS,
  FACILITY_STATS,
} from "@/lib/hospital-data";

const iconMap = {
  scalpel: Scissors,
  siren: Siren,
  activity: Activity,
  "heart-pulse": HeartPulse,
  baby: Baby,
  flask: FlaskConical,
  pill: Pill,
  stethoscope: Stethoscope,
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raheem Surgical Hospital — Trusted Care in Sambrial, Sialkot" },
      {
        name: "description",
        content:
          "24/7 emergency, surgery, ICU, physiotherapy, gynaecology, lab & pharmacy in Sambrial, Sialkot. Book an appointment with experienced doctors.",
      },
      { property: "og:title", content: "Raheem Surgical Hospital" },
      {
        property: "og:description",
        content: "Compassionate care, trusted surgery — serving Sambrial & Sialkot.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <EmergencyBar />
      <Departments />
      <Physiotherapy />
      <WhyChoose />
      <Stats />
      <Doctors />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Raheem Surgical Hospital building exterior"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="container-page relative grid items-center gap-10 py-20 md:py-28 lg:grid-cols-2 lg:py-32">
        <div className="text-primary-foreground animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Trusted in Sambrial since 2009
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            Compassionate Care.{" "}
            <span className="text-accent">Trusted Surgery.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            A multi-specialty surgical hospital serving Sambrial, Sialkot and surrounding areas — with 24/7 emergency, modern operation theatres, ICU, and one of the region's strongest physiotherapy departments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/appointment"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent px-6 font-semibold text-accent-foreground shadow-elevated transition-all hover:brightness-105"
            >
              <CalendarClock className="h-5 w-5" aria-hidden />
              Book Appointment
            </Link>
            <a
              href={`tel:${HOSPITAL.phone}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/20"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Now
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/85">
            {[
              "24/7 Emergency",
              "Experienced Surgeons",
              "Modern Equipment",
              "Affordable Care",
            ].map((f) => (
              <li key={f} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Floating info card */}
        <div className="hidden lg:block animate-fade-up">
          <div className="relative ml-auto max-w-sm rounded-2xl bg-card p-6 shadow-elevated">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-emergency/10 text-emergency animate-pulse-ring">
                <Siren className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Emergency Hotline
                </p>
                <a
                  href={`tel:${HOSPITAL.emergency}`}
                  className="font-display text-xl font-bold text-foreground hover:text-primary"
                >
                  {HOSPITAL.emergency}
                </a>
              </div>
            </div>
            <hr className="my-5" />
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <p className="text-muted-foreground">
                  <span className="block font-semibold text-foreground">Always Open</span>
                  Emergency · ICU · Labour ward
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <p className="text-muted-foreground">
                  <span className="block font-semibold text-foreground">OPD</span>
                  9:00 AM — 9:00 PM daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Departments() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Departments"
          title="Complete care under one roof"
          description="From routine checkups to complex surgery and rehabilitation, our departments work together to give every patient the right care at the right time."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS.map((d, i) => {
            const Icon = iconMap[d.icon as keyof typeof iconMap] ?? Stethoscope;
            return (
              <Link
                key={d.slug}
                to="/services"
                hash={d.slug}
                className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 card-hover"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {d.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.short}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Physiotherapy() {
  return (
    <section className="section-pad bg-primary-soft/50">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <img
            src={physioImg}
            alt="Physiotherapist working with a patient at Raheem Surgical Hospital"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-3xl shadow-elevated"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card p-5 shadow-elevated sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
                <HeartPulse className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-foreground">Flagship</p>
                <p className="text-xs text-muted-foreground">Department</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Our Strength
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-balance sm:text-4xl">
            Physiotherapy & Rehabilitation
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our physiotherapy department is one of the most respected in the Sambrial region. Led by qualified physiotherapists including <strong className="text-foreground">Dr. Hamza Zahid PT</strong>, we deliver evidence-based rehabilitation for orthopaedic, neurological, and post-surgical patients.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Post-surgical rehab",
              "Stroke recovery",
              "Sports injuries",
              "Back & neck pain",
              "Electrotherapy & ultrasound",
              "Paediatric & geriatric care",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="text-foreground/90">{s}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/services"
            hash="physiotherapy"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Explore Physiotherapy
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: ShieldCheck, title: "Experienced Doctors", text: "Qualified consultants and surgeons across multiple specialties." },
    { icon: Activity, title: "Modern Equipment", text: "Well-equipped OT, ICU, and diagnostic lab for accurate, safe care." },
    { icon: Siren, title: "24/7 Emergency", text: "Always-open emergency department staffed by trained teams." },
    { icon: HeartPulse, title: "Affordable Care", text: "Quality healthcare priced for local families in Sambrial & Sialkot." },
  ];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care your family can trust"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
                <it.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="gradient-hero text-primary-foreground">
      <div className="container-page grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {FACILITY_STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-extrabold sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Our doctors"
          description="A team of qualified specialists committed to giving every patient personal, attentive care."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTORS.map((d) => (
            <div
              key={d.slug}
              className="overflow-hidden rounded-2xl border border-border bg-card card-hover"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={d.photo}
                  alt={`Portrait of ${d.name}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {d.specialty}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{d.name}</h3>
                <p className="text-xs text-muted-foreground">{d.qualification}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {d.timings}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/doctors"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary px-5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View all doctors
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What our patients say"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <Quote className="h-7 w-7 text-primary/40" aria-hidden />
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                "{t.text}"
              </blockquote>
              <div className="mt-auto flex items-center justify-between">
                <figcaption>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </figcaption>
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-page pb-20">
      <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 text-primary-foreground sm:p-14">
        <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.5fr_auto]">
          <div>
            <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
              Need to see a doctor? We're here for you.
            </h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/85">
              Book an appointment online or call our reception. For emergencies, our team is available 24/7.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/appointment"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent px-6 font-semibold text-accent-foreground shadow-elevated hover:brightness-105"
            >
              <CalendarClock className="h-5 w-5" aria-hidden />
              Book Appointment
            </Link>
            <a
              href={`tel:${HOSPITAL.phone}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 font-semibold backdrop-blur hover:bg-white/20"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {HOSPITAL.phone}
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
}
