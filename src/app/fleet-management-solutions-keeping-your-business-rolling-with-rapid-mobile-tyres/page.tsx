import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fleet Tyre Management Solutions | Rapid Mobile Tyres Bristol",
  description:
    "Keep your vans and company vehicles on the road. Learn how fleet tyre management works and how mobile tyre fitting in Bristol cuts downtime and costs.",
};

const whyTyresMatter = [
  { label: "Uptime:", body: "A vehicle with a flat tyre is not working." },
  { label: "Safety:", body: "Tyres are the only part of the vehicle in contact with the road." },
  { label: "Running costs:", body: "Poorly maintained tyres wear faster and can increase fuel use." },
  { label: "Legal compliance:", body: "Businesses are responsible for keeping their vehicles roadworthy." },
  { label: "Reputation:", body: "Late deliveries and missed appointments reflect on your brand." },
];

const commonProblems = [
  "Heavy loads that cause faster wear and put extra strain on tyres",
  "Stop-start driving and frequent kerb contact in towns and cities",
  "Under-inflation, which is common when vehicles are used daily and checks get skipped",
  "Uneven wear caused by misalignment or poor pressure",
  "Punctures and blowouts from road debris and potholes",
  "Mixed tyre brands and ages across the fleet, making tracking and replacement harder",
];

const legalPoints = [
  "A minimum tread depth of 1.6mm across the central three-quarters of the tyre, around the whole circumference",
  "Correct inflation and suitability for the vehicle",
  "No serious cuts, bulges or damage",
];

const downtimeSteps = [
  "The driver stops and tries to change the wheel, or waits for help.",
  "The van is taken to a garage, sometimes far from the route.",
  "The vehicle sits waiting for a slot and a tyre.",
  "The driver is stuck, jobs are delayed and customers are waiting.",
];

const mobileBenefits = [
  { label: "Less downtime.", body: "The vehicle is repaired where it stands, so it gets back to work sooner." },
  { label: "No garage trips.", body: "Your drivers stay on the job instead of waiting in a reception area." },
  { label: "Work at your premises.", body: "Tyres can be fitted at your depot, yard, workplace or a suitable location." },
  { label: "Help when it is urgent.", body: "Emergencies do not follow office hours, and neither should support." },
  { label: "Flexibility.", body: "Vehicles can be dealt with during quiet periods, early mornings or evenings." },
  { label: "Safer for drivers.", body: "No need to change a heavy wheel at the roadside." },
];

const checklist = [
  "Check tyre pressure regularly. Weekly is a good habit, and always before long journeys or heavy loads.",
  "Inspect tread depth and condition. Look for cuts, bulges, cracks and embedded objects.",
  "Train drivers to spot problems. A quick walk-around before each shift can catch issues early.",
  "Keep a simple record. Note tyre sizes, brands, fitting dates and any repairs for each vehicle.",
  "Replace tyres before they reach the legal limit. Waiting until the last moment risks failure and fines.",
  "Match the tyre to the job. Vans carrying heavy loads need the correct load rating.",
  "Fix problems promptly. A slow puncture left alone often becomes an emergency.",
  "Plan replacements. Scheduled changes are almost always cheaper and less disruptive than emergency call-outs.",
];

const chooseFactors = [
  "Load rating and durability for vans and heavy use",
  "Mileage: high-mileage vehicles may justify a longer-lasting tyre",
  "Safety and grip: especially for wet UK roads",
  "Total cost of ownership, not just the purchase price",
];

const whoBenefits = [
  "Delivery and courier companies",
  "Trades and construction businesses",
  "Taxi and private hire operators",
  "Care and community services",
  "Cleaning, maintenance and field-service teams",
  "Small businesses with one or two work vehicles",
  "Anyone who relies on vehicles to earn a living",
];

const faqs = [
  {
    question: "What is fleet tyre management?",
    answer:
      "It means keeping track of, maintaining and replacing the tyres on your business vehicles so they stay safe, legal and working. It covers inspections, pressure checks, replacements and responding quickly to problems.",
  },
  {
    question: "Can you fit tyres at my business premises?",
    answer:
      "Yes. Mobile tyre fitting can be carried out at your workplace or a suitable location, subject to space and safety. Call us to discuss your needs.",
  },
  {
    question: "Do you fit van tyres?",
    answer: "Yes. We fit tyres for vans, cars and SUVs across Bristol and the surrounding areas.",
  },
  {
    question: "Is emergency tyre fitting available for work vehicles?",
    answer:
      "Yes. Our emergency service runs 24/7 with a usual arrival of around 45–60 minutes, depending on traffic, availability and location.",
  },
  {
    question: "How often should fleet tyres be checked?",
    answer:
      "Pressure and visible condition should be checked regularly, ideally weekly, and always before long trips or heavy loads. Tread depth should be monitored and tyres replaced before they reach the legal minimum.",
  },
  {
    question: "How can I reduce tyre costs across my fleet?",
    answer:
      "Keep tyres correctly inflated, check for early wear, replace them before they fail, and match the tyre to the job. Planned replacements are usually cheaper than emergency repairs.",
  },
];

