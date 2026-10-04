import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Car Won't Start? Step-by-Step Jump Start Guide (UK Drivers)",
  description:
    "Car won't start? Follow our step-by-step UK jump start guide, learn the safety rules and warning signs, and find out when to call a 24/7 jump start service.",
};

const flatBatterySigns = [
  "A clicking sound when you turn the key",
  "A slow, labouring engine that struggles to turn over",
  "Dim or flickering dashboard lights and headlights",
  "No power at all, with no lights and no sound",
  "Electrical items such as the radio or central locking behaving oddly",
  "A battery warning light shown earlier",
];

const commonCauses = [
  "Leaving lights or electrics on after switching off the engine",
  "Cold weather, which reduces battery performance, and UK winters are hard on older batteries",
  "Short journeys, which do not give the battery enough time to recharge",
  "An old battery. Most car batteries last several years, and performance drops with age",
  "A faulty alternator that is not charging the battery properly",
  "A vehicle left unused for a long time",
  "A parasitic drain from an electrical fault",
];

const safetyPoints = [
  "Check your handbook first. Some cars have specific jump-start points or instructions, and some should not be jump started the standard way.",
  "Take extra care with modern vehicles. Hybrids, electric vehicles and cars with start-stop systems or sensitive electronics may have special rules. If you are not sure, do not guess, and call for professional help.",
  "Do not jump start a damaged battery. If the battery is cracked, leaking, bulging or frozen, stay away from it.",
  "No smoking, no naked flames, no sparks near the battery.",
  "Keep the leads, clamps and your clothing away from moving parts in the engine bay.",
  "Never lean over the battery while connecting leads.",
  "Make sure the leads are in good condition, with no frayed wires or damaged clamps.",
  "Never attempt it on a motorway hard shoulder or a busy road. Get yourself to safety and call for help.",
];

const whatYouNeed = [
  "A set of jump leads (check they are suitable for your vehicle), or a portable jump starter pack",
  "A second car with a healthy battery if using leads, ideally with a similar battery voltage (most cars are 12V)",
  "Your vehicle handbook",
  "Gloves and eye protection, if you have them",
];

const connectOrder = [
  "Red clamp to the positive (+) terminal of the flat battery.",
  "The other red clamp to the positive (+) terminal of the good battery.",
  "Black clamp to the negative (−) terminal of the good battery.",
  "The other black clamp to a bare, unpainted metal part of the dead car's engine or body, away from the battery and moving parts. This is your earth connection.",
];

const removeOrder = [
  "Black clamp from the earth point on the previously flat car.",
  "Black clamp from the good car's negative terminal.",
  "Red clamp from the good car's positive terminal.",
  "Red clamp from the previously flat car's positive terminal.",
];

const packSteps = [
  "Make sure the pack is charged and suitable for your engine size.",
  "Connect the positive and negative clamps as described in the instructions.",
  "Switch on the pack if required.",
  "Start the car.",
  "Disconnect the clamps in the order the instructions specify.",
];

const wontWorkReasons = [
  "The battery is completely dead or damaged",
  "The alternator is faulty and not charging",
  "The starter motor has failed",
  "There is a fuel, ignition or sensor problem",
  "Connections are corroded or loose",
  "The car starts but dies again shortly afterwards",
];

const afterSuccess = [
  "Do not switch off the engine immediately.",
  "Drive for a while to give the battery a chance to recharge.",
  "Get the battery tested if it has gone flat once. A battery that fails once may fail again.",
  "Check for causes, such as lights left on, a faulty alternator or an old battery.",
  "Replace the battery if it is weak or reaching the end of its life.",
];

const avoidTips = [
  "Switch off lights and electrics when you leave the car.",
  "Take longer drives now and then, as lots of short trips can drain the battery.",
  "Have your battery tested before winter, especially if it is several years old.",
  "Keep terminals clean and tight.",
  "Start the car regularly if it is not used often.",
  "Carry jump leads or a portable jump starter in the boot.",
];

const callInsteadReasons = [
  "You are not confident using jump leads",
  "You do not have a second car or jump leads",
  "You drive a hybrid, electric or modern vehicle and are unsure about the rules",
  "You are in an unsafe or busy location",
  "It is dark, raining or very cold",
  "You are travelling with children or vulnerable passengers",
  "The jump start has already failed",
];

