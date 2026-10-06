import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Future of Tyre Services: Innovations & Mobile Fitting Trends",
  description:
    "Discover the innovations shaping tyre services, from smart tyres and EV demand to mobile fitting, and how Rapid Mobile Tyres keeps Bristol drivers moving.",
  alternates: {
    canonical: "https://rapid-tyres.com/the-future-of-tyre-services-innovations-and-how-rapid-mobile-tyres-stays-ahead",
  },
};

const trends = [
  {
    title: "1. Mobile Tyre Fitting Is Becoming the New Normal",
    body: (
      <>
        <p>The biggest change in tyre services is simple: the service now comes to you.</p>
        <p>
          Drivers are busier than ever. Taking a car to a garage can mean losing half a day,
          arranging lifts or taking time off work. Mobile tyre fitting removes all of that. A
          fully equipped van arrives at your home, workplace or a suitable roadside location, and
          the job is done on the spot.
        </p>
        <p>This model is especially valuable for:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Emergencies such as punctures and blowouts, where driving to a garage is unsafe</li>
          <li>Busy professionals who cannot spare the time</li>
          <li>Van and fleet drivers who need to keep working</li>
          <li>Families and vulnerable drivers who would rather not wait at the roadside</li>
        </ul>
        <p>
          As expectations around convenience keep growing, mobile services are likely to keep
          growing with them. You can see how this works with our{" "}
          <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
            mobile tyre fitting
          </Link>{" "}
          service.
        </p>
      </>
    ),
  },
  {
    title: "2. Smart Tyres and Sensor Technology",
    body: (
      <>
        <p>
          Tyres are getting smarter. Many modern vehicles already use tyre pressure monitoring
          systems (TPMS), which warn you when pressure drops. The wider industry is also
          developing tyres with built-in sensors that can track things like pressure, temperature
          and wear.
        </p>
        <p>What this could mean for drivers:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Earlier warnings about slow punctures and under-inflation</li>
          <li>Better data on when tyres need replacing</li>
          <li>Fewer unexpected breakdowns</li>
          <li>More accurate wear and maintenance planning</li>
        </ul>
        <p>
          As this technology becomes more common, fitters need the right tools and knowledge to
          handle sensors properly during tyre changes.
        </p>
      </>
    ),
  },
  {
    title: "3. The Rise of Electric Vehicles and EV-Specific Tyres",
    body: (
      <>
        <p>
          Electric vehicles are becoming more common on UK roads, and they place different
          demands on tyres. EVs are typically heavier and deliver instant torque, which can mean
          faster tyre wear. Manufacturers now offer tyres designed for EVs, focusing on:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Higher load capacity</li>
          <li>Lower rolling resistance to help efficiency</li>
          <li>Reduced road noise</li>
          <li>Durability under strong acceleration</li>
        </ul>
        <p>
          For drivers, this makes choosing the right tyre more important than ever. A good fitter
          should be able to explain the options and recommend a tyre that suits your vehicle and
          how you use it.
        </p>
      </>
    ),
  },
  {
    title: "4. Run-Flat Tyres and Fewer Spare Wheels",
    body: (
      <p>
        Many new cars no longer carry a spare wheel. Instead, they come with a repair kit or
        run-flat tyres. This changes what happens after a puncture. Without a spare, drivers are
        more likely to need professional help on the day. That is one reason roadside and mobile
        support is becoming more important. If you are not sure what you can do with a spare,
        read our guide on{" "}
        <Link
          href="/how-long-can-you-drive-on-a-spare-tyre-uk-safety-rules-explained"
          className="text-orange-500 hover:underline"
        >
          how long you can drive on a spare tyre
        </Link>
        .
      </p>
    ),
  },
  {
    title: "5. Sustainability and Greener Tyres",
    body: (
      <>
        <p>Environmental concerns are influencing the industry too. Trends include:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Longer-lasting tyres that reduce waste</li>
          <li>Lower rolling resistance designs that help improve fuel or energy efficiency</li>
          <li>Recycled and sustainable materials being explored by manufacturers</li>
          <li>Better recycling of old tyres</li>
        </ul>
        <p>
          For drivers, simple habits also help, such as keeping tyres correctly inflated,
          rotating them when advised and replacing them before they become unsafe.
        </p>
      </>
    ),
  },
  {
    title: "6. Digital Booking and Faster Communication",
    body: (
      <>
        <p>
          Customers now expect to book and get answers quickly, whether by phone, WhatsApp, email
          or online. Quick quotes, clear communication and instant receipts are fast becoming
          standard rather than a bonus. Drivers want to know:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>How much will it cost?</li>
          <li>When will someone arrive?</li>
          <li>Can I pay easily?</li>
          <li>Will I get a receipt?</li>
        </ul>
        <p>Services that answer these questions clearly and quickly are the ones people trust.</p>
      </>
    ),
  },
  {
    title: "7. Transparent Pricing",
    body: (
      <p>
        Another big shift is the demand for upfront, honest pricing. Drivers no longer want vague
        estimates or hidden extras. They want a clear price for the tyre, the fitting and any
        extras before work begins. If you want to know what affects the price, see our guide to{" "}
        <Link
          href="/understanding-the-costs-of-mobile-tyre-fitting-services"
          className="text-orange-500 hover:underline"
        >
          the costs of mobile tyre fitting
        </Link>
        .
      </p>
    ),
  },
];

