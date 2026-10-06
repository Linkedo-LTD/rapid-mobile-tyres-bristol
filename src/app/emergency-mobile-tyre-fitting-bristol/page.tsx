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
  title: "Emergency Tyre Fitting Bristol | 24/7 Mobile Service",
  description:
    "Emergency mobile tyre fitting in Bristol for flat or damaged tyres. Get 24/7 tyre assistance at your location.",
  alternates: {
    canonical: "https://rapid-tyres.com/emergency-mobile-tyre-fitting-bristol",
  },
};

const stats = [
  { value: "24/7", label: "Emergency callouts" },
  { value: "45–60 min", label: "Average arrival time" },
  { value: "All vehicles", label: "Cars, SUVs & vans" },
  { value: "5★", label: "Rated by customers" },
];

const emergencySituations = [
  {
    title: "Roadside Flat Tyre",
    description:
      "Stuck on the hard shoulder or a side street with a completely flat tyre? We carry stock across a wide range of sizes and fit on the spot, so you're back on the road fast.",
  },
  {
    title: "Motorway Blowout",
    description:
      "A blowout at speed is dangerous. Pull over safely, switch your hazards on, and call us — our technicians are equipped to work on motorway verges and dual carriageways.",
  },
  {
    title: "Pothole Damage",
    description:
      "A sharp pothole impact can burst a tyre instantly or cause hidden sidewall damage. We assess and replace on-site if the tyre is beyond repair.",
  },
  {
    title: "Slow Puncture at Home",
    description:
      "Noticed your tyre losing pressure overnight? Don't risk driving on an underinflated tyre. We'll come to your home or workplace and fit a replacement without disrupting your day.",
  },
  {
    title: "Late-Night Tyre Failure",
    description:
      "Tyre emergencies don't keep office hours. Whether it's midnight or 4 am, our 24/7 team will respond to your call and get you moving again safely.",
  },
  {
    title: "TPMS Warning Light",
    description:
      "A tyre pressure monitoring system alert can signal a puncture before you notice it. Call us to have the tyre inspected and replaced if necessary — before a slow leak becomes a blowout.",
  },
];

const steps = [
  {
    title: "Call Us",
    description:
      "Ring us any time of day or night. Tell us your location and a brief description of the problem — we'll confirm your tyre size and dispatch the nearest available technician.",
  },
  {
    title: "We Come to You",
    description:
      "Our fully stocked mobile unit heads straight to your location. We carry a wide range of tyre sizes so there's no waiting around while parts are sourced.",
  },
  {
    title: "Tyre Fitted on the Spot",
    description:
      "Our technician fits your new tyre at the roadside, your driveway, or wherever you're parked. We torque the wheel to the manufacturer's specification before we leave.",
  },
];

const whyChoose = [
  {
    title: "Around-the-Clock Cover",
    description:
      "We operate 24 hours a day, 7 days a week — including bank holidays. Emergency tyre failures don't wait, and neither do we.",
  },
  {
    title: "Tyres in Stock",
    description:
      "Our vans carry a broad range of tyre sizes for cars, SUVs, and light commercial vehicles, including premium brands and quality budget options.",
  },
  {
    title: "Qualified Technicians",
    description:
      "Every job is handled by an experienced tyre technician using professional-grade equipment — no shortcuts, no guesswork.",
  },
  {
    title: "No Hidden Charges",
    description:
      "We quote upfront before any work begins. The price you're given is the price you pay — no call-out surprises.",
  },
];

const vehicleTypes = [
  {
    title: "Cars & Hatchbacks",
    description: "Standard passenger car tyres across all common sizes, fitted wherever you are.",
  },
  {
    title: "SUVs & 4×4s",
    description: "High-load SUV and 4×4 tyres including run-flat replacements and larger rim sizes.",
  },
  {
    title: "Vans & Light Commercial",
    description: "Heavy-duty van tyres built for load-carrying — ideal for tradespeople and couriers.",
  },
  {
    title: "Specialist & Run-Flat",
    description: "Run-flat replacements and specialist tyre types fitted to manufacturer specification.",
  },
];

