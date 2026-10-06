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
  title: "Mobile Van Tyre Fitting Bristol | 24/7 Tyre Service",
  description:
    "Mobile van tyre fitting in Bristol for flat or damaged tyres. Get convenient tyre replacement at your location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-van-tyre-fitting-bristol",
  },
};

const stats = [
  { value: "24/7", label: "Commercial callouts" },
  { value: "45–60 min", label: "Average arrival time" },
  { value: "C-rated", label: "Load-rated van tyres" },
  { value: "5★", label: "Rated by customers" },
];

const tyreProblems = [
  {
    title: "Roadside Flat or Blowout",
    description:
      "A sudden flat can bring a working day to a standstill. We carry a range of commercial tyre sizes and aim to reach you within 45–60 minutes.",
  },
  {
    title: "Tyre Worn Below Legal Limit",
    description:
      "Driving on a tyre below the 1.6 mm legal tread depth is an offence and a serious safety risk. We inspect and replace worn tyres on the spot before you head back out.",
  },
  {
    title: "Slow Puncture",
    description:
      "A slow puncture that loses pressure overnight is a blowout waiting to happen. Call us to have the tyre assessed and, where needed, replaced at your location.",
  },
  {
    title: "Sidewall Damage",
    description:
      "Kerb strikes and pothole impacts often damage the sidewall rather than the tread. Sidewall damage cannot be safely repaired — we carry replacements and fit them where you are.",
  },
  {
    title: "TPMS Warning Light",
    description:
      "A tyre pressure monitoring alert on your van should not be ignored. We identify the cause — whether it's a puncture, valve fault, or pressure loss — and resolve it on-site.",
  },
  {
    title: "Planned Tyre Replacement",
    description:
      "Scheduled tyre changes keep your vehicle legal, fuel-efficient, and safe for the road. Book a time that suits your working day and we'll come to your depot, yard, or home.",
  },
];

const steps = [
  {
    title: "Call Us with Your Van Details",
    description:
      "Tell us your van make, model, and tyre size along with your location. We confirm tyre availability and dispatch the nearest technician straight away.",
  },
  {
    title: "We Come to You",
    description:
      "A fully equipped mobile unit heads to your van — whether it's parked on a job site, at your depot, or at the roadside. No recovery truck needed.",
  },
  {
    title: "Van Tyre Fitted to Specification",
    description:
      "We remove the damaged tyre, fit the correct load-rated replacement, torque the wheel to the manufacturer's specification, and check pressures before we leave.",
  },
];

const whyChoose = [
  {
    title: "Stocked for Commercial Vehicles",
    description:
      "We carry C-rated commercial tyres in the most common LCV sizes, so there is no wait while parts are sourced — we fit on arrival.",
  },
  {
    title: "Available Round the Clock",
    description:
      "Van breakdowns do not keep business hours. We respond to emergency commercial tyre callouts any time of day or night, including weekends.",
  },
  {
    title: "Correct Load-Rated Fitment",
    description:
      "Light commercial vehicles require tyres rated for the loads they carry. We fit the right specification for your van — not just any tyre that fits the rim.",
  },
  {
    title: "Minimal Disruption to Your Work",
    description:
      "We come to wherever the van is parked — yard, depot, job site, or roadside. No towing, no garage waiting room, no unnecessary downtime.",
  },
];

const vanTypes = [
  {
    title: "Small Vans",
    description:
      "Ford Transit Connect, Citroën Berlingo, Vauxhall Combo, Renault Kangoo, and equivalents.",
  },
  {
    title: "Medium Panel Vans",
    description:
      "Ford Transit, Mercedes Sprinter, Volkswagen Crafter, Renault Trafic, Vauxhall Vivaro, and similar.",
  },
  {
    title: "Large Vans & Lutons",
    description:
      "High-roof and long-wheelbase panel vans, luton-body vans, and larger light commercial vehicles.",
  },
  {
    title: "Pickup Trucks",
    description:
      "Ford Ranger, Toyota Hilux, Mitsubishi L200, Volkswagen Amarok, and similar light commercial trucks.",
  },
];

