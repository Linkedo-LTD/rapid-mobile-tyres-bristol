import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TyreBrands from "@/components/TyreBrands";
import Faq from "@/components/Faq";
import { siteConfig, servicesFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Services Bristol | 24/7 Tyre Assistance",
  description:
    "Explore mobile tyre services in Bristol for cars, vans and SUVs. Get tyre fitting and roadside help when needed.",
  alternates: {
    canonical: "https://rapid-tyres.com/services",
  },
};

const allServices = [
  {
    title: "Mobile Tyre Fitting",
    tagline: "Flat tyre? We come to you.",
    description:
      "Puncture repairs, full replacements, and tyre pressure checks — wherever you are. Home, work, or roadside across Bristol, 24/7.",
    href: "/mobile-tyre-fitting",
    image: "/mobile-tyre-fitting-technician-bristol.webp",
    badge: "Most popular",
  },
  {
    title: "Car Tyre Fitting",
    tagline: "Home, work, or roadside.",
    description:
      "Mobile car tyre fitting for hatchbacks, saloons, estates, and city cars — fitted at your location with the right tyre already on the van.",
    href: "/mobile-car-tyre-fitting-bristol",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
    badge: null,
  },
  {
    title: "SUV Tyre Fitting",
    tagline: "All makes and models.",
    description:
      "Specialist mobile tyre fitting for SUVs, crossovers, and 4x4s — with the right equipment and stock for larger tyre sizes.",
    href: "/suv-tyre-fitting-bristol",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
    badge: null,
  },
  {
    title: "Van Tyre Fitting",
    tagline: "Keep your fleet moving.",
    description:
      "Heavy-load van tyres for better fuel efficiency, traction, and long-lasting performance — fitted at your premises or the roadside.",
    href: "/mobile-van-tyre-fitting-bristol",
    image: "/van-tyre-fitting-road-service-bristol.webp",
    badge: null,
  },
  {
    title: "Emergency Tyre Fitting",
    tagline: "Urgent callout, 45–60 min response.",
    description:
      "Blowout on the motorway, pothole burst, or late-night flat? We respond 24/7 with the right tyre on the van — fitted wherever you are in Bristol.",
    href: "/emergency-mobile-tyre-fitting-bristol",
    image: "/rapid-mobile-tyres-fleet-service-vans-bristol.webp",
    badge: "24/7",
  },
  {
    title: "Tyre Replacement at Home",
    tagline: "On your driveway, your schedule.",
    description:
      "New tyres fitted on your driveway — scheduled or same day. No garage visit, no disruption to your day.",
    href: "/tyre-replacement-at-home-bristol",
    image: "/tyre-replacement-at-home-technician-bristol.webp",
    badge: null,
  },
  {
    title: "Jump Start",
    tagline: "Dead battery? No problem.",
    description:
      "Stranded with a flat battery? Our technicians arrive with full jump-start equipment and get your engine running again within 30–60 minutes.",
    href: "/jumpstarts",
    image: "/jump-start-service-dead-battery-bristol.webp",
    badge: null,
  },
  {
    title: "Fuel Delivery",
    tagline: "Run out? We bring fuel to you.",
    description:
      "Out of petrol or diesel? We deliver enough fuel to get you safely to the nearest station — wherever you're stranded.",
    href: "/fuel-delivery",
    image: "/emergency-fuel-delivery-service-bristol.webp",
    badge: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-600/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 sm:py-32">
            <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
              Mobile Roadside Assistance
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Every Service, Delivered to Your Door
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Whether you need a tyre fitted, a battery jump-started, or an emergency fuel top-up —
              our fully-equipped mobile units come straight to you, anywhere in Bristol and beyond,
              around the clock.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>

        {/* All services — unified 8-card grid */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                What we offer
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-zinc-600">
                From emergency roadside callouts to planned home driveway fitting — one call covers
                everything.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {allServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {service.badge && (
                      <span className="absolute top-4 left-4 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold text-orange-600">{service.tagline}</p>
                    <h3 className="mt-1 text-lg font-bold text-zinc-950">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all">
                      Learn more
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage banner */}
        <section className="relative overflow-hidden bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="absolute inset-0">
            <Image
              src="/rapid-mobile-tyres-fleet-service-vans-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                24/7 coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Bristol and Beyond — We Come to You
              </h2>
              <p className="mt-4 max-w-md text-zinc-400">
                Fully-equipped mobile units covering Bristol, Bath, Newport, Weston-Super-Mare,
                Chepstow, Gloucestershire, and the surrounding areas. Day or night, weekday or
                weekend.
              </p>
              <Link
                href="/areas-we-cover"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-zinc-600 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-400 hover:bg-zinc-900"
              >
                See all areas
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Bristol", "Bath", "Newport", "Weston-Super-Mare", "Chepstow", "Gloucestershire", "Bridgewater", "Magor"].map(
                (area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm font-medium text-zinc-300"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-orange-500" aria-hidden>
                      <path
                        d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    {area}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <TyreBrands />

        <Faq items={servicesFaqs} />

        {/* CTA */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need help on the road today?
            </h2>
            <p className="mt-4 text-zinc-400">
              One call covers tyres, jump starts, and fuel delivery — 24 hours a day, 7 days a week,
              anywhere in Bristol and the surrounding areas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
              >
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
