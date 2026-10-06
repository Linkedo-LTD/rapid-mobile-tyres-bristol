import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StepList from "@/components/StepList";
import FeatureGrid from "@/components/FeatureGrid";
import Faq from "@/components/Faq";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Car Tyre Fitting Bristol | 24/7 Tyre Service",
  description:
    "Mobile car tyre fitting in Bristol for flat, worn or damaged tyres. Get replacement tyres fitted at your location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-car-tyre-fitting-bristol",
  },
};

const stats = [
  { value: "24/7", label: "Available every day" },
  { value: "45–60 min", label: "Average arrival time" },
  { value: "All sizes", label: "Premium & budget tyres" },
  { value: "5★", label: "Rated by customers" },
];

const carTyreServices = [
  {
    title: "Puncture & Flat Tyre",
    description:
      "From a nail in the tread to a fully flat tyre, we carry a wide range of passenger car tyre sizes and fit on the spot — at home, work, or the roadside.",
  },
  {
    title: "Emergency Roadside Fitting",
    description:
      "Stranded roadside? We aim to reach you within 45–60 minutes, day or night, so you can get back on the road as quickly as possible.",
  },
  {
    title: "Worn Tyre Below Legal Limit",
    description:
      "Driving below 1.6 mm of tread depth is both illegal and dangerous. We carry out on-site tyre checks and replace worn tyres immediately, wherever your car is parked.",
  },
  {
    title: "Run-Flat Tyre Replacement",
    description:
      "Run-flat tyres require specialist fitting equipment and the right replacement. Our technicians carry the tools and stock to handle run-flat replacements on-site.",
  },
  {
    title: "TPMS Warning & Pressure Issues",
    description:
      "A persistent low-pressure warning or TPMS alert can signal a slow puncture or a faulty valve. We diagnose the cause and fix it at your location.",
  },
  {
    title: "Scheduled Home or Workplace Fitting",
    description:
      "Need new tyres fitted at home or in your office car park? Book a slot and we'll come to you — no garage queue, no disruption to your day.",
  },
];

const steps = [
  {
    title: "Call Us with Your Tyre Details",
    description:
      "Give us your location, the tyre size printed on your sidewall, and a brief description of the problem. We confirm availability and let you know an ETA.",
  },
  {
    title: "We Come to Your Car",
    description:
      "A fully equipped mobile unit heads to wherever your car is — your driveway, your workplace car park, or the roadside. No recovery truck needed.",
  },
  {
    title: "Tyre Fitted, Pressures Checked",
    description:
      "We remove the old tyre, fit the replacement, torque the wheel to the correct specification, and check all four tyre pressures before we leave.",
  },
];

const whyChoose = [
  {
    title: "Wide Range of Car Tyre Sizes",
    description:
      "We stock tyres for hatchbacks, saloons, estates, city cars, and more — in both premium brands and quality budget options — so the right tyre is already on the van.",
  },
  {
    title: "Around the Clock",
    description:
      "We're available 24 hours a day, 7 days a week, including bank holidays and weekends. Whether it's a Sunday morning or a weekday night, we'll be there.",
  },
  {
    title: "Premium and Budget Options",
    description:
      "From Michelin and Continental to quality budget alternatives, we'll recommend the right tyre for your car, your driving style, and your budget.",
  },
  {
    title: "Fast, Tidy Service",
    description:
      "Most single car tyre replacements take 20–30 minutes from arrival. We work cleanly, leave no mess, and check everything is safe before we drive away.",
  },
];

const fittingLocations = [
  {
    title: "At Your Home",
    description:
      "Most of our car tyre callouts are on a home driveway. Book a slot that suits you and have the job done before you set off for the day.",
  },
  {
    title: "At Your Workplace",
    description:
      "We visit office car parks, business premises, and retail sites. Your car gets sorted while you work — no time taken out of your day.",
  },
  {
    title: "At the Roadside",
    description:
      "Broken down at the roadside? We respond to roadside callouts with full safety equipment to protect you and your vehicle while we work.",
  },
  {
    title: "On a Motorway or Dual Carriageway",
    description:
      "If you're stranded on a major road, call us straight away. Our technicians are trained and equipped to work safely in high-traffic environments.",
  },
];

const faqs = [
  {
    question: "Can you fit car tyres at my home?",
    answer:
      "Yes — home driveway fitting is one of our most common callouts. We come to your car wherever it is parked, so there is no need to drive to a garage. Just call with your location and tyre size.",
  },
  {
    question: "How quickly can you get to me for car tyre fitting?",
    answer:
      `We aim to reach you within 45–60 minutes anywhere in the South West and surrounding areas. For a real-time estimate, call us on ${siteConfig.phone}.`,
  },
  {
    question: "What car tyre sizes do you carry?",
    answer:
      "We stock a broad range of sizes for standard passenger cars — from small city car tyres through to larger saloon and estate sizes. Give us the size printed on your tyre sidewall (e.g. 205/55 R16) when you call and we will confirm availability.",
  },
  {
    question: "Do you carry run-flat tyres?",
    answer:
      "Yes. We carry a selection of run-flat replacements and use the correct fitting equipment for them. Let us know your vehicle make and tyre size when you call so we can confirm we have the right one on the van.",
  },
  {
    question: "Can you fit tyres to any car?",
    answer:
      "We cover the vast majority of passenger cars — hatchbacks, saloons, estates, coupes, and city cars. If you have an unusual vehicle or tyre specification, call us first and we will confirm whether we can help.",
  },
  {
    question: "How much does mobile car tyre fitting cost?",
    answer:
      "Our pricing is transparent and quoted upfront before any work starts. The cost depends on the tyre size and brand you choose. Call us on " + siteConfig.phone + " for an immediate quote.",
  },
];

