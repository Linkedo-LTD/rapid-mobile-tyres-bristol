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
  title: "Mobile Tyre Fitting Weston-super-Mare | 24/7 Service",
  description:
    "Mobile tyre fitting in Weston-super-Mare for flat or damaged tyres. Get tyre replacement at your location.",
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
      "Our mobile car tyre fitting in Weston-super-Mare is suitable for many common hatchbacks, saloons, estates and family vehicles. Whether the tyre has suffered unexpected damage or has simply reached replacement time, we can fit a suitable tyre at an accessible home, workplace or roadside location.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "For tradespeople, delivery drivers and businesses, a van tyre failure can mean missed jobs and unnecessary downtime. Our mobile van tyre fitting in Weston-super-Mare brings the replacement service directly to the vehicle. Because commercial tyres can require specific load ratings, providing the complete tyre specification helps us identify the correct option.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s often require larger tyre dimensions and specifications suited to their weight and intended use. We provide SUV tyre fitting in Weston-super-Mare for suitable tyre sizes and vehicles, subject to current stock availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us What Has Happened",
    description:
      "Let us know whether the tyre is punctured, completely flat, blown out, visibly damaged or simply worn and due for replacement.",
  },
  {
    title: "Check the Tyre Sidewall",
    description:
      "The tyre size is normally printed on the sidewall. Providing the full size helps us check availability before travelling.",
  },
  {
    title: "Tell Us Exactly Where You Are",
    description:
      "Give us your postcode, road name or shared location. If you are travelling rather than parked at an address, include your direction of travel and the nearest junction or recognisable location where possible.",
  },
  {
    title: "We Bring the Fitting Equipment to the Vehicle",
    description:
      "Once your location and tyre requirement have been confirmed, a technician can attend and complete the replacement where conditions allow safe working.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Weston-super-Mare?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Weston-super-Mare operates day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Weston-super-Mare?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival time can vary according to traffic, technician availability, tyre availability and your exact location.",
  },
  {
    question: "Do you provide emergency tyre fitting in Weston-super-Mare?",
    answer:
      "Yes. Emergency tyre fitting in Weston-super-Mare is available for punctures, blowouts, flat tyres and other tyre problems that prevent safe onward travel.",
  },
  {
    question: "Can you replace a tyre at my home?",
    answer:
      "Yes. Tyre replacement in Weston-super-Mare can usually be carried out at a suitable residential location where there is enough safe working space around the vehicle.",
  },
  {
    question: "Can you help with a tyre problem near the A370?",
    answer:
      "Yes. Our roadside tyre assistance in Weston-super-Mare can cover suitable locations around the A370 and nearby roads where safe access is available. The A370 provides a key connection between Weston-super-Mare and M5 Junction 21.",
  },
  {
    question: "What if my tyre fails near M5 Junction 21?",
    answer:
      "Provide your exact location, direction of travel and nearest junction when calling. If you are stopped on the motorway itself, follow motorway safety guidance first and only arrange tyre fitting where access is safe and permitted.",
  },
  {
    question: "Do you offer mobile car tyre fitting in Weston-super-Mare?",
    answer:
      "Yes. We provide mobile car tyre fitting in Weston-super-Mare for many common vehicle types and tyre sizes, subject to tyre availability.",
  },
  {
    question: "Can you replace van tyres?",
    answer:
      "Yes. Our mobile van tyre fitting in Weston-super-Mare covers suitable light commercial vehicles. Give us the complete tyre size and load rating where possible.",
  },
  {
    question: "Can you fit replacement tyres to SUVs and 4x4s?",
    answer:
      "Yes. SUV tyre fitting in Weston-super-Mare is available for suitable vehicles and tyre specifications, subject to stock availability.",
  },
  {
    question: "Can I book mobile tyre replacement if the tyre is only worn?",
    answer:
      "Yes. Mobile tyre replacement in Weston-super-Mare can be arranged for planned tyre changes as well as emergency punctures and blowouts.",
  },
  {
    question: "Do you cover Worle and Uphill?",
    answer:
      "Yes. The current Weston-super-Mare service area includes Worle and Uphill, along with Kewstoke, Locking, Hutton, Bleadon and other nearby locations.",
  },
  {
    question: "Do you provide a mobile tyre service at weekends?",
    answer:
      "Yes. Our mobile tyre service in Weston-super-Mare operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What information should I provide when calling?",
    answer:
      "Give us your tyre size, vehicle details and exact location. If you are stopped on the roadside, your direction of travel, nearest junction or shared map location can also help identify your position.",
  },
];

