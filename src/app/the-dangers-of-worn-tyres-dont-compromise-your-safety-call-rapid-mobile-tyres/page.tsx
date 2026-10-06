import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dangers of Worn Tyres: Don't Risk Your Safety | Rapid Mobile Tyres",
  description:
    "Worn tyres increase stopping distances and risk of skidding. Learn the UK legal tread limit, how to check your tyres and when to call a mobile fitter in Bristol.",
  alternates: {
    canonical: "https://rapid-tyres.com/the-dangers-of-worn-tyres-dont-compromise-your-safety-call-rapid-mobile-tyres",
  },
};

const treadAffects = [
  "Wet grip and braking",
  "Cornering stability",
  "Resistance to aquaplaning",
  "Traction in mud, snow and slush",
];

const dangers = [
  {
    title: "1. Longer Stopping Distances",
    body: "Worn tyres take longer to stop, especially on wet roads. The less tread there is, the less effectively the tyre can grip, which can make the difference between stopping in time and a collision.",
  },
  {
    title: "2. Increased Risk of Aquaplaning",
    body: "Aquaplaning happens when a layer of water builds up between the tyre and the road, and the tyre loses contact. With shallow tread, the tyre cannot clear water fast enough, so the car can suddenly feel like it is floating, and steering and braking become ineffective.",
  },
  {
    title: "3. Poor Handling and Skidding",
    body: "Worn tyres give you less control in corners, on junctions and when you need to swerve. This is particularly dangerous at higher speeds, in heavy rain or on slippery surfaces.",
  },
  {
    title: "4. Higher Risk of Punctures and Blowouts",
    body: null, // rendered separately to include link
  },
  {
    title: "5. Poor Performance in Cold and Winter Conditions",
    body: "In cold, wet or icy weather, worn tyres have noticeably less grip. This increases the chance of losing control on slippery roads.",
  },
  {
    title: "6. Increased Running Costs",
    body: "Worn or poorly maintained tyres can reduce efficiency, and driving on them until they fail often means an emergency call-out instead of a planned replacement.",
  },
];

const legalPoints = [
  "Tyres must be suitable for the vehicle and correctly inflated.",
  "They must be free of serious cuts, bulges or exposed cords.",
  "Driving with illegal tyres can result in fines of up to £2,500 and 3 penalty points per tyre, so a vehicle with several illegal tyres could face serious penalties.",
  "Illegal tyres can also affect your MOT and your insurance if they contribute to an accident.",
];

const damageChecks = [
  "Cuts, cracks or splits, especially on the sidewall",
  "Bulges or bubbles, a sign of internal damage",
  "Embedded objects such as nails or stones",
  "Cracking in the rubber, which can come from age",
];

const unevenWearSigns = [
  "Wear on both outer edges often suggests under-inflation.",
  "Wear down the centre can suggest over-inflation.",
  "Wear on one edge only can point to wheel alignment problems.",
  "Patchy or scalloped wear may indicate suspension or balance problems.",
];

const warningSigns = [
  "Tread near or below the legal minimum",
  "Cracks, bulges or cuts",
  "Vibration through the steering wheel or seat",
  "The car pulling to one side",
  "A tyre that keeps losing pressure",
  "Reduced grip, especially in the wet",
  "A tyre pressure warning light",
];

const replaceBenefits = [
  "Safer driving in all conditions",
  "No emergency call-outs or roadside stress",
  "Fewer surprises and easier budgeting",
  "Better handling and braking",
  "No risk of fines for illegal tyres",
];

const faqs = [
  {
    question: "What is the legal tyre tread depth in the UK?",
    answer:
      "The legal minimum for cars is 1.6mm across the central three-quarters of the tyre, around its whole circumference.",
  },
  {
    question: "How can I check my tyre tread at home?",
    answer:
      "Use the 20p test: place a 20p coin in the main tread grooves. If the outer band of the coin is visible, the tyre may be at or near the legal limit and should be checked. You can also look at the tread wear indicators in the grooves.",
  },
  {
    question: "When should I replace my tyres?",
    answer:
      "You must replace them before they drop below 1.6mm, but many experts recommend replacing them earlier, at around 3mm, for better wet-weather safety.",
  },
  {
    question: "What is the penalty for driving with illegal tyres?",
    answer:
      "You can face fines of up to £2,500 and 3 penalty points per illegal tyre. It can also affect your insurance and MOT.",
  },
  {
    question: "Do tyres wear out with age even if there is plenty of tread?",
    answer: "Yes. Rubber degrades over time. Have older tyres inspected, and check the age code on the sidewall.",
  },
  {
    question: "Can I just replace one worn tyre?",
    answer:
      "Sometimes, but it depends on the condition of the others and your vehicle. A fitter can advise you, as replacing in pairs on the same axle is often recommended.",
  },
  {
    question: "Can you replace worn tyres at my home in Bristol?",
    answer:
      "Yes. We provide mobile tyre fitting at your home, workplace or a suitable location across Bristol and surrounding areas.",
  },
];

