import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL = "https://rapid-tyres.com/safety-first-the-importance-of-timely-tyre-replacements";
const OG_IMAGE = "https://rapid-tyres.com/worn-cracked-tyre-tread-closeup.webp";
const TITLE = "When to Replace Tyres: UK Safety Guide | Rapid Tyres";
const DESCRIPTION =
  "Learn when to replace tyres, how to check tread depth, spot tyre damage, use the 20p test, and stay safe on UK roads with this simple guide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1439, height: 810, alt: "Close-up of a worn, cracked tyre tread" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const gripReasons = [
  {
    title: "Better Road Grip",
    body: "Good tyre tread helps the tyre hold the road. This gives you better control when turning, braking, and driving on wet roads. When the tread becomes too low, the tyre may lose grip more easily. This can make the car feel less stable.",
  },
  {
    title: "Safer Braking in Wet Weather",
    body: "Tyre tread helps move water away from under the tyre. Worn tyres cannot do this as well. This means the car may take longer to stop on wet roads, and the risk of losing grip can increase.",
  },
  {
    title: "Reducing the Risk of Tyre Failure",
    body: "Cuts, cracks, bulges, and other damage can make a tyre unsafe. These problems should not be ignored. Checking tyres regularly and replacing them when needed can help reduce the chance of sudden tyre problems while driving.",
  },
];

const warningSignCards = [
  {
    title: "Low Tyre Tread",
    body: "Low tread is one of the most common signs of worn tyres. The tread helps your tyres grip the road and move water away in wet weather. If the tread is very low, the tyre may not perform safely. You should check the tread often, especially before long trips.",
  },
  {
    title: "Cracks and Cuts",
    body: "Look closely at the tread and sidewalls for cracks or cuts. Small marks may not always be serious, but deeper damage should be checked by a tyre professional. Do not ignore damage that looks wide, deep, or unusual.",
  },
  {
    title: "Bulges in the Sidewall",
    body: "A bulge on the tyre sidewall can be a serious warning sign. It may mean the inside of the tyre has been damaged. If you see a bulge, avoid driving on the tyre until it has been checked.",
  },
  {
    title: "Uneven Tyre Wear",
    body: "Sometimes one part of the tyre wears faster than another. This may happen because of tyre pressure, wheel alignment, or suspension problems. Uneven wear can reduce grip and may mean the tyre needs replacing.",
  },
  {
    title: "Frequent Pressure Loss",
    body: "If one tyre keeps losing air, there may be a puncture, damaged valve, or another problem. A tyre that loses pressure often should be inspected instead of being topped up again and again.",
  },
];

const checkSteps = [
  {
    title: "Look at the Tread",
    body: "Check the tread on all four tyres. Look for areas that seem very smooth, worn, or different from the rest of the tyre. Try to check more than one part of each tyre, because wear may not be the same all around.",
  },
  {
    title: "Try the 20p Tyre Test",
    body: "You can use a 20p coin for a quick tread check. Put the coin into the main tread grooves. If the outer band of the coin is hidden, the tread is usually above the legal limit. If you can see the outer band, check the tyre more carefully with a proper tread gauge or ask a tyre professional. The 20p test is only a quick guide. It does not replace an accurate tread measurement.",
    image: {
      src: "/20p-coin-tyre-tread-test.webp",
      alt: "Using a 20p coin to check tyre tread depth",
    },
  },
  {
    title: "Check for Cuts, Cracks and Bulges",
    body: "Look at the sidewalls and tread area for visible damage. Check for cuts, cracks, lumps, or bulges. If you see anything unusual, do not ignore it. Some damage can make a tyre unsafe even when the tread still looks good.",
  },
  {
    title: "Check Tyre Pressure",
    body: "Check the pressure when the tyres are cold. Use the pressure level recommended by your vehicle manufacturer. The correct pressure can usually be found in the car manual, inside the fuel flap, or near the driver's door.",
    image: {
      src: "/tyre-pressure-gauge-check-driveway.webp",
      alt: "Checking car tyre pressure with a gauge on a home driveway",
    },
  },
  {
    title: "Check for Uneven Wear",
    body: "Look at the inside, middle, and outside edges of each tyre. If one area is wearing faster, there may be a pressure, alignment, or suspension issue. If the wear looks unusual, get the tyre and vehicle checked.",
  },
];

