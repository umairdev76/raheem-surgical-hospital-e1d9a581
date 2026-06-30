import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Stethoscope, HeartPulse, Activity, Baby, FlaskConical, Pill, Siren, Scissors } from "lucide-react";
import { DEPARTMENTS } from "@/lib/hospital-data";

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

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Departments & Services — Raheem Surgical Hospital" },
      {
        name: "description",
        content:
          "Surgery, emergency, ICU, physiotherapy, gynaecology, laboratory, pharmacy and OPD — full services at Raheem Surgical Hospital, Sambrial.",
      },
      { property: "og:title", content: "Departments & Services" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Departments
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
              Comprehensive medical and surgical services
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Eight departments working together to deliver complete care — from prevention and diagnosis to surgery and rehabilitation.
            </p>
          </div>

          {/* Quick anchor nav */}
          <nav className="mt-10 flex flex-wrap gap-2">
            {DEPARTMENTS.map((d) => (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 hover:border-primary hover:text-primary"
              >
                {d.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-6">
          {DEPARTMENTS.map((d, i) => {
            const Icon = iconMap[d.icon as keyof typeof iconMap] ?? Stethoscope;
            const featured = d.slug === "physiotherapy";
            return (
              <article
                key={d.slug}
                id={d.slug}
                className={`scroll-mt-28 rounded-3xl border p-7 sm:p-10 ${
                  featured
                    ? "border-accent/40 bg-accent/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
                  <span
                    className={`grid h-16 w-16 place-items-center rounded-2xl ${
                      featured
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary-soft text-primary"
                    }`}
                  >
                    <Icon className="h-8 w-8" aria-hidden />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {d.name}
                      </h2>
                      {featured && (
                        <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {d.description}
                    </p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {d.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                          <span className="text-foreground/90">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        to="/appointment"
                        search={{ department: d.slug }}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:brightness-110"
                      >
                        Book in {d.name}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        to="/doctors"
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
                      >
                        See doctors
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