const stayingAhead = [
  {
    label: "24/7 mobile service.",
    body: (
      <>
        Flat tyres do not wait for office hours. We provide{" "}
        <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-500 hover:underline">
          emergency mobile tyre fitting
        </Link>{" "}
        around the clock, with a usual arrival of around 45–60 minutes depending on traffic,
        availability and your location.
      </>
    ),
  },
  {
    label: "We come to you.",
    body: (
      <>
        Home, workplace or a suitable roadside location, with no garage trip needed. See our{" "}
        <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
          tyre replacement at home
        </Link>{" "}
        service.
      </>
    ),
  },
  {
    label: "Cars, SUVs and vans.",
    body: (
      <>
        We fit tyres for{" "}
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
        , so both private drivers and working vehicles are covered.
      </>
    ),
  },
  {
    label: "A wide choice of brands.",
    body: "We supply premium brands such as Michelin, Continental, Pirelli, Bridgestone, Goodyear and Dunlop, plus quality budget options such as Nexen, Falken, Avon, Kumho and Nankang, so you can choose what suits your vehicle and budget.",
  },
  {
    label: "Clear, upfront pricing.",
    body: "You should know what you are paying before work begins.",
  },
  {
    label: "Easy contact and payment.",
    body: "You can reach us by phone, WhatsApp or our online contact form, and customers have mentioned easy card payment and an instant emailed receipt.",
  },
  {
    label: "Wide local coverage.",
    body: (
      <>
        From our Shirehampton base we cover Bristol and many surrounding areas. Check our{" "}
        <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
          areas we cover
        </Link>
        .
      </>
    ),
  },
  {
    label: "Trusted by local drivers.",
    body: (
      <>
        Our customers have rated us 5.0 on Google across hundreds of reviews, with many praising
        our fast response and friendly service. Learn more{" "}
        <Link href="/about-us" className="text-orange-500 hover:underline">
          about us
        </Link>
        .
      </>
    ),
  },
];

const nextTrends = [
  "More on-demand, mobile and roadside services",
  "Greater use of sensors and connected vehicle data",
  "Wider demand for EV-ready tyres and expertise",
  "Higher expectations for transparency and speed",
  "A stronger focus on sustainability",
];

const faqs = [
  {
    question: "Is mobile tyre fitting the future of tyre services?",
    answer:
      "It is certainly a growing part of it. Many drivers prefer the convenience of having a tyre fitted at home or at work, and mobile fitting is especially useful in emergencies.",
  },
  {
    question: "Are smart tyres available now?",
    answer:
      "Tyre pressure monitoring is already common in modern vehicles, and the industry continues to develop more advanced sensor technology. Availability varies by vehicle and tyre.",
  },
  {
    question: "Do electric cars need special tyres?",
    answer:
      "Many EVs benefit from tyres designed for their weight and torque, but the right choice depends on your vehicle. Check your handbook or ask your fitter for advice.",
  },
  {
    question: "What if my car has no spare tyre?",
    answer:
      "Many modern cars come with a repair kit or run-flat tyres instead of a spare. If you are stuck, a mobile tyre fitter can bring and fit a replacement tyre to your location.",
  },
  {
    question: "Does Rapid Mobile Tyres offer 24/7 service?",
    answer:
      "Yes. We provide 24/7 mobile tyre fitting across Bristol and surrounding areas, subject to technician and tyre availability.",
  },
  {
    question: "How quickly can you reach me?",
    answer:
      "Our usual arrival time is around 45–60 minutes, depending on traffic, availability and your exact location.",
  },
];

export default function FutureOfTyreServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="The Future of Tyre Services: Innovations and How Rapid Mobile Tyres Stays Ahead"
          breadcrumb="Home / Blog / The Future of Tyre Services"
          subtitle="The innovations shaping tyre services, from smart tyres and EV demand to mobile fitting."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/mobile-tyre-fitting-van-interior.webp"
                alt="Inside a fully equipped Rapid Mobile Tyres service van"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                For a long time, getting your tyres changed meant booking a garage slot, driving
                in, waiting around and driving home. That model is changing fast. New vehicle
                technology, new tyre designs and new customer expectations are reshaping the
                whole tyre industry.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                In this guide, we look at the key innovations shaping the future of tyre
                services, what they mean for drivers, and how Rapid Mobile Tyres in Bristol is
                keeping up with what customers actually want.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              {/* trends */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
                <h2 className="mb-5 text-xl font-bold text-zinc-900">
                  7 Trends Shaping the Future of Tyre Services
                </h2>
                <div className="space-y-6">
                  {trends.map((trend) => (
                    <div key={trend.title}>
                      <h3 className="mb-2 font-semibold text-zinc-900">{trend.title}</h3>
                      <div className="space-y-2 leading-7 text-zinc-600">{trend.body}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* how rapid mobile tyres stays ahead */}
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
                  How Rapid Mobile Tyres Stays Ahead
                </h2>
                <p className="mb-4 leading-7 text-zinc-600">
                  At Rapid Mobile Tyres, we focus on what drivers in Bristol and the South West
                  actually need: speed, convenience and honesty. Here is how we put that into
                  practice.
                </p>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-zinc-600">
                  {stayingAhead.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong> {item.body}
                    </li>
                  ))}
                </ul>
              </div>

              {/* what's next */}
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
                  What Will Tyre Services Look Like Next?
                </h2>
                <p className="leading-7 text-zinc-600">
                  While no one can predict everything, current trends suggest the future of tyre
                  services will include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {nextTrends.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  The core of a good service will not change, though. Drivers will always value a
                  fitter who turns up quickly, does the job properly and treats them fairly.
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
                  Tyre services are changing, with mobile fitting, smarter technology, EV demand
                  and higher customer expectations leading the way. Through all of it, the basics
                  stay the same: fast help, honest advice and quality work.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you need a tyre fitted in Bristol or nearby, Rapid Mobile Tyres is ready
                  24/7.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Need a Tyre Fitted Today?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Call now or book online for fast, reliable mobile tyre fitting — 24/7 across
                Bristol and the surrounding areas.
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
