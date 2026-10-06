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
  title: "Mobile Tyre Fitting Alveston | 24/7 Tyre Replacement",
  description:
    "Need mobile tyre fitting in Alveston? Get replacement tyres fitted at your home, workplace or roadside location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-alveston",
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
      "We provide mobile car tyre fitting in Alveston for many common vehicle and tyre sizes. Whether a tyre has failed unexpectedly or simply needs replacing because of wear, fitting can be arranged at a suitable location. Providing your tyre size when you call helps us check the appropriate replacement option before travelling.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "A damaged van tyre can be particularly disruptive when the vehicle is part of your working day. Our mobile van tyre fitting in Alveston allows suitable replacement tyres to be fitted without sending the van to a tyre centre. Tell us the van model and tyre specification when booking so the correct requirements can be checked.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "Larger vehicles can require different tyre dimensions, load ratings and specifications from standard passenger cars. We provide SUV tyre fitting in Alveston for suitable vehicles and tyre sizes. The existing tyre sidewall is usually the quickest place to find the information needed when requesting a replacement.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us What Has Happened",
    description:
      "Let us know whether you're dealing with a puncture, flat tyre, blowout, worn tyre or another tyre problem.",
  },
  {
    title: "Send Your Location and Tyre Size",
    description:
      "Provide your location in Alveston and, where possible, the size printed on your tyre sidewall. Your vehicle registration or model can also help confirm the correct specification.",
  },
  {
    title: "We Check Availability",
    description:
      "We'll check the relevant tyre option and technician availability before confirming the callout.",
  },
  {
    title: "Fitting Takes Place at Your Location",
    description:
      "Once the technician arrives, the damaged or worn tyre can be removed and the replacement fitted where the vehicle is parked, provided the location is suitable for safe working.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Alveston?",
    answer:
      "Yes. Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Alveston, subject to technician and tyre availability. This means you can request assistance outside normal tyre-centre opening hours as well as during the day.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Alveston?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival times can vary depending on traffic, your exact location and technician availability when you call.",
  },
  {
    question: "Can you replace a tyre at my home in Alveston?",
    answer:
      "Yes. Tyre replacement in Alveston can be carried out at your home where there is a suitable and safe place for the technician to work. Home fitting can be used for both urgent problems and planned tyre replacement.",
  },
  {
    question: "Can you help if I have a flat tyre near the A38?",
    answer:
      "We provide mobile tyre assistance around Alveston and nearby roads, including suitable locations around the A38. If you are stopped in an unsafe position or on a high-speed road, follow the relevant roadside safety guidance before requesting tyre assistance.",
  },
  {
    question: "Do you provide emergency tyre fitting at night?",
    answer:
      "Yes. Emergency tyre fitting in Alveston is available 24/7, including evenings and weekends, subject to technician availability and safe access to your vehicle.",
  },
  {
    question: "Can you fit tyres to vans in Alveston?",
    answer:
      "Yes. Our mobile tyre service can assist with many light commercial vans. Give us your vehicle and tyre details when calling so we can check the correct specification and availability.",
  },
  {
    question: "Do you offer mobile tyre fitting for SUVs and 4x4s?",
    answer:
      "Yes. We can fit replacement tyres to many SUVs and 4x4 vehicles. The correct tyre option depends on the existing tyre dimensions, load rating and vehicle requirements.",
  },
  {
    question: "Can I book mobile tyre replacement if my tyre isn't an emergency?",
    answer:
      "Yes. Mobile tyre replacement in Alveston isn't limited to emergency callouts. If your tyres are worn or due for replacement, you can arrange fitting at a suitable home or workplace location.",
  },
  {
    question: "What details should I give the mobile tyre fitter?",
    answer:
      "Providing your location, tyre size and vehicle details helps us check the correct tyre before attending. If the problem happened at the roadside, an accurate location or nearby road/junction is particularly helpful.",
  },
  {
    question: "Do you cover areas outside Alveston?",
    answer:
      "We serve Alveston and surrounding locations, subject to technician availability. If you're in a nearby area, call with your postcode or current location so coverage can be confirmed.",
  },
];

const areasServed = [
  { name: "Thornbury", href: null },
  { name: "Rudgeway", href: null },
  { name: "Earthcott", href: null },
  { name: "Olveston", href: null },
  { name: "Tockington", href: null },
  { name: "Old Down", href: null },
  { name: "Elberton", href: null },
  { name: "Almondsbury", href: "/mobile-tyre-fitting-almondsbury" },
  { name: "Awkley", href: "/mobile-tyre-fitting-awkley" },
];

