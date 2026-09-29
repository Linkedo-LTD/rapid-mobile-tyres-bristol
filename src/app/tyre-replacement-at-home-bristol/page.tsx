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
  title: "Tyre Replacement at Home Bristol | Mobile Tyre Fitting",
  description:
    "Get tyre replacement at home in Bristol for flat or worn tyres. Have suitable tyres fitted at your location.",
};

const stats = [
  { value: "Same day", label: "Available 7 days a week" },
  { value: "45–60 min", label: "Average arrival time" },
  { value: "Home fitting", label: "No garage visit needed" },
  { value: "5★", label: "Rated by customers" },
];

const whenYouNeed = [
  {
    title: "Flat Tyre on the Driveway",
    description:
      "Woken up to a flat, or spotted a slow puncture before your morning commute? We come straight to your home and fit a fresh tyre before you need to leave.",
  },
  {
    title: "Tread Depth Below the Legal Limit",
    description:
      "If your tread is approaching 1.6 mm you don't need to find a garage — we carry out on-site tread checks and replace worn tyres at your home at a time that suits you.",
  },
  {
    title: "Planned Seasonal or Bulk Change",
    description:
      "Replacing all four tyres at once or switching to a different tyre type? Book a morning or afternoon slot and we'll be on your driveway without any disruption to your day.",
  },
  {
    title: "Persistent TPMS Warning",
    description:
      "A low-pressure light that keeps coming back usually signals a slow puncture or a faulty valve. We trace the issue and fit a replacement at your home — no diagnostic trip needed.",
  },
  {
    title: "Wrong or Mismatched Tyres",
    description:
      "Bought a second-hand car with poor-quality or mismatched tyres? We supply and fit the right replacements at your home — without a test drive to a garage.",
  },
  {
    title: "Urgent Same-Day Replacement",
    description:
      "Noticed a problem and need it sorted today? Our same-day home service puts a qualified technician on your driveway within 45–60 minutes of your call.",
  },
];

const steps = [
  {
    title: "Book a Slot or Call for Same-Day",
    description:
      "Give us your home address, the tyre size from your sidewall (e.g. 205/55 R16), and let us know whether you want a fixed appointment or need us out as soon as possible. We confirm availability and an ETA straight away.",
  },
  {
    title: "We Come to Your Driveway",
    description:
      "A fully equipped mobile unit arrives at your property with the right tyres already loaded. Your car stays exactly where it is — you don't need to move it, and we bring everything required to complete the job on-site.",
  },
  {
    title: "Tyre Fitted and Road-Ready",
    description:
      "We remove the old tyre, fit the replacement, torque the wheel nuts to the manufacturer's specification, and check all four tyre pressures before we leave. You can drive away the moment we're done.",
  },
];

const whyChoose = [
  {
    title: "No Garage Visit Required",
    description:
      "Your car stays on your driveway throughout. No arranging a courtesy car, no waiting room, and no lost half-day. The job is done at your property, on your schedule.",
  },
  {
    title: "Scheduled and Same-Day Slots",
    description:
      "Need it done next Tuesday at 9am? Or right now? We offer both planned bookings and same-day callouts so there is always an option that works around you.",
  },
  {
    title: "Car, SUV, and Van Tyres",
    description:
      "We carry a broad range of sizes for passenger cars, SUVs, crossovers, and light commercial vans. One call covers most vehicles — and we confirm stock availability before we set off.",
  },
  {
    title: "Transparent Upfront Pricing",
    description:
      "We quote you the full cost before we start, with no hidden charges added on the day. Premium and budget brands are available, so you can choose what fits your vehicle and your budget.",
  },
];

const fittingOptions = [
  {
    title: "Driveway or Private Parking",
    description:
      "Most of our home visits take place on a driveway or private parking space. As long as there is safe working room around the vehicle, we carry out the complete fitting on-site.",
  },
  {
    title: "Residential Street Parking",
    description:
      "Vehicle parked on the road outside your house? No problem. We set up safely with the appropriate equipment and work within highway code requirements.",
  },
  {
    title: "Shared Car Park or Forecourt",
    description:
      "Have a communal car park or garage forecourt at your property? We are happy to work there as well — the service and quality are exactly the same wherever your vehicle is parked.",
  },
];

