import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting for Fleet Vehicles: Efficiency & Savings",
  description:
    "See how mobile tyre fitting cuts downtime and running costs for fleet vehicles. Learn how to calculate your savings, with 24/7 support from Rapid Mobile Tyres.",
};

const costComponents = [
  "The tyre and fitting itself",
  "Driver time, spent travelling to a garage, waiting and returning",
  "Vehicle downtime, meaning lost jobs, deliveries or appointments",
  "Fuel and mileage for the trip to the garage",
  "Admin time arranging bookings and following up",
  "Knock-on costs such as rescheduling, late fees or unhappy customers",
  "Emergency premiums when a failure forces an urgent call-out",
];

const efficiencyPoints = [
  {
    title: "Less Downtime",
    body: "Instead of a vehicle being out of action for several hours while it travels to a garage and waits for a slot, the work happens where the vehicle is parked, whether at your depot, yard, workplace or a suitable location.",
  },
  {
    title: "Drivers Stay Productive",
    body: "A driver waiting in a garage reception is a driver not working. With mobile fitting, tyre work can often be done while the vehicle is parked between jobs, overnight or during quieter periods, subject to the fitter's availability and the work needed.",
  },
  {
    title: "No Wasted Mileage",
    body: "There is no need for a detour to a tyre shop. That saves fuel, wear and time.",
  },
  {
    title: "Faster Response to Emergencies",
    body: "When a tyre fails on the road, a vehicle can sit stranded for a long time waiting for help. A mobile service dispatched to the vehicle's location can get it moving again far sooner than arranging a tow or a garage visit.",
  },
  {
    title: "Simpler Planning",
    body: "Mobile fitting makes it easier to plan around your working day, so tyre jobs cause less disruption to schedules.",
  },
];

const calcSteps = [
  "Estimate what one hour of vehicle time is worth to your business. For example, a van that generates £40 per hour of revenue or billable work.",
  "Estimate how long a garage visit takes. Say it takes 3 hours, including travel, waiting and the return trip.",
  "Estimate how long a mobile fitting takes in lost time. Say the vehicle is out of action for 1 hour.",
  "Work out the difference. 3 hours minus 1 hour is 2 hours saved per tyre job.",
  "Multiply. 2 hours × £40 = £80 saved per job in lost working time, before counting fuel and driver time.",
  "Scale it up. If your fleet has 10 tyre jobs a year, that is around £800 in this example. If it has 50, it is around £4,000.",
];

const preventHabits = [
  {
    title: "Keep Tyres Correctly Inflated",
    body: "Under-inflated tyres wear faster, overheat more easily and increase fuel consumption. A quick regular pressure check is one of the cheapest ways to save money.",
  },
  {
    title: "Check Tread and Condition",
    body: null,
  },
  {
    title: "Fix Uneven Wear",
    body: "Uneven wear can point to alignment, balance or suspension problems. Fixing the cause saves replacing tyres early.",
  },
  {
    title: "Replace Before Failure",
    body: "Planned replacements are usually cheaper and less disruptive than emergency call-outs. A slow puncture left alone often turns into a roadside breakdown.",
  },
  {
    title: "Choose the Right Tyre for the Job",
    body: "Vans carrying loads need tyres with the right load rating. Cheaper tyres that wear quickly can cost more over time than a durable one. Think about cost per mile, not just the purchase price.",
  },
  {
    title: "Keep Simple Records",
    body: "Note the tyre size, brand, fitting date and any repairs for each vehicle. This makes it easier to spot recurring problems and plan replacements.",
  },
];

const legalSafetyCosts = [
  "Fines and penalty points for illegal tyres",
  "Failed MOTs and the cost of re-testing",
  "Insurance complications if a tyre-related issue contributes to an accident",
  "Accident costs and the impact on staff and customers",
];

const whatToExpect = [
  "We come to you. Tyres fitted at your premises, workplace or a suitable location, with no garage trip.",
  null, // emergency bullet rendered separately with link
  "Wide choice of tyres. Premium brands such as Michelin, Continental, Pirelli, Bridgestone, Goodyear and Dunlop, plus quality budget options such as Nexen, Falken, Avon, Kumho and Nankang.",
  "Clear pricing. You should know what you will pay before work begins.",
  null, // local coverage bullet rendered separately with link
];

