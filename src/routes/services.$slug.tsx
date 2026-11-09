import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Mail } from "lucide-react";
import { contact, services } from "@/lib/site";
import { btn, ServiceIcon } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ConsultCta } from "@/components/site/Footer";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — THOK Consultants` : "Service not found — THOK Consultants";
    return {
      meta: [
        { title },
        { name: "description", content: s?.summary ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: s?.summary ?? "" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-4xl text-primary">Service not found</h1>
      <Link to="/services" className={`${btn("primary")} mt-8`}>View Our Services</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-x relative grid gap-10 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28">
          <div>
            <Link to="/services" className="eyebrow reveal">← Services</Link>
            <h1 className="reveal mt-4 text-4xl font-semibold md:text-6xl">{service.title}</h1>
            <p className="reveal mt-6 max-w-2xl text-lg text-primary-foreground/75">{service.summary}</p>
          </div>
          <div className="hidden h-32 w-32 items-center justify-center rounded-3xl bg-accent text-accent-foreground md:flex">
            <ServiceIcon name={service.icon} className="h-14 w-14" />
          </div>
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-14">
          {(service.sections ?? []).map((sec, i) => (
            <Reveal key={i} delay={i * 80}>
            <div>
              {sec.heading && <h2 className="text-3xl font-medium text-primary md:text-4xl">{sec.heading}</h2>}
              {sec.paragraphs?.map((p) => (
                <p key={p} className="mt-5 text-lg leading-relaxed text-muted-foreground">{p}</p>
              ))}
              {sec.listIntro && <p className="mt-6 font-semibold text-primary">{sec.listIntro}</p>}
              {sec.list && (
                <ul className={`mt-5 grid gap-3 ${(sec.list[0]?.length ?? 0) < 60 ? "sm:grid-cols-2" : ""}`}>
                  {sec.list.map((l) => (
                    <li key={l} className="flex gap-3 rounded-xl border border-border bg-card p-4 leading-relaxed text-foreground">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-accent" /> {l}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            </Reveal>
          ))}
          {!service.sections && (
            <Reveal>
              <p className="text-2xl font-display leading-relaxed text-primary">{service.summary}</p>
            </Reveal>
          )}
        </div>

        <Reveal delay={150} className="lg:sticky lg:top-28 lg:self-start">
        <aside className="space-y-6">
          <div className="rounded-2xl bg-accent-soft p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">Contact</p>
            <p className="mt-3 font-semibold text-primary">For any inquiries please email</p>
            <a href={`mailto:${contact.email}`} className="mt-2 inline-flex items-center gap-2 break-all text-sm font-bold text-primary hover:text-accent">
              <Mail className="h-4 w-4 shrink-0" /> {contact.email}
            </a>
            <Link to="/book-consultation" className={`${btn("accent")} mt-6 w-full`}>Book Consultation</Link>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Other services</p>
            <ul className="mt-4 space-y-1">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link to="/services/$slug" params={{ slug: o.slug }} className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-primary hover:bg-secondary">
                    {o.title} <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        </Reveal>
      </section>
      <ConsultCta />
    </>
  );
}
