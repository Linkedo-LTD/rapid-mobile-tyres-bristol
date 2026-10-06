import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TyreBrands from "@/components/TyreBrands";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Chepstow | 24/7 Tyre Assistance",
  description:
    "Mobile tyre fitting in Chepstow for flat or damaged tyres. Get convenient tyre replacement at your location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-chepstow",
  },
};

const stats = [
  { value: "24/7", label: "Available, every day" },
  { value: "45–60 min", label: "Usual arrival time" },
  { value: "Cars, Vans & SUVs", label: "All vehicle types" },
  { value: "5★", label: "Rated by customers" },
];

const vehicleServices = [
  {
    title: "Mobile Car Tyre Fitting",
    href: "/mobile-car-tyre-fitting-bristol",
    description:
      "We provide mobile car tyre fitting in Chepstow for a wide range of tyre sizes. Whether you're replacing a worn tyre or dealing with unexpected damage, we can arrange fitting at your chosen location.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "Tyre problems can be particularly disruptive when your van is essential for work. Our mobile van tyre fitting service helps get vans back on the road without an unnecessary trip to a tyre centre.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "We can assist with tyre replacement for many SUVs and 4x4 vehicles. The correct tyre specification depends on your vehicle, wheel size and manufacturer requirements — call with your details.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us Your Location and Tyre Size",
    description:
      "Call Rapid Mobile Tyres and provide your location in or around Chepstow. If possible, give us the tyre size shown on the sidewall of your existing tyre.",
  },
  {
    title: "We Confirm the Tyre and Callout",
    description:
      "We'll confirm the appropriate available tyre option, your location and the relevant service details before dispatching a technician.",
  },
  {
    title: "We Come to Your Location",
    description:
      "A mobile tyre technician travels to your home, workplace or suitable roadside location with the required fitting equipment.",
  },
  {
    title: "Your Tyre Is Fitted On-Site",
    description:
      "The damaged or worn tyre is removed and the replacement is fitted at your location, helping you continue your journey without visiting a traditional tyre garage.",
  },
];

const faqs = [
  {
    question: "Do you provide 24-hour mobile tyre fitting in Chepstow?",
    answer:
      "Rapid Mobile Tyres provides 24/7 tyre assistance for customers in Chepstow and surrounding areas. Availability and arrival times depend on your location, traffic and the technician available at the time of your call.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach me in Chepstow?",
    answer:
      "Our usual arrival time is around 45–60 minutes, although this can vary depending on traffic, your exact location and technician availability. We can provide more information when you call.",
  },
  {
    question: "Can you fit a new tyre at my home in Chepstow?",
    answer:
      "Yes. Mobile tyre fitting can be carried out at your home where there is a suitable and safe place for the technician to work. This means you can have a tyre replaced without taking the vehicle to a garage.",
  },
  {
    question: "Do you provide emergency tyre fitting near the M48?",
    answer:
      "We provide roadside tyre assistance around Chepstow and nearby routes, subject to safe and permitted access. If you're stranded on a motorway, follow motorway safety guidance and provide your exact location when requesting assistance.",
  },
  {
    question: "Do you cover Tutshill, Sedbury and Caldicot?",
    answer:
      "Yes, our service coverage extends beyond Chepstow to nearby locations including Tutshill, Sedbury, St Arvans, Shirenewton, Tintern, Caldicot and Caerwent, subject to technician availability.",
  },
  {
    question: "Can you fit tyres to cars, vans and SUVs?",
    answer:
      "Yes, the mobile tyre service covers a range of cars, vans and SUVs. Provide your tyre size or vehicle details when calling so the team can check the appropriate tyre availability.",
  },
];

const areasServed = [
  { name: "Tutshill", href: null },
  { name: "Sedbury", href: null },
  { name: "St Arvans", href: null },
  { name: "Shirenewton", href: null },
  { name: "Tintern", href: null },
  { name: "Caldicot", href: "/mobile-tyre-fitting-caldicot" },
  { name: "Caerwent", href: "/mobile-tyre-fitting-caerwent" },
];

