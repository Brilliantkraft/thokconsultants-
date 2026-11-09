import { Briefcase, Globe, GraduationCap, Users, Wallet } from "lucide-react";
import type { Service } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60";

const variants = {
  accent: "bg-accent text-accent-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lift",
  outline: "border border-primary/25 text-primary hover:border-accent hover:text-accent",
  light: "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary",
};

export function btn(v: keyof typeof variants = "primary") {
  return `${base} ${variants[v]}`;
}

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: Service["icon"]; className?: string }) {
  const I = { users: Users, wallet: Wallet, briefcase: Briefcase, graduation: GraduationCap, globe: Globe }[name];
  return <I className={className} strokeWidth={1.6} />;
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
        {children && <div className="reveal mt-6 max-w-2xl text-lg text-primary-foreground/75">{children}</div>}
      </div>
    </section>
  );
}
