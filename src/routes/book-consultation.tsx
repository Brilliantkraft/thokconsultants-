import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { contact } from "@/lib/site";
import { PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationForm } from "@/components/site/ConsultationForm";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book Consultation — THOK Consultants" },
      { name: "description", content: "Need Help? Talk to a consultant. Book a consultation with THOK Consultants." },
      { property: "og:title", content: "Book a Consultation — THOK Consultants" },
      { property: "og:description", content: "Need Help? Talk to a consultant." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Book,
});

function Book() {
  return (
    <>
      <PageHero eyebrow="Need Help?" title="Talk to a consultant" />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_22rem]">
        <Reveal>
          <ConsultationForm />
        </Reveal>
        <Reveal delay={150} className="lg:self-start">
        <aside className="rounded-3xl bg-accent-soft p-8">
          <p className="eyebrow">Contact</p>
          <p className="mt-4 font-semibold text-primary">For any inquiries please email</p>
          <a href={`mailto:${contact.email}`} className="mt-2 inline-flex items-center gap-2 break-all font-bold text-primary hover:text-accent">
            <Mail className="h-4 w-4 shrink-0" /> {contact.email}
          </a>
        </aside>
        </Reveal>
      </section>
    </>
  );
}