const locationPin = (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-orange-600" aria-hidden>
    <path d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function ChepstowPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div className="absolute inset-0">
            <Image
              src="/mobile-tyre-fitting-technician-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-45"
              preload
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-xl">
              <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Chepstow &amp; Surrounding Areas
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Tyre Fitting in Chepstow
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Need mobile tyre fitting in Chepstow without the hassle of getting your vehicle to a
                garage? Whether you&apos;re dealing with a flat tyre in town, need a replacement at home,
                or have tyre trouble near the A48 or M48 — our mobile service comes directly to you
                for cars, vans and SUVs, 24/7.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now: {siteConfig.phone}
                </a>
                <Link
                  href="/services"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                >
                  All Services
                </Link>
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

        {/* Intro — Mobile tyre fitting across Chepstow */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Mobile tyre fitting across Chepstow
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                We Bring the Tyre Shop to You
              </h2>
              <p className="mt-4 leading-7 text-zinc-600">
                A damaged or worn tyre can interrupt your journey when you least expect it. Instead of
                arranging recovery or trying to reach a tyre garage, our mobile tyre fitters in Chepstow
                attend your location with the equipment needed to assess and replace your tyre — suitable
                for both planned replacements and urgent situations.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Tyre Fitting at Your Home",
                    body: "If your tyres are worn, damaged or due for replacement, our technicians can come to your home and carry out the fitting on your driveway — no garage trip needed.",
                  },
                  {
                    title: "Workplace Tyre Fitting",
                    body: "We attend workplaces and business locations across Chepstow and replace tyres while your vehicle is parked — helping individual drivers and businesses alike.",
                  },
                  {
                    title: "Roadside Tyre Assistance",
                    body: (
                      <>
                        A puncture or blowout doesn&apos;t have to mean driving on a damaged tyre. Our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="font-medium text-orange-600 hover:underline"
                        >
                          emergency mobile tyre fitting
                        </Link>{" "}
                        reaches you at the roadside — wherever you&apos;ve stopped.
                      </>
                    ),
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600/10">
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-orange-600" aria-hidden>
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-600">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.phoneHref}
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {siteConfig.phone}
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-2xl">
                <Image
                  src="/mobile-car-tyre-fitting-bmw-i3-bristol.webp"
                  alt="Mobile tyre fitting technician fitting a tyre at a customer's location"
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl sm:block">
                <p className="text-2xl font-bold text-orange-600">45–60 min</p>
                <p className="text-xs text-zinc-500">Usual arrival time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency section */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Emergency tyre fitting
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Emergency Mobile Tyre Fitting in Chepstow
              </h2>
              <p className="mt-4 text-zinc-600">
                Tyre problems don&apos;t always happen during normal working hours. We provide emergency
                tyre fitting in Chepstow for drivers who need help with unexpected punctures, blowouts,
                flat tyres or sidewall damage — at home, at work and at suitable roadside locations.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  ),
                  title: "24/7 Availability",
                  body: "We respond to emergency callouts day and night, including weekends and bank holidays, throughout Chepstow and surrounding areas.",
                },
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  ),
                  title: "45–60 Min Response",
                  body: "Our usual arrival time is around 45–60 minutes, depending on traffic, your exact location and technician availability.",
                },
                {
                  icon: (
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7H5v2h2V7z" />
                  ),
                  title: "Right Tyre on the Van",
                  body: "We carry a range of tyre sizes so we can fit the correct tyre at your location — no second trip to a garage needed.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600/10">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-orange-600" aria-hidden>
                      {card.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 font-semibold text-zinc-950">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{card.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/emergency-mobile-tyre-fitting-bristol"
                className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                Emergency Tyre Fitting
              </Link>
            </div>
          </div>
        </section>

        {/* Vehicle services */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Car, Van &amp; SUV Tyre Fitting
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Every Vehicle Type Covered
              </h2>
              <p className="mt-4 text-zinc-600">
                Different vehicles require different tyre sizes, load ratings and specifications. Provide
                your tyre size or vehicle details when calling so we can confirm availability before attending.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {vehicleServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-zinc-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all">
                      Learn more
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA after vehicle section */}
            <div className="mt-12 rounded-2xl bg-orange-50 border border-orange-100 p-8 text-center">
              <p className="text-base font-semibold text-zinc-950">
                Not sure which service you need? Call us and we&apos;ll help.
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Tell us your vehicle type and postcode and we&apos;ll confirm what we can do.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Simple process
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                How Our Mobile Tyre Fitting Works
              </h2>
              <p className="mt-4 text-zinc-600">Getting help is straightforward — one call is all it takes.</p>
            </div>

            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-zinc-950">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* A48 / M48 coverage */}
        <section className="relative overflow-hidden bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="absolute inset-0">
            <Image
              src="/rapid-mobile-tyres-fleet-service-vans-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/60" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                A48 &amp; M48 coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Mobile Tyre Fitting Near the A48 and M48
              </h2>
              <p className="mt-4 text-zinc-400">
                Chepstow&apos;s location means many journeys involve busy routes connecting South Wales,
                Bristol and Gloucestershire. A tyre problem on or around these routes can quickly become
                disruptive, particularly during longer journeys.
              </p>
              <p className="mt-4 text-zinc-400">
                We provide mobile tyre assistance around Chepstow and nearby routes including the A48
                and M48, subject to safe access. If you&apos;ve stopped on a motorway or other high-speed
                road, prioritise your safety and provide your exact location when requesting assistance.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/emergency-mobile-tyre-fitting-bristol"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-600 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-400 hover:bg-zinc-900"
                >
                  Emergency Tyre Fitting
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">Coverage</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Areas We Cover Around Chepstow
            </h2>
            <p className="mt-4 text-zinc-600">
              Our mobile tyre service covers Chepstow and surrounding communities. If you&apos;re unsure
              whether we cover your location, call us with your postcode or current location and we can
              confirm availability.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {areasServed.map((area) =>
                area.href ? (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2.5 text-sm font-medium text-orange-700 transition-colors hover:border-orange-300 hover:bg-orange-100"
                  >
                    {locationPin}
                    {area.name}
                  </Link>
                ) : (
                  <span
                    key={area.name}
                    className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-700"
                  >
                    {locationPin}
                    {area.name}
                  </span>
                )
              )}
            </div>

            <Link
              href="/areas-we-cover"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
            >
              See all areas we cover
            </Link>
          </div>
        </section>

        {/* More than tyre fitting */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Additional services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                More Than Mobile Tyre Fitting
              </h2>
              <p className="mt-4 text-zinc-600">
                Alongside mobile tyre fitting, customers in Chepstow can access a range of mobile roadside
                services — all at your location, whenever you need them.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Emergency Mobile Tyre Fitting",
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  description:
                    "Blowout, puncture or sidewall damage — 24/7 emergency assistance at your location, usually within 45–60 minutes.",
                },
                {
                  title: "Tyre Replacement at Home",
                  href: "/tyre-replacement-at-home-bristol",
                  description:
                    "New tyres fitted on your driveway or parking space — same day or scheduled, no garage visit required.",
                },
                {
                  title: "Jump Start",
                  href: "/jumpstarts",
                  description:
                    "Flat battery? Our technicians arrive with jump-start equipment and get your engine running again.",
                },
                {
                  title: "Emergency Fuel Delivery",
                  href: "/fuel-delivery",
                  description:
                    "Run out of petrol or diesel? We deliver enough fuel to get you safely to the nearest station.",
                },
                {
                  title: "Mobile Car Tyre Fitting",
                  href: "/mobile-car-tyre-fitting-bristol",
                  description:
                    "Dedicated car tyre fitting for hatchbacks, saloons, estates and city cars — fitted at your location.",
                },
                {
                  title: "Mobile Van Tyre Fitting",
                  href: "/mobile-van-tyre-fitting-bristol",
                  description:
                    "Keep your van on the road with on-site van tyre replacement — no downtime at a tyre centre.",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-semibold text-zinc-950 transition-colors group-hover:text-orange-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 transition-all group-hover:gap-2">
                    Learn more
                    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <TyreBrands />

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
              Need Mobile Tyre Fitting in Chepstow?
            </h2>
            <p className="mt-4 text-zinc-300">
              No need to risk driving on a flat or damaged tyre. Call with your location and tyre
              details — we&apos;ll confirm availability and arrange for a mobile technician to come to you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
