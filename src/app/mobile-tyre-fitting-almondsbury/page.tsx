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
  title: "Mobile Tyre Fitting Almondsbury | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Almondsbury for flat or damaged tyres. Get convenient tyre help directly at your location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-almondsbury",
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
    title: "Mobile Car Tyre Fitting",
    href: "/mobile-car-tyre-fitting-bristol",
    description:
      "Our mobile car tyre fitting in Almondsbury is available for many common hatchbacks, saloons, estates and family cars. Whether your tyre fails unexpectedly or simply needs replacing because of wear, fitting can be arranged at a suitable home, workplace or roadside location.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "Almondsbury's proximity to the A38, M5 and major employment areas means vans are common on local roads. Our mobile van tyre fitting in Almondsbury brings replacement tyres directly to suitable light commercial vehicles. Because vans may require specific load-rated tyres, provide the complete tyre size and load index whenever possible.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s can use larger tyre sizes and different load specifications from standard passenger vehicles. We provide SUV tyre fitting in Almondsbury for suitable vehicles and tyre specifications, subject to current availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Explain What Happened",
    description:
      "Tell us whether you have a puncture, blowout, complete flat, visible sidewall damage or a worn tyre that needs replacement.",
  },
  {
    title: "Give Us the Full Tyre Size",
    description:
      "The tyre size is normally printed on the sidewall. Providing the complete marking helps us check a suitable replacement before travelling.",
  },
  {
    title: "Tell Us Exactly Where You Are",
    description:
      "At a property, provide the postcode. If you are stopped during a journey, give the road name, direction of travel, nearest junction or a shared map location.",
  },
  {
    title: "Let Us Know About Access",
    description:
      "If the vehicle is inside a business park, private car park or gated premises, include any entrance or access information that may help. Once confirmed, a technician can travel and complete the replacement where safe working conditions allow.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Almondsbury?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Almondsbury is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Almondsbury?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival times depend on traffic, technician availability, tyre stock and your exact location.",
  },
  {
    question: "Do you provide emergency tyre fitting in Almondsbury?",
    answer:
      "Yes. Emergency tyre fitting in Almondsbury is available for punctures, blowouts, completely flat tyres and other damage that prevents safe onward travel.",
  },
  {
    question: "Can you replace a tyre at my home in Almondsbury?",
    answer:
      "Yes. Tyre replacement in Almondsbury can usually be completed at a suitable residential location where there is enough safe working space around the vehicle.",
  },
  {
    question: "Can you help if my tyre fails on the A38?",
    answer:
      "Our roadside tyre assistance in Almondsbury can attend suitable accessible locations around the A38 where safe and permitted working space is available. The A38 Gloucester Road runs directly through Almondsbury and connects with M5 Junction 16.",
  },
  {
    question: "Can you help near M5 Junction 16?",
    answer:
      "Yes, subject to your exact location and safe access. M5 Junction 16 connects directly with the A38 immediately south of Almondsbury. If you are on the motorway itself, follow motorway safety guidance and only arrange fitting from a safe and permitted position.",
  },
  {
    question: "Can you help near the M4 and M5 interchange?",
    answer:
      "We can assist around suitable locations within our service coverage near Almondsbury. If the vehicle is stopped on a motorway, follow official motorway breakdown guidance first. Give us the motorway, direction of travel and nearest junction when calling.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Almondsbury?",
    answer:
      "Yes. We provide mobile car tyre fitting in Almondsbury for many common vehicles and tyre sizes, subject to current stock availability.",
  },
  {
    question: "Can you replace van tyres in Almondsbury?",
    answer:
      "Yes. Our mobile van tyre fitting in Almondsbury is available for suitable light commercial vehicles. Provide the complete tyre size and load rating where possible so the appropriate specification can be checked.",
  },
  {
    question: "Do you provide SUV tyre fitting in Almondsbury?",
    answer:
      "Yes. SUV tyre fitting in Almondsbury is available for suitable vehicles and tyre specifications, subject to tyre availability.",
  },
  {
    question: "Can I arrange mobile tyre replacement without having a breakdown?",
    answer:
      "Yes. Mobile tyre replacement in Almondsbury can be booked for worn or damaged tyres as well as emergency punctures and blowouts.",
  },
  {
    question: "Can you attend Aztec West?",
    answer:
      "We can attend suitable locations within our service coverage around the Almondsbury and North Bristol area. For business parks, provide the company name, postcode and exact entrance or parking location so current availability can be confirmed.",
  },
  {
    question: "Do you cover Bradley Stoke and Patchway?",
    answer:
      "These are neighbouring areas close to Almondsbury and the A38 corridor. Call with your exact postcode so we can confirm current coverage and technician availability for your location.",
  },
  {
    question: "Is mobile tyre fitting available in Almondsbury at weekends?",
    answer:
      "Yes. Our mobile tyre service in Almondsbury operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What information should I provide if I am near the motorway?",
    answer:
      "Tell us which road or motorway you are on, your direction of travel, nearest junction and exact position. A shared map location can also be useful. If you are on the motorway itself, prioritise motorway safety guidance before arranging the callout.",
  },
];