export default function FleetManagementSolutionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Fleet Management Solutions: Keeping Your Business Rolling With Rapid Mobile Tyres"
          breadcrumb="Home / Blog / Fleet Management Solutions"
          subtitle="Why fleet tyre management matters, and how mobile tyre fitting cuts downtime and costs."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/mobile-van-tyre-wheel-replacement-technician.webp"
                alt="Rapid Mobile Tyres technician replacing a wheel on a business van"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                If your business depends on vehicles, tyres are not a small detail. A single flat
                or worn tyre can take a van off the road, delay deliveries, disappoint customers
                and cost you money. For businesses running vans, company cars or service vehicles,
                good tyre management is one of the simplest ways to protect your time and your
                budget.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                This guide explains why fleet tyre management matters, the common problems
                businesses face, and how mobile tyre fitting helps keep your vehicles working.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* why tyres matter */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Why Tyres Matter So Much for Fleets
                </h2>
                <p className="leading-7 text-zinc-600">
                  Every vehicle in your fleet is earning money when it is moving, and costing
                  money when it is not. Tyres affect:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {whyTyresMatter.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong> {item.body}
                    </li>
                  ))}
                </ul>
              </div>

              {/* common problems */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Common Tyre Problems for Business Vehicles
                </h2>
                <p className="leading-7 text-zinc-600">
                  Vans and work vehicles put tyres under more pressure than the average family
                  car. Typical issues include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {commonProblems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* legal */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What the Law Says About Tyres</h2>
                <p className="leading-7 text-zinc-600">In the UK, tyres must meet legal requirements, including:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {legalPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Driving with illegal tyres can lead to penalty points and fines, and the person
                  responsible for the vehicle can be held accountable. Businesses that run
                  vehicles should make regular tyre checks part of their routine. For commercial
                  vehicles, check current guidance from the DVSA and your insurer on inspection
                  and record-keeping duties.
                </p>
              </div>

              {/* downtime */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">The Hidden Cost of Downtime</h2>
                <p className="leading-7 text-zinc-600">
                  Consider what happens when a van gets a flat tyre in a traditional setup:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {downtimeSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  Even a few hours of lost time per incident adds up quickly, especially if you
                  run several vehicles. Mobile tyre fitting shortens this process dramatically.
                </p>
              </div>

              {/* mobile fitting helps */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">How Mobile Tyre Fitting Helps Fleets</h2>
                <p className="leading-7 text-zinc-600">
                  With mobile tyre fitting, the fitter comes to the vehicle, not the other way
                  around. For businesses, that brings real advantages:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {mobileBenefits.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong> {item.body}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres provides{" "}
                  <Link href="/mobile-van-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    mobile van tyre fitting
                  </Link>{" "}
                  across Bristol and surrounding areas, with heavy-duty van tyres fitted at your
                  location to keep your business running. We also fit tyres for{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    cars
                  </Link>{" "}
                  and{" "}
                  <Link href="/suv-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    SUVs
                  </Link>
                  , so mixed vehicle fleets are covered.
                </p>
              </div>

              {/* emergency support */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Emergency Support When a Vehicle Breaks Down
                </h2>
                <p className="leading-7 text-zinc-600">
                  Even with the best planning, tyres sometimes fail. When a van gets a puncture or
                  blowout on the road, speed matters. Our{" "}
                  <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    emergency mobile tyre fitting
                  </Link>{" "}
                  service is available 24/7, with a usual arrival of around 45–60 minutes
                  depending on traffic, availability and your exact location.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Customers have told us how this helps, including drivers of vans and larger
                  vehicles stuck on motorways and busy roads who were back on the move within
                  about an hour.
                </p>
              </div>

              {/* checklist */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Fleet Tyre Management Checklist</h2>
                <p className="leading-7 text-zinc-600">
                  Whether you run two vans or twenty, these habits will save you money and
                  trouble:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>

              {/* choosing tyres */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Choosing the Right Tyres for Business Use
                </h2>
                <p className="leading-7 text-zinc-600">
                  The cheapest tyre is not always the cheapest over time. Consider:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {chooseFactors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  We supply premium brands such as Michelin, Continental, Pirelli, Bridgestone,
                  Goodyear and Dunlop, plus quality budget options such as Nexen, Falken, Avon,
                  Kumho and Nankang. Tell us about your vehicle, tyre size and how it is used, and
                  we will help you choose a suitable option.
                </p>
              </div>

              {/* who benefits */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Who Can Benefit From Mobile Fleet Tyre Support?
                </h2>
                <p className="leading-7 text-zinc-600">Mobile tyre fitting suits many kinds of businesses, including:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {whoBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-5 text-xl font-bold text-zinc-900">Frequently Asked Questions</h2>
                <div className="divide-y divide-zinc-200">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                      <p className="font-semibold text-zinc-900">{faq.question}</p>
                      <p className="mt-2 leading-7 text-zinc-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* final thoughts */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Final Thoughts</h2>
                <p className="leading-7 text-zinc-600">
                  For any business that relies on vehicles, tyre problems are an avoidable cause
                  of lost time and money. Regular checks, sensible planning and quick access to
                  mobile help can keep your vehicles working and your customers happy.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres provides 24/7{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  for vans, cars and SUVs across Bristol and surrounding areas. Check our{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas we cover
                  </Link>{" "}
                  and call us to talk about keeping your business rolling.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Keep Your Fleet Moving</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or book online to talk about fleet tyre support — 24/7 across Bristol and
                the surrounding areas.
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
