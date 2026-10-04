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
  title: "Mobile Tyre Fitting Avonmouth | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Avonmouth for cars and vans. Get flat or damaged tyres replaced at your location.",
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
      "Our mobile car tyre fitting in Avonmouth covers many common hatchbacks, saloons, estates and family vehicles. Whether you have a sudden puncture or a tyre that is simply due for replacement, fitting can be arranged at a suitable home, workplace or roadside position.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "Vans play an important role around Avonmouth's industrial and logistics areas, and an unusable tyre can immediately affect the working day. Our mobile van tyre fitting in Avonmouth brings tyre replacement directly to suitable commercial vehicles. Van tyres can have specific load ratings, so provide the complete tyre size and specification when booking wherever possible.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s often require different tyre sizes and load specifications from standard cars. We provide SUV tyre fitting in Avonmouth for suitable vehicles and tyre dimensions, subject to current stock availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us About the Tyre Problem",
    description:
      "Let us know whether you have a puncture, blowout, complete flat, visible damage or a worn tyre that needs planned replacement.",
  },
  {
    title: "Check the Tyre Size",
    description:
      "The size is normally printed on the tyre sidewall. Providing the complete dimensions and rating helps us check an appropriate replacement.",
  },
  {
    title: "Give Us a Precise Location",
    description:
      "A postcode or shared location is useful if you are inside a large industrial estate or commercial site. If on the roadside, include the road name, direction of travel and nearest junction where possible.",
  },
  {
    title: "We Bring the Replacement to You",
    description:
      "Once the tyre and location details are confirmed, a technician can attend with the required fitting equipment and complete the replacement where safe working conditions are available.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Avonmouth?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Avonmouth is available day and night, subject to technician and tyre availability.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Avonmouth?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Traffic, technician availability, the tyre required and your exact position can affect the actual arrival time.",
  },
  {
    question: "Do you provide emergency tyre fitting in Avonmouth?",
    answer:
      "Yes. Emergency tyre fitting in Avonmouth is available for punctures, blowouts, flat tyres and other damage that prevents safe onward travel.",
  },
  {
    question: "Can you replace my tyre at an Avonmouth workplace or industrial estate?",
    answer:
      "Yes, where there is safe access and a suitable place to work. Avonmouth has extensive industrial and warehouse areas, so providing the exact business address, unit or entrance can help us locate you.",
  },
  {
    question: "Can you replace a tyre at my home?",
    answer:
      "Yes. Tyre replacement in Avonmouth can normally be carried out at a suitable residential location where there is enough safe working space around the vehicle.",
  },
  {
    question: "Do you provide roadside tyre assistance near the A4 Portway?",
    answer:
      "Yes. Our roadside tyre assistance in Avonmouth can cover suitable locations around the local road network, including areas close to the A4 Portway, where safe and permitted access is available.",
  },
  {
    question: "Can you help if my tyre fails near the M5 or M49?",
    answer:
      "We can assist at suitable accessible locations within our service coverage. If you are stopped on a motorway or in another hazardous position, follow motorway safety guidance first and arrange fitting only where access is safe and permitted.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Avonmouth?",
    answer:
      "Yes. We provide mobile car tyre fitting in Avonmouth for many common vehicles and tyre sizes, subject to availability.",
  },
  {
    question: "Do you replace tyres on commercial vans?",
    answer:
      "Yes. Mobile van tyre fitting in Avonmouth is available for suitable light commercial vehicles. Because van tyres can have particular load requirements, provide the complete tyre specification when calling.",
  },
  {
    question: "Do you provide SUV tyre fitting in Avonmouth?",
    answer:
      "Yes. SUV and 4x4 tyre fitting is available for suitable tyre dimensions and specifications, subject to current tyre availability.",
  },
  {
    question: "Can I arrange mobile tyre replacement even if the tyre has not failed?",
    answer:
      "Yes. Mobile tyre replacement in Avonmouth can be booked for worn or damaged tyres as well as emergency callouts.",
  },
  {
    question: "Do you cover Avonmouth's industrial areas?",
    answer:
      "Our service can attend suitable commercial and industrial locations in Avonmouth, subject to access and technician availability. For large sites, provide a precise postcode or shared location rather than only the business name.",
  },
  {
    question: "Do you provide a mobile tyre service at weekends?",
    answer:
      "Yes. Our mobile tyre service in Avonmouth operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What details should I provide when calling?",
    answer:
      "Give us your tyre size, vehicle details and exact location. For an industrial site, include the unit or entrance if relevant. For a roadside callout, provide the road, direction of travel and nearest junction where possible.",
  },
];

