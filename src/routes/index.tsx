import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Compass, Handshake, HeartHandshake, Lightbulb, Mail, PenTool, Presentation, Rocket, ShieldCheck, Target, UsersRound, Wrench } from "lucide-react";
import { contact, images } from "@/lib/site";
import { btn } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ConsultCta } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THOK Consultants — Nigeria's Top HR Consultants in Lagos" },
      { name: "description", content: "We are Nigeria's Top HR Consultants located in Lagos. With our assistance, you can maximize your employee productivity." },
      { property: "og:title", content: "THOK Consultants — HR Consultants in Lagos" },
      { property: "og:description", content: "Your Human Resource Management Partner with over 10 years of experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const steps = [
  { n: "01", t: "Identify Goals", I: Target, d: "We work closely with you to understand and identify your business goals that can be converted into an actionable plan." },
  { n: "02", t: "Bring Ideas to Life", I: Lightbulb, d: "The ideas and plans that we’ve jotted will then be brought to life. We help and guide you to take the first step and set things up." },
  { n: "03", t: "Business Expansion", I: Rocket, d: "Setting up a business is not enough. We help you think ahead and encourage you to expand your business with a full-proof plan." },
];
const values = [
  { t: "Passion & Commitment", I: HeartHandshake },
  { t: "Honesty & Openness", I: ShieldCheck },
  { t: "Dedicated Team", I: UsersRound },
  { t: "Practical Approach", I: Wrench },
];
const testimonials = [
  { q: "I highly recommend THOK, they re-structured my business. They handled our company profile and helped onboard a major client. Cheers!!", n: "Scalabu Digitals", url: "https://scalabu.com/", img: images.scalabu },
  { q: "Great work from the team. They rebuit my website and brand image with their partners. It was a pleasure working with them and I'll definitely do business with them again.", n: "Brands and Trade", url: "https://brandsandtradeng.com/", img: images.brands },
];
const future = [
  { t: "Training", I: Presentation, d: "To better serve you THOK offers various training platforms, such as, on-site and virtual training, to equip your staff with the right knowledge on how to use our software/solutions." },
  { t: "Design", I: PenTool, d: "We are the best writers with great experience to give you a wonderful business profile that guarantees return on investment." },
  { t: "Dev System", I: Code2, d: "If you’re looking for a new website, our team can help you create an intriguing and user-friendly web page that gets results!" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent-soft blur-3xl" />
        <div className="container-x relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal">
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-accent" />HR Consultants · Lagos</p>
            <h1 className="mt-6 text-4xl font-medium leading-[1.08] text-primary md:text-[3.4rem]">
              We are Nigeria's Top HR Consultants located in Lagos. <span className="italic text-accent">With our assistance, you can maximize your employee productivity.</span>
            </h1>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/about" className={btn("primary")}>Learn More <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/book-consultation" className={btn("outline")}>Book Consultation</Link>
            </div>
          </div>
          <div className="reveal relative [animation-delay:150ms]">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-accent/60" />
            <img src={images.hero} alt="THOK consultants business meeting" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]" />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-card px-6 py-4 shadow-lift">
              <p className="font-display text-3xl font-semibold text-primary">10+ <span className="text-base font-sans font-semibold text-muted-foreground">years</span></p>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-navy-gradient text-primary-foreground">
        <div className="container-x grid gap-10 py-20 md:grid-cols-[auto_1fr] md:py-28">
          <Reveal><Compass className="h-14 w-14 text-accent" strokeWidth={1.2} /></Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl font-normal leading-tight md:text-5xl">
              Your Human Resource Management Partner with over 10 years of experience.{" "}
              <span className="text-primary-foreground/60">Every business faces human resources challenges.</span>{" "}
              <span className="italic text-accent">Let us handle it for You.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="container-x py-24">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">How we grow your business</p>
            <h2 className="mt-3 text-3xl font-medium text-primary md:text-5xl">Three steps forward</h2>
          </div>
          <Link to="/services" className={btn("outline")}>View Our Services <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ n, t, I, d }, i) => (
            <Reveal key={t} delay={i * 120}>
            <article className="card-lift group relative h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
              <span className="absolute right-6 top-5 font-display text-5xl text-muted">{n}</span>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <I className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <h3 className="mt-8 text-2xl font-medium text-primary">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust us */}
      <section className="bg-secondary">
        <div className="container-x grid items-center gap-14 py-24 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={images.about} alt="THOK team at work" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl bg-accent md:block" />
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Trust Us</p>
            <h2 className="mt-3 text-3xl font-medium text-primary md:text-5xl">We Are Here to Help!</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              If you are looking for a reliable business coach with whom you share your mind and get the best business advice you’ve been looking for, we are here. With 10 years of experience in helping businesses grow, we’ve mastered the skills of studying the market for you and helping you cope up with the latest trends that’ll take your business to the next level.
            </p>
            <Link to="/about" className={`${btn("primary")} mt-8`}>Learn More <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Why */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Why Choose Us?</p>
            <h2 className="mt-3 text-3xl font-medium text-primary md:text-5xl">We are well-experienced business professionals with younger minds.</h2>
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
        </div>
        <Reveal delay={150}>
          <img src={images.why} alt="THOK consultants in a business meeting" className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-lift" />
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-gradient text-primary-foreground">
        <div className="container-x py-24">
          <Reveal>
            <p className="eyebrow text-center">Testimonials</p>
            <h2 className="mt-3 text-center text-3xl font-medium md:text-5xl">Trusted by Our Clients</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.n} delay={i * 150} className="h-full">
              <figure className="card-lift flex h-full flex-col rounded-2xl bg-card p-8 text-card-foreground md:p-10">
                <Handshake className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed text-primary">“{t.q}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <a href={t.url} target="_blank" rel="noreferrer" className="shrink-0">
                    <img src={t.img} alt={`${t.n} logo`} className="h-12 w-12 rounded-full border border-border object-contain bg-card" />
                  </a>
                  <a href={t.url} target="_blank" rel="noreferrer" className="font-bold text-primary hover:text-accent">{t.n}</a>
                </figcaption>
              </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="container-x py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Shaping the future</p>
          <h2 className="mt-3 text-3xl font-medium text-primary md:text-5xl">Shaping the future</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Our consultants will help you develop a human capital strategy for your company. We will create relevant and unique human resource campaigns.</p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {future.map(({ t, I, d }, i) => (
            <Reveal key={t} delay={i * 120}>
            <article className="group h-full bg-card p-8 transition-colors hover:bg-accent-soft md:p-10">
              <I className="h-8 w-8 text-accent transition-transform group-hover:-translate-y-1" strokeWidth={1.5} />
              <h3 className="mt-6 text-2xl font-medium text-primary">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section className="container-x pb-4">
        <Reveal>
        <div className="grid overflow-hidden rounded-3xl bg-accent-soft lg:grid-cols-2">
          <div className="p-10 md:p-16">
            <p className="eyebrow">Careers</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">ARE YOU LOOKING FOR A JOB?</h2>
            <p className="mt-2 font-display text-2xl italic text-accent">OR WOULD YOU LIKE TO JOIN OUR TEAM?</p>
            <p className="mt-8 text-xl font-semibold text-primary">Let's help you design the life you want.</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Send your CVs to</p>
            <a href={`mailto:${contact.careersEmail}?subject=CV%20Submission`} className={`${btn("primary")} mt-3 w-full sm:w-auto`}>
              <Mail className="h-4 w-4" /> {contact.careersEmail}
            </a>
          </div>
          <img src={images.hiring} alt="hiring, recruitment, job" className="h-full min-h-72 w-full object-cover" />
        </div>
        </Reveal>
      </section>

      <ConsultCta />
    </>
  );
}
