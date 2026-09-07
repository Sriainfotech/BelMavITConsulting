import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coming Soon — We're Launching Shortly" },
      {
        name: "description",
        content:
          "Our new site is almost ready. Join the list to be notified the moment we launch.",
      },
      { property: "og:title", content: "Coming Soon — We're Launching Shortly" },
      {
        property: "og:description",
        content:
          "Our new site is almost ready. Join the list to be notified the moment we launch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-secondary/70 blur-3xl"
      />

      <section className="relative w-full max-w-xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          In progress
        </span>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Coming soon
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          We're putting the finishing touches on something new. Leave your email
          and we'll let you know the moment it's live.
        </p>

        <form
          className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setSent(true);
          }}
        >
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-12 flex-1 rounded-lg border border-input bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40"
          />
          <button
            type="submit"
            className="h-12 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Notify me
          </button>
        </form>

        <p
          className="mt-4 text-sm text-muted-foreground"
          aria-live="polite"
        >
          {sent ? "Thanks — you're on the list." : "No spam. Just one email at launch."}
        </p>

        <div className="mt-14 flex items-center justify-center gap-3 text-xs tracking-wide text-muted-foreground uppercase">
          <span className="h-px w-10 bg-border" />
          Launching soon
          <span className="h-px w-10 bg-border" />
        </div>
      </section>
    </main>
  );
}
