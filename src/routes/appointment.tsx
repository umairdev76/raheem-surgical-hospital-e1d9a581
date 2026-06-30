import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CalendarClock, Send, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { DEPARTMENTS, DOCTORS, HOSPITAL } from "@/lib/hospital-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  department: z.string().min(1, "Please select a department"),
  doctor: z.string().max(80).optional(),
  date: z.string().min(1, "Choose a preferred date"),
  time: z.string().optional(),
  message: z.string().max(500).optional(),
});

interface SearchParams {
  department?: string;
  doctor?: string;
}

export const Route = createFileRoute("/appointment")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    department: typeof s.department === "string" ? s.department : undefined,
    doctor: typeof s.doctor === "string" ? s.doctor : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book an Appointment — Raheem Surgical Hospital" },
      {
        name: "description",
        content: "Book an appointment with a doctor at Raheem Surgical Hospital, Sambrial. Sent via WhatsApp or call our reception.",
      },
      { property: "og:title", content: "Book Appointment" },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  const search = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const dept = DEPARTMENTS.find((x) => x.slug === d.department)?.name ?? d.department;
    const doc = DOCTORS.find((x) => x.slug === d.doctor)?.name ?? d.doctor ?? "Any available";
    const text = [
      `*New Appointment Request*`,
      ``,
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Department: ${dept}`,
      `Doctor: ${doc}`,
      `Preferred Date: ${d.date}${d.time ? ` at ${d.time}` : ""}`,
      d.message ? `\nNote: ${d.message}` : "",
    ].join("\n");

    window.open(
      `https://wa.me/${HOSPITAL.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <>
      <section className="gradient-soft">
        <div className="container-page py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Appointment
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
                Book a visit with our doctors
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Fill out the form and we'll confirm your appointment via WhatsApp or phone. For urgent care, please call our emergency line directly.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`tel:${HOSPITAL.phone}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Reception</p>
                    <p className="font-semibold">{HOSPITAL.phone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${HOSPITAL.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-success"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-success/15 text-success">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold">Chat with us</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                    <CheckCircle2 className="h-7 w-7" aria-hidden />
                  </span>
                  <h2 className="font-display text-2xl font-bold">Request sent!</h2>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    We've opened WhatsApp with your appointment details. Send the message and our team will confirm shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-5 text-sm font-semibold hover:border-primary hover:text-primary"
                  >
                    Book another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
                    <CalendarClock className="h-5 w-5 text-primary" aria-hidden />
                    Appointment Details
                  </h2>

                  <Field label="Full Name" name="name" required error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      required
                      maxLength={80}
                      autoComplete="name"
                      className="field-input"
                      placeholder="e.g. Imran Ahmad"
                    />
                  </Field>

                  <Field label="Phone Number" name="phone" required error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      autoComplete="tel"
                      className="field-input"
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </Field>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Department" name="department" required error={errors.department}>
                      <select
                        id="department"
                        name="department"
                        required
                        defaultValue={search.department ?? ""}
                        className="field-input"
                      >
                        <option value="">Select…</option>
                        {DEPARTMENTS.map((d) => (
                          <option key={d.slug} value={d.slug}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Doctor (optional)" name="doctor">
                      <select
                        id="doctor"
                        name="doctor"
                        defaultValue={search.doctor ?? ""}
                        className="field-input"
                      >
                        <option value="">Any available</option>
                        {DOCTORS.map((d) => (
                          <option key={d.slug} value={d.slug}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Preferred Date" name="date" required error={errors.date}>
                      <input id="date" name="date" type="date" required className="field-input" />
                    </Field>
                    <Field label="Preferred Time" name="time">
                      <input id="time" name="time" type="time" className="field-input" />
                    </Field>
                  </div>

                  <Field label="Message (optional)" name="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      maxLength={500}
                      className="field-input resize-none"
                      placeholder="Briefly describe your concern…"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 font-semibold text-accent-foreground shadow-soft hover:brightness-105"
                  >
                    <Send className="h-5 w-5" aria-hidden />
                    Send via WhatsApp
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you'll be redirected to WhatsApp to confirm your request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .field-input {
          width: 100%;
          min-height: 2.75rem;
          border-radius: 0.625rem;
          border: 1px solid var(--color-input);
          background: var(--color-background);
          padding: 0.5rem 0.875rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          transition: border-color .15s ease, box-shadow .15s ease;
        }
        .field-input::placeholder { color: var(--color-muted-foreground); }
        .field-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  name,
  required,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-emergency">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-emergency">{error}</p>}
    </div>
  );
}