const locationPin = (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-orange-600" aria-hidden>
    <path d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function AlvestonPage() {
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
                Alveston &amp; Surrounding Areas
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Tyre Fitting in Alveston
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Need mobile tyre fitting in Alveston without trying to reach a garage on a damaged tyre?
                From a puncture discovered on your driveway to unexpected tyre damage while travelling
                through Alveston, our mobile service brings the fitting equipment and replacement tyre
                directly to you — cars, vans and SUVs, 24/7.
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

        {/* Intro — mobile tyre help without the garage trip */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Mobile tyre help without the garage trip
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                We Bring the Solution to Your Vehicle
              </h2>
              <p className="mt-4 leading-7 text-zinc-600">
                When a tyre is completely flat, badly damaged or no longer safe to use, getting the vehicle
                to a tyre centre can create an unnecessary problem. Our mobile tyre fitters in Alveston are
                designed to bring the solution to the vehicle instead — attending suitable residential
                addresses, workplaces and roadside locations around Alveston.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Tyre Replacement at Home",
                    body: "Finding a flat tyre before leaving home doesn't have to mean rearranging your day around a garage appointment. Where there is a safe and suitable working area, a technician can attend your property and fit the replacement tyre there — useful for both urgent problems and planned tyre maintenance.",
                  },
                  {
                    title: "Tyre Fitting at Work",
                    body: "If your car or van is parked at a workplace when you discover a tyre problem, our mobile service can attend suitable business locations and carry out the fitting while the vehicle remains parked — helping avoid the time lost travelling to and waiting at a tyre centre.",
                  },
                  {
                    title: "Help When You're Stopped at the Roadside",
                    body: (
                      <>
                        A sudden puncture or blowout can make continuing your journey unsafe. Our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="font-medium text-orange-600 hover:underline"
                        >
                          roadside tyre assistance
                        </Link>{" "}
                        in Alveston can help where your vehicle is stopped in a location that is safe and
                        permitted for a technician to work.
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
                Emergency Tyre Fitting in Alveston, Day or Night
              </h2>
              <p className="mt-4 text-zinc-600">
                Tyre failures aren&apos;t restricted to normal garage opening hours. We provide emergency
                tyre fitting in Alveston for drivers who experience unexpected tyre problems during the day,
                late at night, at weekends or on bank holidays — flat tyres, punctures, blowouts, visible
                tyre damage and tyres no longer suitable for continued driving.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  ),
                  title: "24/7 Availability",
                  body: "We respond to emergency callouts day and night, including weekends and bank holidays, throughout Alveston and surrounding areas.",
                },
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  ),
                  title: "45–60 Min Response",
                  body: "Our usual arrival time is around 45–60 minutes, depending on technician availability, traffic and your exact location.",
                },
                {
                  icon: (
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7H5v2h2V7z" />
                  ),
                  title: "Right Tyre on the Van",
                  body: "We carry a range of tyre sizes so we can fit the correct tyre at your Alveston location — no second trip to a garage needed.",
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
                Mobile Tyres for Cars, Vans and SUVs
              </h2>
              <p className="mt-4 text-zinc-600">
                The correct replacement tyre depends on the vehicle, wheel size, load requirements and tyre
                specification. Our mobile fitting service supports a range of everyday passenger vehicles
                and light commercial vehicles.
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
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 transition-all group-hover:gap-2">
                      Learn more
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-orange-100 bg-orange-50 p-8 text-center">
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
                What Happens When You Book a Mobile Tyre Fitter?
              </h2>
              <p className="mt-4 text-zinc-600">
                We keep the callout process straightforward so you know what information is needed before
                a technician sets off.
              </p>
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

        {/* A38 / B4061 roads section */}
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
                A38 &amp; B4061 coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Mobile Tyre Assistance Around the A38 and B4061
              </h2>
              <p className="mt-4 text-zinc-400">
                Alveston sits directly on an important road corridor in South Gloucestershire. The A38 runs
                between the Thornbury area and the Bristol North Fringe, while the B4061 provides an
                important connection between Alveston and Thornbury. The M5 is also accessible further
                south around the Almondsbury area.
              </p>
              <p className="mt-4 text-zinc-400">
                For local drivers, commuters and people travelling through the area, tyre trouble on these
                routes can quickly interrupt a journey. Our mobile service can attend suitable locations
                around Alveston and its surrounding road network where access is safe and permitted. When
                requesting roadside assistance, providing the road name, direction of travel, nearby
                junction or an accurate shared location can make it easier to identify where you are.
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

        {/* Tyre options */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Choosing the right tyre
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Tyre Options Based on Your Vehicle and Budget
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                There isn&apos;t one replacement tyre that suits every vehicle. Tyre size, load rating,
                speed rating, vehicle type and how the vehicle is used all matter when choosing an
                appropriate option. Our mobile tyre replacement in Alveston can include different tyre
                options depending on the required specification and current availability.
              </p>
              <p className="mt-4 text-zinc-600 leading-7">
                Where suitable stock is available, customers can choose from different budget levels rather
                than relying on a one-size-fits-all solution. If you&apos;re unsure what size your vehicle
                uses, check the numbers on the tyre sidewall or provide your vehicle details when you call.
              </p>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Why use us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Why Choose a Mobile Tyre Service in Alveston?
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                Mobile fitting is particularly useful when the tyre problem itself makes reaching a garage
                difficult. Instead of arranging recovery or risking driving on a damaged tyre, the
                technician and equipment come to your location.
              </p>
              <p className="mt-4 text-zinc-600 leading-7">
                Rapid Mobile Tyres provides 24/7 mobile tyre fitting in Alveston, with assistance
                available at suitable homes, workplaces and roadside locations. The service covers tyre
                fitting for cars, vans and SUVs as well as emergency callouts. Additional roadside
                assistance such as{" "}
                <Link href="/jumpstarts" className="font-medium text-orange-600 hover:underline">
                  jump starts
                </Link>{" "}
                and{" "}
                <Link href="/fuel-delivery" className="font-medium text-orange-600 hover:underline">
                  emergency fuel delivery
                </Link>{" "}
                is also available when the problem isn&apos;t tyre-related.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "24/7 Service", body: "Available day and night, including weekends and bank holidays — no need to wait until a garage opens." },
                { title: "We Come to You", body: "Home, workplace or suitable roadside location — no recovery truck or garage trip required." },
                { title: "Cars, Vans & SUVs", body: "Mobile fitting for a wide range of passenger vehicles and light commercial vehicles." },
                { title: "Simple Booking", body: "Call with your location and tyre details and we'll confirm availability and dispatch a technician." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Areas served */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">Coverage</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Serving Alveston and the Surrounding Area
            </h2>
            <p className="mt-4 text-zinc-600">
              Alveston is closely connected with nearby communities including Rudgeway, Thornbury and the
              wider{" "}
              <Link href="/mobile-tyre-fitting-almondsbury" className="font-medium text-orange-600 hover:underline">
                Almondsbury
              </Link>{" "}
              area. We also cover{" "}
              <Link href="/mobile-tyre-fitting-awkley" className="font-medium text-orange-600 hover:underline">
                Awkley
              </Link>{" "}
              and other nearby locations in this part of South Gloucestershire. If you&apos;re outside
              Alveston itself, provide your postcode or current location when you call so availability can
              be confirmed for your specific area.
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
          </div>
        </section>

        {/* More roadside services */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Additional services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                More Roadside Services When You Need Them
              </h2>
              <p className="mt-4 text-zinc-600">
                A tyre isn&apos;t the only issue that can leave a vehicle unable to continue. Rapid Mobile
                Tyres provides several mobile services that can be arranged at the customer&apos;s location.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Emergency Mobile Tyre Fitting",
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  description:
                    "Blowout, puncture or sidewall damage — 24/7 emergency assistance at your Alveston location, usually within 45–60 minutes.",
                },
                {
                  title: "Tyre Replacement at Home",
                  href: "/tyre-replacement-at-home-bristol",
                  description:
                    "New tyres fitted on your driveway or parking space — same day or scheduled, no garage visit required.",
                },
                {
                  title: "Mobile Car Tyre Fitting",
                  href: "/mobile-car-tyre-fitting-bristol",
                  description:
                    "Dedicated car tyre fitting for hatchbacks, saloons, estates and everyday vehicles — fitted at your location.",
                },
                {
                  title: "Mobile Van Tyre Fitting",
                  href: "/mobile-van-tyre-fitting-bristol",
                  description:
                    "Keep your van on the road with on-site van tyre replacement — reducing downtime for tradespeople and commercial drivers.",
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
              Need Mobile Tyre Fitting in Alveston?
            </h2>
            <p className="mt-4 text-zinc-300">
              A puncture, blowout or worn tyre doesn&apos;t always require a trip to a tyre centre. Contact
              Rapid Mobile Tyres with your tyre details and current location — we&apos;ll check availability
              and arrange suitable assistance for your car, van or SUV.
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