const callReadyInfo = [
  "Your exact location, such as a street, landmark or postcode",
  "Your vehicle make, model and registration",
  "Symptoms, for example clicking, no power or dim lights",
  "Whether the vehicle is petrol, diesel, hybrid or electric",
  "Whether you are in a safe place",
];

const faqs = [
  {
    question: "Can I jump start my own car?",
    answer:
      "Yes, in many cases, if you have working jump leads or a jump starter pack, you follow the correct steps and your vehicle allows it. Always check your handbook, and call for help if you are unsure.",
  },
  {
    question: "Which jump lead goes on first?",
    answer:
      "Typically, the red clamp goes on the flat battery's positive terminal first, then the good battery's positive terminal. Then the black clamp goes on the good battery's negative terminal, and the final black clamp goes on bare metal on the dead car. Always follow your vehicle's instructions.",
  },
  {
    question: "How long should I leave the engine running after a jump start?",
    answer:
      "Many sources suggest driving for around 20 to 30 minutes, but it varies. If the battery keeps going flat, have it tested.",
  },
  {
    question: "Can I jump start a hybrid or electric car?",
    answer:
      "It depends on the model. Many have specific instructions or restrictions, so check your handbook. If you are unsure, call a professional.",
  },
  {
    question: "Why does my car click but not start?",
    answer:
      "A clicking sound when you turn the key is commonly a sign of a flat battery, but it can also point to a starter or connection problem.",
  },
  {
    question: "Will jump starting damage my car?",
    answer:
      "Done correctly, it is usually safe, but incorrect connections can damage electronics or cause injury. This is a good reason to follow the handbook or call a professional.",
  },
  {
    question: "Do you offer a 24/7 jump start service?",
    answer: "Yes. Rapid Mobile Tyres provides jump start assistance 24/7, subject to availability.",
  },
];

