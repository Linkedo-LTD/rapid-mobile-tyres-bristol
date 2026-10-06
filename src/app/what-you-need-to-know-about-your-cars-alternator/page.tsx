import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Car Alternator Explained: Signs of Failure & What to Do",
  description:
    "What does an alternator do and how do you know if it's failing? Learn the warning signs, causes, how it differs from the battery, and what to do if you break down.",
  alternates: {
    canonical: "https://rapid-tyres.com/what-you-need-to-know-about-your-cars-alternator",
  },
};

const alternatorJobs = [
  { label: "Charges the battery", body: "so it is ready for the next start" },
  { label: "Powers the car's electrical systems,", body: "such as lights, wipers, heating, radio, infotainment and many electronic controls" },
  { label: "Keeps the electrics steady", body: "with a voltage regulator that controls the charging output" },
];

const warningSigns = [
  "Battery warning light on the dashboard. This light often indicates a charging problem, not necessarily a faulty battery.",
  "Dim or flickering headlights and interior lights, sometimes brighter and dimmer as engine speed changes",
  "Slow or weak electrics, such as windows moving slowly or the radio cutting out",
  "Strange noises, such as whining, growling or grinding from the engine bay",
  "Burning smells, such as hot rubber or electrical odours, which can indicate a slipping belt or overheating",
  "The engine stalling or struggling to run",
  "A battery that keeps going flat, even after a jump start or a new battery",
  "Difficulty starting the car",
  "Other warning lights or odd electrical behaviour",
];

const causes = [
  "Normal wear, since the bearings, brushes and internal parts wear over time",
  "A worn, loose or damaged drive belt",
  "Overheating, which can damage internal components",
  "Oil or coolant leaks that contaminate the alternator",
  "Electrical overload from heavy aftermarket accessories",
  "Faulty diodes or voltage regulator",
  "Damaged wiring or poor connections",
  "A failing battery that makes the alternator work harder than it should",
];

const tellApartClues = [
  "If the car starts normally after a jump start but dies again soon after, the alternator may not be charging.",
  "If the battery light stays on while driving, there may be a charging issue.",
  "If the car struggles to start but runs fine afterwards, the battery may be the weak link.",
  "If a new battery goes flat quickly, the alternator may not be charging properly.",
];

const suspectSteps = [
  "Do not ignore the warning light. It is telling you something is wrong with the charging system.",
  "Reduce electrical load. Switch off non-essential items like the radio, heated seats, heated rear window and air conditioning to save power.",
  "Avoid long journeys. A failing alternator means the car is running on battery power, which will run out.",
  "Head to a safe place or a garage if the car is still running safely. Do not wait for it to stop completely.",
  "Do not switch the engine off until you reach somewhere safe, as it may not restart.",
  "Get it tested by a qualified technician as soon as possible.",
];

const continuedDrivingRisks = [
  "The battery drains and the car eventually stops",
  "Electrical systems such as lights, power steering assistance or engine management may stop working properly",
  "The vehicle could break down in an unsafe place, such as a busy road or motorway",
  "You may risk further damage to the battery and other electrical components",
];

const replacementChecks = [
  "Check the battery and drive belt",
  "Test the charging output",
  "Inspect wiring and connections",
  "Recommend the right repair or replacement for your vehicle",
];

const lastLongerTips = [
  "Have your battery tested regularly, especially before winter. A weak battery makes the alternator work harder.",
  "Check the drive belt for cracks, fraying or looseness during servicing.",
  "Fix oil and coolant leaks promptly.",
  "Avoid overloading the electrics with too many high-power accessories.",
  "Keep the engine bay clean and dry, and avoid spraying water directly onto electrical parts.",
  "Do not ignore warning lights.",
  "Follow your vehicle's service schedule.",
];

const strandedSteps = [
  "Move to a safe place if you can, and switch on hazard lights.",
  "If you are on a motorway or busy road, leave the vehicle by the left-hand side, stand well away behind a barrier, and call for help. Do not try to fix it at the roadside.",
  "Call for assistance rather than repeatedly trying to start the car.",
];

