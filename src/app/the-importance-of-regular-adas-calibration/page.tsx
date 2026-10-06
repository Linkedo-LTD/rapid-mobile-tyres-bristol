import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Importance of Regular ADAS Calibration | Rapid Mobile Tyres",
  description:
    "Learn what ADAS calibration is, when your car needs it, and how tyres and wheel alignment can affect driver assistance systems. Keep your car's safety tech accurate.",
  alternates: {
    canonical: "https://rapid-tyres.com/the-importance-of-regular-adas-calibration",
  },
};

const adasFeatures = [
  "Autonomous emergency braking (AEB)",
  "Lane departure warning and lane keep assist",
  "Adaptive cruise control",
  "Blind spot monitoring",
  "Traffic sign recognition",
  "Parking sensors and cameras",
  "Rear cross-traffic alert",
  "Driver monitoring systems",
];

const whyMatters = [
  { title: "Safety", body: "If a camera or radar is even slightly misaligned, the system may react late, react wrongly or not react at all. It might fail to detect a vehicle ahead, misjudge a lane position or trigger unnecessary warnings." },
  { title: "Reliability", body: "A system that gives false alerts or works unpredictably can distract drivers, and may lead them to switch features off." },
  { title: "Accuracy", body: "ADAS features are designed to work within tight tolerances. Regular checks keep them performing as designed." },
  { title: "Insurance and Liability", body: "If a vehicle has been repaired and its safety systems are not working as intended, this could raise questions after an accident. Following the manufacturer's repair guidance is important, and it is worth checking with your insurer if you are unsure." },
];

const calibrationTriggers = [
  "Windscreen replacement, especially where a camera is mounted behind the glass",
  "Collision or accident repairs, including minor bumps",
  "Bumper, grille or mirror replacement or repair",
  "Sensor, camera or radar replacement",
  "Wheel alignment adjustments",
  "Suspension repairs or changes, which can alter the car's ride height and angles",
  "Changes to ride height, such as lifting or lowering a vehicle",
  "Software updates or module replacement, where the manufacturer requires it",
  "ADAS warning lights or fault messages on the dashboard",
  "Noticeable changes in how a system behaves",
];

const warningSigns = [
  "A warning light or message related to driver assistance, cameras or sensors",
  "Lane assist or cruise control acting oddly",
  "Unexpected or missing alerts",
  "Automatic braking triggering when it should not, or not responding when it should",
  "Systems that switch off or become unavailable",
  "A recent repair or accident that may have disturbed sensors",
];

const tips = [
  "Follow the manufacturer's guidance in your handbook.",
  "Use a qualified specialist for calibration, with the correct equipment and procedures.",
  "Ask about calibration after windscreen replacement, collision repair or alignment work.",
  "Do not ignore warning lights or fault messages.",
  "Keep sensors and cameras clean. Dirt, snow or ice can block them, and a gentle clean of the windscreen and sensor areas can help.",
  "Do not put stickers or objects in front of cameras or sensors.",
  "Fit the correct tyres, and keep them correctly inflated and in good condition.",
  "Keep records of repairs and calibration for your own reference.",
];

const faqs = [
  {
    question: "What does ADAS stand for?",
    answer:
      "ADAS stands for Advanced Driver Assistance Systems. These are safety and driver-help features such as automatic emergency braking, lane keep assist and adaptive cruise control.",
  },
  {
    question: "Why does ADAS need calibrating?",
    answer:
      "The cameras and sensors must point in precisely the right direction to read the road accurately. Repairs, impacts and alignment changes can shift them slightly, which can affect how well the systems work.",
  },
  {
    question: "When is ADAS calibration needed?",
    answer:
      "Commonly after a windscreen replacement, collision repair, bumper or sensor work, wheel alignment or suspension changes, or when a warning light appears. Check your handbook or ask a specialist.",
  },
  {
    question: "Does changing a tyre affect ADAS calibration?",
    answer:
      "Usually, a like-for-like tyre change does not require calibration, but fitting the wrong size or specification can affect vehicle systems. If alignment or suspension work is also being done, ask whether calibration is needed.",
  },
  {
    question: "Can I calibrate ADAS myself?",
    answer:
      "Calibration normally requires specialist equipment, a controlled setup and manufacturer procedures, so it is usually done by a qualified technician.",
  },
  {
    question: "Do you offer ADAS calibration?",
    answer:
      "No. Rapid Mobile Tyres provides mobile tyre fitting. For calibration, we recommend contacting a qualified specialist or your manufacturer's approved repairer.",
  },
  {
    question: "Can you help with tyres if my car has driver assistance systems?",
    answer: "Yes. We can fit tyres of the correct size and specification for your vehicle. Tell us your registration or tyre size when you call.",
  },
];