const faqs = [
  {
    question: "Do you carry van tyre sizes on your mobile unit?",
    answer:
      "Yes — we stock C-rated commercial tyres in the most common sizes for small and medium panel vans, including 195/75 R16 C, 205/75 R16 C, and 215/75 R16 C. Give us your tyre size when you call and we will confirm availability before setting off.",
  },
  {
    question: "How quickly can you reach my van?",
    answer:
      `We aim to reach you within 45–60 minutes anywhere in the South West and surrounding areas. For a real-time estimate, call us directly on ${siteConfig.phone}.`,
  },
  {
    question: "Can you fit van tyres out of hours or at weekends?",
    answer:
      "Yes — we operate 24 hours a day, 7 days a week, including bank holidays. A van breakdown on a Sunday evening or a bank holiday Monday is handled the same as any other callout.",
  },
  {
    question: "Do you fit load-rated (C-rated) van tyres?",
    answer:
      "Yes. Light commercial vehicles require tyres rated for the load they carry. We fit the correct load index and speed rating for your van, keeping it legal and safe.",
  },
  {
    question: "Can you come to a depot or yard to fit tyres to more than one van?",
    answer:
      "Yes. If you need tyres fitting to multiple vehicles at the same location, call us and we will arrange a site visit at a time that suits your operation.",
  },
  {
    question: "What van tyre sizes do you stock?",
    answer:
      "We carry a range of sizes covering the most common light commercial vehicles. Common sizes include 195/75 R16 C, 205/75 R16 C, 215/75 R16 C, and others. Tell us your van's tyre size when you call and we will confirm what we have available.",
  },
];

const bristolAreas = [
  "City Centre", "Clifton", "Redland", "Bishopston", "Southville",
  "Bedminster", "Knowle", "Brislington", "Fishponds", "Filton",
  "Shirehampton", "Avonmouth",
];

export default function MobileVanTyreFittingBristolPage() {
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
                24/7 Mobile Van Tyre Fitting
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Van Tyre Fitting in Bristol
              </h1>

              <p className="mt-3 text-lg font-medium text-zinc-200">
                Keep your van on the road. We fit commercial tyres wherever you&apos;re parked —
                depot, job site, or roadside.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                A van out of action costs you time, jobs, and money. Whether you run a single vehicle
                or a small fleet, Rapid Mobile Tyres comes straight to your van with the right
                commercial tyre fitted on the spot — no recovery truck, no garage detour. Alongside
                our general{" "}
                <Link href="/mobile-tyre-fitting" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  mobile tyre fitting service
                </Link>
                , we handle emergency and scheduled van tyre callouts around the clock.
                If your situation is more urgent, see also our{" "}
                <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  24/7 emergency tyre fitting page
                </Link>
                .
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "No towing or garage waiting rooms",
                  "Same-day and emergency callouts, 24/7",
                  "Fully-equipped mobile workshop on every van",
                  "Fitted at your depot, yard, job site, or the roadside",
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
                  src="/mobile-van-tyre-fitting-punctured-van-hero.webp"
                  alt="A Rapid Mobile Tyres service van attending a van with a flat tyre"
                  width={1672}
                  height={941}
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
          eyebrow="Van tyre problems we solve"
          title="Common Van Tyre Issues We Handle"
          intro="From unexpected blowouts to planned maintenance visits — these are the situations we deal with for van operators every day."
          items={tyreProblems}
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
                A Fully Equipped Van, Right Outside Yours
              </h2>
              <p className="mt-4 text-zinc-600">
                Every van carries the jack, torque tools, and load-rated tyre stock needed to get
                your commercial vehicle back to work, wherever it&apos;s parked.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/mobile-van-tyre-wheel-replacement-technician.webp"
                  alt="Rapid Mobile Tyres technician fitting a replacement wheel to a jacked-up van"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/mobile-van-tyre-pressure-valve-check.webp"
                  alt="Rapid Mobile Tyres technician checking a van tyre's pressure with a gauge"
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
          title="Why Van Operators Choose Rapid Mobile Tyres"
          items={whyChoose}
          tone="light"
        />

        {/* Van types — dark checklist */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Vehicle coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Van and Commercial Vehicles We Cover
              </h2>
              <p className="mt-4 text-zinc-400">
                We stock and fit tyres for most light commercial vehicles —
                from small delivery vans to large panel vans and pickup trucks.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {vanTypes.map((v) => (
                <li
                  key={v.title}
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
                    <p className="text-sm font-semibold text-zinc-100">{v.title}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{v.description}</p>
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
                Van Tyre Fitting Across the South West
              </h2>
              <p className="mt-4 text-zinc-600">
                We cover Bristol and the surrounding region, including Bath, Newport,
                Chepstow, and Weston-Super-Mare. For a full list of areas, visit our{" "}
                <Link
                  href="/areas-we-cover"
                  className="font-semibold text-orange-600 underline underline-offset-2 hover:text-orange-500"
                >
                  areas we cover
                </Link>{" "}
                page.
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
              Van tyre problem?
            </h2>
            <p className="mt-4 text-zinc-300">
              Call now and our nearest technician will aim to reach you within 45–60 minutes —
              wherever your van is parked in the South West or surrounding areas.
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
              Other roadside services:{" "}
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
