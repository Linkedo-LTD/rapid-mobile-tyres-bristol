import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "How Long Can You Drive on a Spare Tyre? UK Safety Rules",
  description:
    "Not sure how far or how fast you can drive on a spare tyre in the UK? Learn the speed limits, legal rules and safety tips, and when to call a mobile fitter.",
};

const spareTypes = [
  {
    title: "Space-Saver (Temporary) Spare",
    body: "This is the thin, narrow wheel found in many modern cars. It saves boot space and weight, but it is designed for short, low-speed use only. It usually has a speed limit label on it.",
  },
  {
    title: "Full-Size Spare",
    body: "A wheel and tyre identical to your normal ones. It can be used much like any other tyre, although it may have been sitting unused for years, so check its condition and pressure.",
  },
  {
    title: "Run-Flat Tyres",
    body: "Some cars have no spare at all and use run-flat tyres instead. These can usually be driven for a limited distance (often up to around 50 miles at up to 50 mph) after a puncture, but again check your handbook.",
  },
  {
    title: "Tyre Repair Kit",
    body: "Many new cars come with a sealant and inflator kit rather than a spare. This is a very short-term fix and often means you should get the tyre properly inspected quickly.",
  },
];

const legalRules = [
  "Your vehicle must be roadworthy and safe to drive.",
  "Your tyres must be suitable for the vehicle and fit for use.",
  "Tyres must have the legal minimum tread depth of 1.6mm across the central three-quarters of the tread, all the way around.",
  "Tyres must be correctly inflated and free from serious cuts, bulges or other damage.",
];

const riskPoints = [
  { label: "Reduced grip", body: "It is narrower, so braking and cornering are weaker, especially in the wet." },
  { label: "Longer stopping distances", body: "Your car will not stop as quickly as normal." },
  { label: "Uneven handling", body: "One wheel is a different size from the others, which can unsettle the car." },
  { label: "Strain on the drivetrain", body: "Mismatched wheel sizes can put stress on the differential and other components over time." },
  { label: "Faster wear and overheating", body: "It is not built for long distances or high speeds." },
  { label: "Warning lights", body: "Your tyre pressure monitor, ABS or stability control may behave differently." },
];

const safetyTips = [
  "Stay at or below the speed on the label, typically 50 mph.",
  "Leave extra space between you and the vehicle in front.",
  "Brake gently and avoid sharp turns or sudden manoeuvres.",
  "Check the pressure. A space-saver often needs a higher pressure than your normal tyres, usually printed on the wheel or in the handbook.",
  "Avoid motorways if you can. On fast roads a slow-moving vehicle can be a hazard, so consider a safer route.",
  "Do not use more than one temporary spare at a time.",
  "Do not carry heavy loads or tow unless the handbook allows it.",
  "Get the damaged tyre replaced or repaired as soon as possible.",
];

const whenToCall = [
  "You are on a busy road or motorway and it is not safe to change the wheel",
  "You do not have a spare, or it is flat, damaged or the wrong size",
  "You cannot loosen the wheel nuts or are missing the locking wheel nut key",
  "You are elderly, travelling with children or simply do not feel safe doing it",
  "The damage is severe, such as a sidewall bulge or blowout",
  "You have a long journey ahead and do not want to risk a temporary spare",
];

const afterSteps = [
  "Plan to replace the damaged tyre quickly. Do not wait weeks.",
  "Have the tyre inspected. Some punctures can be repaired, but not all, especially sidewall damage.",
  "Check your other tyres. If one tyre failed, the others may be worn too.",
  "Check the spare. Put it back in the boot after use only if it is still in good condition, and check its pressure.",
  "Consider replacing in pairs. For even handling and wear, tyres on the same axle should ideally match.",
];

const faqs = [
  {
    question: "How far can you drive on a space-saver spare tyre?",
    answer:
      "It varies by vehicle, but many manufacturers advise no more than about 50 to 100 miles. Always check the label on the spare and your handbook for the exact limit.",
  },
  {
    question: "What is the maximum speed on a spare tyre?",
    answer:
      "For most temporary spares the limit is around 50 mph (80 km/h). It is usually marked on the wheel or tyre.",
  },
  {
    question: "Is it illegal to drive on a space-saver?",
    answer:
      "It is not illegal in itself to use one as intended, but your vehicle must remain safe and roadworthy. Ignoring the manufacturer's speed and distance limits could make your driving unsafe.",
  },
  {
    question: "Can I drive on a spare tyre on the motorway?",
    answer:
      "It is best avoided. A temporary spare has a low speed limit, which can make you a hazard on fast roads. If possible, take a slower route to a safe place and arrange a proper replacement.",
  },
  {
    question: "Can I drive for weeks on a spare tyre?",
    answer:
      "No. A temporary spare is only meant to get you to a place where the tyre can be properly repaired or replaced as soon as possible.",
  },
  {
    question: "Does using a spare tyre affect my insurance?",
    answer:
      "It can if you drive beyond its limits and it contributes to an accident. Check your policy and follow the manufacturer's guidance.",
  },
  {
    question: "Can a mobile tyre fitter replace my tyre if I have no spare?",
    answer:
      "Yes. A mobile fitter can bring and fit a replacement tyre at your home, workplace or a safe roadside location.",
  },
];