const faqs = [
  {
    question: "Do I need to be at home when you arrive to fit the tyre?",
    answer:
      "Ideally yes — we need access to the vehicle and someone available to confirm the work before we start. If you cannot be present, please arrange for another adult to be there and let us know when you book.",
  },
  {
    question: "How quickly can you get to my home?",
    answer:
      `We aim to reach you within 45–60 minutes of your call for same-day bookings, anywhere in the South West and surrounding areas. For a firm ETA, call us on ${siteConfig.phone}.`,
  },
  {
    question: "What tyre sizes do you carry for home visits?",
    answer:
      "We stock a wide range of sizes covering most passenger cars, SUVs, crossovers, and light vans. Give us the size from your tyre sidewall (e.g. 205/55 R16) when you call and we will confirm what we have available.",
  },
  {
    question: "Can you replace tyres on an SUV or van at my home?",
    answer:
      "Yes — our home service covers passenger cars, SUVs, crossovers, and light commercial vans. For larger or specialist vehicles, call us first and we will confirm whether we can assist.",
  },
  {
    question: "Can I book a specific time slot for home tyre fitting?",
    answer:
      "Yes. As well as same-day callouts we offer scheduled appointments at a time that suits you — morning, afternoon, or evening. Call us to arrange a slot and we will confirm it.",
  },
  {
    question: "How do I find my tyre size before I call?",
    answer:
      "Your tyre size is printed on the sidewall of each tyre as a sequence of numbers and letters — for example, 225/45 R17. You can also find it on a sticker inside the driver-side door frame or in your vehicle handbook.",
  },
];

const bristolAreas = [
  "Clifton", "Redland", "Cotham", "Montpelier", "St Andrews", "Bishopston",
  "Horfield", "Lockleaze", "Henbury", "Westbury-on-Trym", "Henleaze", "Sea Mills",
];

export default function TyreReplacementAtHomeBristolPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Full-bleed photo hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div className="absolute inset-0">
            <Image
              src="/home-tyre-replacement-driveway-hero-alternative.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-40"
              preload
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-xl">
              <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Home Tyre Replacement
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Tyre Replacement at Home
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                New tyres fitted on your driveway — scheduled or same day — without a garage visit.
              </p>
              <p className="mt-4 max-w-lg leading-7 text-zinc-400">
                Getting a tyre replaced should not mean taking half a day off work to sit in a
                waiting room. Rapid Mobile Tyres sends a fully equipped technician to your
                home address with the right tyre on the van. Our{" "}
                <Link href="/mobile-tyre-fitting" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  mobile tyre fitting service
                </Link>{" "}
                covers locations across the South West, but this page focuses on the most popular
                use case — tyre replacement at home, on your driveway or in your street parking.
                For vehicle-specific fitting, see our{" "}
                <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  car tyre fitting
                </Link>{" "}
                and{" "}
                <Link href="/suv-tyre-fitting-bristol" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  SUV tyre fitting
                </Link>{" "}
                pages.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Call Us: {siteConfig.phone}
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
          eyebrow="When you need us"
          title="Common Reasons to Book Home Tyre Replacement"
          intro="Whether it is an unexpected flat or a long-overdue tyre change, these are the situations drivers call us for — and we handle all of them at your home."
          items={whenYouNeed}
          tone="light"
          columns={3}
        />

        <StepList steps={steps} />

        {/* Photo showcase */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                See the difference
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Worn Tyres Replaced, Right at Your Door
              </h2>
              <p className="mt-4 text-zinc-600">
                Your new tyres arrive on the van and are fitted on your driveway — no need to
                drop the car off or arrange your own transport in the meantime.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/worn-tyre-vs-new-home-replacement.webp"
                  alt="A worn tyre next to a new replacement tyre on a home driveway"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/new-tyres-delivered-to-home-driveway.webp"
                  alt="Rapid Mobile Tyres technician bringing new tyres from the van to a car on a driveway"
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
          title="Why Drivers Book Home Tyre Fitting"
          items={whyChoose}
          tone="light"
        />

        {/* Fitting options — dark checklist */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Where we work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                We Fit Tyres Wherever Your Vehicle Is Parked
              </h2>
              <p className="mt-4 text-zinc-400">
                You don&apos;t need a garage forecourt or a workshop lift. We work in any reasonable
                space at your home — driveway, street, or shared car park.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {fittingOptions.map((opt) => (
                <li
                  key={opt.title}
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
                    <p className="text-sm font-semibold text-zinc-100">{opt.title}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{opt.description}</p>
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
                Home Tyre Fitting Across the South West
              </h2>
              <p className="mt-4 text-zinc-600">
                We come to homes across the South West and the wider region —
                Bristol, Bath, Newport, Chepstow, and Weston-Super-Mare included. See our full{" "}
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
              src="/mobile-tyre-fitting-technician-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to book home tyre fitting?
            </h2>
            <p className="mt-4 text-zinc-300">
              Call now for a same-day slot or to schedule an appointment at a time that suits you.
              We&apos;ll arrive at your home within 45–60 minutes and have you road-ready in no time.
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
