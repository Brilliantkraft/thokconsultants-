import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contact } from "@/lib/site";
import { PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationForm } from "@/components/site/ConsultationForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — THOK Consultants" },
      { name: "description", content: "For any inquiries please email contact@theokconsulting.com." },
      { property: "og:title", content: "Contact THOK Consultants" },
      { property: "og:description", content: "For any inquiries please email contact@theokconsulting.com." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { I: Mail, label: "For any inquiries please email", value: contact.email, href: `mailto:${contact.email}` },
    { I: Mail, label: "Send your CVs to", value: contact.careersEmail, href: `mailto:${contact.careersEmail}` },
    { I: MessageCircle, label: "WhatsApp", value: contact.phoneDisplay, href: contact.whatsapp },
  ];
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Need Help? Talk to a consultant" />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[22rem_1fr]">
        <div className="space-y-4">
          {items.map(({ I, label, value, href }, i) => (
            <Reveal key={value} delay={i * 100}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="card-lift flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent"><I className="h-5 w-5" /></span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">{label}</span>
                <span className="block break-all font-bold text-primary">{value}</span>
              </span>
            </a>
            </Reveal>
          ))}
          <Reveal delay={300}>
          <div className="flex gap-3 pt-2">
            <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary hover:border-accent hover:text-accent"><Facebook className="h-4 w-4" /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary hover:border-accent hover:text-accent"><Linkedin className="h-4 w-4" /></a>
          </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <ConsultationForm />
        </Reveal>
      </section>
    </>
  );
}
