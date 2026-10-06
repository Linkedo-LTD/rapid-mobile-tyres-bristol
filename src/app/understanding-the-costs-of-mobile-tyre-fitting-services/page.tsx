import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Costs Explained | Rapid Mobile Tyres",
  description:
    "Wondering how much mobile tyre fitting costs? See what affects the price, how it compares to a garage, and how to get a fair quote in Bristol.",
  alternates: {
    canonical: "https://rapid-tyres.com/understanding-the-costs-of-mobile-tyre-fitting-services",
  },
};

const factors = [
  {
    title: "1. Tyre Brand and Quality",
    body: (
      <>
        <p>This is the biggest driver of price. Tyres generally fall into three bands:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Premium brands such as Michelin, Continental, Pirelli, Bridgestone, Goodyear and
            Dunlop usually cost more but offer strong grip, braking and longevity.
          </li>
          <li>Mid-range brands balance price and performance.</li>
          <li>
            Budget brands such as Nexen, Falken, Kumho and Nankang can be a sensible choice for
            lower mileage or cost-conscious drivers.
          </li>
        </ul>
        <p>A good fitter will explain the options so you can choose based on how you drive, not just on price.</p>
      </>
    ),
  },
  {
    title: "2. Tyre Size and Type",
    body: (
      <p>
        Bigger tyres cost more. A small hatchback tyre will usually be cheaper than a tyre for an
        SUV, 4x4 or van. Low-profile tyres, run-flat tyres and performance tyres are also
        typically more expensive. You can find your size on the sidewall of your tyre — it looks
        something like 205/55 R16 91V. Having this ready when you call speeds up your quote.
      </p>
    ),
  },
  {
    title: "3. Type of Vehicle",
    body: (
      <p>
        Cars, SUVs and vans all have different tyre requirements. Vans often need reinforced
        tyres that carry heavier loads, while SUVs may need larger, tougher tyres. If you need
        help for a work vehicle, take a look at our{" "}
        <Link href="/mobile-van-tyre-fitting-bristol" className="text-orange-500 hover:underline">
          mobile van tyre fitting
        </Link>{" "}
        and{" "}
        <Link href="/suv-tyre-fitting-bristol" className="text-orange-500 hover:underline">
          SUV tyre fitting
        </Link>{" "}
        services.
      </p>
    ),
  },
  {
    title: "4. How Urgent the Job Is",
    body: (
      <p>
        A planned tyre replacement on your driveway is usually simpler to schedule than an
        emergency. Urgent or out-of-hours help, such as a late-night blowout, can involve
        additional cost because a technician needs to be dispatched quickly. If your tyre is worn
        but not yet dangerous, booking a{" "}
        <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
          tyre replacement at home
        </Link>{" "}
        in advance can be the more economical choice, rather than waiting for an{" "}
        <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
          emergency callout
        </Link>
        .
      </p>
    ),
  },
  {
    title: "5. Location and Distance",
    body: (
      <p>
        Where you are matters. Fitters based nearby can reach you faster and may charge less for
        travel than those coming from far away. Rapid Mobile Tyres is based in Shirehampton,
        Bristol, and covers Bristol and surrounding areas. You can check our{" "}
        <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
          areas we cover
        </Link>{" "}
        to see whether you are included.
      </p>
    ),
  },
  {
    title: "6. Number of Tyres",
    body: (
      <p>
        Replacing two or four tyres at once often works out better value per tyre than replacing
        a single tyre, because the technician&apos;s visit and set-up cost is shared. Tyres
        should also ideally be replaced in pairs on the same axle for even handling.
      </p>
    ),
  },
  {
    title: "7. Extras and Additional Services",
    body: (
      <>
        <p>Some jobs need a little more than a straight swap. Possible extras include:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Puncture repair, where it is safe and legal to repair</li>
          <li>Replacement valves or TPMS sensors</li>
          <li>Wheel balancing</li>
          <li>Removal of locking wheel nuts when the key is missing</li>
          <li>Disposal of old tyres</li>
        </ul>
        <p>Ask what is included in the quote so there are no surprises.</p>
      </>
    ),
  },
];

