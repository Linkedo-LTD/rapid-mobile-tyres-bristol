import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting in the UK: Trends and Insights",
  description:
    "A look at how mobile tyre fitting is growing across the UK — the trends driving demand, what customers expect, and where the industry is heading.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-in-the-uk-trends-and-insights",
  },
};

const sections = [
  {
    title: "What Is Mobile Tyre Fitting?",
    icon: (
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 3a1 1 0 011 1v3.586l2.293 2.293a1 1 0 01-1.414 1.414l-2.586-2.586A1 1 0 019 10V6a1 1 0 011-1z" />
    ),
    body: (
      <>
        <p>
          Mobile tyre fitting means the technician comes to the vehicle, rather than the vehicle
          travelling to a garage. A fully equipped van arrives at a home, workplace or roadside
          location and carries out the tyre replacement, repair or balancing on site.
        </p>
        <p>
          The appeal is simple: no towing a damaged vehicle, no waiting room, and no need to
          rearrange a day around a garage appointment. The job happens wherever the car already is.
        </p>
      </>
    ),
  },
  {
    title: "Key Trends Driving Growth",
    icon: (
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 001 1h12a1 1 0 100-2H5.414l3.293-3.293a1 1 0 011.414 0l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L13 12.414l-1.293-1.293a1 1 0 00-1.414 0L6 15.414V17z"
        clipRule="evenodd"
      />
    ),
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Convenience-first expectations.</strong> Drivers are increasingly used to
          on-demand services and expect the same flexibility for vehicle maintenance.
        </li>
        <li>
          <strong>Home and hybrid working.</strong> More people are at home during the day,
          making it practical to have a tyre fitted on the driveway rather than taking time off.
        </li>
        <li>
          <strong>Avoiding towing and recovery.</strong> A mobile callout can resolve a flat or
          damaged tyre without the cost and delay of arranging recovery to a garage.
        </li>
        <li>
          <strong>Easier online booking.</strong> Many providers now offer straightforward phone
          or online booking, making mobile fitting as simple to arrange as a traditional visit.
        </li>
        <li>
          <strong>Fleet and business adoption.</strong> Businesses with vans or company cars use
          mobile fitting to keep vehicles working rather than off the road at a depot.
        </li>
      </ul>
    ),
  },
  {
    title: "What Customers Expect Today",
    icon: (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    ),
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>24/7 availability for emergencies, not just daytime bookings</li>
        <li>Clear, upfront pricing before a technician is dispatched</li>
        <li>A realistic arrival time window, with updates if plans change</li>
        <li>A reasonable range of tyre brands and sizes carried on the van</li>
        <li>A simple way to book — by phone or online — without a complicated process</li>
      </ul>
    ),
  },
  {
    title: "Technology Behind the Shift",
    icon: (
      <path
        fillRule="evenodd"
        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm2 13a1 1 0 100 2h4a1 1 0 100-2H8z"
        clipRule="evenodd"
      />
    ),
    body: (
      <p>
        Mobile tyre fitting depends on more than a van and a technician. Route planning helps
        dispatch the nearest available technician, stock tracking helps ensure the right tyre
        size is loaded before setting off, and digital payment and invoicing make the whole
        process easier to manage for both the customer and the provider.
      </p>
    ),
  },
  {
    title: "Regional Patterns Across the UK",
    icon: (
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    ),
    body: (
      <p>
        Demand for mobile tyre fitting tends to be strongest around busy urban and commuter
        areas — including cities like{" "}
        <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
          Bristol
        </Link>{" "}
        and the surrounding South West — where traffic, parking pressure and commuting distances
        make a garage visit less practical. Coverage in rural areas can depend more heavily on
        technician availability and travel distance, which is why confirming coverage for a
        specific postcode is always worthwhile.
      </p>
    ),
  },
  {
    title: "Who Benefits Most",
    icon: (
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    ),
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Daily commuters who cannot afford to lose a working day to a garage visit</li>
        <li>Families, where coordinating a garage trip around school runs and childcare is difficult</li>
        <li>Fleet and business vehicles, where downtime has a direct cost</li>
        <li>Drivers without a usable spare tyre, who need a prompt on-site solution</li>
      </ul>
    ),
  },
  {
    title: "Challenges the Industry Faces",
    icon: (
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    ),
    body: (
      <p>
        Mobile fitting has limits. Technicians still work around weather conditions, demand can
        spike sharply during cold snaps or after sudden road hazards, and no single van can carry
        every tyre size for every vehicle. Providing accurate tyre and vehicle details when
        booking makes it far more likely the correct tyre is available on arrival.
      </p>
    ),
  },
  {
    title: "Where the Industry Is Heading",
    icon: (
      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
    ),
    body: (
      <p>
        As more drivers switch to electric and hybrid vehicles, which tend to be heavier and can
        wear tyres differently, mobile fitters are adapting their stock and expertise accordingly.
        Expect continued growth in online booking, clearer pricing, and closer integration between
        booking, dispatch and payment as the service becomes a mainstream expectation rather than
        a niche alternative.
      </p>
    ),
  },
];

export default function MobileTyreFittingUkTrendsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Mobile Tyre Fitting in the UK: Trends and Insights"
          breadcrumb="Home / Blog / Mobile Tyre Fitting in the UK: Trends and Insights"
          subtitle="How mobile tyre fitting is growing across the UK, what's driving the shift, and what it means for drivers."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/rapid-mobile-tyres-fleet-service-vans-bristol.webp"
                alt="A fleet of Rapid Mobile Tyres service vans ready to attend callouts across the UK"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                Tyre problems used to mean one thing: driving carefully to a garage, or worse,
                arranging a tow. Over the past few years, mobile tyre fitting has moved from a
                niche convenience to a mainstream option across the UK. Here&apos;s a look at what
                is driving that shift, what customers now expect, and where the service is headed.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                      {section.icon}
                    </svg>
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-zinc-900">{section.title}</h2>
                  <div className="leading-7 text-zinc-600 [&>p+p]:mt-4">{section.body}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">
                Need Mobile Tyre Fitting Today?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres provides 24/7 mobile tyre fitting across Bristol and the South
                West. Call now or book online and we&apos;ll come to you.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
                >
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800 sm:w-auto"
                >
                  Book Online
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/blog" className="text-sm font-semibold text-orange-600 hover:underline">
                ← Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