const areasServed = [
  { name: "Worle", href: null },
  { name: "Uphill", href: null },
  { name: "Kewstoke", href: null },
  { name: "Locking", href: null },
  { name: "Hutton", href: null },
  { name: "Bleadon", href: null },
  { name: "Burnham-on-Sea", href: null },
  { name: "Clevedon", href: null },
  { name: "Bridgwater", href: "/mobile-tyre-fitting-bridgewater" },
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
              src="/mobile-tyre-fitting-weston-super-mare-hero.webp"
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
                Weston-super-Mare, North Somerset
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Weston-super-Mare</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A flat tyre can interrupt anything from the morning commute to a weekend journey
                out of Weston-super-Mare. Rapid Mobile Tyres provides mobile tyre fitting in
                Weston-super-Mare, bringing tyre replacement directly to your home, workplace or
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

        {/* Tyre Fitting That Fits Around Your Day */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Fitting That Fits Around Your Day
                </h2>
                <p className="mb-8 text-zinc-600">
                  Weston-super-Mare is a busy coastal town where vehicles are used for commuting,
                  work, shopping and longer journeys throughout North Somerset. Our mobile tyre
                  fitters in Weston-super-Mare allow you to arrange replacement where the vehicle
                  is already parked rather than adding a garage visit to your day. We can attend
                  suitable homes, workplaces and roadside locations where there is enough safe space
                  to carry out the fitting.
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
                        Finding a flat tyre on the driveway before leaving home can immediately
                        disrupt your plans. With mobile fitting, the vehicle does not need to be
                        moved first. Where access is suitable, we can replace the tyre on your
                        driveway or residential parking area through our{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          home tyre replacement service
                        </Link>
                        . Home fitting can also be arranged when a tyre is worn or damaged but has
                        not yet failed completely.
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
                        If you discover a tyre issue after arriving at work, leaving the vehicle
                        there while a mobile fitter attends can be far more convenient than
                        organising a separate garage visit. Our service can attend suitable business
                        premises and workplace car parks across Weston-super-Mare where there is
                        safe access around the vehicle.
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
                        A puncture or blowout during a journey can leave you unable to continue
                        safely. Our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          roadside tyre assistance
                        </Link>{" "}
                        in Weston-super-Mare is available at suitable locations where a technician
                        can access the vehicle safely and legally. If you are stopped on a fast road
                        or in a hazardous position, put your safety first and follow the appropriate
                        roadside guidance before requesting tyre assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/tyre-sidewall-damage-weston-super-mare.webp"
                    alt="Tyre sidewall damage inspected by a Rapid Mobile Tyres technician in Weston-super-Mare"
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
                Emergency Mobile Tyre Fitting in Weston-super-Mare
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Tyre problems can happen early in the morning, late at night or while garages are
                closed. Rapid Mobile Tyres provides emergency tyre fitting in Weston-super-Mare
                24 hours a day for punctures, blowouts, sudden pressure loss and other tyre
                failures that prevent safe onward travel.
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
                  garage opening times, whatever the hour or day of the week.
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
                  availability and your exact location. Providing your tyre size and precise
                  location when you call helps us prepare before travelling.
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
                Tyres for Cars, Vans and SUVs
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A replacement tyre must meet the requirements of the vehicle rather than simply
                match the wheel diameter. Tyre width, profile, load rating and speed rating can
                vary significantly between passenger cars, commercial vans and larger SUVs.
                Providing your vehicle and tyre details when calling helps us check a suitable
                option before attending.
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
                From Tyre Problem to Mobile Callout
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Arranging assistance is easier when we have the right information from the
                beginning. Providing accurate details about the tyre problem and your location
                helps us check availability and reach you efficiently.
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
              src="/mobile-tyre-service-completion-weston-super-mare.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-3xl font-extrabold">
                Mobile Tyre Assistance Around the A370 and M5 Junction 21
              </h2>
              <p className="mb-4 text-zinc-300">
                The A370 is one of the principal routes into and out of Weston-super-Mare, linking
                the town with M5 Junction 21 and onward journeys towards Bristol and other parts
                of North Somerset. That makes the corridor particularly important for commuters,
                commercial drivers and people travelling into or out of Weston.
              </p>
              <p className="mb-4 text-zinc-300">
                If a tyre problem occurs around the A370 or roads leading towards Junction 21, our
                mobile service can attend suitable accessible locations within our coverage area.
                Our service also covers nearby areas including{" "}
                <Link
                  href="/mobile-tyre-fitting-bridgewater"
                  className="text-orange-400 hover:underline"
                >
                  Bridgwater
                </Link>{" "}
                and the wider North Somerset road network.
              </p>
              <p className="text-zinc-300">
                If you are stopped on the motorway itself, follow motorway safety guidance first
                and arrange assistance only where safe and permitted access is available. Providing
                your exact road, postcode, nearest junction or shared location helps us identify
                your position efficiently.
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
                  Tyre Help for Coastal, Town and Commuter Driving
                </h2>
                <p className="mb-4 text-zinc-600">
                  Driving around Weston-super-Mare can involve very different types of journeys.
                  Some vehicles mainly cover shorter trips through the town and surrounding
                  residential areas, while others regularly travel along the A370 towards Bristol
                  or connect with the M5 for longer journeys.
                </p>
                <p className="mb-4 text-zinc-600">
                  Visitors can also add extra traffic during busy periods, particularly around the
                  town&apos;s coastal and leisure areas. Our{" "}
                  <Link
                    href="/mobile-tyre-fitting"
                    className="text-orange-500 hover:underline"
                  >
                    mobile tyre replacement
                  </Link>{" "}
                  in Weston-super-Mare is based on the requirements of your vehicle, with suitable
                  options depending on tyre specification and current availability.
                </p>
                <p className="mb-6 text-zinc-600">
                  Rather than guessing the replacement you need, give us the full tyre size so the
                  appropriate options can be checked.
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
                      <strong>Your exact location</strong> — postcode, road name or shared
                      location pin
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
                24-Hour Tyre Support Without Planning Around Garage Hours
              </h2>
              <p className="max-w-2xl text-zinc-600">
                A tyre failure at 9am and one at 11pm create the same basic problem: the vehicle
                may no longer be safe to drive. Our 24 hour mobile tyre fitting in
                Weston-super-Mare gives drivers another option when a tyre problem happens outside
                conventional tyre-centre opening hours. Mobile fitting also works for planned
                replacements, so you do not need to wait for an emergency before arranging a
                callout.
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
                  body: "Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Weston-super-Mare for suitable homes, workplaces and roadside locations.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "No Unnecessary Driving",
                  body: "Mobile fitting removes the need to drive the vehicle on a flat or damaged tyre to reach a tyre depot — the service comes to you wherever the vehicle is parked.",
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
                  body: "The service can be used for unexpected tyre failures as well as planned replacement when tyres are worn or damaged but the vehicle is safely parked.",
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
                Covering Weston-super-Mare and Nearby Areas
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Our current Weston-super-Mare coverage includes Worle, Uphill, Kewstoke, Locking,
                Hutton, Bleadon, Burnham-on-Sea, Clevedon and{" "}
                <Link
                  href="/mobile-tyre-fitting-bridgewater"
                  className="text-orange-500 hover:underline"
                >
                  Bridgwater
                </Link>
                . These locations cover a mixture of suburban, coastal and more rural driving
                environments around North Somerset. If you are outside central Weston-super-Mare,
                provide your postcode when calling so your exact coverage and current technician
                availability can be checked.
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
                More Than Tyre Replacement
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A vehicle can become stranded even when all four tyres are fine. Rapid Mobile
                Tyres also provides jump start assistance for vehicles affected by flat batteries
                and emergency fuel delivery when a driver runs out of fuel. This means you can
                request assistance based on the actual problem rather than arranging a general
                recovery service first.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and tyre failures — available in Weston-super-Mare and surrounding North Somerset areas.",
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
                  body: "Arrange planned or emergency tyre replacement at your home address — on the driveway or at a suitable residential parking area.",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations across Weston-super-Mare and nearby areas.",
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
                  body: "Run out of fuel in or around Weston-super-Mare? Our emergency fuel delivery service can bring the right fuel to your location.",
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
              src="/replacement-tyre-valve-weston-super-mare.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Need Mobile Tyre Fitting in Weston-super-Mare?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              Whether your tyre fails on the driveway, during your commute or while travelling
              through North Somerset, you do not necessarily need to get the vehicle to a tyre
              centre first. Rapid Mobile Tyres can bring mobile tyre fitting in Weston-super-Mare
              directly to your home, workplace or suitable roadside location. Contact us with your
              exact location, vehicle details and tyre size so we can check tyre availability and
              arrange the appropriate mobile callout.
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