const faqs = [
  {
    question: "What does an alternator do in a car?",
    answer: "It generates electricity while the engine is running, charging the battery and powering the car's electrical systems.",
  },
  {
    question: "What are the signs of a bad alternator?",
    answer: "Common signs include a battery warning light, dim or flickering lights, strange noises, burning smells, stalling, and a battery that keeps going flat.",
  },
  {
    question: "Can a bad alternator drain a battery?",
    answer: "Yes. If the alternator is not charging properly, the battery will not be replenished and will eventually go flat. A faulty alternator can also sometimes drain a battery when the car is off.",
  },
  {
    question: "How long does an alternator last?",
    answer: "It varies, but many last for many years. Lifespan depends on the vehicle, driving conditions and maintenance.",
  },
  {
    question: "Can I drive with a failing alternator?",
    answer: "Only for a very short distance, if at all. The car will run on battery power, and may stop without warning. It is best to get it checked straight away.",
  },
  {
    question: "Will a jump start fix a bad alternator?",
    answer: "No. It may get the engine running, but it does not repair the fault, and the car may die again soon after.",
  },
  {
    question: "Do you repair alternators?",
    answer: "No. Rapid Mobile Tyres provides mobile tyre fitting, jump starts and fuel delivery. If you need an alternator repaired or replaced, contact a garage or auto electrician.",
  },
];