export default function DangersOfWornTyresPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="The Dangers of Worn Tyres: Don't Compromise Your Safety"
          breadcrumb="Home / Blog / The Dangers of Worn Tyres"
          subtitle="Why tread matters, the UK legal limit, and how to check your tyres before they become a risk."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/mobile-tyre-tread-depth-inspection.webp"
                alt="Rapid Mobile Tyres technician checking tyre tread depth"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                Your tyres are the only part of your car that touches the road. Each tyre&apos;s
                contact patch is roughly the size of the palm of your hand, and that small area
                handles your steering, braking, acceleration and grip. When tyres wear down, they
                cannot do that job properly.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Many drivers put off replacing tyres because they still seem &quot;fine&quot;, or
                because the cost is off-putting. But driving on worn tyres puts you, your
                passengers and other road users at risk, and it can land you with a fine. This
                guide explains the dangers, the UK rules, how to check your tyres, and when to
                replace them.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* why tread matters */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Why Tread Matters</h2>
                <p className="leading-7 text-zinc-600">
                  The grooves in your tyre tread have an important job: they channel water away
                  from the contact patch so the rubber can grip the road. As the tread wears down,
                  the tyre can shift less water, which affects:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {treadAffects.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  In the UK, where wet roads are common for much of the year, tread depth matters
                  a great deal.
                </p>
              </div>

              {/* main dangers */}
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
                <h2 className="mb-5 text-xl font-bold text-zinc-900">The Main Dangers of Worn Tyres</h2>
                <div className="space-y-5">
                  {dangers.map((danger) => (
                    <div key={danger.title}>
                      <h3 className="mb-1 font-semibold text-zinc-900">{danger.title}</h3>
                      {danger.body ? (
                        <p className="leading-7 text-zinc-600">{danger.body}</p>
                      ) : (
                        <p className="leading-7 text-zinc-600">
                          As tyres wear, the rubber between the road and the internal structure
                          gets thinner. This makes them more vulnerable to punctures and, in some
                          cases, sudden failure. A blowout at speed can be frightening and
                          dangerous. If it happens, read our guide on{" "}
                          <Link
                            href="/what-to-do-when-you-get-a-flat-tyre-in-bristol-step-by-step-guide"
                            className="text-orange-500 hover:underline"
                          >
                            what to do when you get a flat tyre in Bristol
                          </Link>
                          .
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* legal tread */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What Is the UK Legal Tread Depth?</h2>
                <p className="leading-7 text-zinc-600">
                  In the UK, the legal minimum tread depth for cars is 1.6mm across the central
                  three-quarters of the tyre, around its entire circumference.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">Other legal points to know:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {legalPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Requirements may differ for certain vehicle types, so check current official
                  guidance if you drive a van, motorhome or commercial vehicle.
                </p>
              </div>

              {/* don't wait */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Why You Should Not Wait Until 1.6mm</h2>
                <p className="leading-7 text-zinc-600">
                  The legal limit is a minimum, not a recommendation. Many tyre experts and safety
                  organisations advise replacing tyres earlier, at around 3mm, because wet-weather
                  braking performance drops off noticeably as the tread wears down. If you drive a
                  lot in wet or wintry conditions, or at higher speeds, earlier replacement is a
                  sensible safety choice.
                </p>
              </div>

              {/* how to check */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="mb-5 text-xl font-bold text-zinc-900">How to Check Your Tyres</h2>
                <p className="mb-5 leading-7 text-zinc-600">
                  You do not need special equipment. Regular quick checks can catch problems
                  early.
                </p>
                <div className="space-y-5">
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">1. The 20p Test</h3>
                    <p className="leading-7 text-zinc-600">
                      Place a 20p coin into the main grooves of the tyre tread. If the outer band
                      of the coin is hidden, your tread is above the legal limit at that spot. If
                      you can see the outer band, your tread may be at or near the limit, and you
                      should get the tyre checked straight away. Test several points across and
                      around the tyre.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">2. Tread Wear Indicators</h3>
                    <p className="leading-7 text-zinc-600">
                      Most tyres have small raised bars in the grooves, called tread wear
                      indicators. When the tread has worn down level with these bars, the tyre is
                      at or near the legal minimum.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">3. Check for Damage</h3>
                    <p className="leading-7 text-zinc-600">Look for:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                      {damageChecks.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">4. Look for Uneven Wear</h3>
                    <p className="leading-7 text-zinc-600">Uneven wear can be a sign of other issues:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                      {unevenWearSigns.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-2 leading-7 text-zinc-600">
                      If you see uneven wear, get your tyres and alignment checked.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">5. Check the Pressure</h3>
                    <p className="leading-7 text-zinc-600">
                      Check your tyre pressure regularly, including the spare if you have one. The
                      correct pressure is listed in your vehicle handbook or on a label inside the
                      door or fuel flap. Under-inflated tyres wear faster, overheat more easily
                      and can affect handling.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">6. Check the Age</h3>
                    <p className="leading-7 text-zinc-600">
                      Tyres degrade with age, even if they have plenty of tread left. The date of
                      manufacture is shown on the sidewall as a four-digit code (week and year).
                      Many manufacturers and experts advise having older tyres inspected regularly
                      and replacing them when they reach around ten years, although the right time
                      depends on condition and storage. If you are unsure, ask a professional to
                      check.
                    </p>
                  </div>
                </div>
              </div>

              {/* warning signs */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Warning Signs That Your Tyres Need Attention
                </h2>
                <p className="leading-7 text-zinc-600">Contact a tyre fitter if you notice:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {warningSigns.map((sign) => (
                    <li key={sign}>{sign}</li>
                  ))}
                </ul>
              </div>

              {/* replace before fail */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Why Replace Tyres Before They Fail?</h2>
                <p className="leading-7 text-zinc-600">
                  Replacing tyres on your own schedule, rather than waiting for a failure, has
                  real benefits:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {replaceBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you only need one tyre replaced, it is also worth asking your fitter about
                  whether replacing in pairs on the same axle makes sense, for even handling.
                </p>
              </div>

              {/* mobile fitting */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Don&apos;t Have Time? Let Us Come to You</h2>
                <p className="leading-7 text-zinc-600">
                  Many drivers delay replacing tyres because it means booking a garage, losing
                  time and arranging transport. With mobile tyre fitting, that excuse goes away.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres provides{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  at your home, workplace or a suitable location across Bristol and the
                  surrounding areas. You can book a{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>{" "}
                  at a time that suits you, with no garage trip. We fit tyres for{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    cars
                  </Link>
                  ,{" "}
                  <Link href="/suv-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    SUVs
                  </Link>{" "}
                  and{" "}
                  <Link href="/mobile-van-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    vans
                  </Link>
                  , and supply premium brands such as Michelin, Continental, Pirelli, Bridgestone,
                  Goodyear and Dunlop, as well as quality budget options such as Nexen, Falken,
                  Avon, Kumho and Nankang.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If your tyre has already failed or you need help urgently, our{" "}
                  <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    emergency mobile tyre fitting
                  </Link>{" "}
                  service runs 24/7 with a usual arrival of around 45–60 minutes, depending on
                  traffic, availability and your location. You can also check our{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas we cover
                  </Link>
                  .
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
                  Worn tyres are one of the most avoidable safety risks on the road. Longer
                  stopping distances, a higher risk of aquaplaning, poor handling and the chance
                  of fines are all good reasons not to put off a replacement. Check your tyres
                  regularly, replace them in good time, and do not wait for a failure to force the
                  issue.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If your tyres are worn, damaged or you are unsure, Rapid Mobile Tyres can come
                  to you, 24/7, to check and replace them safely.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Think Your Tyres Need Checking?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or book online to arrange mobile tyre fitting — 24/7 across Bristol and
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