const faqs = [
  {
    question: "How quickly can you reach me for an emergency tyre fitting?",
    answer:
      `We aim to reach you within 45–60 minutes anywhere in the South West and surrounding areas. Exact timing depends on traffic and your location. Call us on ${siteConfig.phone} for a real-time ETA.`,
  },
  {
    question: "Is your emergency tyre fitting service genuinely available 24 hours a day?",
    answer:
      "Yes — we operate around the clock, every day of the year including bank holidays and weekends. There is no additional surcharge just for calling out of hours; we quote the full price upfront before any work starts.",
  },
  {
    question: "Can you come to a motorway or dual carriageway?",
    answer:
      "Yes. Our technicians are trained and equipped to work safely at the roadside, including on motorway hard shoulders. Switch your hazard lights on, move as far from the carriageway as possible, and call us immediately.",
  },
  {
    question: "How do I know which tyre size I need?",
    answer:
      "Your tyre size is printed on the sidewall of your current tyre in a format such as 205/55 R16. You can also check your vehicle handbook or the sticker inside the driver-side door. Just read us the numbers when you call and we'll confirm we have the right tyre on the van.",
  },
  {
    question: "Do you carry tyres in stock or do I have to wait for parts?",
    answer:
      "Our vans carry a wide range of tyre sizes for the most common cars, SUVs, and light commercial vehicles. In the vast majority of emergency callouts we can fit on the spot without needing to source parts separately.",
  },
  {
    question: "What does emergency mobile tyre fitting cost?",
    answer:
      "Our pricing is transparent and quoted upfront before work begins. The final cost depends on your tyre size and vehicle type. Call us on " + siteConfig.phone + " for an immediate quote — there are no hidden charges.",
  },
];

const bristolAreas = [
  "City Centre", "Clifton", "Redland", "Bishopston", "Southville",
  "Bedminster", "Knowle", "Brislington", "Fishponds", "Filton",
  "Shirehampton", "Avonmouth",
];

export default function EmergencyMobileTyreFittingBristolPage() {
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
                24/7 Emergency Tyre Fitting
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Emergency Mobile Tyre Fitting in Bristol
              </h1>

              <p className="mt-3 text-lg font-medium text-zinc-200">
                Flat tyre on the road? We arrive in 45–60 minutes, day or night.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                A tyre emergency can strike at any time — a blowout on the motorway, a pothole burst
                at midnight, or a slow puncture discovered first thing in the morning.{" "}
                <Link href="/mobile-tyre-fitting" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  Our mobile tyre fitting service
                </Link>{" "}
                covers both planned and emergency callouts, but this page focuses on exactly that:
                urgent, fast-response tyre replacement — any time, any location.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "No towing or garage queues",
                  "Available 24/7, including bank holidays",
                  "Fully-equipped mobile workshop on every van",
                  "Fitted at the roadside, home, or workplace",
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
                  src="/emergency-mobile-tyre-fitting-evening-hero.webp"
                  alt="Rapid Mobile Tyres technician attending an evening emergency callout in a car park"
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
          eyebrow="When to call us"
          title="Emergency Tyre Situations We Handle"
          intro="From a roadside blowout to a slow puncture noticed at home — these are the emergency scenarios we deal with every day."
          items={emergencySituations}
          tone="light"
          columns={3}
        />

        <StepList steps={steps} />

        {/* Photo showcase */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Real emergency callouts
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Whatever the Emergency, We Attend
              </h2>
              <p className="mt-4 text-zinc-600">
                From a split sidewall to a flat outside your front door, our technicians carry the
                stock and equipment to sort it wherever your vehicle is.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/damaged-tyre-sidewall-emergency-inspection.webp"
                  alt="Rapid Mobile Tyres technician inspecting a damaged tyre sidewall"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/emergency-flat-car-tyre-roadside.webp"
                  alt="A car with a flat tyre parked at the roadside"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/emergency-suv-wheel-replacement-on-site.webp"
                  alt="Rapid Mobile Tyres technician replacing a wheel on a jacked-up SUV on site"
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
          title="Why Choose Rapid Mobile Tyres for an Emergency?"
          items={whyChoose}
          tone="light"
        />

        {/* Vehicle types — dark checklist */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Vehicle coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                All Vehicle Types, All Tyre Sizes
              </h2>
              <p className="mt-4 text-zinc-400">
                We carry stock for the most common vehicle categories so the right tyre is on the van
                before we even set off.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {vehicleTypes.map((v) => (
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
                Local coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Emergency Cover Across the South West
              </h2>
              <p className="mt-4 text-zinc-600">
                We respond to emergency tyre callouts throughout Bristol and the surrounding areas —
                including Bath, Newport, Weston-Super-Mare, and Chepstow. See our full{" "}
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
              Tyre emergency? We&apos;re on our way.
            </h2>
            <p className="mt-4 text-zinc-300">
              Call now — our nearest technician will aim to reach you within 45–60 minutes, anywhere
              across the South West and surrounding areas.
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
              Need a jump start or emergency fuel?{" "}
              <Link href="/jumpstarts" className="text-zinc-400 underline underline-offset-2 hover:text-zinc-200">
                Jump start service
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
