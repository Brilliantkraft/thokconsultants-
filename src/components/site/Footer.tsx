import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contact, images, services } from "@/lib/site";
import { btn } from "./ui";
import { Reveal } from "./Reveal";

export function ConsultCta() {
  return (
    <section className="container-x py-20">
      <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-navy-gradient px-8 py-14 text-primary-foreground md:px-16">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Need Help?</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Talk to a consultant</h2>
          </div>
          <Link to="/book-consultation" className={`${btn("accent")} w-full md:w-auto`}>Book Consultation</Link>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="inline-block rounded-xl bg-card p-3">
            <img src={images.logo} alt="THOK Consultants Limited" className="h-12 w-auto" />
          </div>
          <p className="mt-5 text-sm text-primary-foreground/60">Your Human Resource Management Partner.</p>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
            <li><Link to="/book-consultation" className="hover:text-accent">Book Consultation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            {services.map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-accent">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</h4>
          <p className="mt-5 text-sm text-primary-foreground/60">For any inquiries please email</p>
          <a href={`mailto:${contact.email}`} className="mt-1 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">
            <Mail className="h-4 w-4" /> {contact.email}
          </a>
          <div className="mt-6 flex gap-3">
            {[
              { href: contact.facebook, label: "Facebook", I: Facebook },
              { href: contact.linkedin, label: "LinkedIn", I: Linkedin },
              { href: contact.whatsapp, label: "WhatsApp", I: MessageCircle },
            ].map(({ href, label, I }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="container-x py-6 text-xs text-primary-foreground/50">© {new Date().getFullYear()} THOK Consultants Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