const quoteChecklist = [
  "Vehicle registration number (or make, model and year)",
  "Tyre size from the sidewall",
  "Your location and whether you are at home, work or roadside",
  "How urgent it is",
  "How many tyres you need",
];

const savingTips = [
  "Check tyre pressure monthly. Under-inflated tyres wear faster and use more fuel.",
  "Inspect tread depth. The UK legal minimum is 1.6mm across the central three-quarters of the tyre, but many experts suggest replacing tyres earlier for better wet-weather grip.",
  "Look for damage. Bulges, cracks and embedded objects should be checked quickly.",
  "Rotate and align when needed. This helps tyres wear evenly.",
  "Plan ahead. Replacing a worn tyre before it fails often costs less than an emergency call-out.",
];

const faqs = [
  {
    question: "How much does mobile tyre fitting cost in Bristol?",
    answer:
      "The price depends on your tyre brand, size, vehicle type and how urgent the job is. Call Rapid Mobile Tyres on 07494 247246 with your registration or tyre size for a clear quote.",
  },
  {
    question: "Is mobile tyre fitting more expensive than a garage?",
    answer:
      "Not necessarily. While a garage may show a lower fitting price, you save time, fuel and the risk of driving on a damaged tyre with mobile fitting. For many drivers the overall value is better.",
  },
  {
    question: "Is there a call-out charge for mobile tyre fitting?",
    answer:
      "This varies by provider, location and time of day. Always ask whether a call-out or out-of-hours charge applies before you book.",
  },
  {
    question: "Can you fit tyres at my home or workplace?",
    answer:
      "Yes. Mobile tyre fitters can replace tyres on your driveway, at your workplace or at a safe roadside location, subject to space and safety.",
  },
  {
    question: "How long does mobile tyre fitting take?",
    answer:
      "Once the technician arrives, a single tyre change is often completed in a short time. Arrival time depends on traffic, availability and your location. Our usual arrival is around 45–60 minutes.",
  },
  {
    question: "Do you fit tyres for vans and SUVs?",
    answer: "Yes. We fit tyres for cars, vans and SUVs across Bristol and the surrounding areas.",
  },
];