export default function SpareTyreRulesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="How Long Can You Drive on a Spare Tyre? UK Safety Rules Explained"
          breadcrumb="Home / Blog / How Long Can You Drive on a Spare Tyre? UK Safety Rules Explained"
          subtitle="Speed limits, legal rules, safety tips, and when to call a mobile fitter instead."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/emergency-flat-car-tyre-roadside.webp"
                alt="A flat car tyre at the roadside before a spare is fitted"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                You have had a flat, put the spare on, and now you are wondering: how long can I
                safely drive on this? It is one of the most common questions drivers ask after a
                puncture, and the answer matters. A spare tyre, especially a temporary one, is
                built to get you to safety, not to carry on as normal.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                This guide explains the typical speed and distance limits, what the UK rules say,
                the risks of driving too far, and what to do next.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* short answer */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">The Short Answer</h2>
                <p className="leading-7 text-zinc-600">
                  For a temporary &quot;space-saver&quot; spare, most manufacturers recommend:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  <li>A maximum speed of around 50 mph (80 km/h)</li>
                  <li>A limited distance, often in the region of 50 to 100 miles, though this varies by vehicle</li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  A full-size spare that matches your other tyres can generally be used as a
                  normal tyre, but it should still be checked and you should replace or repair the
                  damaged tyre as soon as you can.
                </p>
                <p className="mt-4 rounded-xl bg-orange-50 p-4 text-sm leading-6 text-orange-900 ring-1 ring-orange-100">
                  <strong>Important:</strong> these are general guides. The exact limits are
                  printed on the spare&apos;s sidewall or in your vehicle handbook, and you should
                  always follow those figures for your car.
                </p>
              </div>

              {/* types of spare */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-5 text-xl font-bold text-zinc-900">Types of Spare Tyre</h2>
                <p className="mb-5 leading-7 text-zinc-600">
                  Not every spare is the same, so the answer depends on which you have.
                </p>
                <div className="space-y-5">
                  {spareTypes.map((type) => (
                    <div key={type.title}>
                      <h3 className="mb-1 font-semibold text-zinc-900">{type.title}</h3>
                      <p className="leading-7 text-zinc-600">{type.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* UK rules */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Are the UK Rules on Driving With a Spare Tyre?
                </h2>
                <p className="leading-7 text-zinc-600">
                  UK law does not set one fixed &quot;maximum distance&quot; for spare tyres.
                  Instead, the general legal requirements are that:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {legalRules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Driving with illegal or unsafe tyres can lead to penalty points and fines, so it
                  is important not to ignore the manufacturer&apos;s limits on a temporary spare.
                  Using a space-saver beyond its limits can also affect your insurance if it
                  contributes to an accident.
                </p>
              </div>

              {/* why not far */}
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
                <h2 className="mb-5 text-xl font-bold text-zinc-900">
                  Why You Should Not Drive Far on a Space-Saver
                </h2>
                <p className="mb-4 leading-7 text-zinc-600">
                  A temporary spare behaves differently from a normal tyre. Driving on it for too
                  long or too fast can cause problems.
                </p>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-zinc-600">
                  {riskPoints.map((point) => (
                    <li key={point.label}>
                      <strong>{point.label}:</strong> {point.body}
                    </li>
                  ))}
                </ul>
              </div>

              {/* safety tips */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Safety Tips for Driving on a Spare Tyre
                </h2>
                <p className="leading-7 text-zinc-600">
                  If you are using a temporary spare, follow these precautions:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {safetyTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ol>
              </div>

              {/* changing it yourself */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Is It Safe to Change a Tyre Yourself?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Changing a tyre by the roadside can be risky, especially on a busy road, in bad
                  weather, at night or on a hard shoulder or motorway. If you cannot do it safely:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  <li>Move to a safe place if you can, and turn on your hazard lights.</li>
                  <li>Get passengers out and standing well away from traffic.</li>
                  <li>Do not attempt the change on a motorway or on a soft or uneven surface.</li>
                  <li>Call for help instead.</li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  A mobile tyre fitter can come to you and replace the tyre safely, so you do not
                  need to risk the roadside at all.
                </p>
              </div>

              {/* when to call */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  When to Skip the Spare and Call a Mobile Tyre Fitter
                </h2>
                <p className="leading-7 text-zinc-600">
                  Using a spare gets you moving, but it is not always the best option. Consider
                  calling a mobile fitter if:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {whenToCall.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  At Rapid Mobile Tyres, we offer{" "}
                  <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    emergency mobile tyre fitting
                  </Link>{" "}
                  24/7 across Bristol and surrounding areas, with a usual arrival of around 45–60
                  minutes depending on traffic, availability and your location. We can fit a
                  proper replacement tyre where you are, so you do not have to rely on a temporary
                  spare at all.
                </p>
              </div>

              {/* after using spare */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What to Do After Using a Spare Tyre
                </h2>
                <p className="leading-7 text-zinc-600">
                  Once you are safely on your way, here is what to do next:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {afterSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  You can arrange a{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>{" "}
                  so you do not need to take time off or drive to a garage.
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
                  A spare tyre is a short-term fix. A temporary space-saver generally means no
                  more than about 50 mph and a limited distance, and you should get the damaged
                  tyre replaced as soon as you safely can. Always check the limits on your spare
                  and in your handbook.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you are stuck with a flat tyre in Bristol or nearby, Rapid Mobile Tyres can
                  come to you, 24/7, and fit a proper replacement for your{" "}
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
                  </Link>{" "}
                  so you can get back on the road safely. Check our{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas we cover
                  </Link>{" "}
                  to see if you&apos;re included.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Stuck With a Flat Tyre?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or book online for fast mobile tyre fitting — 24/7 across Bristol and the
                surrounding areas.
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