const areasServed = [
  { name: "Hortham", href: null },
  { name: "Aztec West", href: null },
  { name: "Cribbs Causeway", href: null },
  { name: "Bradley Stoke", href: "/mobile-tyre-fitting-bradley-stoke" },
  { name: "Alveston", href: "/mobile-tyre-fitting-alveston" },
];

const moreServices = [
  {
    title: "Emergency Tyre Fitting",
    href: "/emergency-mobile-tyre-fitting-bristol",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Tyre Replacement at Home",
    href: "/tyre-replacement-at-home-bristol",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    title: "Jump Start Assistance",
    href: "/jumpstarts",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Fuel Delivery",
    href: "/fuel-delivery",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path
          fillRule="evenodd"
          d="M5 4a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h4a1 1 0 010 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 010 2H6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
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
                Almondsbury, South Gloucestershire
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Almondsbury</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A tyre problem in Almondsbury can affect much more than a short local journey. With
                the A38, M5 and M4 all close by, Rapid Mobile Tyres brings tyre replacement
                directly to your home, workplace or suitable roadside location — 24/7 for cars,
                vans and SUVs.
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

        {/* Tyre replacement before a small problem becomes a longer delay */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Replacement Before a Small Problem Becomes a Longer Delay
                </h2>
                <p className="mb-6 text-zinc-600">
                  Almondsbury sits between village roads and some of the busiest transport
                  connections north of Bristol. That makes mobile tyre fitting particularly useful
                  when continuing on a damaged tyre would be unsafe or could cause further damage.
                  Our mobile tyre fitter in Almondsbury can attend suitable locations and replace the
                  tyre where your vehicle is already parked.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-zinc-900">Tyre Fitting at Home</h3>
                      <p className="text-zinc-600">
                        A flat tyre discovered before leaving home can stop your journey before it
                        starts. Where your driveway or parking area provides enough safe working
                        space, we can carry out tyre replacement in Almondsbury without asking you
                        to move the vehicle first. Our{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          home tyre replacement service
                        </Link>{" "}
                        can also be arranged when tyres are worn or visibly damaged before they fail
                        completely.
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
                      <h3 className="font-extrabold text-zinc-900">Workplace Tyre Replacement</h3>
                      <p className="text-zinc-600">
                        Drivers working around Almondsbury, Aztec West and nearby employment areas
                        may not notice a tyre problem until the vehicle has been parked for several
                        hours. Where access is suitable, mobile fitting allows the replacement to
                        take place at the workplace instead of requiring a separate trip to a tyre
                        depot. For larger business sites, providing the company name, building or
                        exact entrance helps us locate the vehicle.
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
                      <h3 className="font-extrabold text-zinc-900">Roadside Tyre Assistance</h3>
                      <p className="text-zinc-600">
                        If a puncture or blowout happens during your journey, continuing to drive
                        may damage the wheel or create an additional safety risk. Our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          roadside tyre assistance
                        </Link>{" "}
                        in Almondsbury can attend suitable accessible locations where there is enough
                        safe and permitted space to work. On high-speed roads or motorway sections,
                        always follow official breakdown guidance first.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-100 shadow-sm">
                  <Image
                    src="/mobile-tyre-fitting-technician-bristol.webp"
                    alt="Mobile tyre fitting technician"
                    width={600}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-xl bg-orange-500 px-5 py-3 text-white shadow-lg">
                  <div className="text-sm font-semibold">24/7 Service</div>
                  <div className="text-xs text-orange-100">Including weekends &amp; bank holidays</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency section */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-zinc-900">
                Emergency Mobile Tyre Fitting in Almondsbury
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                A damaged tyre can leave you stranded early in the morning, late at night or during
                a weekend journey. Rapid Mobile Tyres provides emergency tyre fitting in Almondsbury
                24 hours a day for punctures, blowouts, complete flats and other tyre damage that
                prevents safe onward travel.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-extrabold text-zinc-900">Around-the-Clock</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Available 24 hours a day, 7 days a week including weekends and bank holidays,
                  subject to technician and tyre availability.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-extrabold text-zinc-900">We Come to You</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Our usual arrival time is around 45–60 minutes depending on traffic, technician
                  availability, tyre availability and your exact location.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-zinc-900">Call with Your Details</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Providing your tyre size and exact location when you call helps us check what is
                  required before the technician travels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle services */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-zinc-900">
                Mobile Tyres for Cars, Vans and SUVs
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                Vehicles travelling around Almondsbury range from everyday commuter cars to working
                vans and larger SUVs heading towards the motorway network. The replacement tyre
                needs to match the vehicle's actual specification.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {vehicleServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group overflow-hidden rounded-xl ring-1 ring-zinc-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-zinc-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 rounded-xl bg-orange-500 px-6 py-6 text-center text-white">
              <p className="font-extrabold text-lg">Need a tyre fitted in Almondsbury?</p>
              <p className="mt-1 text-orange-100 text-sm">
                Call us with your vehicle details, tyre size and location and we will check availability.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-zinc-900">
                What Helps Us Arrange an Almondsbury Callout?
              </h2>
              <p className="mt-4 text-zinc-600 max-w-xl mx-auto">
                A postcode may be straightforward at home, but drivers around Almondsbury can also
                be stopped on major roads, business parks or between motorway junctions. A few
                details make the callout much easier to arrange.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <div key={step.title} className="rounded-xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-extrabold text-white">
                    {i + 1}
                  </div>
                  <h3 className="font-extrabold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roads section — A38 / M5 J16 / Almondsbury Interchange */}
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
            <h2 className="mb-10 text-3xl font-extrabold">
              Mobile Tyre Assistance Around Almondsbury's Key Roads
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <h3 className="mb-3 text-xl font-extrabold text-orange-400">
                  A38 Gloucester Road
                </h3>
                <p className="text-zinc-300">
                  The A38 is the main road running through Almondsbury and one of the area's most
                  important links. South Gloucestershire Council identifies the route as A38
                  Gloucester Road, Almondsbury, with the road continuing south towards M5 Junction
                  16, and identifies locations such as Over Lane, Oaklands Drive and Hortham Lane
                  along this corridor. For local drivers, the A38 provides access towards Thornbury
                  in one direction and the Bristol North Fringe in the other. If your tyre becomes
                  damaged around the Almondsbury section of the A38, our mobile service can attend
                  suitable accessible locations subject to safe working conditions and current
                  technician availability.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-extrabold text-orange-400">
                  M5 Junction 16
                </h3>
                <p className="text-zinc-300">
                  M5 Junction 16 sits immediately south of Almondsbury and connects directly with
                  the A38. South Gloucestershire Council has specifically documented the A38
                  Almondsbury approach to M5 Junction 16 and the importance of this junction to
                  traffic around the Bristol North Fringe. For many Almondsbury drivers, Junction 16
                  is the point where a local journey becomes a motorway journey. If you notice a
                  tyre problem before joining the M5, dealing with it first is safer than continuing
                  on a tyre that may be damaged. If the failure happens on the motorway itself,
                  follow motorway breakdown guidance and arrange fitting only from a safe and
                  permitted location.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-extrabold text-orange-400">
                  Almondsbury Interchange (M4/M5)
                </h3>
                <p className="text-zinc-300">
                  Almondsbury is closely associated with one of the region's major motorway
                  connections. The Almondsbury Interchange links the M4 and M5, with National
                  Highways identifying movements between M4 Junction 20 and M5 Junction 15. Drivers
                  may be heading towards South Wales, Bristol, the Midlands or the South West when a
                  tyre problem develops nearby. Our mobile service can assist around the local road
                  network leading towards these motorway connections, subject to coverage, technician
                  availability and safe access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Replacement tyres / local driving + employment */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Replacement Tyres for Local and Motorway Driving
                </h2>
                <p className="mb-4 text-zinc-600">
                  Almondsbury drivers may use their vehicles for very different journeys. Some
                  mainly travel towards{" "}
                  <Link href="/mobile-tyre-fitting-bradley-stoke" className="text-orange-500 hover:underline">
                    Bradley Stoke
                  </Link>
                  , Patchway or nearby parts of South Gloucestershire. Others regularly join the M4
                  or M5 for much longer trips.
                </p>
                <p className="mb-6 text-zinc-600">
                  Our mobile tyre replacement in Almondsbury is based on the tyre specification
                  required by your vehicle rather than simply where you plan to drive. Depending on
                  the tyre size and current stock, different replacement options may be available.
                  Providing the complete tyre dimensions, load rating and speed rating helps us
                  check suitable options before travelling.
                </p>
                <ul className="space-y-3">
                  {[
                    "Correct size, load index and speed rating matched to your vehicle",
                    "Tyres fitted on driveways, car parks, workplaces and roadside locations",
                    "Planned replacement available — no breakdown required",
                    "Tyre size checked from the sidewall or vehicle registration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-700">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Mobile Tyre Fitting for the Aztec West and North Bristol Corridor
                </h2>
                <p className="mb-4 text-zinc-600">
                  Almondsbury is very close to one of North Bristol's main employment areas. South
                  Gloucestershire planning information places Aztec West close to Almondsbury and
                  identifies the A38 as a key route through the area, noting nearby{" "}
                  <Link href="/mobile-tyre-fitting-bradley-stoke" className="text-orange-500 hover:underline">
                    Bradley Stoke
                  </Link>{" "}
                  and Cribbs Causeway.
                </p>
                <p className="mb-4 text-zinc-600">
                  For someone driving to or from work, a damaged tyre can cause more than a simple
                  delay. Mobile fitting means a suitable tyre can be brought to a workplace or
                  accessible parking location rather than requiring the vehicle to be driven somewhere
                  else first.
                </p>
                <p className="text-zinc-600">
                  For business parks and larger employment sites, give us the company name, postcode
                  and exact parking location when calling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tyre Brands */}
        <TyreBrands />

        {/* Why mobile / benefits */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-zinc-900">
                Why Mobile Tyre Fitting Works Well in Almondsbury
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                Almondsbury combines a village setting with immediate access to major regional roads.
                Taking an unsafe vehicle to a tyre centre may involve exactly the sort of busy roads
                you would prefer not to use with a damaged tyre.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "No Recovery Vehicle Needed",
                  text: "When your tyre fails, you do not need to arrange a tow to a garage. We come to the vehicle and carry out the replacement on site.",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                  ),
                },
                {
                  title: "Available 24 Hours",
                  text: "Our 24 hour mobile tyre fitting in Almondsbury means a tyre failure at any time of day or night does not have to leave the vehicle stranded until morning.",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Planned or Emergency",
                  text: "Mobile tyre replacement in Almondsbury can be booked for worn or damaged tyres as well as emergency punctures and blowouts, so you do not have to wait until the tyre fails completely.",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    {item.icon}
                  </div>
                  <h3 className="font-extrabold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-zinc-900">
                Covering Almondsbury and Nearby Areas
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                Almondsbury sits close to Bradley Stoke, Patchway, Aztec West, Cribbs Causeway,
                Hortham and{" "}
                <Link href="/mobile-tyre-fitting-alveston" className="text-orange-500 hover:underline">
                  Alveston
                </Link>
                , with the A38 providing the main north-south connection. If you are outside
                Almondsbury itself, provide your exact postcode when calling so current coverage and
                technician availability can be confirmed.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
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

        {/* More services */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-zinc-900">
                More Than Mobile Tyre Replacement
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                Not every breakdown around Almondsbury is caused by a tyre. Rapid Mobile Tyres also
                provides further roadside services so the callout can match the actual problem
                affecting the vehicle.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {moreServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex items-center gap-3 rounded-xl bg-white p-5 ring-1 ring-zinc-100 shadow-sm hover:shadow-md hover:ring-orange-200 transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    {service.icon}
                  </div>
                  <span className="font-semibold text-zinc-900">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <Faq items={faqs} />

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
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Need Mobile Tyre Fitting in Almondsbury?
            </h2>
            <p className="mb-8 text-zinc-300 max-w-2xl mx-auto">
              Whether you discover a flat tyre at home, suffer damage while travelling along the A38
              or notice a problem before joining the M5, you do not necessarily need to drive the
              vehicle to a tyre centre. Rapid Mobile Tyres can bring mobile tyre fitting in
              Almondsbury directly to your home, workplace or suitable roadside location. Contact us
              with your vehicle details, tyre size and exact position so availability can be checked
              and the appropriate mobile tyre callout arranged.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-8 py-3 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
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
