import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, UsersRound, Wrench } from "lucide-react";
import { images } from "@/lib/site";
import { btn, PageHero } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ConsultCta } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — THOK Consultants" },
      { name: "description", content: "Your Human Resource Management Partner with over 10 years of experience in Lagos, Nigeria." },
      { property: "og:title", content: "About THOK Consultants" },
      { property: "og:description", content: "Your Human Resource Management Partner with over 10 years of experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { t: "Passion & Commitment", I: HeartHandshake },
  { t: "Honesty & Openness", I: ShieldCheck },
  { t: "Dedicated Team", I: UsersRound },
  { t: "Practical Approach", I: Wrench },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Your Human Resource Management Partner with over 10 years of experience.">
        Every business faces human resources challenges. Let us handle it for You.
      </PageHero>

      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <img src={images.about} alt="THOK team at work" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Trust Us</p>
          <h2 className="mt-3 text-3xl font-medium text-primary md:text-5xl">We Are Here to Help!</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            If you are looking for a reliable business coach with whom you share your mind and get the best business advice you’ve been looking for, we are here. With 10 years of experience in helping businesses grow, we’ve mastered the skills of studying the market for you and helping you cope up with the latest trends that’ll take your business to the next level.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary">
        <div className="container-x grid items-center gap-14 py-24 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow">Why Choose Us?</p>
              <h2 className="mt-3 text-3xl font-medium text-primary md:text-4xl">We are well-experienced business professionals with younger minds.</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map(({ t, I }, i) => (
                <Reveal key={t} delay={i * 90}>
                  <div className="card-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                    <I className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.6} />
                    <span className="font-semibold text-primary">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <Link to="/services" className={`${btn("primary")} mt-10`}>View Our Services</Link>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <img src={images.why} alt="THOK consultants in a business meeting" className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-lift" />
          </Reveal>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