const suitedFor = [
  "Cannot afford regular downtime",
  "Run vans or vehicles that are in daily use",
  "Have drivers who cannot easily leave their work",
  "Want faster help when a tyre fails",
  "Have limited time to arrange garage visits",
  "Run a small fleet or even just one or two work vehicles",
];

const faqs = [
  {
    question: "How does mobile tyre fitting save money for fleets?",
    answer:
      "Mainly by reducing downtime, driver waiting time and wasted mileage. Planned replacements and good tyre habits also cut emergency costs.",
  },
  {
    question: "Can you fit tyres at my depot or workplace?",
    answer:
      "Yes. Mobile tyre fitting can be done at your premises or a suitable location, subject to space and safety. Call us to discuss your needs.",
  },
  {
    question: "Do you fit van tyres?",
    answer: "Yes. We fit tyres for vans, cars and SUVs across Bristol and the surrounding areas.",
  },
  {
    question: "Is emergency help available for work vehicles?",
    answer:
      "Yes. Our emergency service runs 24/7 with a usual arrival of around 45–60 minutes, subject to traffic, availability and your location.",
  },
  {
    question: "How do I work out how much downtime costs my business?",
    answer:
      "Estimate what one hour of vehicle time is worth to you, then multiply by the hours a vehicle is off the road during a typical tyre job. Compare a garage visit with an on-site fitting.",
  },
  {
    question: "How often should fleet tyres be checked?",
    answer:
      "Pressure and visible condition should be checked regularly, ideally weekly, and always before long trips or heavy loads. Replace tyres before they reach the legal minimum tread depth.",
  },
];

export default function MobileTyreFittingFleetSavingsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Mobile Tyre Fitting for Fleet Vehicles: Efficiency and Savings"
          breadcrumb="Home / Blog / Mobile Tyre Fitting for Fleet Vehicles"
          subtitle="Where fleet tyre costs really come from, and how to calculate your savings."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/mobile-van-tyre-pressure-valve-check.webp"
                alt="Rapid Mobile Tyres technician checking a van tyre's pressure valve"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                For any business running vans, company cars or service vehicles, time is money.
                Every hour a vehicle spends off the road is an hour it is not earning, and tyre
                problems are one of the most common reasons for unplanned downtime.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                This article focuses on the numbers: where fleet tyre costs really come from, how
                mobile tyre fitting saves time and money, and how to work out the savings for your
                own business. For a broader look at keeping tyres in good order across a fleet,
                see our guide to{" "}
                <Link
                  href="/fleet-management-solutions-keeping-your-business-rolling-with-rapid-mobile-tyres"
                  className="text-orange-500 hover:underline"
                >
                  fleet tyre management solutions
                </Link>
                .
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* where costs come from */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Where Fleet Tyre Costs Really Come From
                </h2>
                <p className="leading-7 text-zinc-600">
                  Most businesses think of tyre costs as the price of the tyre. In reality, that
                  is only one part. The full cost of a tyre job usually includes:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {costComponents.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  When you add these up, the &quot;cheapest&quot; tyre quote is not always the
                  cheapest option.
                </p>
              </div>

              {/* efficiency case */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
                <h2 className="mb-5 text-xl font-bold text-zinc-900">The Efficiency Case for Mobile Fitting</h2>
                <p className="mb-5 leading-7 text-zinc-600">
                  With mobile tyre fitting, the technician comes to your vehicle. This changes the
                  cost equation in several ways.
                </p>
                <div className="space-y-5">
                  {efficiencyPoints.map((point) => (
                    <div key={point.title}>
                      <h3 className="mb-1 font-semibold text-zinc-900">{point.title}</h3>
                      <p className="leading-7 text-zinc-600">{point.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* calculate savings */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">How to Calculate Your Downtime Savings</h2>
                <p className="leading-7 text-zinc-600">
                  You can estimate the savings for your own fleet with a simple formula. Here is
                  an illustrative example only, using made-up figures. Replace them with your own.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {calcSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  These numbers are only an example, and your actual savings will depend on your
                  business, vehicles and how often tyre work is needed. The point is that time
                  saved often outweighs small differences in tyre price.
                </p>
              </div>

              {/* preventing costs */}
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
                <h2 className="mb-5 text-xl font-bold text-zinc-900">Preventing Costs, Not Just Reducing Them</h2>
                <p className="mb-5 leading-7 text-zinc-600">
                  The biggest savings come from avoiding failures in the first place. Good tyre
                  habits across a fleet can reduce emergencies, extend tyre life and cut fuel use.
                </p>
                <div className="space-y-5">
                  {preventHabits.map((habit) => (
                    <div key={habit.title}>
                      <h3 className="mb-1 font-semibold text-zinc-900">{habit.title}</h3>
                      {habit.body ? (
                        <p className="leading-7 text-zinc-600">{habit.body}</p>
                      ) : (
                        <p className="leading-7 text-zinc-600">
                          Spot wear, cuts and bulges early. Our guide to the{" "}
                          <Link
                            href="/the-dangers-of-worn-tyres-dont-compromise-your-safety-call-rapid-mobile-tyres"
                            className="text-orange-500 hover:underline"
                          >
                            dangers of worn tyres
                          </Link>{" "}
                          explains the legal 1.6mm limit and how to check your tyres.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* legal and safety savings */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Legal and Safety Savings</h2>
                <p className="leading-7 text-zinc-600">
                  Tyre problems can also create costs that have nothing to do with the tyre
                  itself:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {legalSafetyCosts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Businesses are responsible for keeping vehicles roadworthy. For commercial
                  vehicles, check current DVSA guidance on inspection and record-keeping, as
                  requirements vary by vehicle type.
                </p>
              </div>

              {/* what to expect */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What You Can Expect From Rapid Mobile Tyres</h2>
                <p className="leading-7 text-zinc-600">
                  Rapid Mobile Tyres provides mobile tyre fitting for vehicles across Bristol and
                  the surrounding areas, including{" "}
                  <Link href="/mobile-van-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    vans
                  </Link>
                  ,{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    cars
                  </Link>{" "}
                  and{" "}
                  <Link href="/suv-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    SUVs
                  </Link>
                  .
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 leading-7 text-zinc-600">
                  {whatToExpect.map((item, i) => {
                    if (item) return <li key={i}>{item}</li>;
                    if (i === 1)
                      return (
                        <li key={i}>
                          <strong>24/7 emergency help.</strong> Our{" "}
                          <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                            emergency mobile tyre fitting
                          </Link>{" "}
                          service has a usual arrival of around 45–60 minutes, depending on
                          traffic, availability and your exact location.
                        </li>
                      );
                    return (
                      <li key={i}>
                        <strong>Local coverage.</strong> Based in Shirehampton, we cover Bristol
                        and many nearby areas. See our{" "}
                        <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                          areas we cover
                        </Link>
                        .
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you run several vehicles and want to discuss your needs, call us to talk
                  through how we can help.
                </p>
              </div>

              {/* is it right for fleet */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Is Mobile Tyre Fitting Right for Your Fleet?</h2>
                <p className="leading-7 text-zinc-600">It can suit many kinds of businesses, particularly if you:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {suitedFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  For very large or specialist vehicles, such as heavy goods vehicles, always
                  check with the provider that they can handle your specific tyre type and size.
                </p>
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
                  For fleets, the real cost of a tyre job is not just the tyre. It is the time,
                  mileage and lost work around it. Mobile tyre fitting reduces all three, and good
                  tyre habits help you avoid many emergencies altogether. When you add it up, the
                  savings in time and disruption can be significant.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you want to keep your vehicles working and your costs under control, Rapid
                  Mobile Tyres can help, 24/7, with{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  for every vehicle in your fleet.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Keep Your Fleet Moving, for Less</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or book online to arrange mobile tyre fitting for your vehicles — 24/7
                across Bristol and the surrounding areas.
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
