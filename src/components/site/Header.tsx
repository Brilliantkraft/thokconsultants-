import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { images, services } from "@/lib/site";
import { btn } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const navCls =
    "text-sm font-semibold text-foreground/80 transition-colors hover:text-accent [&.active]:text-primary";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-border bg-background/90 shadow-soft backdrop-blur-md" : "border-border bg-background shadow-soft"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="THOK Consultants home">
          <img src={images.logo} alt="THOK Consultants Limited" className="h-12 w-auto mix-blend-multiply" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <Link to="/" className={navCls} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/about" className={navCls}>About Us</Link>
          <div className="group relative">
            <Link to="/services" className={`${navCls} inline-flex items-center gap-1`}>
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-border bg-popover p-2 shadow-lift">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-primary"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/contact" className={navCls}>Contact Us</Link>
        </nav>

        <div className="hidden lg:block">
          <Link to="/book-consultation" className={btn("accent")}>Book Consultation</Link>
        </div>

        <button
          className="rounded-md p-2 text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="container-x flex flex-col gap-1 py-4" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
            <Link to="/" className="py-3 font-semibold">Home</Link>
            <Link to="/about" className="py-3 font-semibold">About Us</Link>
            <button className="flex items-center justify-between py-3 text-left font-semibold" onClick={() => setSvcOpen((v) => !v)} aria-expanded={svcOpen}>
              Services <ChevronDown className={`h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}`} />
            </button>
            {svcOpen && (
              <div className="mb-2 flex flex-col border-l-2 border-accent pl-4">
                <Link to="/services" className="py-2 text-sm font-medium text-muted-foreground">All services</Link>
                {services.map((s) => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="py-2 text-sm font-medium text-muted-foreground">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/contact" className="py-3 font-semibold">Contact Us</Link>
            <Link to="/book-consultation" className={`${btn("accent")} mt-3 w-full`}>Book Consultation</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
