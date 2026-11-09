import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { PageHero, ServiceIcon } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ConsultCta } from "@/components/site/Footer";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — THOK Consultants" },
      { name: "description", content: "Talent Management, HR Employee Services, HR Outsourcing, Learning and Development and Communication Services." },
      { property: "og:title", content: "What We Offer — THOK Consultants" },
      { property: "og:description", content: "HR services from THOK Consultants in Lagos, Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="What We Offer" />
      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 120} className={i === 0 ? "lg:col-span-2" : ""}>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className={`card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft ${i === 0 ? "lg:bg-navy-gradient lg:text-primary-foreground" : ""}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <h2 className={`mt-8 text-2xl font-medium ${i === 0 ? "text-primary lg:text-primary-foreground" : "text-primary"}`}>{s.title}</h2>
              <p className={`mt-3 flex-1 leading-relaxed ${i === 0 ? "text-muted-foreground lg:text-primary-foreground/75" : "text-muted-foreground"}`}>{s.summary}</p>
              <span className="mt-6 text-sm font-bold text-accent">Read More →</span>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <ConsultCta />
    </>
  );
}