const bristolAreas = [
  "City Centre", "Clifton", "Redland", "Bishopston", "Southville",
  "Bedminster", "Knowle", "Brislington", "Fishponds", "Filton",
  "Shirehampton", "Avonmouth",
];

export default function MobileCarTyreFittingBristolPage() {
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
                24/7 Mobile Car Tyre Fitting
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Car Tyre Fitting in Bristol
              </h1>

              <p className="mt-3 text-lg font-medium text-zinc-200">
                Flat tyre? We&apos;ll come to you within 45–60 minutes to fit a new one.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                Rapid Mobile Tyres brings a fully stocked van to wherever your car is parked —
                home, work, or stopped safely at the roadside — and fits the correct passenger
                tyre without you needing to drive anywhere. Our{" "}
                <Link href="/mobile-tyre-fitting" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  mobile tyre fitting service
                </Link>{" "}
                covers all vehicle types, but this page is dedicated to car tyre fitting
                specifically. For van-specific tyre fitting, see our{" "}
                <Link href="/mobile-van-tyre-fitting-bristol" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  mobile van tyre fitting page
                </Link>
                .
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "No towing or garage queues",
                  "Same-day and emergency slots, 24/7",
                  "Fully-equipped mobile workshop on every van",
                  "Fitted at your home, workplace, or roadside",
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
                Monday–Sunday: 24 Hours
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
                <Image
                  src="/mobile-tyre-fitting-roadside-hero.webp"
                  alt="Rapid Mobile Tyres technician fitting a car tyre at the roadside"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  preload
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 shadow-xl sm:block">
                <p className="text-2xl font-bold text-orange-500">45-60 min</p>
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
          eyebrow="What we handle"
          title="Car Tyre Services We Provide"
          intro="From unexpected punctures to planned new tyre purchases — these are the car tyre situations we deal with every day."
          items={carTyreServices}
          tone="light"
          columns={3}
        />

        <StepList steps={steps} />

        {/* Photo showcase */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                The mobile workshop
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                A Fully Equipped Van, Right Outside Your Car
              </h2>
              <p className="mt-4 text-zinc-600">
                Every van carries a tyre changer, balancer, and a wide range of car tyre stock —
                so the job gets done properly, wherever your car is parked.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/mobile-tyre-fitting-image-1.webp"
                  alt="Rapid Mobile Tyres technician fitting a new tyre to a wheel on a mobile tyre-changing machine"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/mobile-tyre-fitting-image-2.webp"
                  alt="Rapid Mobile Tyres technician checking a car's tyre pressure with a gauge"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="Why choose us"
          title="Why Drivers Choose Rapid Mobile Tyres"
          items={whyChoose}
          tone="light"
        />

        {/* Fitting locations — dark checklist */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Where we fit
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                We Come to Your Car — Wherever It Is
              </h2>
              <p className="mt-4 text-zinc-400">
                You don&apos;t need to move your car to a garage. We come to you — at home, at work,
                or at the roadside across the South West and surrounding areas.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {fittingLocations.map((loc) => (
                <li
                  key={loc.title}
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
                    <p className="text-sm font-semibold text-zinc-100">{loc.title}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{loc.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bristol coverage */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Service area
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Car Tyre Fitting Across the South West
              </h2>
              <p className="mt-4 text-zinc-600">
                We cover Bristol and the surrounding region — including Bath,
                Newport, Chepstow, and Weston-Super-Mare. See our full{" "}
                <Link
                  href="/areas-we-cover"
                  className="font-semibold text-orange-600 underline underline-offset-2 hover:text-orange-500"
                >
                  areas we cover
                </Link>{" "}
                page for details.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {bristolAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0 text-orange-500" aria-hidden>
                    <path
                      d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Faq items={faqs} />

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
              Car tyre problem?
            </h2>
            <p className="mt-4 text-zinc-300">
              Call now and our nearest technician will aim to reach you within 45–60 minutes,
              wherever you are in the South West or surrounding areas.
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
            <p className="mt-8 text-sm text-zinc-500">
              Other services:{" "}
              <Link href="/jumpstarts" className="text-zinc-400 underline underline-offset-2 hover:text-zinc-200">
                Jump start
              </Link>{" "}
              ·{" "}
              <Link href="/fuel-delivery" className="text-zinc-400 underline underline-offset-2 hover:text-zinc-200">
                Fuel delivery
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
