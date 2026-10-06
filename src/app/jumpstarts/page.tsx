import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StepList from "@/components/StepList";
import FeatureGrid from "@/components/FeatureGrid";
import Faq from "@/components/Faq";
import { siteConfig, jumpStartPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Car Jump Start Bristol | 24/7 Mobile Battery Assistance",
  description:
    "Need a car jump start in Bristol? Get 24/7 mobile battery assistance at home, work or a roadside location.",
  alternates: {
    canonical: "https://rapid-tyres.com/jumpstarts",
  },
};

const stats = [
  { value: "24/7", label: "Available, every day" },
  { value: "30-60 min", label: "Average arrival time" },
  { value: "Expert", label: "Trained technicians" },
  { value: "5★", label: "Rated by customers" },
];

export default function JumpstartsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Split hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                24/7 Jump Start Service
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Dead Battery? We&apos;re There in 30-60 Minutes.
              </h1>

              <p className="mt-3 text-lg font-medium text-zinc-200">{jumpStartPage.tagline}</p>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">{jumpStartPage.intro}</p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "No towing or garage visit needed",
                  "Available 24/7, every day of the year",
                  "Experienced technicians with proper equipment",
                  "Attended at home, work, or the roadside",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                      aria-hidden
                    >
                      <path
                        d="M4 10.5l3.5 3.5L16 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Emergency Call: {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                >
                  Book Online
                </Link>
              </div>

              <p className="mt-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-400">
                {jumpStartPage.openingHours}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
                <Image
                  src="/roadside-car-jump-start-arrival-hero.webp"
                  alt="Rapid Mobile Tyres technician arriving to jump start a car on a residential street"
                  width={1672}
                  height={941}
                  className="h-auto w-full"
                  preload
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 shadow-xl sm:block">
                <p className="text-2xl font-bold text-orange-500">30-60 min</p>
                <p className="text-xs text-zinc-400">Average arrival time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-zinc-200 bg-white py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:px-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-zinc-950 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-zinc-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <FeatureGrid
          eyebrow="Know the causes"
          title="Common Reasons for a Dead Battery"
          intro="Understanding why batteries fail helps you avoid being stranded — and know when to call us."
          items={jumpStartPage.commonReasons}
          tone="light"
          columns={3}
        />

        <StepList steps={jumpStartPage.steps} />

        {/* Photo showcase */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                What to expect
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Every Van Carries What It Takes to Get You Started
              </h2>
              <p className="mt-4 text-zinc-600">
                From checking the battery to bringing the right equipment, our technicians come
                prepared to get your engine running safely.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/car-battery-inspection-before-jump-start.webp"
                  alt="Rapid Mobile Tyres technician inspecting a car battery before a jump start"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/portable-car-jump-starter-equipment.webp"
                  alt="Portable jump starter and cables carried in the Rapid Mobile Tyres van"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/car-running-after-mobile-jump-start.webp"
                  alt="Rapid Mobile Tyres technician approaching a car in a car park with jump start equipment"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="Why choose us"
          title="Why Choose Rapid Mobile Tyres for a Jump Start?"
          items={jumpStartPage.whyChoose}
          tone="light"
        />

        {/* Prevention tips — compact dark checklist */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Prevention
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tips to Avoid a Dead Battery
              </h2>
              <p className="mt-4 text-zinc-400">
                Simple habits that keep your battery healthy and your car reliably starting.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {jumpStartPage.tips.map((tip) => (
                <li
                  key={tip.title}
                  className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-orange-500/40"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    aria-hidden
                  >
                    <path
                      d="M4 10.5l3.5 3.5L16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">{tip.title}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{tip.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Faq items={jumpStartPage.faqs} />

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-50 sm:py-28">
          <div className="absolute inset-0">
            <Image
              src="/rapid-mobile-tyres-service-van-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stranded with a dead battery?
            </h2>
            <p className="mt-4 text-zinc-300">
              Call now — our nearest technician will be with you in 30-60 minutes, anywhere in the South West
              and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
