import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StepList from "@/components/StepList";
import Faq from "@/components/Faq";
import { siteConfig, fuelDeliveryPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Emergency Fuel Delivery Bristol | 24/7 Roadside Help",
  description:
    "Run out of fuel in Bristol? Get 24/7 emergency fuel delivery and roadside assistance directly to your location.",
};

export default function FuelDeliveryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Split hero — dark bg, text left, image right */}
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
                24/7 Emergency Fuel Delivery
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Run Out of Fuel? We&apos;ll Come to You.
              </h1>

              <p className="mt-3 text-lg font-medium text-zinc-200">{fuelDeliveryPage.tagline}</p>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">{fuelDeliveryPage.intro}</p>

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
                {fuelDeliveryPage.openingHours}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
                <Image
                  src="/emergency-fuel-delivery-bristol-hero.webp"
                  alt="Emergency fuel delivery technician refuelling a stranded vehicle in Bristol"
                  width={1672}
                  height={941}
                  className="h-auto w-full"
                  preload
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 shadow-xl sm:block">
                <p className="text-2xl font-bold text-orange-500">45 min</p>
                <p className="text-xs text-zinc-400">Average arrival time</p>
              </div>
            </div>
          </div>
        </section>

        <StepList steps={fuelDeliveryPage.steps} />

        {/* Photo showcase */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                What to expect
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Fully Equipped to Get You Moving Again
              </h2>
              <p className="mt-4 text-zinc-600">
                Our vans carry everything needed to deliver fuel safely, wherever you&apos;ve
                stopped.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/mobile-fuel-delivery-van-equipment.webp"
                  alt="Fuel delivery equipment carried in the Rapid Mobile Tyres van"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/roadside-fuel-delivery-arrival-bristol.webp"
                  alt="Rapid Mobile Tyres technician arriving at a roadside fuel delivery call-out in Bristol"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/driver-after-emergency-fuel-delivery.webp"
                  alt="Driver back on the road after an emergency fuel delivery"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why choose — large card layout */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Why choose us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Why Choose Rapid Mobile Tyres for Fuel Delivery?
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {fuelDeliveryPage.whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8"
                >
                  <h3 className="text-xl font-bold text-zinc-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency info strip */}
        <section className="bg-orange-600 py-14 text-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="shrink-0">
                <svg viewBox="0 0 48 48" fill="none" className="h-16 w-16" aria-hidden>
                  <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2.5" strokeOpacity="0.4" />
                  <path d="M24 14v12M24 32v2" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold">Stranded right now?</p>
                <p className="mt-2 text-white/90">
                  Pull over safely, switch on your hazard lights, and call us immediately. Our
                  technician will arrive with petrol or diesel — usually within 45 minutes.
                </p>
              </div>
              <a
                href={siteConfig.phoneHref}
                className="shrink-0 flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        <Faq items={fuelDeliveryPage.faqs} />

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
              Out of fuel? Don&apos;t wait — call us now.
            </h2>
            <p className="mt-4 text-zinc-300">
              We&apos;ll bring petrol or diesel straight to you, anywhere in the South West and surrounding
              areas — usually within 45 minutes.
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
