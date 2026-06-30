import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Siren, MessageCircle } from "lucide-react";
import { HOSPITAL } from "@/lib/hospital-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Raheem Surgical Hospital" },
      {
        name: "description",
        content: "Contact Raheem Surgical Hospital in Sambrial, Sialkot. Address, phone, emergency line, WhatsApp and map.",
      },
      { property: "og:title", content: "Contact Us" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Contact
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
              We're here to help — anytime.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Get in touch for appointments, enquiries, or directions. In an emergency, call our 24/7 hotline directly.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency callout */}
      <section className="container-page -mt-6 sm:-mt-10">
        <a
          href={`tel:${HOSPITAL.emergency}`}
          className="flex items-center justify-between gap-4 rounded-2xl border border-emergency/30 bg-emergency p-6 text-emergency-foreground shadow-elevated transition-transform hover:scale-[1.01]"
        >
          <div className="flex min-w-0 items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/20 animate-pulse-ring">
              <Siren className="h-6 w-6" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
                Emergency — 24/7
              </p>
              <p className="truncate font-display text-xl font-bold sm:text-2xl">{HOSPITAL.emergency}</p>
            </div>
          </div>
          <span className="hidden text-sm font-semibold underline-offset-4 hover:underline sm:inline">
            Tap to call
          </span>
        </a>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <ContactCard icon={MapPin} label="Address" value={HOSPITAL.address} />
            <ContactCard
              icon={Phone}
              label="Reception"
              value={HOSPITAL.phone}
              href={`tel:${HOSPITAL.phone}`}
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={HOSPITAL.email}
              href={`mailto:${HOSPITAL.email}`}
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="Chat with us"
              href={`https://wa.me/${HOSPITAL.whatsapp}`}
              external
            />
            <ContactCard icon={Clock} label="Hours" value={HOSPITAL.hours} />
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <iframe
              title="Raheem Surgical Hospital location"
              src="https://maps.google.com/maps?q=Sambrial%20Sialkot&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 break-words font-medium text-foreground">{value}</p>
      </div>
    </>
  );
  const className =
    "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary";
  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }
  return <div className={className}>{inner}</div>;
}
