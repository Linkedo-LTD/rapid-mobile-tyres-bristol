import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Flat Tyre in Bristol? Step-by-Step Guide | Rapid Mobile Tyres",
  description:
    "Got a flat tyre in Bristol? Follow our step-by-step guide on staying safe, what to check, and when to call 24/7 emergency mobile tyre fitting for fast help.",
  alternates: {
    canonical: "https://rapid-tyres.com/what-to-do-when-you-get-a-flat-tyre-in-bristol-step-by-step-guide",
  },
};

const warningSigns = [
  "The car pulling to one side",
  "A thumping or flapping sound from a wheel",
  "Vibration through the steering wheel or seat",
  "The steering feeling heavy or unresponsive",
  "A tyre pressure warning light on your dashboard",
  "A tyre that looks visibly low or flat",
];

const step1 = [
  "Do not slam on the brakes. Sudden braking can make the car harder to control.",
  "Grip the steering wheel firmly with both hands.",
  "Ease off the accelerator and let the car slow down gradually.",
  "Steer gently to keep the vehicle straight.",
  "Once you have slowed down, brake lightly and look for a safe place to stop.",
];

const safeSpots = ["A side street or quiet road", "A car park or petrol station", "A lay-by", "A wide, flat verge away from the flow of traffic"];

const makeSceneSafe = [
  "Apply the handbrake and turn off the engine.",
  "Turn the wheels away from the road if you are on a slope or kerb, if it is safe to do so.",
  "Get everyone out safely if you are near traffic, and have passengers stand well away from the road, ideally behind a barrier or on the verge.",
  "Take care of children and pets, keeping them away from moving vehicles.",
  "If it is dark or visibility is poor, make sure your lights are on and wear something bright if you have it.",
];

const motorwayTips = [
  "Do not try to change the wheel on a hard shoulder or a fast road. It is simply too dangerous.",
  "Leave the vehicle by the left-hand doors and move to a safe place behind the barrier, away from the carriageway.",
  "Keep animals in the vehicle if safe, or on a lead well away from the road.",
  "Do not stand behind or in front of your vehicle.",
  "Call for help from a safe spot. Where possible use an emergency phone or your mobile.",
  "If you cannot get out safely, or you feel in danger, call 999.",
];

const checkDamage = [
  "Is the tyre completely flat, or just low?",
  "Can you see a nail, screw or sharp object?",
  "Is there a cut or bulge on the sidewall?",
  "Is the wheel itself bent or cracked?",
];

const mobileFitterReasons = [
  "You are in a busy or unsafe location",
  "You are travelling with children or passengers",
  "It is dark, raining or very cold",
  "You do not have a spare, or the spare is flat or unsuitable",
  "You cannot loosen the wheel nuts or do not have the locking wheel nut key",
  "You do not feel confident changing a wheel",
];

const callReadyInfo = [
  "Your exact location (street name, nearby landmark, postcode, or a pinned location from your phone)",
  "Your vehicle registration number or make, model and year",
  "The tyre size from the sidewall, for example 205/55 R16",
  "Which tyre is flat and a rough idea of the damage",
  "Whether you have a locking wheel nut key",
  "Whether you are in a safe place",
];

const whileYouWait = [
  "Stay in a safe position, away from traffic.",
  "Keep your phone charged and nearby.",
  "Keep your hazard lights on if it is safe to do so.",
  "Do not attempt repairs in a dangerous location.",
  "Stay in contact with your fitter if your situation changes.",
];

const afterFixed = [
  "Check the other tyres. If one has failed, the others may be worn or damaged too.",
  "Check tyre pressure across all four tyres, and the spare if you have one.",
  "Replace the damaged tyre promptly if you used a temporary fix.",
  "Consider replacing tyres in pairs on the same axle for even handling.",
  "Think about why it happened. Potholes, worn tread and under-inflation are common causes.",
];

const commonMistakes = [
  "Driving a long way on a flat tyre. It can destroy the tyre and damage the wheel.",
  "Changing a wheel on a hard shoulder or busy road.",
  "Ignoring a slow puncture. It often gets worse quickly.",
  "Using a temporary spare as a permanent fix.",
  "Forgetting to check the spare's pressure.",
  "Not checking the locking wheel nut key before you need it.",
];

