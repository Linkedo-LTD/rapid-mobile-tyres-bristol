import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TyreBrands from "@/components/TyreBrands";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Brockley | 24/7 Tyre Replacement",
  description:
    "Mobile tyre fitting in Brockley, along the A370 and the surrounding North Somerset villages. 24/7 tyre replacement at home, on the farm or at the roadside.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-brockley",
  },
};

const stats = [
  { value: "24/7", label: "Available, every day" },
  { value: "45–60 min", label: "Usual arrival time" },
  { value: "Cars, Vans & SUVs", label: "All vehicle types" },
  { value: "5★", label: "Rated by customers" },
];

const vehicleServices = [
  {
    title: "Mobile Car Tyre Fitting in Brockley",
    href: "/mobile-car-tyre-fitting-bristol",
    description:
      "Our mobile car tyre fitting in Brockley covers many common hatchbacks, saloons, estates and family vehicles. Whether the tyre is flat outside your home or damaged during a journey, fitting can be carried out at a suitable accessible location subject to stock availability.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "Working vans often cover longer distances between North Somerset villages, customer properties and larger towns. Our mobile van tyre fitting in Brockley brings replacement tyres directly to suitable light commercial vehicles. Because vans may require particular load-rated tyres, send the complete tyre size and load information whenever possible.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV and 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s can use larger tyre sizes or different load specifications from standard passenger cars. We provide SUV tyre fitting in Brockley for suitable vehicles and tyre specifications, subject to current availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us What Happened",
    description:
      "Let us know whether you have a puncture, blowout, complete flat, sidewall damage or a tyre that simply needs replacing because of wear.",
  },
  {
    title: "Check the Tyre Sidewall",
    description:
      "The full tyre size is normally printed on the sidewall. Providing that information helps us check a suitable replacement before setting off.",
  },
  {
    title: "Send the Exact Location",
    description:
      "At a property, provide the postcode. If you are stopped on the road, send the road name, nearest junction, direction of travel or a shared map location.",
  },
  {
    title: "Mention Access Conditions",
    description:
      "If the vehicle is parked down a narrow lane, behind a gate or on a private driveway, let us know before the technician arrives. Fitting can then be planned around the actual access available.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Brockley?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Brockley is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Brockley?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival time depends on traffic, technician location, tyre availability and your exact position.",
  },
  {
    question: "Do you provide emergency tyre fitting in Brockley?",
    answer:
      "Yes. Emergency tyre fitting in Brockley is available for punctures, blowouts, complete flats and other tyre damage that prevents safe onward travel.",
  },
  {
    question: "Can you replace a tyre at my home in Brockley?",
    answer:
      "Yes. Tyre replacement in Brockley can usually be completed at a suitable residential or rural property where there is enough safe working space around the vehicle.",
  },
  {
    question: "Can you help if my tyre fails on the A370?",
    answer:
      "Our roadside tyre assistance in Brockley can attend suitable accessible locations around the A370. The A370 Main Road passes directly through Brockley. Provide your exact position and direction of travel when calling.",
  },
  {
    question: "Can you come to Brockley Lane?",
    answer:
      "Yes, subject to safe access and current technician availability. Brockley Lane connects with the A370 Main Road in Brockley.",
  },
  {
    question: "Can you help near Brockley Combe Road?",
    answer:
      "We can attend suitable locations within our service coverage. The Brockley Combe Road/A370 junction is a recognised part of the North Somerset road network.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Brockley?",
    answer:
      "Yes. Our mobile car tyre fitting in Brockley covers many common cars and tyre sizes, subject to current stock availability.",
  },
  {
    question: "Can you replace van tyres in Brockley?",
    answer:
      "Yes. We provide mobile van tyre fitting in Brockley for suitable light commercial vehicles. Send the full tyre dimensions and load rating so an appropriate replacement can be checked.",
  },
  {
    question: "Do you provide SUV tyre fitting in Brockley?",
    answer:
      "Yes. SUV tyre fitting in Brockley is available for suitable SUVs, crossovers and 4x4s, subject to tyre availability.",
  },
  {
    question: "Can you come to a rural property or farm entrance?",
    answer:
      "Yes, where the location is within our coverage and suitable working access is available. Provide the full postcode, property name and any useful entrance instructions.",
  },
  {
    question: "Do you cover Backwell and Chelvey?",
    answer:
      "Both Backwell and Chelvey are currently listed among the surrounding areas on the Brockley page. Call with your exact postcode so current technician availability can be confirmed.",
  },
  {
    question: "Can I arrange mobile tyre replacement before the tyre becomes flat?",
    answer:
      "Yes. Mobile tyre replacement in Brockley can be arranged for worn or damaged tyres as well as emergency failures. You do not need to wait until the tyre is completely unusable.",
  },
  {
    question: "Is mobile tyre fitting available at weekends?",
    answer:
      "Yes. Our mobile tyre service in Brockley operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What information should I provide for a Brockley callout?",
    answer:
      "Give us your vehicle details, complete tyre size and exact location. If you are stopped somewhere along the A370 or a rural road, also provide your direction of travel, nearest junction or a shared map location.",
  },
];