const checklistItems = [
  "Check that the tyre tread is not too low.",
  "Look for cuts, cracks, or splits.",
  "Check the sidewalls for bulges.",
  "Make sure tyre pressure is correct.",
  "Look for uneven wear across the tyre.",
  "Watch for tyres that keep losing pressure.",
  "Check older tyres for signs of damage.",
  "Pay attention to vibration or unusual handling.",
  "Get damaged tyres checked by a professional.",
  "Replace tyres when they are no longer safe.",
];

const drivingRisks = [
  "Driving on worn tyres can make your car harder to control. The less tread a tyre has, the less grip it may have on the road.",
  "This can be a bigger problem in rain. Water can sit between the tyre and the road, which may reduce grip and make braking less safe.",
  "Worn or damaged tyres can also be more likely to develop problems while driving. Cracks, bulges, cuts, or very low tread should never be ignored.",
  "There can also be legal problems if your tyres do not meet UK safety rules. The Highway Code says tyres must have the correct tread depth and be free from certain defects.",
];

const faqs = [
  {
    question: "When should I replace my tyres?",
    answer:
      "Replace your tyres when the tread is too low, the tyre is damaged, or it is no longer safe to use. Cracks, bulges, deep cuts, and uneven wear are all warning signs.",
  },
  {
    question: "What is the legal tyre tread depth in the UK?",
    answer:
      "For cars and light vans, the legal minimum tread depth is 1.6 mm across the central three-quarters of the tyre and around its full circumference.",
  },
  {
    question: "How can I check my tyre tread at home?",
    answer:
      "You can use a tread depth gauge for an accurate check. A 20p coin can also give you a quick idea of whether the tread may be getting low.",
  },
  {
    question: "Is it safe to drive with cracked tyres?",
    answer:
      "It depends on how serious the cracks are. Deep or widespread cracking should be checked by a tyre professional before you keep driving.",
  },
  {
    question: "Can a punctured tyre always be repaired?",
    answer:
      "No. Some small punctures may be repairable, but sidewall damage or serious tyre damage may mean the tyre needs replacing.",
  },
  {
    question: "How often should I check my tyres?",
    answer:
      "Check your tyres regularly and before long journeys. Look at tread, pressure, wear, and any visible damage.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Safety First: The Importance of Timely Tyre Replacements",
  description: DESCRIPTION,
  image: OG_IMAGE,
  author: { "@type": "Organization", name: siteConfig.name },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: { "@type": "ImageObject", url: "https://rapid-tyres.com/rapid-mobile-tyres-open-graph.webp" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SafetyFirstTyreReplacementsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          title="Safety First: The Importance of Timely Tyre Replacements"
          breadcrumb="Home / Blog / Safety First: The Importance of Timely Tyre Replacements"
          subtitle="A practical tyre safety guide for UK drivers — know the warning signs, check your tread, and stay legal."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/worn-cracked-tyre-tread-closeup.webp"
                alt="Close-up of a worn, cracked tyre tread in a workshop"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                Knowing when to replace tyres is important for keeping your car safe on the road.
                Good tyres help your car grip the road, turn safely, and stop when you need it to.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Tyres wear down over time. They can also get cuts, cracks, bulges, or uneven wear.
                If these problems are ignored, the tyre may become unsafe to use. UK drivers should
                check their tyres often, not only when there is a problem. Simple checks can help
                you spot worn or damaged tyres before they become a bigger risk.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                In this guide, you will learn the main signs that tyres need replacing, how to
                check tyre tread at home, and what the legal tyre tread depth is in the UK. You
                will also learn when a tyre may be repaired and when replacement is the safer
                choice.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* why timely replacement matters */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Why Timely Tyre Replacement Is Important
                </h2>
                <p className="leading-7 text-zinc-600">
                  Replacing worn or damaged tyres on time helps keep your car safer. Your tyres
                  are the only part of the car that touches the road, so their condition matters
                  every time you drive. Old or worn tyres may not grip the road as well, which can
                  make driving harder, especially in rain or when you need to stop quickly.
                </p>
                <div className="mt-5 space-y-4">
                  {gripReasons.map((reason) => (
                    <div key={reason.title}>
                      <h3 className="font-semibold text-zinc-900">{reason.title}</h3>
                      <p className="mt-1 leading-7 text-zinc-600">{reason.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* how to know tyres need replacing */}
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
                  How to Know When Your Tyres Need Replacing
                </h2>
                <p className="leading-7 text-zinc-600">
                  There are several clear signs tyres need replacing. Some problems are easy to
                  see, while others may need a closer check.
                </p>
                <div className="mt-5 space-y-4">
                  {warningSignCards.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1 leading-7 text-zinc-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* legal tread depth */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Is the Legal Tyre Tread Depth in the UK?
                </h2>
                <p className="leading-7 text-zinc-600">
                  For cars and light vans in the UK, the legal minimum tyre tread depth is{" "}
                  <strong>1.6 mm</strong>. This tread must cover the central three-quarters of the
                  tyre and continue around the full tyre. Your tyres must also be free from
                  serious cuts, bulges, and other defects. You are responsible for making sure
                  your vehicle is safe to drive, even if it already has a valid MOT.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Drivers should check tyre tread regularly instead of waiting until it is very
                  low. A simple visual check can help, but a proper tread depth gauge gives a more
                  accurate reading.
                </p>
                <h3 className="mt-5 font-semibold text-zinc-900">
                  Legal Does Not Always Mean Ideal Condition
                </h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  A tyre can still have 1.6 mm of tread and show other signs of damage. Cracks,
                  bulges, uneven wear, or pressure problems can still make it unsafe. This is why
                  you should check the whole tyre, not just the tread depth. If you are unsure
                  about the condition of a tyre, have it inspected before driving further.
                </p>
              </div>

              {/* practical guide */}
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
                  Practical Guide: How to Check Your Tyres at Home
                </h2>
                <p className="leading-7 text-zinc-600">
                  You do not need special tools to do a basic tyre check. A few simple steps can
                  help you spot problems early.
                </p>
                <div className="mt-5 space-y-6">
                  {checkSteps.map((step, i) => (
                    <div key={step.title}>
                      <h3 className="font-semibold text-zinc-900">
                        Step {i + 1} — {step.title}
                      </h3>
                      <p className="mt-1 leading-7 text-zinc-600">{step.body}</p>
                      {step.image && (
                        <div className="relative mt-3 aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                          <Image
                            src={step.image.src}
                            alt={step.image.alt}
                            fill
                            sizes="(min-width: 768px) 672px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* tyre age */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Does Tyre Age Matter?</h2>
                <p className="leading-7 text-zinc-600">
                  Yes, tyre age matters. A tyre can still have good tread but become weaker as it
                  gets older. Rubber can slowly dry out, harden, or crack over time. Heat,
                  weather, sunlight, and how the car is stored can all affect the tyre.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  You can usually find the tyre&apos;s manufacturing date on the sidewall. It is
                  shown as a four-digit code, with the first two numbers showing the week and the
                  last two showing the year.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Tyre age alone does not always tell you if a tyre must be replaced. The full
                  condition of the tyre matters too. Check older tyres for cracks, damage, uneven
                  wear, and changes in the rubber. If you are not sure about an older tyre, ask a
                  tyre professional to inspect it. Regular checks are more important than waiting
                  for the tyre to look completely worn out.
                </p>
              </div>

              {/* repair vs replace */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Can the Tyre Be Repaired, or Does It Need Replacing?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Not every damaged tyre needs to be replaced. Some punctures can be repaired, but
                  it depends on where the damage is and how serious it is.
                </p>
                <h3 className="mt-4 font-semibold text-zinc-900">When a Repair May Be Possible</h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  A small puncture in the main tread area may sometimes be repairable. The tyre
                  must also be in good condition and have enough tread left. A tyre professional
                  should always inspect the damage first. This helps make sure the repair is safe.
                </p>
                <h3 className="mt-4 font-semibold text-zinc-900">When Replacement May Be Needed</h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  A tyre may need replacing if it has serious sidewall damage, a bulge, deep cuts,
                  or very low tread. Replacement may also be the safer choice if the tyre has
                  several problems or has been badly damaged. If you cannot safely drive to a
                  garage, a mobile tyre fitting service can help replace the tyre where your car
                  is parked.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Never guess if a damaged tyre is safe. If you are unsure, have it checked before
                  driving again.
                </p>
              </div>

              {/* keep driving on worn tyres */}
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
                  What Happens If You Keep Driving on Worn Tyres?
                </h2>
                <div className="space-y-3">
                  {drivingRisks.map((risk) => (
                    <p key={risk} className="leading-7 text-zinc-600">
                      {risk}
                    </p>
                  ))}
                </div>
                <p className="mt-4 leading-7 text-zinc-600">
                  The safest choice is to check your tyres often and replace them before they
                  become unsafe. This is better than waiting for a tyre problem to happen on the
                  road.
                </p>
              </div>

              {/* tyre problem while driving */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What to Do If You Notice a Tyre Problem While Driving
                </h2>
                <p className="leading-7 text-zinc-600">
                  If you notice a tyre problem while driving, stay calm and slow down carefully.
                  Avoid sudden steering or hard braking if you can.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Find a safe place to stop away from moving traffic. Turn on your hazard lights
                  if needed and make sure the car is in a safe position.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Do not keep driving if the tyre looks badly damaged, flat, or unsafe. Driving
                  further can make the damage worse and may put you at risk. If you are on a
                  motorway, move to a safe place where possible and do not try to repair or change
                  a tyre in a dangerous location.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If the tyre cannot be used safely, an{" "}
                  <Link
                    href="/emergency-mobile-tyre-fitting-bristol"
                    className="text-orange-500 hover:underline"
                  >
                    emergency mobile tyre fitting
                  </Link>{" "}
                  service can come to your location and help with a replacement. The main goal is
                  simple: stop safely, avoid extra damage, and get professional help when needed.
                </p>
              </div>

              {/* checklist */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Simple Tyre Safety Checklist for UK Drivers
                </h2>
                <p className="leading-7 text-zinc-600">
                  A quick tyre check can help you find problems before they become serious. Try to
                  check your tyres regularly and before long journeys.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {checklistItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  These checks only take a few minutes, but they can make a big difference. If
                  something does not look right, do not ignore it. A proper inspection can help
                  you decide whether the tyre can still be used, repaired, or needs replacing.
                </p>
              </div>

              {/* getting a worn tyre replaced */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Getting a Worn Tyre Replaced Without Driving to a Garage
                </h2>
                <p className="leading-7 text-zinc-600">
                  If a tyre is badly worn or damaged, driving to a garage may not be the safest
                  choice. In this situation, a mobile tyre fitter can come to your home, workplace,
                  or another safe location.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For drivers in Bristol,{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    mobile car tyre fitting
                  </Link>{" "}
                  can be useful when a tyre needs changing but the car should not be driven far.
                  You can also use a{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>{" "}
                  service if the vehicle is parked safely and the tyre needs to be changed.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  This can save time and reduce the risk of driving on an unsafe tyre. The
                  important thing is to avoid using a tyre if you are not sure it is safe.
                </p>
                <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/driver-inspecting-tyre-rural-road.webp"
                    alt="Driver inspecting a car tyre at the roadside"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
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

              {/* conclusion */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Conclusion — Do Not Wait for a Tyre to Fail
                </h2>
                <p className="leading-7 text-zinc-600">
                  Knowing when to replace tyres can help you avoid bigger problems on the road.
                  Check the tread, pressure, tyre age, and look for cuts, cracks, bulges, or
                  uneven wear.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If a tyre looks unsafe, do not wait for it to fail. Get it checked and replace
                  it when needed. Regular tyre checks are simple, quick, and important for safer
                  driving. If you are unsure about a tyre, getting professional help is the
                  safest choice.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Need a Tyre Checked or Replaced?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or get in touch online for 24/7 mobile tyre fitting at your home,
                workplace or the roadside across Bristol and the surrounding areas.
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