const faqs = [
  {
    question: "What should I do first if I get a flat tyre while driving?",
    answer:
      "Stay calm, hold the steering wheel firmly, ease off the accelerator, switch on your hazard lights and slow down gradually. Look for a safe place to stop. Avoid sudden braking or sharp steering.",
  },
  {
    question: "Can I drive on a flat tyre to get to a garage?",
    answer:
      "It is not recommended. Driving on a flat tyre can damage the wheel, cause loss of control and make a repair impossible. It is safer to stop and get help.",
  },
  {
    question: "Is it safe to change a flat tyre on the motorway?",
    answer:
      "No. Changing a wheel on a hard shoulder or fast road is dangerous. Get out of the vehicle safely, stay behind the barrier and call for help.",
  },
  {
    question: "How long does it take for a mobile tyre fitter to arrive in Bristol?",
    answer:
      "Our usual arrival time is around 45–60 minutes, depending on traffic, availability and your exact location.",
  },
  {
    question: "Can a flat tyre be repaired?",
    answer:
      "Sometimes. Small punctures in the main tread area can often be repaired, but sidewall damage or large cuts usually mean the tyre needs replacing. A fitter can check this for you.",
  },
  {
    question: "What if I do not have a spare tyre?",
    answer:
      "Many modern cars no longer carry a spare. A mobile tyre fitter can bring and fit a replacement tyre wherever you are, so you do not need a spare.",
  },
  {
    question: "Do you offer 24/7 emergency tyre fitting in Bristol?",
    answer:
      "Yes. We provide 24/7 emergency mobile tyre fitting across Bristol and the surrounding areas, subject to technician and tyre availability.",
  },
];

export default function FlatTyreBristolGuidePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="What to Do When You Get a Flat Tyre in Bristol: Step-by-Step Guide"
          breadcrumb="Home / Blog / What to Do When You Get a Flat Tyre in Bristol"
          subtitle="Stay safe, know what to check, and get help fast with this step-by-step guide."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/damaged-tyre-sidewall-emergency-inspection.webp"
                alt="Rapid Mobile Tyres technician inspecting a damaged tyre sidewall"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                A flat tyre can happen to anyone, anywhere, whether you are on the school run,
                commuting across the city or driving home late at night. It is stressful, but if
                you stay calm and follow the right steps, you can stay safe and get moving again
                quickly.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                This guide walks you through exactly what to do when you get a flat tyre in
                Bristol, from the moment you notice it to getting a proper replacement fitted.
              </p>
            </div>

            <div className="mt-6 space-y-6">
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How to Tell You Have a Flat or Failing Tyre
                </h2>
                <p className="leading-7 text-zinc-600">
                  Sometimes a flat tyre is obvious. Other times the signs build up. Watch out for:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {warningSigns.map((sign) => (
                    <li key={sign}>{sign}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  A sudden blowout can be frightening, but the steps below still apply.
                </p>
              </div>

              {/* step 1 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                  1
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Stay Calm and Hold the Steering Wheel Firmly
                </h2>
                <p className="leading-7 text-zinc-600">If a tyre fails while you are driving:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {step1.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* step 2 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                  2
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Turn On Your Hazard Lights and Find a Safe Place to Stop
                </h2>
                <p className="leading-7 text-zinc-600">
                  Switch on your hazard warning lights as soon as you realise there is a problem.
                  Then look for the safest place to pull over, for example:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {safeSpots.map((spot) => (
                    <li key={spot}>{spot}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Try not to stop on a bend, a hill crest or anywhere other drivers cannot see you
                  easily. If you can safely reach a flat, quiet spot, even driving slowly for a
                  very short distance is usually better than stopping in a dangerous location, but
                  avoid driving far on a flat tyre as it can damage the wheel.
                </p>
              </div>

              {/* step 3 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                  3
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Make the Scene Safe</h2>
                <p className="leading-7 text-zinc-600">Once you have stopped:</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {makeSceneSafe.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  Your safety always comes before the car.
                </p>
              </div>

              {/* motorway */}
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
                  If You Are on a Motorway or Main Road
                </h2>
                <p className="leading-7 text-zinc-600">
                  Bristol drivers often use the M5, M32 and busy A-roads, and a flat tyre on a
                  fast road needs extra care.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {motorwayTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  On some roads, there are emergency areas rather than a hard shoulder. Follow the
                  signs and the official guidance, and be aware that rules and road layouts can
                  differ.
                </p>
              </div>

              {/* step 4 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                  4
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Check the Damage</h2>
                <p className="leading-7 text-zinc-600">
                  If you are in a safe place, take a look at the tyre without putting yourself at
                  risk:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {checkDamage.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Sidewall damage cannot normally be repaired, and a damaged tyre may need to be
                  replaced rather than patched. Do not try to drive on a seriously damaged tyre.
                </p>
              </div>

              {/* step 5 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                  5
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Decide How to Get Moving Again</h2>
                <p className="mb-4 leading-7 text-zinc-600">You usually have four options:</p>
                <div className="space-y-5">
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">
                      Option 1: Call a Mobile Tyre Fitter (Often the Safest and Easiest)
                    </h3>
                    <p className="leading-7 text-zinc-600">
                      A mobile tyre fitter comes to you and replaces or repairs the tyre at your
                      location. You do not need to change the wheel yourself, and you do not need
                      to find a garage. This is especially helpful if:
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                      {mobileFitterReasons.map((reason) => (
                        <li key={reason}>{reason}</li>
                      ))}
                    </ul>
                    <p className="mt-2 leading-7 text-zinc-600">
                      Rapid Mobile Tyres provides{" "}
                      <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                        emergency mobile tyre fitting
                      </Link>{" "}
                      24/7 across Bristol and surrounding areas. Our usual arrival time is around
                      45–60 minutes, depending on traffic, availability and your exact location.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Option 2: Use Your Spare Wheel</h3>
                    <p className="leading-7 text-zinc-600">
                      If you are in a safe, flat and quiet location and you know how to change a
                      wheel, you can fit your spare. Remember that a temporary space-saver spare
                      has speed and distance limits. Read our guide on{" "}
                      <Link
                        href="/how-long-can-you-drive-on-a-spare-tyre-uk-safety-rules-explained"
                        className="text-orange-500 hover:underline"
                      >
                        how long you can drive on a spare tyre
                      </Link>{" "}
                      before you set off.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Option 3: Use a Tyre Repair Kit</h3>
                    <p className="leading-7 text-zinc-600">
                      Many modern cars have a sealant and inflator kit instead of a spare. These
                      can be a very short-term fix for small punctures in the tread, but they are
                      not suitable for all damage, and the tyre should be checked soon after.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Option 4: Call Your Breakdown Provider</h3>
                    <p className="leading-7 text-zinc-600">
                      If you have breakdown cover, you can call your provider. Be aware that
                      waiting times vary, and they may only be able to fit your spare rather than
                      replace the tyre.
                    </p>
                  </div>
                </div>
              </div>

              {/* step 6 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                  6
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Information to Have Ready When You Call
                </h2>
                <p className="leading-7 text-zinc-600">
                  To get quick help from a mobile tyre fitter, have these details ready:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {callReadyInfo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  This helps your fitter bring the right tyre and arrive prepared.
                </p>
              </div>

              {/* step 7 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                  7
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">While You Wait</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {whileYouWait.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* step 8 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                  8
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">After the Tyre Is Fixed</h2>
                <p className="leading-7 text-zinc-600">
                  Once you are back on the road, there are a few things to do:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {afterFixed.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you would rather avoid a rush next time, you can arrange a{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>{" "}
                  before a worn tyre fails.
                </p>
              </div>

              {/* common mistakes */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Common Mistakes to Avoid</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {commonMistakes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* where we help */}
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
                  Where We Help Across Bristol and the Surrounding Areas
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid Mobile Tyres is based in Shirehampton, Bristol, and provides{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  across Bristol and many surrounding areas, including places such as Avonmouth,
                  Brislington, Bradley Stoke, Bishopsworth, Bath and Weston-super-Mare. Check our{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas we cover
                  </Link>{" "}
                  to see whether we can reach you.
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
                  A flat tyre does not have to ruin your day. Stay calm, get to a safe place,
                  protect yourself and your passengers, and call for help if you are not
                  comfortable or the situation is unsafe. Remember that your safety is always more
                  important than the car or your schedule.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you get a flat tyre in Bristol or nearby, Rapid Mobile Tyres is here 24/7 to
                  get you back on the road, whether it&apos;s your{" "}
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
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Got a Flat Tyre Right Now?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or book online for fast emergency tyre fitting — 24/7 across Bristol and
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
