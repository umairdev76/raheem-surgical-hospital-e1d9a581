import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, ShieldCheck, Award, Users } from "lucide-react";
import receptionImg from "@/assets/reception.jpg";
import otImg from "@/assets/operating-theater.jpg";
import icuImg from "@/assets/icu.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Raheem Surgical Hospital" },
      {
        name: "description",
        content:
          "Learn about Raheem Surgical Hospital — our mission, vision, facility, and team serving Sambrial, Sialkot.",
      },
      { property: "og:title", content: "About Raheem Surgical Hospital" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
              A hospital built for the community of Sambrial.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Raheem Surgical Hospital was founded to bring modern, affordable, and reliable surgical care closer to the people of Sambrial, Sialkot, and the surrounding villages — without the need to travel far for quality treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To deliver compassionate, evidence-based medical and surgical care to every patient, regardless of background.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the most trusted multi-specialty hospital in the Sambrial–Sialkot region — known for safety, skill, and warmth.",
            },
            {
              icon: Heart,
              title: "Our Values",
              text: "Patient dignity, clinical excellence, honesty in pricing, and a commitment to keep improving.",
            },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                <v.icon className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold">{v.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Inside The Hospital"
            title="A modern facility close to home"
            description="Our hospital is equipped with operation theatres, an intensive care unit, a physiotherapy wing, gynaecology services, lab, pharmacy and OPD — all under one roof."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { src: receptionImg, alt: "Hospital reception area" , label: "Reception & Lobby"},
              { src: otImg, alt: "Operating theater", label: "Operation Theatre" },
              { src: icuImg, alt: "Intensive Care Unit", label: "ICU" },
            ].map((p) => (
              <figure key={p.label} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 font-display font-semibold">{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Safety First", text: "Sterile protocols & trained surgical teams." },
            { icon: Award, title: "Quality Care", text: "Accredited doctors with years of experience." },
            { icon: Users, title: "Community-Focused", text: "Affordable pricing for local families." },
          ].map((v) => (
            <div key={v.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
                <v.icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
