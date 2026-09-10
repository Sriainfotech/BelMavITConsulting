import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BelMav Info Tech | Coming Soon" },
      {
        name: "description",
        content:
          "BelMav Info Tech — IT Consulting and Services. Our new digital experience is coming soon.",
      },
      { property: "og:title", content: "BelMav Info Tech | Coming Soon" },
      {
        property: "og:description",
        content:
          "BelMav Info Tech — IT Consulting and Services. Our new digital experience is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComingSoon,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="BelMav Info Tech — IT Consulting and Services. Empowering businesses. Delivering excellence."
      className={className}
      width={520}
      height={200}
    />
  );
}

function ComingSoon() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Decorative logo-inspired arcs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <svg
          className="absolute -right-[18rem] -top-[16rem] h-[46rem] w-[46rem] opacity-90 sm:-right-[12rem]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="190"
            stroke="var(--brand-black)"
            strokeOpacity="0.08"
            strokeWidth="2"
          />
          <path
            d="M40 200a160 160 0 0 1 160-160"
            stroke="var(--brand-gold)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M200 360a160 160 0 0 0 160-160"
            stroke="var(--brand-red)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M70 290a150 150 0 0 1-30-90"
            stroke="var(--brand-black)"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute -bottom-[22rem] -left-[16rem] h-[40rem] w-[40rem]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="var(--brand-black)"
            strokeOpacity="0.06"
            strokeWidth="2"
          />
          <path
            d="M60 200a140 140 0 0 1 140-140"
            stroke="var(--brand-gold)"
            strokeOpacity="0.5"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute right-[12%] top-[38%] hidden h-4 w-4 bg-brand-red lg:block" />
        <span className="absolute right-[16%] top-[44%] hidden h-2.5 w-2.5 bg-brand-red/70 lg:block" />
        <span className="absolute left-[6%] top-[24%] hidden h-2 w-2 bg-brand-red/60 lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="animate-rise flex items-center justify-between gap-4 py-6">
          <Logo className="h-24 w-auto sm:h-36" />
          <a
            href="#contact"
            className="rounded-sm border border-brand-black px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-brand-black hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:px-5 sm:text-sm"
          >
            Contact us
          </a>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col justify-center py-14 sm:py-20">
          <p
            className="animate-rise inline-block w-fit bg-brand-red px-3 py-1 text-lg font-semibold tracking-[0.35em] text-background uppercase sm:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            Coming soon
          </p>

          <h1
            className="animate-rise mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.2s" }}
          >
            Your Digital Future
            <br className="hidden sm:block" /> Starts Here
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            BelMav Info Tech is preparing something new. We&rsquo;re building a
            smarter digital experience to help businesses move forward with
            confidence.
          </p>

          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-6"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-red px-7 py-4 text-sm font-semibold tracking-[0.12em] text-background uppercase transition-colors duration-300 hover:bg-brand-gold hover:text-brand-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black"
            >
              Get in touch <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div
            className="animate-rise mt-16 flex items-center gap-4"
            style={{ animationDelay: "0.55s" }}
          >
            <span className="h-8 w-1 bg-brand-gold" />
            <span className="h-8 w-1 bg-brand-red" />
            <p className="text-xs font-semibold tracking-[0.22em] uppercase sm:text-sm">
              Empowering businesses. Delivering excellence.
            </p>
          </div>
        </main>

        {/* Contact */}
        <section
          id="contact"
          className="animate-rise border-t border-brand-black/15 py-12"
          style={{ animationDelay: "0.65s" }}
        >
          <h2 className="text-xs font-semibold tracking-[0.3em] text-brand-red uppercase">
            Get in touch
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase">
                BelMav Info Tech
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                IT Consulting and Services
              </p>
            </div>
            <div className="text-sm">
              <a
                className="border-b border-brand-red/40 pb-0.5 transition-colors hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                href="mailto:contact@belit.be"
              >
                contact@belit.be
              </a>
              <br />
              <a
                className="mt-3 inline-block border-b border-brand-gold pb-0.5 transition-colors hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                href="tel:+32473289730"
              >
                +32 473289730
              </a>
            </div>
            <address className="text-sm not-italic text-foreground/70">
              Streoykensstraat 12,
              <br />
              3071 Kortenberg, Belgium
            </address>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-brand-black/15 py-6 text-xs text-foreground/60">
          <p>&copy; 2026 BelMav Info Tech. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">IT Consulting and Services</p>
        </footer>
      </div>
    </div>
  );
}