export default function MobileTyreFittingCostsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Understanding the Costs of Mobile Tyre Fitting Services"
          breadcrumb="Home / Blog / Understanding the Costs of Mobile Tyre Fitting Services"
          subtitle="What affects the price, how it compares to a garage, and how to get a fair quote."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/mobile-tyre-fitting-technician-bristol.webp"
                alt="Rapid Mobile Tyres technician fitting a tyre at a customer's location"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                When a tyre goes flat or wears out, one of the first questions drivers ask is:
                how much does mobile tyre fitting cost? It is a fair question. Mobile tyre fitting
                is convenient, but many people assume that convenience means paying a lot more
                than a garage visit.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                In reality, the cost depends on a handful of clear factors. Once you understand
                them, you can compare quotes properly and avoid surprises. This guide explains
                what goes into the price of a mobile tyre fitting service, how it compares with a
                garage, and how to get a fair quote.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* What is mobile tyre fitting */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What Is Mobile Tyre Fitting?</h2>
                <p className="leading-7 text-zinc-600">
                  Mobile tyre fitting means a technician comes to you in a fully equipped van and
                  fits your new tyre at your home, workplace or a safe roadside location. There is
                  no need to drive on a damaged tyre, book your car into a garage or wait in a
                  reception area.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">It is especially useful if you have:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  <li>A flat tyre or puncture and cannot safely drive</li>
                  <li>A blowout on the road</li>
                  <li>A worn or damaged tyre that needs replacing soon</li>
                  <li>A busy schedule and no time to visit a tyre shop</li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  At Rapid Mobile Tyres in Bristol, we provide{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  24/7 for cars, vans and SUVs, with a usual arrival time of around 45–60 minutes
                  depending on traffic, availability and your location.
                </p>
              </div>

              {/* How much does it cost */}
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
                  How Much Does Mobile Tyre Fitting Cost?
                </h2>
                <p className="leading-7 text-zinc-600">
                  There is no single fixed price, because every job is different. The total is
                  usually made up of three parts:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  <li>The tyre itself, which is the biggest part of the bill</li>
                  <li>The fitting labour, including balancing and valve</li>
                  <li>Any call-out or extra charges, depending on the time and situation</li>
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  As a rough guide, many UK drivers pay anywhere from around £50–£90 for an
                  economy tyre up to £120–£250 or more for a premium tyre on larger or performance
                  vehicles, with fitting often included in a mobile service. These figures are
                  only a general guide. Your actual price will depend on your exact tyre size,
                  brand and situation, so always ask for a full, itemised quote before booking.
                </p>
              </div>

              {/* 7 factors */}
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
                <h2 className="mb-5 text-xl font-bold text-zinc-900">
                  7 Factors That Affect the Cost of Mobile Tyre Fitting
                </h2>
                <div className="space-y-6">
                  {factors.map((factor) => (
                    <div key={factor.title}>
                      <h3 className="mb-2 font-semibold text-zinc-900">{factor.title}</h3>
                      <div className="space-y-2 leading-7 text-zinc-600">{factor.body}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* vs garage */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Mobile Tyre Fitting vs Garage: Which Costs More?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Garages can sometimes advertise a lower headline fitting price, but that is not
                  the full picture. When you compare the real cost, think about:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  <li><strong>Your time:</strong> Driving to the garage, waiting and driving home can take hours.</li>
                  <li><strong>Fuel and travel:</strong> Especially if the nearest garage is some distance away.</li>
                  <li><strong>Time off work:</strong> A mobile fitter can come to your workplace so you do not lose a day.</li>
                  <li><strong>Risk of driving on a damaged tyre:</strong> Driving to a garage on a flat or damaged tyre can harm your wheel and put you at risk.</li>
                  <li><strong>Availability:</strong> Many garages do not offer same-day or 24/7 help.</li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  For many drivers, especially in an emergency, the small difference in price is
                  far outweighed by the convenience and safety of having the fitter come to them.
                </p>
              </div>

              {/* hidden costs */}
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
                  Are There Hidden Costs With Mobile Tyre Fitting?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A trustworthy provider should never leave you guessing. Before you agree to a
                  job, check that the quote clearly states:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  <li>The tyre brand and exact size</li>
                  <li>Whether fitting, balancing and valves are included</li>
                  <li>Whether there is any call-out charge</li>
                  <li>Any extra cost for out-of-hours or emergency work</li>
                  <li>Accepted payment methods</li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  At Rapid Mobile Tyres, we believe in clear and upfront pricing so you know what
                  you will pay before work begins.
                </p>
              </div>

              {/* accurate quote */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How to Get an Accurate Mobile Tyre Fitting Quote
                </h2>
                <p className="leading-7 text-zinc-600">
                  Getting a quote is quick. Have these details ready when you call:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {quoteChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  With this, a fitter can usually give you a price and an estimated arrival time
                  straight away.
                </p>
              </div>

              {/* saving tips */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Tips to Keep Your Tyre Costs Down</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {savingTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* worth paying more */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  When Is It Worth Paying a Little More?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Cheaper is not always better. Tyres are the only part of your car that touches
                  the road, so quality affects braking distance, wet-weather grip and safety. If
                  you drive long distances, carry passengers or tow, a better tyre can be a smart
                  investment. A good fitter will help you balance budget and safety honestly.
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
                  The cost of mobile tyre fitting comes down to the tyre you choose, your vehicle,
                  how urgent the job is and where you are. Once you understand these factors,
                  comparing quotes is simple, and you can see that mobile fitting often delivers
                  better overall value than it first appears once you count your time, travel and
                  safety.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Need a tyre fitted for your{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    car
                  </Link>
                  ,{" "}
                  <Link href="/mobile-van-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    van
                  </Link>{" "}
                  or{" "}
                  <Link href="/suv-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    SUV
                  </Link>
                  ? Rapid Mobile Tyres provides 24/7 mobile tyre fitting across Bristol and the
                  surrounding areas.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Need a Tyre Fitted Fast?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or book online for a clear, no-surprises quote — 24/7 across Bristol and
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