export default function AdasCalibrationPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="The Importance of Regular ADAS Calibration"
          breadcrumb="Home / Blog / The Importance of Regular ADAS Calibration"
          subtitle="What ADAS calibration is, when your car needs it, and how tyres and alignment fit in."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/mobile-car-tyre-fitting-bmw-i3-bristol.webp"
                alt="A modern car fitted with driver assistance sensors and cameras"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                Modern cars are packed with safety technology. Cameras, radar and sensors help you
                brake in an emergency, stay in your lane, keep a safe distance and avoid hazards
                you might miss. These are known as ADAS, or Advanced Driver Assistance Systems.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                But these systems only work properly if their sensors are positioned and aligned
                correctly. That is where ADAS calibration comes in. This guide explains what it
                is, why it matters, when your car may need it, and how your tyres and wheel
                alignment fit into the picture.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* what is adas */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What Is ADAS?</h2>
                <p className="leading-7 text-zinc-600">
                  ADAS covers a range of features designed to help the driver and reduce the risk
                  of accidents. Depending on your vehicle, these might include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {adasFeatures.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  These systems rely on forward-facing cameras, radar units, ultrasonic sensors
                  and other hardware fitted around the car, often behind the windscreen, in the
                  bumpers and in the mirrors.
                </p>
              </div>

              {/* what is calibration */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What Is ADAS Calibration?</h2>
                <p className="leading-7 text-zinc-600">
                  ADAS calibration is the process of checking and adjusting these sensors and
                  cameras so they see the road exactly as the manufacturer intended. Even a very
                  small change in angle can affect what a sensor &quot;sees&quot; and how
                  accurately the system reacts, particularly at distance.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Calibration is usually carried out by a specialist using manufacturer-approved
                  equipment and procedures. It generally falls into two types:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  <li>
                    <strong>Static calibration,</strong> carried out in a workshop using targets
                    and measuring equipment while the car is stationary.
                  </li>
                  <li>
                    <strong>Dynamic calibration,</strong> carried out on the road under specific
                    conditions, with diagnostic equipment connected to the car.
                  </li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Some vehicles need one type, some need both. The correct procedure depends on
                  the manufacturer and model.
                </p>
              </div>

              {/* why matters */}
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
                <h2 className="mb-5 text-xl font-bold text-zinc-900">Why Calibration Matters</h2>
                <div className="space-y-4">
                  {whyMatters.map((item) => (
                    <div key={item.title}>
                      <h3 className="mb-1 font-semibold text-zinc-900">{item.title}</h3>
                      <p className="leading-7 text-zinc-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* when needed */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">When Does a Car Need ADAS Calibration?</h2>
                <p className="leading-7 text-zinc-600">
                  Calibration is typically needed after something has changed the position or
                  alignment of a sensor or camera. Common triggers include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {calibrationTriggers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Always follow the manufacturer&apos;s guidance for your vehicle. Requirements
                  vary widely by make and model, so the handbook and a qualified specialist are
                  the best sources.
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Signs Your ADAS May Need Attention</h2>
                <p className="leading-7 text-zinc-600">Watch for:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {warningSigns.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you notice any of these, have the vehicle checked by a qualified technician.
                  Do not rely on a system you suspect may not be working properly.
                </p>
              </div>

              {/* tyres and alignment */}
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
                <h2 className="mb-5 text-xl font-bold text-zinc-900">How Tyres and Wheel Alignment Affect ADAS</h2>
                <p className="mb-5 leading-7 text-zinc-600">
                  ADAS is not only about cameras and radar. Your car&apos;s wheels and tyres also
                  play a part in how these systems perform.
                </p>
                <div className="space-y-5">
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Wheel Alignment</h3>
                    <p className="leading-7 text-zinc-600">
                      Many ADAS systems assume the car is tracking straight and level. If wheel
                      alignment is out, for example after hitting a pothole or kerb, or after
                      suspension work, the car&apos;s &quot;straight ahead&quot; direction may
                      differ from where the sensors are pointing. Manufacturers often require
                      alignment to be correct before calibration, and some alignment work can
                      trigger the need for recalibration.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Tyre Size and Specification</h3>
                    <p className="leading-7 text-zinc-600">
                      Fitting tyres that do not match the manufacturer&apos;s specification can
                      affect things like rolling circumference, speed sensing and load handling,
                      which in turn can affect how systems calculate distance and speed. Always
                      fit tyres of the correct size, load and speed rating for your vehicle.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Tyre Condition and Pressure</h3>
                    <p className="leading-7 text-zinc-600">
                      Worn, damaged or incorrectly inflated tyres can affect grip, braking and
                      handling. Systems such as automatic emergency braking work best when the
                      tyres underneath them are in good condition. Read our guide on the{" "}
                      <Link
                        href="/the-dangers-of-worn-tyres-dont-compromise-your-safety-call-rapid-mobile-tyres"
                        className="text-orange-500 hover:underline"
                      >
                        dangers of worn tyres
                      </Link>{" "}
                      for more on checking tread and condition.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-zinc-900">Uneven Tyre Wear</h3>
                    <p className="leading-7 text-zinc-600">
                      Uneven wear can be a sign of alignment or suspension problems. These issues
                      are worth having checked, especially on cars with driver assistance systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* does fitting tyres require calibration */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Does Fitting New Tyres Require ADAS Calibration?</h2>
                <p className="leading-7 text-zinc-600">
                  In most cases, simply replacing a tyre with the correct size and specification
                  does not by itself require ADAS calibration. Calibration is more often needed
                  after work that affects sensor position or alignment, such as windscreen
                  replacement, collision repair, alignment adjustment or suspension work. However,
                  requirements differ between manufacturers, so check your handbook or ask a
                  qualified specialist if you are unsure.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If your car has had alignment or suspension work done along with a tyre change,
                  ask the workshop whether calibration is needed.
                </p>
              </div>

              {/* tips */}
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
                  Tips for Keeping Your Driver Assistance Systems Reliable
                </h2>
                <ol className="list-decimal space-y-1 pl-5 leading-7 text-zinc-600">
                  {tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ol>
              </div>

              {/* where we fit in */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Where Rapid Mobile Tyres Fits In</h2>
                <p className="leading-7 text-zinc-600">
                  We want to be clear about what we do. Rapid Mobile Tyres provides mobile tyre
                  fitting, not ADAS calibration. We can help with the tyre side of keeping your
                  car safe and performing as it should, including:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  <li>
                    <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                      Mobile tyre fitting
                    </Link>{" "}
                    at your home, workplace or a suitable location
                  </li>
                  <li>
                    Fitting the right tyres for your{" "}
                    <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                      car
                    </Link>{" "}
                    or{" "}
                    <Link href="/suv-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                      SUV
                    </Link>
                    , in the correct size and specification
                  </li>
                  <li>
                    A wide range of premium and budget brands, including Michelin, Continental,
                    Pirelli, Bridgestone, Goodyear, Dunlop, Nexen, Falken, Avon, Kumho and Nankang
                  </li>
                  <li>
                    24/7{" "}
                    <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                      emergency help
                    </Link>{" "}
                    when a tyre fails, with a usual arrival of around 45–60 minutes depending on
                    traffic, availability and your location
                  </li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  For ADAS calibration itself, speak to a qualified calibration specialist or your
                  vehicle manufacturer&apos;s approved repairer. If you are not sure whether your
                  car needs calibration after a repair, they can advise you.
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
                  Driver assistance systems can make driving safer, but only if they are accurate.
                  Regular checks, calibration when needed and good tyre and alignment care all
                  help them do their job. If your car has had repairs that might affect its
                  sensors, or you see a warning light, get it checked by a qualified specialist.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For everything on the tyre side, Rapid Mobile Tyres is here 24/7 across Bristol
                  and surrounding areas. Check our{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas we cover
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Need the Right Tyres Fitted?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or book online for mobile tyre fitting — 24/7 across Bristol and the
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
