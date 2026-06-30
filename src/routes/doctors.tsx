import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { DEPARTMENTS, DOCTORS, type DepartmentSlug } from "@/lib/hospital-data";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Raheem Surgical Hospital" },
      {
        name: "description",
        content: "Meet the qualified consultants, surgeons and physiotherapists at Raheem Surgical Hospital, Sambrial.",
      },
      { property: "og:title", content: "Our Doctors" },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const [filter, setFilter] = useState<DepartmentSlug | "all">("all");
  const list = useMemo(
    () => (filter === "all" ? DOCTORS : DOCTORS.filter((d) => d.department === filter)),
    [filter],
  );

  return (
    <>
      <section className="gradient-soft">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Team
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
              Doctors and specialists you can trust
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Filter by department to find the right specialist. Timings may change — please call ahead to confirm.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              All Departments
            </button>
            {DEPARTMENTS.map((d) => (
              <button
                key={d.slug}
                type="button"
                onClick={() => setFilter(d.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === d.slug
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground/80 hover:border-primary hover:text-primary"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          {list.length === 0 ? (
            <p className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
              No doctors listed in this department yet. Please call reception for assistance.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((d) => (
                <article
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
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {d.specialty}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{d.name}</h3>
                    <p className="text-sm text-muted-foreground">{d.qualification}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/85">{d.bio}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" aria-hidden />
                      {d.timings}
                    </div>
                    <Link
                      to="/appointment"
                      search={{ doctor: d.slug, department: d.department }}
                      className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:brightness-110"
                    >
                      Book with {d.name.split(" ").slice(0, 2).join(" ")}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
