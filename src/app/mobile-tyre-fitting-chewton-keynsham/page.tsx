import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import TyreBrands from "@/components/TyreBrands";
import Faq from "@/components/Faq";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Chewton Keynsham | 24/7 Service",
  description:
    "Mobile tyre fitting in Chewton Keynsham for flat or damaged tyres. Get tyre assistance directly at your location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-chewton-keynsham",
  },
};

const stats = [
  { value: "24/7", label: "Available, every day" },
  { value: "45–60 min", label: "Average arrival time" },
  { value: "Affordable", label: "Callout rates" },
  { value: "5★", label: "Rated by customers" },
];

const vehicleServices = [
  {
    title: "Mobile Car Tyre Fitting",
    href: "/mobile-car-tyre-fitting-bristol",
    description:
      "Fitting for hatchbacks, saloons, estates and family cars at a suitable home, workplace or roadside location in Chewton Keynsham.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "Replacement service for light commercial vehicles brought directly to the van. Commercial tyres often require specific load ratings — provide the full specification when calling.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "Fitting for larger vehicles and SUV-specific tyre specifications, subject to current stock availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Describe What Happened",
    description:
      "Tell us whether you have a puncture, flat tyre, blowout, visible damage or a tyre that is simply worn and ready for replacement.",
  },
  {
    title: "Check Your Tyre Size",
    description:
      "The numbers printed on the sidewall tell us the tyre dimensions. If you cannot find them, your vehicle make, model or registration can also help.",
  },
  {
    title: "Share Your Exact Location",
    description:
      "Let us know whether you are on Chewton Road, at a residential property, workplace or elsewhere. A postcode or shared map location is particularly useful on quieter local roads.",
  },
  {
    title: "We Arrange the Mobile Fitting",
    description:
      "Once the required tyre and location have been confirmed, a technician travels to you with the necessary fitting equipment and carries out the replacement where it is safe to work.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Chewton Keynsham?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Chewton Keynsham is available day and night, subject to technician availability and the required tyre being in stock.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Chewton Keynsham?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival times depend on traffic, technician availability and your exact location.",
  },
  {
    question: "Can you replace a tyre at my home in Chewton Keynsham?",
    answer:
      "Yes. Tyre replacement in Chewton Keynsham can be carried out at suitable residential locations where there is enough safe space around the vehicle for the technician to work.",
  },
  {
    question: "Can you help if I have a flat tyre on Chewton Road?",
    answer:
      "Yes. We provide roadside tyre assistance in Chewton Keynsham at suitable locations around Chewton Road and nearby routes, provided there is safe and permitted access.",
  },
  {
    question: "Do you provide emergency tyre fitting at night?",
    answer:
      "Yes. Emergency tyre fitting in Chewton Keynsham is available 24/7, including nights and weekends, subject to technician and tyre availability.",
  },
  {
    question: "Do you offer mobile car tyre fitting?",
    answer:
      "Yes. We provide mobile car tyre fitting for many common vehicles and tyre sizes. Giving us your tyre size when you call helps us check the appropriate replacement.",
  },
  {
    question: "Can you replace tyres on vans?",
    answer:
      "Yes. Our mobile van tyre fitting in Chewton Keynsham covers suitable light commercial vehicles. Van tyres can require particular load ratings, so provide the complete tyre specification where possible.",
  },
  {
    question: "Do you provide SUV tyre fitting?",
    answer:
      "Yes. SUV and 4x4 tyre fitting is available for suitable vehicles and tyre specifications, subject to stock availability.",
  },
  {
    question: "Can I arrange mobile tyre replacement before my tyre becomes completely flat?",
    answer:
      "Yes. Mobile tyre replacement in Chewton Keynsham can be arranged for worn or damaged tyres as well as emergency callouts.",
  },
  {
    question: "Do you cover areas around Keynsham as well?",
    answer:
      "Our wider mobile tyre service covers Chewton Keynsham and surrounding areas. If you are in Keynsham or another nearby location, provide your postcode so availability can be checked.",
  },
  {
    question: "What details should I provide if I am on a rural road?",
    answer:
      "Your exact location is particularly useful. Give us the road name, postcode, nearby junction or shared map location together with your tyre size and vehicle details.",
  },
];