const areasServed = [
  { name: "Chittening", href: "/mobile-tyre-fitting-chittening" },
  { name: "Shirehampton", href: null },
  { name: "Lawrence Weston", href: null },
  { name: "Henbury", href: null },
  { name: "Kingsweston", href: null },
  { name: "Sea Mills", href: null },
  { name: "Coombe Dingle", href: null },
  { name: "Hallen", href: null },
  { name: "Easter Compton", href: null },
  { name: "Pilning", href: null },
  { name: "Redwick", href: null },
  { name: "Severn Beach", href: null },
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
              src="/mobile-tyre-fitting-avonmouth-hero.webp"
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
                Avonmouth, Bristol
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Avonmouth</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A tyre failure in Avonmouth can interrupt more than a normal journey. With
                residential streets, industrial sites, distribution centres and major routes running
                through the area, a flat tyre can quickly delay work, deliveries or onward travel.
                Rapid Mobile Tyres brings a replacement tyre directly to your home, workplace or
                suitable roadside location — 24/7 for cars, vans and SUVs.
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

        {/* Tyre Fitting for Homes, Workplaces and Industrial Locations */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Fitting for Homes, Workplaces and Industrial Locations
                </h2>
                <p className="mb-8 text-zinc-600">
                  Avonmouth has a different driving environment from many parts of Bristol.
                  Alongside residential areas, there are large employment and industrial zones where
                  vehicles are relied upon throughout the working day. Our mobile tyre fitters in
                  Avonmouth can attend suitable locations and carry out the fitting where the
                  vehicle is already parked — useful for local residents as well as commuters,
                  tradespeople and drivers working around Avonmouth&apos;s commercial areas.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Tyre Replacement at Home</h3>
                      <p className="text-zinc-600">
                        If you discover a flat or damaged tyre while your vehicle is parked at
                        home, driving to a garage may be unnecessary or unsafe. Where there is
                        suitable working space, we can carry out{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          tyre replacement at your home
                        </Link>{" "}
                        on a driveway or appropriate residential parking area — including planned
                        replacement when tyres are worn before they become an emergency.
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
                      <h3 className="font-semibold text-zinc-900">Mobile Tyre Fitting at Work</h3>
                      <p className="text-zinc-600">
                        Avonmouth contains extensive industrial and employment areas, so many
                        vehicles spend much of the day parked at workplaces, depots or commercial
                        premises. Where access is safe and permission is available, our mobile tyre
                        service can attend suitable workplace locations and replace the tyre without
                        requiring a separate garage trip.
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
                        If a puncture or blowout leaves you stopped during a journey, our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          roadside tyre assistance
                        </Link>{" "}
                        in Avonmouth can attend suitable locations where there is safe and permitted
                        access. Busy industrial routes can carry significant commercial traffic, so
                        never remain beside the vehicle in an unsafe position just to wait for tyre
                        fitting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/mobile-tyre-changer-avonmouth.webp"
                    alt="Rapid Mobile Tyres mobile tyre changer in use at a callout in Avonmouth"
                    width={1448}
                    height={1086}
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
                Emergency Mobile Tyre Fitting in Avonmouth
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Early shifts, late finishes and around-the-clock commercial activity mean Avonmouth
                traffic is not limited to normal working hours. Rapid Mobile Tyres provides
                emergency tyre fitting in Avonmouth 24 hours a day for punctures, blowouts,
                complete pressure loss and visible tyre damage that makes the vehicle unsafe to
                continue driving.
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
                  Day or night, our mobile tyre service operates 24 hours a day — no waiting for
                  garage opening times, even during early-morning or late-night shifts.
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
                  availability and your exact location. No need to arrange recovery or risk driving
                  on a damaged tyre.
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
                The correct tyre depends on much more than wheel diameter. Vehicle weight, load
                requirements, tyre dimensions and manufacturer specifications all matter when
                selecting a replacement — particularly in an area such as Avonmouth where passenger
                cars and working vans are both common.
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

        {/* How it works / Steps */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                What We Need to Arrange Your Avonmouth Callout
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Avonmouth contains residential streets, industrial estates and major through-routes,
                so accurate information helps us identify exactly where the vehicle is and prepare
                the right tyre before travelling.
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

        {/* Roads section */}
        <section className="relative bg-zinc-900 py-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/van-tyre-replacement-avonmouth.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-3xl font-extrabold">
                Mobile Tyre Assistance Around the A4 Portway and Avonmouth Industrial Roads
              </h2>
              <p className="mb-4 text-zinc-300">
                The A4 Portway is one of the most important road connections between Avonmouth and
                central Bristol, running through the Avon Gorge towards Hotwells. For Avonmouth
                residents and workers, this route is important for commuting and travelling between
                the docks area and the rest of Bristol.
              </p>
              <p className="mb-4 text-zinc-300">
                Avonmouth&apos;s road network also serves a substantial concentration of warehouses
                and distribution facilities around Avonmouth Road, Third Way, Kings Weston Lane and
                the wider Avonmouth/Severnside area, with further industrial development extending
                towards the M49. Tyre problems here can affect commercial vehicles as well as
                everyday motorists.
              </p>
              <p className="mb-4 text-zinc-300">
                Our mobile tyre service can attend suitable accessible locations around Avonmouth
                and the wider area, including nearby{" "}
                <Link
                  href="/mobile-tyre-fitting-chittening"
                  className="text-orange-400 hover:underline"
                >
                  Chittening
                </Link>
                , subject to current coverage and safe working conditions.
              </p>
              <p className="text-zinc-300">
                If you are stopped on a motorway or in a hazardous position, follow motorway
                safety guidance first and only arrange fitting where access is safe and permitted.
              </p>
            </div>
          </div>
        </section>

        {/* Replacement Tyres */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Replacement Tyres for Local, Commercial and Motorway Journeys
                </h2>
                <p className="mb-4 text-zinc-600">
                  Drivers in Avonmouth can cover a wide variety of journeys. A local resident may
                  mainly travel into Bristol, while a tradesperson or commercial driver may
                  regularly use the surrounding industrial roads or connect with the motorway
                  network.
                </p>
                <p className="mb-4 text-zinc-600">
                  Our{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre replacement
                  </Link>{" "}
                  in Avonmouth is therefore based on your actual vehicle specification rather than
                  a one-size-fits-all recommendation. Depending on the required dimensions and
                  current availability, different tyre options may be available. Providing the full
                  information from your existing tyre helps us check the most appropriate choices.
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
                <h3 className="mb-4 font-bold text-zinc-900">Key tyre details to have ready</h3>
                <ul className="space-y-3 text-zinc-600">
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      1
                    </span>
                    <span>
                      <strong>Tyre size</strong> — printed on the sidewall (e.g. 205/55 R16)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      2
                    </span>
                    <span>
                      <strong>Load index and speed rating</strong> — especially important for
                      vans
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      3
                    </span>
                    <span>
                      <strong>Vehicle make and model</strong> — helpful if the sidewall is
                      damaged
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      4
                    </span>
                    <span>
                      <strong>Exact location</strong> — postcode, unit/entrance for industrial
                      sites, or road and nearest junction for roadside callouts
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Why Mobile Tyre Fitting */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Why Mobile Tyre Fitting Works Particularly Well in Avonmouth
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Taking a vehicle out of service to visit a tyre centre can be inconvenient for
                anyone, but it can be especially disruptive when that vehicle is being used for
                work. Mobile fitting allows the tyre replacement to take place where the vehicle
                is already located — useful both for urgent failures and for planned tyre changes
                when keeping downtime to a minimum matters.
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
                  title: "24/7 Coverage",
                  body: "Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Avonmouth for suitable residential addresses, workplaces and roadside locations.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "No Unnecessary Driving",
                  body: "Mobile fitting removes the need to drive on a flat or damaged tyre to reach a depot — the service comes to the vehicle at homes, workplaces or industrial sites.",
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
                  body: "The service works for urgent tyre failures as well as planned replacement — helping you avoid unnecessary downtime when a tyre needs attention.",
                },
                {
                  icon: (
                    <>
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h3l3 4h-1a1 1 0 000 2h1.5a1 1 0 00.8-.4l1.5-2a1 1 0 000-1.2L18 9.4V9a1 1 0 00-1-1h-4V5a1 1 0 00-1-1H3z" />
                    </>
                  ),
                  title: "Cars, Vans & SUVs",
                  body: "The service covers cars, vans and SUVs. Additional help is available for flat batteries and running out of fuel through our wider mobile assistance services.",
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
                Covering Avonmouth and Nearby Areas
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Our current Avonmouth coverage includes{" "}
                <Link
                  href="/mobile-tyre-fitting-chittening"
                  className="text-orange-500 hover:underline"
                >
                  Chittening
                </Link>
                , Shirehampton, Lawrence Weston, Henbury, Kingsweston, Sea Mills, Coombe Dingle,
                Hallen, Easter Compton, Pilning, Redwick and Severn Beach — reflecting Avonmouth&apos;s
                position between Bristol&apos;s north-western neighbourhoods and the wider Severnside
                area. If you are on an industrial estate, at the port, or just outside Avonmouth
                itself, provide your full postcode or shared location so current coverage can be
                confirmed.
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

        {/* More Services */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                More Than Mobile Tyre Replacement
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A failed tyre is not the only problem that can interrupt a journey or leave a
                working vehicle unusable. Rapid Mobile Tyres also provides jump start assistance
                for vehicles with flat batteries and emergency fuel delivery when a driver has run
                out of fuel — making it easier to request assistance based on the actual problem.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and tyre failures — available across Avonmouth including residential and industrial areas.",
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
                  body: "Arrange planned or emergency tyre replacement at your Avonmouth home address — on the driveway or at a suitable residential parking area.",
                  icon: (
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  ),
                },
                {
                  href: "/mobile-car-tyre-fitting-bristol",
                  title: "Mobile Car Tyre Fitting",
                  body: "Tyre fitting for many common car makes and models. Providing the tyre size when calling helps ensure the right replacement is checked before we travel.",
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
                  body: "Replacement van tyre fitting at your location. Van tyres can require specific load ratings — give us the full tyre specification when calling.",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations across Avonmouth and nearby areas.",
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
                  body: "Run out of fuel in Avonmouth or on a nearby route? Our emergency fuel delivery service can bring the right fuel to your location.",
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

        <Faq items={faqs} />

        {/* Final CTA */}
        <section className="relative bg-zinc-900 py-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/commercial-tyre-inspection-equipment-avonmouth.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Need Mobile Tyre Fitting in Avonmouth?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              Whether you have discovered a flat tyre before work, suffered a blowout during a
              journey or have a van unable to leave an industrial site, you do not necessarily need
              to arrange recovery to a tyre centre. Rapid Mobile Tyres can bring mobile tyre
              fitting in Avonmouth directly to your home, workplace or suitable roadside location.
              Contact us with your tyre size, vehicle details and exact location so we can check
              availability and arrange the appropriate mobile callout.
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