export default function JumpStartGuidePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="What to Do If Your Car Won't Start: A Step-by-Step Jump Start Guide for UK Drivers"
          breadcrumb="Home / Blog / Jump Start Guide for UK Drivers"
          subtitle="How to tell it's the battery, how to jump start safely, and when to call for help."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/car-battery-inspection-before-jump-start.webp"
                alt="Rapid Mobile Tyres technician inspecting a car battery before a jump start"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                You turn the key or press the start button and nothing happens, or you hear a
                weak click or a slow, struggling crank. It is a feeling every driver dreads,
                especially on a cold morning or when you are already late.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                In many cases, the cause is simply a flat battery, and a jump start can get you
                going again. This guide explains how to tell whether it is the battery, how to
                jump start a car safely, what to avoid, and when it is better to call for help.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* signs */}
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
                  Why Won&apos;t My Car Start? Common Signs of a Flat Battery
                </h2>
                <p className="leading-7 text-zinc-600">A flat or weak battery often shows up as:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {flatBatterySigns.map((sign) => (
                    <li key={sign}>{sign}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  If the engine cranks normally but will not fire, the problem may be something
                  else, such as fuel, spark or a sensor, and a jump start may not help.
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Common Causes of a Flat Battery</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {commonCauses.map((cause) => (
                    <li key={cause}>{cause}</li>
                  ))}
                </ul>
              </div>

              {/* safety first */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Before You Jump Start: Safety First</h2>
                <p className="leading-7 text-zinc-600">
                  Jump starting is common, but it involves electricity and a lead-acid battery, so
                  take care.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {safetyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* what you need */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What You Will Need</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {whatYouNeed.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* how to - steps */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
                <h2 className="mb-5 text-xl font-bold text-zinc-900">
                  How to Jump Start a Car With Jump Leads: Step by Step
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Step 1: Position the Cars</h3>
                    <p className="leading-7 text-zinc-600">
                      Park the working car close to the dead one so the leads reach, but make sure
                      the vehicles are not touching. Switch off both engines, apply the handbrakes,
                      put both cars in neutral (or park for automatics), and turn off all
                      electrics such as lights, radio and heating.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">
                      Step 2: Open the Bonnets and Find the Batteries
                    </h3>
                    <p className="leading-7 text-zinc-600">
                      Locate both batteries and identify the positive (+, usually red) and
                      negative (−, usually black) terminals. If the battery is hidden, your
                      handbook may show remote jump-start terminals under the bonnet.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">
                      Step 3: Connect the Leads in the Correct Order
                    </h3>
                    <p className="leading-7 text-zinc-600">The order matters. A common sequence is:</p>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                      {connectOrder.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                    <p className="mt-2 leading-7 text-zinc-600">
                      Make sure the clamps are firmly attached and the metal parts of the clamps
                      do not touch each other.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Step 4: Start the Working Car</h3>
                    <p className="leading-7 text-zinc-600">
                      Start the engine of the good car and let it run for a few minutes. This
                      sends charge to the flat battery. Some people gently raise the revs
                      slightly, but follow your handbook where it gives different advice.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Step 5: Try to Start the Dead Car</h3>
                    <p className="leading-7 text-zinc-600">
                      Try starting the flat car. If it does not start after a few attempts, do not
                      keep cranking, as you can overheat the starter motor. Wait a few minutes and
                      try again. If it still does not work, the problem may be more than a flat
                      battery.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">
                      Step 6: Remove the Leads in Reverse Order
                    </h3>
                    <p className="leading-7 text-zinc-600">
                      Once the engine is running, remove the leads in the exact reverse order:
                    </p>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                      {removeOrder.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                    <p className="mt-2 leading-7 text-zinc-600">
                      Be careful not to let the clamps touch each other or any metal while the
                      engine is running.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Step 7: Keep the Engine Running</h3>
                    <p className="leading-7 text-zinc-600">
                      Leave the engine running, and take the car for a drive to help the battery
                      recharge. A drive of around 20 to 30 minutes at a steady pace is a commonly
                      suggested guide, though it depends on the vehicle. Avoid switching the
                      engine off straight away.
                    </p>
                  </div>
                </div>
              </div>

              {/* portable pack */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Using a Portable Jump Starter Pack</h2>
                <p className="leading-7 text-zinc-600">
                  A portable jump starter is a compact battery pack that lets you restart your car
                  without a second vehicle. In general:
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {packSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 leading-7 text-zinc-600">
                  Always follow the manufacturer&apos;s instructions, as different packs work
                  differently.
                </p>
              </div>

              {/* won't work */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">When a Jump Start Won&apos;t Work</h2>
                <p className="leading-7 text-zinc-600">A jump start may not help if:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {wontWorkReasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  If the car starts and then cuts out again soon after you remove the leads, the
                  battery or the charging system probably needs to be checked.
                </p>
              </div>

              {/* after success */}
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
                  What to Do After a Successful Jump Start
                </h2>
                <ol className="list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {afterSuccess.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>

              {/* avoid */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">How to Avoid a Flat Battery</h2>
                <ul className="list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {avoidTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* when to call */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  When to Call a Jump Start Service Instead
                </h2>
                <p className="leading-7 text-zinc-600">
                  Calling for help is often the safest and easiest choice, especially if:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {callInsteadReasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres offers a{" "}
                  <Link href="/jumpstarts" className="text-orange-500 hover:underline">
                    jump start service
                  </Link>{" "}
                  24/7, to help stranded drivers wherever they are, day or night. We cover Bristol
                  and many surrounding areas, so check our{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas we cover
                  </Link>
                  . Response times can vary depending on traffic, availability and your exact
                  location, so call us for an estimate.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If your car won&apos;t start because of a flat tyre rather than a flat battery,
                  we also provide{" "}
                  <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    emergency mobile tyre fitting
                  </Link>{" "}
                  across Bristol.
                </p>
              </div>

              {/* what to tell us */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What to Tell Us When You Call</h2>
                <p className="leading-7 text-zinc-600">To get help quickly, have this information ready:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {callReadyInfo.map((item) => (
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
                  A car that won&apos;t start is stressful, but a flat battery is one of the most
                  common and fixable causes. With the right equipment, a safe approach and the
                  correct steps, a jump start can have you back on the road in minutes. If you are
                  unsure at any point, or the situation is unsafe, call a professional rather than
                  take a risk.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you are stranded in Bristol or nearby, Rapid Mobile Tyres can help, 24/7, for
                  jump starts and{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  alike.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Stranded With a Dead Battery?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or get in touch online for jump start assistance — 24/7 across Bristol
                and the surrounding areas.
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
