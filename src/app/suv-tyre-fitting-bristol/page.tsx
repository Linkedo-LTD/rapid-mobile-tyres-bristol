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
  title: "Mobile SUV Tyre Fitting Bristol | 24/7 Tyre Service",
  description:
    "Mobile SUV tyre fitting in Bristol for flat, worn or damaged tyres. Get replacement tyres fitted at your location.",
  alternates: {
    canonical: "https://rapid-tyres.com/suv-tyre-fitting-bristol",
  },
};

const stats = [
  { value: "24/7", label: "Available every day" },
  { value: "45–60 min", label: "Average arrival time" },
  { value: "SUV & 4x4", label: "All makes and models" },
  { value: "5★", label: "Rated by customers" },
];

const suvTyreServices = [
  {
    title: "Pothole Damage & Blowouts",
    description:
      "SUVs and 4x4s run on larger, heavier tyres that take the brunt of pothole-damaged roads. Whether it's a blowout or sidewall damage, we carry the right sizes and fit on the spot.",
  },
  {
    title: "Worn Tyre Replacement",
    description:
      "Larger tyres wear differently across the tread width, particularly on SUVs with four-wheel drive. We check depth across all four positions and replace any tyre below the 1.6 mm legal limit.",
  },
  {
    title: "Emergency Roadside Fitting",
    description:
      "A flat SUV tyre is a bigger inconvenience than most. We aim to reach you within 45–60 minutes, day or night, with the right tyre loaded and ready to fit.",
  },
  {
    title: "Run-Flat & XL-Rated Tyre Fitting",
    description:
      "Many modern SUVs and crossovers are fitted with run-flat or XL-rated tyres that need specialist fitting equipment. Our technicians carry the tools and stock to handle these on-site.",
  },
  {
    title: "All-Terrain & Road Tyre Swap",
    description:
      "Changing between all-terrain and road-biased tyres for seasonal driving or a lifestyle change? We carry both tyre types and can make the swap at your home, workplace, or the roadside.",
  },
  {
    title: "TPMS Warning & Pressure Issues",
    description:
      "A persistent TPMS light on your SUV or 4x4 often signals a slow puncture or a faulty valve stem. We locate the cause and sort it at your location — no garage needed.",
  },
];

const steps = [
  {
    title: "Call with Your Vehicle and Tyre Details",
    description:
      "Give us your SUV make, model, and the tyre size from the sidewall (e.g. 235/55 R19). Larger SUV tyres need specific stock, so this lets us confirm we have the right tyre before we set off.",
  },
  {
    title: "We Arrive Fully Equipped",
    description:
      "Our mobile unit carries larger jack stands, the correct torque settings, and a range of SUV-spec tyres. No extra trip to source a tyre — we come prepared for your vehicle type.",
  },
  {
    title: "Tyre Fitted and Safety Checked",
    description:
      "We fit the replacement, torque the wheel nuts to the manufacturer's specification for your specific vehicle, and check all four tyre pressures before we leave.",
  },
];

const whyChoose = [
  {
    title: "Stocked for Larger Tyre Sizes",
    description:
      "We carry a broad range of SUV and 4x4 tyre sizes — from compact crossover profiles through to full-size off-roader diameters — so we're prepared before we leave the depot.",
  },
  {
    title: "Available Day and Night",
    description:
      "SUV tyre callouts don't respect business hours. We operate 24 hours a day, 7 days a week — including weekends and bank holidays — so help is always available.",
  },
  {
    title: "Equipment for Heavier Vehicles",
    description:
      "SUVs and 4x4s are significantly heavier than passenger cars. We use the right stands, jacking points, and torque settings for your vehicle's weight class — every time.",
  },
  {
    title: "Premium and Value Tyre Brands",
    description:
      "From Michelin, Continental, and Pirelli through to quality budget alternatives — we match the right tyre to your vehicle, your driving needs, and your budget.",
  },
];

const fittingLocations = [
  {
    title: "At Your Home",
    description:
      "Home fitting is the most popular option for SUV owners. We pull up alongside your vehicle and have the new tyre fitted before you leave for work — with no need to visit a garage.",
  },
  {
    title: "At Your Workplace",
    description:
      "Office car park or business premises? We service SUVs and 4x4s on-site while you work, without disrupting your day.",
  },
  {
    title: "At the Roadside",
    description:
      "Broken down at the roadside? We respond with the right equipment for your vehicle's weight and size, and work safely to get you back on the road.",
  },
  {
    title: "On a Motorway or Dual Carriageway",
    description:
      "Pull off as safely as you can and call us. Our technicians are trained and equipped to work in high-traffic environments — including the M4, M5, and major A-roads.",
  },
];