const areasServed = [
  { name: "Chewton Keynsham", href: null },
  { name: "Keynsham", href: null },
  { name: "Compton Dando", href: null },
  { name: "Queen Charlton", href: null },
  { name: "Bitton", href: "/mobile-tyre-fitting-bitton" },
  { name: "Chew Magna", href: "/mobile-tyre-fitting-chew-magna" },
  { name: "Chew Stoke", href: "/mobile-tyre-fitting-chew-stoke" },
  { name: "Brislington", href: "/mobile-tyre-fitting-brislington" },
  { name: "Bath", href: "/mobile-tyre-fitting-bath" },
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

export default function ChewtonKeynshamPage() {
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
                Chewton Keynsham, Somerset
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Chewton Keynsham</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A flat or damaged tyre can be difficult enough to deal with without having to find a
                garage. Our mobile unit comes straight to your home, workplace or roadside location
                in Chewton Keynsham — usually within 45–60 minutes, 24/7 for cars, vans and SUVs.
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

        {/* Tyre Fitting Without Leaving Your Location */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Fitting Where Your Vehicle Is Parked
                </h2>
                <p className="mb-8 text-zinc-600">
                  Mobile tyre fitting is especially useful when the tyre problem itself makes
                  travelling to a garage difficult or unsafe. Our mobile tyre fitters in Chewton
                  Keynsham bring the fitting equipment and suitable replacement tyre to your location,
                  removing the need to move the vehicle unnecessarily.
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
                        Discovering a flat tyre before leaving home does not have to mean arranging
                        recovery. Where your vehicle is parked in a suitable working area, we can carry
                        out tyre replacement on your driveway or residential parking space — including
                        tyres that are worn or visibly damaged but have not yet failed completely. Our{" "}
                        <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                          home tyre replacement service
                        </Link>{" "}
                        is available for planned changes too.
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
                      <h3 className="font-semibold text-zinc-900">Mobile Fitting at Your Workplace</h3>
                      <p className="text-zinc-600">
                        A tyre problem during the working day can be particularly inconvenient when your
                        car or van is needed later. Our mobile tyre service can attend suitable
                        workplace locations around Chewton Keynsham, allowing the replacement to be
                        completed while the vehicle remains parked.
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
                        If a puncture, blowout or sudden pressure loss leaves you unable to continue
                        safely, our roadside tyre assistance in Chewton Keynsham can attend suitable
                        locations. The technician needs enough safe space to work around the vehicle —
                        follow appropriate roadside guidance if stopped in a hazardous position.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/mobile-tyre-fitting-technician-bristol.webp"
                    alt="Mobile tyre fitting technician fitting a tyre at a customer's location in Chewton Keynsham"
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

        {/* Emergency */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Emergency Mobile Tyre Fitting in Chewton Keynsham
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Tyre failures do not follow garage opening hours. Rapid Mobile Tyres provides
                emergency tyre fitting in Chewton Keynsham 24 hours a day for drivers facing
                unexpected tyre problems — punctures, blowouts, complete pressure loss and sidewall
                damage.
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
                  Day or night, our mobile tyre service is available 24 hours a day — no waiting for
                  garage opening times anywhere in Chewton Keynsham.
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
                  Our technicians carry a range of tyre stock. Providing your tyre size when calling
                  helps ensure we can check the right replacement is available before setting off.
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
                Tyres vary significantly between vehicle types. Providing the correct tyre
                information when you call helps us identify a suitable replacement before attending.
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
                What to Tell Us When Booking a Tyre Callout
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Having a few key details ready helps us understand what you need before the
                technician sets off.
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
              src="/van-tyre-fitting-road-service-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-3xl font-extrabold">
                Mobile Tyre Assistance Around Chewton Road and Wellsway
              </h2>
              <p className="mb-4 text-zinc-300">
                Chewton Keynsham has a distinctive local road network centred around Chewton Road,
                which connects towards Wellsway and the B3116. Redlynch Lane also runs through this
                part of the area, while local roads continue towards Compton Dando and surrounding
                rural communities.
              </p>
              <p className="mb-4 text-zinc-300">
                These quieter routes can present a different problem from a busy city road: if a
                tyre fails, a nearby tyre centre may not be immediately accessible. Our mobile tyre
                service can attend suitable locations around Chewton Keynsham where access allows
                the technician to work safely. Nearby locations including{" "}
                <Link href="/mobile-tyre-fitting-bitton" className="text-orange-400 hover:underline">
                  Bitton
                </Link>
                ,{" "}
                <Link href="/mobile-tyre-fitting-brislington" className="text-orange-400 hover:underline">
                  Brislington
                </Link>{" "}
                and{" "}
                <Link href="/mobile-tyre-fitting-bath" className="text-orange-400 hover:underline">
                  Bath
                </Link>{" "}
                are also within our service area.
              </p>
              <p className="text-zinc-300">
                If you are stopped away from a clear street address, providing the road name, nearby
                junction, postcode or shared location can make it easier to identify your position.
              </p>
            </div>
          </div>
        </section>

        {/* Replacement tyres / tyre details */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Replacement Tyres for Local and Longer Journeys
                </h2>
                <p className="mb-4 text-zinc-600">
                  Drivers around Chewton Keynsham may use their vehicles for short journeys into
                  Keynsham as well as longer trips towards{" "}
                  <Link href="/mobile-tyre-fitting-bath" className="text-orange-500 hover:underline">
                    Bath
                  </Link>{" "}
                  or{" "}
                  <Link href="/mobile-tyre-fitting-brislington" className="text-orange-500 hover:underline">
                    Bristol
                  </Link>
                  . The appropriate replacement tyre therefore needs to match the vehicle
                  specification rather than simply fit the wheel.
                </p>
                <p className="mb-6 text-zinc-600">
                  Our mobile tyre replacement in Chewton Keynsham can include different tyre options
                  depending on dimensions, load requirements and current availability. Providing the
                  full size and rating from the existing tyre sidewall helps us check a suitable
                  option before attending.
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
                  {[
                    { n: "1", label: "Tyre size", detail: "printed on the sidewall (e.g. 205/55 R16)" },
                    { n: "2", label: "Load index and speed rating", detail: "especially important for vans" },
                    { n: "3", label: "Vehicle make and model", detail: "helpful if the sidewall is damaged" },
                    { n: "4", label: "Your exact location", detail: "postcode, road name or shared location pin" },
                  ].map((item) => (
                    <li key={item.n} className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                        {item.n}
                      </span>
                      <span>
                        <strong>{item.label}</strong> — {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Why mobile / benefits */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Why Mobile Tyre Fitting Works Well in Chewton Keynsham
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Chewton Keynsham combines residential properties with quieter roads and rural
                surroundings, so getting a vehicle with an unusable tyre to a garage is not always
                straightforward. Mobile fitting reverses the normal process by bringing the tyre
                technician to the vehicle.
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
                  body: "Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Chewton Keynsham for suitable homes, workplaces and roadside locations.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "No Unnecessary Driving",
                  body: "Mobile fitting removes the need to drive on a flat or damaged tyre to reach a tyre depot — the service comes to you.",
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
                  body: "The service can be used for unexpected tyre failures as well as planned replacement when tyres are worn but the vehicle is safely parked.",
                },
                {
                  icon: (
                    <>
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h3l3 4h-1a1 1 0 000 2h1.5a1 1 0 00.8-.4l1.5-2a1 1 0 000-1.2L18 9.4V9a1 1 0 00-1-1h-4V5a1 1 0 00-1-1H3z" />
                    </>
                  ),
                  title: "Cars, Vans & SUVs",
                  body: "The service covers cars, vans and SUVs, with additional help available if the problem turns out to be a flat battery or running out of fuel.",
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
                Covering Chewton Keynsham and Nearby Areas
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Chewton Keynsham sits just outside Keynsham within the River Chew valley, with
                local road connections towards Keynsham, Compton Dando, Queen Charlton and the
                surrounding countryside. Our mobile service can assist across Chewton Keynsham and
                surrounding locations, including{" "}
                <Link href="/mobile-tyre-fitting-chew-magna" className="text-orange-500 hover:underline">
                  Chew Magna
                </Link>
                ,{" "}
                <Link href="/mobile-tyre-fitting-chew-stoke" className="text-orange-500 hover:underline">
                  Chew Stoke
                </Link>{" "}
                and{" "}
                <Link href="/mobile-tyre-fitting-bitton" className="text-orange-500 hover:underline">
                  Bitton
                </Link>
                , subject to technician availability.
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
            <p className="mt-6 text-sm text-zinc-500">
              If your location is outside the immediate village area, provide your postcode or
              shared location when calling so current coverage can be confirmed.
            </p>
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
                Not every roadside problem is caused by the tyres. We also provide{" "}
                <Link href="/jumpstarts" className="text-orange-500 hover:underline">
                  jump start assistance
                </Link>{" "}
                and{" "}
                <Link href="/fuel-delivery" className="text-orange-500 hover:underline">
                  emergency fuel delivery
                </Link>{" "}
                for drivers in Chewton Keynsham and surrounding areas.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and sidewall damage — including quiet rural roads around Chewton Keynsham.",
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
                  href: "/mobile-tyre-fitting",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations in and around Chewton Keynsham.",
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
                  body: "Run out of fuel near Chewton Keynsham? Our emergency fuel delivery service can bring the right fuel to your location.",
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

        <TyreBrands />

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
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Need Mobile Tyre Fitting in Chewton Keynsham?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              A puncture, blowout or worn tyre does not have to mean driving an unsafe vehicle to
              the nearest tyre centre. Contact us with your location, tyre size and vehicle details,
              and we can check availability and arrange a suitable mobile tyre callout.
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