export default function CarAlternatorGuidePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="What You Need to Know About Your Car's Alternator"
          breadcrumb="Home / Blog / What You Need to Know About Your Car's Alternator"
          subtitle="What it does, the warning signs of failure, and what to do if you break down."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/car-running-after-mobile-jump-start.webp"
                alt="Car running again after a mobile jump start"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                Most drivers know that a car has a battery. Far fewer think about the alternator,
                until the day it fails. A faulty alternator can leave you with a flat battery,
                flickering lights, and a car that will not start or even stops while you are
                driving.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                This guide explains what an alternator does, how to spot the warning signs, how
                to tell it apart from a battery problem, and what to do if you are stranded.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* what does alternator do */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What Does an Alternator Do?</h2>
                <p className="leading-7 text-zinc-600">
                  The alternator is a small generator driven by the engine, usually via a belt.
                  While the engine is running, it:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {alternatorJobs.map((job) => (
                    <li key={job.label}>
                      <strong>{job.label}</strong> {job.body}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  In simple terms: the battery starts the car, and the alternator keeps it running
                  and keeps the battery topped up. If the alternator stops doing its job, the car
                  is effectively running on battery power alone, and that will not last long.
                </p>
              </div>

              {/* alternator vs battery */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Alternator vs Battery: What&apos;s the Difference?</h2>
                <p className="leading-7 text-zinc-600">
                  These two parts are closely linked, so problems can look alike.
                </p>
                <div className="mt-4 overflow-x-auto rounded-xl ring-1 ring-zinc-200">
                  <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-zinc-100 text-zinc-900">
                        <th className="p-3 font-semibold"> </th>
                        <th className="p-3 font-semibold">Battery</th>
                        <th className="p-3 font-semibold">Alternator</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">Main job</td>
                        <td className="p-3 text-zinc-600">Stores power and starts the engine</td>
                        <td className="p-3 text-zinc-600">Generates power and recharges the battery while driving</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">When it works</td>
                        <td className="p-3 text-zinc-600">Mainly at start-up and when the engine is off</td>
                        <td className="p-3 text-zinc-600">While the engine is running</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">Typical failure sign</td>
                        <td className="p-3 text-zinc-600">Car will not start, slow cranking</td>
                        <td className="p-3 text-zinc-600">Battery keeps going flat, warning light, electrical problems while driving</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 leading-7 text-zinc-600">
                  A bad battery often causes problems at start-up. A bad alternator often causes
                  problems while driving, or causes a new battery to go flat again and again.
                </p>
              </div>

              {/* warning signs */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Warning Signs of a Failing Alternator</h2>
                <p className="leading-7 text-zinc-600">Watch for:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {warningSigns.map((sign) => (
                    <li key={sign}>{sign}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  One of these signs on its own does not always mean the alternator has failed,
                  but if you notice several, it is time to get it checked.
                </p>
              </div>

              {/* causes */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What Causes an Alternator to Fail?</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {causes.map((cause) => (
                    <li key={cause}>{cause}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Alternators often last for many years, but the lifespan varies by vehicle,
                  driving conditions and how well the car is maintained.
                </p>
              </div>

              {/* tell apart */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">How Can You Tell If It&apos;s the Alternator or the Battery?</h2>
                <p className="leading-7 text-zinc-600">
                  You cannot always be certain without testing, but some clues help:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {tellApartClues.map((clue) => (
                    <li key={clue}>{clue}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  A mechanic or auto electrician can test both the battery and the charging system
                  with the right equipment. As a rough guide, many garages check that the system
                  is charging at a voltage higher than the battery&apos;s resting voltage while
                  the engine is running, but exact values depend on the vehicle, so leave testing
                  to a professional if you are unsure.
                </p>
              </div>

              {/* suspect steps */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What to Do If You Suspect Your Alternator Is Failing</h2>
                <ol className="list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {suspectSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  If your lights are dimming, steering feels heavy or the engine is struggling,
                  pull over somewhere safe and call for help.
                </p>
              </div>

              {/* jump start with bad alternator */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Can You Jump Start a Car With a Bad Alternator?</h2>
                <p className="leading-7 text-zinc-600">
                  Often, yes. A jump start can get the engine running, but it does not fix the
                  underlying problem. If the alternator is not charging the battery, the car may
                  run for a short time and then die again. Repeated jump starts can also put
                  strain on the battery and electrical system.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If your car keeps needing a jump start, get the charging system checked. Our
                  step-by-step{" "}
                  <Link
                    href="/what-to-do-if-your-car-wont-start-a-step-by-step-jump-start-guide-for-drivers-in-the-uk"
                    className="text-orange-500 hover:underline"
                  >
                    jump start guide for UK drivers
                  </Link>{" "}
                  explains how to do it safely and when to call for help.
                </p>
              </div>

              {/* keep driving */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What Happens if You Keep Driving With a Faulty Alternator?</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {continuedDrivingRisks.map((risk) => (
                    <li key={risk}>{risk}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  For safety, do not keep driving for long on a charging fault.
                </p>
              </div>

              {/* replacing or repairing */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Replacing or Repairing an Alternator</h2>
                <p className="leading-7 text-zinc-600">
                  Depending on the fault, the alternator may be repaired, reconditioned or
                  replaced. A professional will usually:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {replacementChecks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Because alternators are linked to the car&apos;s electrical system, replacement
                  is usually best left to a qualified technician. Costs vary widely between
                  vehicles, so ask for a clear quote before work begins.
                </p>
              </div>

              {/* last longer */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Tips to Help Your Alternator Last Longer</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {lastLongerTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* stranded */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What to Do If You&apos;re Stranded</h2>
                <p className="leading-7 text-zinc-600">
                  If your car will not start or has stopped because of a charging problem:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {strandedSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres provides a 24/7{" "}
                  <Link href="/jumpstarts" className="text-orange-500 hover:underline">
                    jump start service
                  </Link>{" "}
                  to help stranded drivers across Bristol and surrounding areas. Please note that
                  we can get you started, but we do not repair alternators, so if a charging fault
                  is the cause you will need a garage or auto electrician to diagnose and fix it.
                  Check our{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas we cover
                  </Link>
                  , and call us for the latest response time. If your problem is a flat or damaged
                  tyre instead, our{" "}
                  <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    emergency mobile tyre fitting
                  </Link>{" "}
                  service is also available 24/7.
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
                  The alternator is a small part with a big job. When it fails, you can quickly
                  lose power, the battery will go flat and you could end up stranded. Learn the
                  warning signs, do not ignore the battery light and get problems checked early.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you are stuck in Bristol or nearby, Rapid Mobile Tyres can help with a jump
                  start, emergency tyre fitting or fuel delivery, 24/7.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Need a Jump Start?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or get in touch online for 24/7 jump start assistance across Bristol and
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
                  Get in Touch
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