const faqs = [
  {
    question: "Can you fit tyres on my SUV at my home?",
    answer:
      "Yes — home driveway fitting is one of our most common SUV callouts. As long as there is safe access to the vehicle, we come to you and carry out the full fitting on-site. No need to drive anywhere.",
  },
  {
    question: "What SUV tyre sizes do you carry?",
    answer:
      "We stock a wide range of sizes covering most crossovers, SUVs, and 4x4s — from compact profiles like 215/65 R16 up to larger diameters used on full-size off-roaders. Give us your tyre size (found on the sidewall) when you call and we will confirm availability.",
  },
  {
    question: "How quickly can you reach me for SUV tyre fitting?",
    answer:
      `We aim to reach you within 45–60 minutes anywhere in the South West and surrounding areas. For a real-time estimate, call us on ${siteConfig.phone}.`,
  },
  {
    question: "Do you carry run-flat or XL-rated tyres for SUVs?",
    answer:
      "Yes. We carry a selection of run-flat and XL-rated tyres suitable for SUVs and crossovers, and we use the correct fitting equipment for them. Let us know your vehicle make and tyre specification when you call so we can confirm stock.",
  },
  {
    question: "Can you fit tyres on a large 4x4 or off-roader?",
    answer:
      "Yes. We work on all sizes of 4x4 and off-road vehicles, including Land Rover Defender and Discovery, Toyota Land Cruiser, Ford Ranger, and similar. If you have an unusual tyre specification, call us first and we will confirm whether we can assist.",
  },
  {
    question: "How much does mobile SUV tyre fitting cost?",
    answer:
      "Our pricing is transparent and quoted upfront before any work begins. SUV tyre costs depend on the size and brand you choose. Call us on " + siteConfig.phone + " for an immediate, no-obligation quote.",
  },
];

const bristolAreas = [
  "City Centre", "Clifton", "Henleaze", "Westbury-on-Trym", "Southville",
  "Bedminster", "Horfield", "Brislington", "Fishponds", "Filton",
  "Shirehampton", "Avonmouth",
];

export default function SuvTyreFittingBristolPage() {
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
                24/7 Mobile SUV Tyre Fitting
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile SUV Tyre Fitting in Bristol
              </h1>

              <p className="mt-3 text-lg font-medium text-zinc-200">
                New SUV or 4x4 tyre fitted at your vehicle — home, work, or roadside — within 45–60 minutes.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                SUVs and 4x4s need the right tyre size, the correct torque settings, and a van that
                actually carries stock for larger profiles. Rapid Mobile Tyres arrives
                prepared — with the tyre for your vehicle already loaded. Our{" "}
                <Link href="/mobile-tyre-fitting" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  mobile tyre fitting service
                </Link>{" "}
                covers all vehicle types, but this page focuses specifically on SUV and 4x4 tyre fitting.
                For car-specific fitting, see our{" "}
                <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  mobile car tyre fitting page
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
                  src="/suv-tyre-fitting-service-hero.webp"
                  alt="Rapid Mobile Tyres technician fitting a tyre to a jacked-up SUV on a driveway"
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
          title="SUV Tyre Services We Provide"
          intro="From pothole blowouts to planned seasonal swaps — these are the SUV and 4x4 tyre situations we deal with every day."
          items={suvTyreServices}
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
                Equipped for Larger Tyres, Right On Your Driveway
              </h2>
              <p className="mt-4 text-zinc-600">
                Every van carries the jack stands, torque tools, and SUV-spec tyre stock needed
                to handle heavier vehicles properly, wherever your SUV is parked.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/suv-tyre-fitting-technician-service.webp"
                  alt="Rapid Mobile Tyres technician using an impact wrench to fit a wheel on a jacked-up SUV"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/suv-wheel-replacement-service.webp"
                  alt="Rapid Mobile Tyres technician bringing a replacement wheel to an SUV on a driveway"
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
          title="Why SUV and 4x4 Owners Choose Rapid Mobile Tyres"
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
                We Come to Your SUV — Wherever It Is
              </h2>
              <p className="mt-4 text-zinc-400">
                There&apos;s no need to arrange a recovery or drive on a damaged tyre. We come to you —
                at home, at work, or at the roadside across the South West and surrounding areas.
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
                SUV Tyre Fitting Across the South West
              </h2>
              <p className="mt-4 text-zinc-600">
                We cover Bristol and the wider region — including Bath, Newport,
                Chepstow, and Weston-Super-Mare. See our full{" "}
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
              src="/rapid-mobile-tyres-fleet-service-vans-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              SUV tyre problem?
            </h2>
            <p className="mt-4 text-zinc-300">
              Call now and our nearest technician will aim to reach you within 45–60 minutes,
              wherever you and your vehicle are in the South West or surrounding areas.
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