const areasServed = [
  { name: "Backwell", href: "/mobile-tyre-fitting-backwell" },
  { name: "Chelvey", href: "/mobile-tyre-fitting-chelvey" },
  { name: "Cleeve", href: null },
  { name: "Nailsea", href: null },
  { name: "Wraxall", href: null },
];

const locationPinSvg = (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-zinc-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/mobile-tyre-fitting-technician-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
              preload
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300 ring-1 ring-orange-500/30">
                {locationPinSvg}
                Brockley, North Somerset
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Brockley</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A flat or damaged tyre in Brockley can be awkward to deal with, especially when
                your vehicle is parked at a rural property or becomes unusable before you reach a
                larger town. Rapid Mobile Tyres provides mobile tyre fitting in Brockley, bringing
                the replacement tyre and fitting equipment directly to your vehicle. We can attend
                suitable homes, workplaces and roadside locations, helping with punctures,
                blowouts and worn tyres without requiring you to drive an unsafe vehicle to a tyre
                centre.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-orange-500 text-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.value} className="text-center">
                  <div className="text-2xl font-extrabold">{s.value}</div>
                  <div className="text-sm font-medium text-orange-100">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tyre Replacement That Comes to Brockley */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Replacement That Comes to Brockley
                </h2>
                <p className="mb-8 text-zinc-600">
                  Brockley is very different from a dense city neighbourhood. Local journeys often
                  involve the A370, country roads and nearby villages, which makes driving
                  anywhere on a damaged tyre particularly undesirable. Our mobile tyre fitter in
                  Brockley can come to the vehicle and complete the fitting where there is enough
                  safe and suitable working space.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Mobile Tyre Fitting at Home</h3>
                      <p className="text-zinc-600">
                        If you discover a flat tyre before leaving your property, there is usually
                        no need to move the vehicle first. We can carry out{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          tyre replacement in Brockley
                        </Link>{" "}
                        on a suitable driveway or parking area, subject to access and tyre
                        availability. Home fitting is also useful when a tyre is worn or damaged
                        but has not yet failed completely.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Tyre Fitting at Rural Properties</h3>
                      <p className="text-zinc-600">
                        Some Brockley addresses are reached by smaller roads, lanes or private
                        entrances rather than wide residential streets. If your vehicle is parked
                        at a rural property, farm entrance or similar location, send us the full
                        postcode and any useful access information. A shared map pin can also help
                        if the property is difficult to identify from the road.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Roadside Tyre Assistance</h3>
                      <p className="text-zinc-600">
                        A puncture during a journey can leave you somewhere between Brockley and
                        the surrounding villages. Our roadside tyre assistance in Brockley can
                        attend suitable accessible locations where there is enough space for safe
                        fitting. If you are stopped on a narrow road, bend or exposed section,
                        prioritise getting the vehicle into the safest available position.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/mobile-tyre-fitting-technician-bristol.webp"
                    alt="Mobile tyre fitting technician fitting a tyre at a customer's location"
                    width={600}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-xl bg-orange-500 px-5 py-3 text-white shadow-lg">
                  <div className="text-xl font-extrabold">45–60 min</div>
                  <div className="text-sm text-orange-100">Usual arrival time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Mobile Tyre Fitting */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Emergency Mobile Tyre Fitting in Brockley
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Tyre failures do not always happen when garages are open. Rapid Mobile Tyres
                provides emergency tyre fitting in Brockley 24 hours a day for punctures,
                blowouts, complete flats and other tyre problems that prevent safe onward travel.
                Providing your tyre size and precise location at the beginning helps us check the
                callout before travelling.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-900">Available 24/7</h3>
                <p className="text-zinc-600">
                  Day or night, our mobile tyre service is available 24 hours a day — no waiting
                  for garage opening times, even in rural North Somerset.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-900">We Come to You</h3>
                <p className="text-zinc-600">
                  Our usual arrival time is around 45–60 minutes, depending on traffic, technician
                  availability, your exact location and whether the required tyre is available.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden>
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h3l3 4h-1a1 1 0 000 2h1.5a1 1 0 00.8-.4l1.5-2a1 1 0 000-1.2L18 9.4V9a1 1 0 00-1-1h-4V5a1 1 0 00-1-1H3z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-900">Right Tyre on the Van</h3>
                <p className="text-zinc-600">
                  Our technicians carry a range of tyre stock. Providing your tyre size when
                  calling helps ensure we can check the right replacement is available before
                  setting off.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/emergency-mobile-tyre-fitting-bristol"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow hover:bg-orange-600 transition-colors"
              >
                Learn about our emergency tyre service
              </Link>
            </div>
          </div>
        </section>

        {/* Vehicle Services */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Mobile Tyres for Cars, Vans and SUVs
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Different vehicles require different tyre specifications. The correct replacement
                needs to match the tyre dimensions, load index, speed rating and the requirements
                of the vehicle.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {vehicleServices.map((v) => (
                <Link
                  key={v.title}
                  href={v.href}
                  className="group rounded-2xl overflow-hidden ring-1 ring-zinc-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-zinc-900 group-hover:text-orange-500 transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-sm text-zinc-600">{v.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Orange CTA banner */}
            <div className="mt-12 rounded-2xl bg-orange-500 px-8 py-10 text-center text-white">
              <p className="mb-4 text-xl font-bold">
                Not sure which service you need? Call us and we&apos;ll help.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Four Details That Make a Brockley Callout Easier */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Four Details That Make a Brockley Callout Easier
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A rural location can sometimes be harder to identify than a city-centre address. A
                few details help us arrange the callout properly.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-extrabold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 font-bold text-zinc-900">{step.title}</h3>
                  <p className="text-sm text-zinc-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roads section — A370 Main Road and Brockley Lane */}
        <section className="relative bg-zinc-900 py-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/van-tyre-fitting-road-service-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-extrabold">
                  Mobile Tyre Assistance Along the A370 Main Road
                </h2>
                <p className="mb-4 text-zinc-300">
                  The A370 Main Road runs directly through Brockley and is one of the most
                  important transport routes in the area. North Somerset Council specifically
                  identifies the A370 through Brockley and its junction with Brockley Lane, while
                  local highway documents also reference the A370 Main Road near Chelvey Batch and
                  the access towards Brockley Church.
                </p>
                <p className="text-zinc-300">
                  For many local drivers, the A370 forms part of journeys towards Bristol,{" "}
                  <Link href="/mobile-tyre-fitting-backwell" className="text-orange-400 hover:underline">
                    Backwell
                  </Link>
                  , Nailsea or Weston-super-Mare. If your tyre develops a problem near the Brockley
                  section of the A370, give us the exact road position or nearest junction when
                  arranging assistance. Roadside fitting can only take place where access is safe
                  and permitted.
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-extrabold">
                  Tyre Help Around Brockley Lane
                </h2>
                <p className="mb-4 text-zinc-300">
                  Brockley Lane is one of the clearest local roads associated with the village.
                  North Somerset Council currently identifies the junction of A370 Main Road and
                  Brockley Lane in its traffic management information and road orders.
                </p>
                <p className="text-zinc-300">
                  If your vehicle is parked around Brockley Lane or at a nearby property, mobile
                  fitting can avoid the need to move it onto the busier A370 first. Provide the
                  postcode or shared map location if your exact position is not obvious from the
                  road name.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brockley Combe Road and A370 commuting */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Mobile Tyre Assistance Around Brockley Combe Road
                </h2>
                <p className="mb-4 text-zinc-600">
                  Brockley is also closely connected with Brockley Combe Road, another important
                  local junction with the A370. North Somerset Council&apos;s transport assessment
                  identifies the Brockley Combe Road/A370 junction as a significant point on the
                  local network, while the council&apos;s A370 corridor programme specifically
                  includes Brockley Combe.
                </p>
                <p className="mb-6 text-zinc-600">
                  A tyre problem in this area can affect both local journeys and drivers
                  travelling between Bristol and the wider North Somerset area. If you are stopped
                  close to the junction, give us your direction of travel and precise location so
                  safe access can be assessed.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-600 transition-colors"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call to check tyre availability
                </a>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-8 ring-1 ring-zinc-100">
                <h3 className="mb-4 font-bold text-zinc-900">Tyre Fitting for A370 Commuting</h3>
                <p className="mb-4 text-zinc-600">
                  The A370 is not simply a village road. North Somerset Council describes it as a
                  key corridor used for journeys between Weston-super-Mare and Bristol, with{" "}
                  <Link href="/mobile-tyre-fitting-backwell" className="text-orange-500 hover:underline">
                    Backwell
                  </Link>{" "}
                  and Brockley Combe among the locations included in its transport improvement
                  work. That means Brockley drivers may regularly use their vehicles for longer
                  commuting journeys rather than only short trips around the village.
                </p>
                <p className="text-zinc-600">
                  Our mobile tyre replacement in Brockley is matched to the actual tyre
                  specification required by your vehicle. Depending on the tyre size and current
                  stock, different replacement options may be available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Why Mobile Tyre Fitting Suits a Rural Location */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Why Mobile Tyre Fitting Suits a Rural Location
              </h2>
              <p className="max-w-2xl text-zinc-600">
                A flat tyre in a city may leave several tyre centres only a short distance away.
                In a rural area such as Brockley, the nearest convenient garage may still require
                driving along the very roads you do not want to use on a damaged tyre.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  ),
                  title: "24 Hour Mobile Fitting",
                  body: "Our 24 hour mobile tyre fitting in Brockley brings the service to the vehicle instead of requiring a drive to a tyre centre.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "No Unnecessary Driving",
                  body: "Mobile fitting removes the need to drive on a damaged tyre along the very roads you would rather avoid.",
                },
                {
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  ),
                  title: "Planned or Emergency",
                  body: "The service can be used after an unexpected breakdown, but it also works for planned tyre replacement when wear or damage has already been identified.",
                },
                {
                  icon: (
                    <>
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h3l3 4h-1a1 1 0 000 2h1.5a1 1 0 00.8-.4l1.5-2a1 1 0 000-1.2L18 9.4V9a1 1 0 00-1-1h-4V5a1 1 0 00-1-1H3z" />
                    </>
                  ),
                  title: "Cars, Vans & SUVs",
                  body: "The service covers cars, vans and SUVs, with additional help available if the problem turns out to be a flat battery or running out of fuel rather than a tyre.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold text-zinc-900">{card.title}</h3>
                  <p className="text-sm text-zinc-600">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Covering Brockley and Nearby North Somerset Areas
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Our coverage from Brockley includes{" "}
                <Link href="/mobile-tyre-fitting-backwell" className="text-orange-500 hover:underline">
                  Backwell
                </Link>
                ,{" "}
                <Link href="/mobile-tyre-fitting-chelvey" className="text-orange-500 hover:underline">
                  Chelvey
                </Link>
                , Cleeve, Nailsea and Wraxall. These neighbouring places support the page rather
                than compete with Brockley as its main focus. If your vehicle is outside Brockley
                itself, call with your postcode so current service coverage and technician
                availability can be confirmed — that is particularly useful for rural addresses or
                locations between two villages.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {areasServed.map((area) =>
                area.href ? (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 ring-1 ring-orange-200 hover:bg-orange-100 transition-colors"
                  >
                    {area.name}
                  </Link>
                ) : (
                  <span
                    key={area.name}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700"
                  >
                    {area.name}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* More Than Mobile Tyre Replacement */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                More Than Mobile Tyre Replacement
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A vehicle can be stranded even when all four tyres are fine. Rapid Mobile Tyres
                also provides jump start assistance for flat batteries and fuel delivery when a
                vehicle runs out of fuel, alongside its mobile tyre fitting services.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and sidewall damage — including rural locations in North Somerset.",
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  ),
                },
                {
                  href: "/tyre-replacement-at-home-bristol",
                  title: "Tyre Replacement at Home",
                  body: "Arrange planned or emergency tyre replacement at your home address, on your driveway or at a safe residential location.",
                  icon: (
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  ),
                },
                {
                  href: "/mobile-car-tyre-fitting-bristol",
                  title: "Mobile Car Tyre Fitting",
                  body: "Tyre fitting for cars of many makes and models. Providing the tyre size when booking helps ensure the right replacement is checked.",
                  icon: (
                    <>
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h3l3 4h-1a1 1 0 000 2h1.5a1 1 0 00.8-.4l1.5-2a1 1 0 000-1.2L18 9.4V9a1 1 0 00-1-1h-4V5a1 1 0 00-1-1H3z" />
                    </>
                  ),
                },
                {
                  href: "/mobile-van-tyre-fitting-bristol",
                  title: "Mobile Van Tyre Fitting",
                  body: "Replacement van tyre fitting at your location. Van tyres can require specific load ratings — give us the tyre specification when calling.",
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  ),
                },
                {
                  href: "/jumpstarts",
                  title: "Jump Start Assistance",
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations in and around Brockley.",
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  ),
                },
                {
                  href: "/fuel-delivery",
                  title: "Emergency Fuel Delivery",
                  body: "Run out of fuel near Brockley? Our emergency fuel delivery service can bring the right fuel to your location.",
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 4.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 11H12a1 1 0 100-2H8.414l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  ),
                },
              ].map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 hover:shadow-md transition-shadow"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold text-zinc-900 group-hover:text-orange-500 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-600">{card.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <Faq items={faqs} title="Mobile Tyre Fitting Brockley FAQs" />

        {/* Final CTA */}
        <section className="relative bg-zinc-900 py-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/mobile-tyre-fitting-technician-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Need Mobile Tyre Fitting in Brockley?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              Whether your tyre is flat at home, becomes damaged around Brockley Lane or leaves
              you unable to continue along the A370, you do not necessarily need to drive the
              vehicle to a tyre centre. Rapid Mobile Tyres can bring mobile tyre fitting in
              Brockley directly to a suitable home, workplace or roadside location. Contact us
              with your vehicle details, tyre size and precise location so current availability
              can be checked and the appropriate mobile tyre callout arranged.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
