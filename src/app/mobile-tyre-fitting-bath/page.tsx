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
  title: "Mobile Tyre Fitting Bath | 24/7 Tyre Replacement",
  description:
    "Need mobile tyre fitting in Bath? Get flat or damaged tyres replaced at your home, workplace or roadside.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-bath",
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
      "Our mobile car tyre fitting in Bath covers many common hatchbacks, saloons, estates and family vehicles. Whether the tyre has failed unexpectedly or is due for replacement, fitting can be arranged at a suitable home, workplace or roadside location subject to the required size being available.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "A van off the road can affect several jobs rather than only one journey. Our mobile van tyre fitting in Bath brings the replacement directly to suitable light commercial vehicles. Van tyres may require specific load ratings, so providing the full tyre specification when booking is useful.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s often require larger tyre sizes or different load specifications from standard cars. We provide SUV tyre fitting in Bath for suitable vehicles and tyre specifications, subject to current tyre availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "What Has Happened to the Tyre?",
    description:
      "Tell us whether you have a puncture, blowout, complete flat, visible sidewall damage or a tyre that needs replacing because of wear.",
  },
  {
    title: "What Tyre Is Fitted?",
    description:
      "Read the complete tyre size from the sidewall where possible. Your vehicle make, model or registration can provide additional information if needed.",
  },
  {
    title: "Where Is the Vehicle?",
    description:
      "Provide the full postcode if you are at a property. If stopped during a journey, send the road name, direction of travel, nearby junction or a shared map location.",
  },
  {
    title: "Is There Safe Access Around It?",
    description:
      "Let us know if the vehicle is inside a car park, private development, workplace or another location where access might need explaining.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Bath?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Bath is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach me in Bath?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival time can vary depending on Bath traffic, your exact location, technician availability and whether your tyre size is currently available.",
  },
  {
    question: "Do you provide emergency tyre fitting in Bath?",
    answer:
      "Yes. Emergency tyre fitting in Bath is available for punctures, blowouts, complete flats and other tyre damage that prevents safe onward travel.",
  },
  {
    question: "Can you replace a tyre at my home in Bath?",
    answer:
      "Yes. Tyre replacement in Bath can usually be completed at a suitable residential property where there is enough safe working space around the vehicle.",
  },
  {
    question: "Do you provide mobile tyre fitting in Bath city centre?",
    answer:
      "We can attend suitable accessible locations within our service area. Because Bath city centre includes busy roads, parking restrictions and the Clean Air Zone, provide your exact postcode or shared location so access can be assessed properly.",
  },
  {
    question: "Can you help if my tyre fails on the A4?",
    answer:
      "Our roadside tyre assistance in Bath can attend suitable accessible locations around the A4 where safe and permitted working space is available. Bath's road network includes A4 routes such as London Road, Newbridge Road and Box Road.",
  },
  {
    question: "Can you attend around Lower Bristol Road?",
    answer:
      "Yes, subject to safe access and current coverage. Lower Bristol Road forms part of the A36 through Bath and is specifically identified in Bath & North East Somerset Council traffic monitoring.",
  },
  {
    question: "Do you cover Wells Road?",
    answer:
      "We can assist at suitable locations within our service area. The A367 Wells Road is one of the southern approaches into Bath. Give us the postcode or exact roadside location when calling.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Bath?",
    answer:
      "Yes. We provide mobile car tyre fitting in Bath for many common vehicles and tyre sizes, subject to current stock availability.",
  },
  {
    question: "Can you replace van tyres in Bath?",
    answer:
      "Yes. Our mobile van tyre fitting in Bath covers suitable light commercial vehicles. Provide the full tyre dimensions and load rating where possible so the correct specification can be checked.",
  },
  {
    question: "Do you provide SUV tyre fitting in Bath?",
    answer:
      "Yes. SUV tyre fitting in Bath is available for suitable vehicles and tyre specifications, subject to current tyre availability.",
  },
  {
    question: "Can I arrange mobile tyre replacement without having a breakdown?",
    answer:
      "Yes. Mobile tyre replacement in Bath can be booked for worn or damaged tyres as well as emergency punctures and blowouts.",
  },
  {
    question: "Do you cover Bathampton and Batheaston?",
    answer:
      "Both Bathampton and Batheaston are currently listed among the surrounding locations served from the Bath page. Call with your postcode so current availability can be confirmed.",
  },
  {
    question: "Do you cover Combe Down and Odd Down?",
    answer:
      "Combe Down and Odd Down are also currently listed in the Bath surrounding coverage. The exact arrival time will depend on technician location, traffic and tyre availability.",
  },
  {
    question: "Is mobile tyre fitting available in Bath at weekends?",
    answer:
      "Yes. Our mobile tyre service in Bath operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What information should I provide when calling?",
    answer:
      "Give us your vehicle details, complete tyre size and exact location. If the vehicle is stopped on a road rather than at an address, also provide your direction of travel, nearest junction or a shared map location.",
  },
];

const areasServed = [
  { name: "Batheaston", href: null },
  { name: "Bathampton", href: null },
  { name: "Combe Down", href: null },
  { name: "Odd Down", href: null },
  { name: "Twerton", href: null },
  { name: "Saltford", href: null },
  { name: "Keynsham", href: null },
  { name: "Radstock", href: null },
  { name: "Midsomer Norton", href: null },
  { name: "Bitton", href: "/mobile-tyre-fitting-bitton" },
  { name: "Chew Magna", href: "/mobile-tyre-fitting-chew-magna" },
  { name: "Chew Stoke", href: "/mobile-tyre-fitting-chew-stoke" },
  { name: "Chewton Keynsham", href: "/mobile-tyre-fitting-chewton-keynsham" },
  { name: "Brislington", href: "/mobile-tyre-fitting-brislington" },
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
                Bath, Bath &amp; North East Somerset
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Bath</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A damaged tyre can turn a normal journey across Bath into an immediate problem,
                especially when the vehicle is no longer safe to drive through the city to a tyre
                centre. Rapid Mobile Tyres provides mobile tyre fitting in Bath, bringing tyre
                replacement directly to your home, workplace or suitable roadside location — 24/7
                for cars, vans and SUVs.
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

        {/* Tyre Replacement Without Crossing Bath */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Replacement Without Crossing Bath to Reach a Garage
                </h2>
                <p className="mb-8 text-zinc-600">
                  Bath has a road network where even a relatively short garage journey can become
                  inconvenient when your tyre is damaged. Mobile fitting removes that extra trip.
                  Our mobile tyre fitter in Bath can attend suitable residential properties,
                  workplaces and accessible roadside locations so the tyre can be changed where
                  the vehicle is already parked.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-zinc-900">Tyre Fitting at Your Bath Home</h3>
                      <p className="text-zinc-600">
                        If your tyre has gone flat overnight, there is no need to start your day
                        attempting to drive an unsafe vehicle to a tyre centre. Where there is enough
                        safe working space, replacement can be completed on a driveway or suitable
                        residential parking area. Our{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          home tyre replacement service
                        </Link>{" "}
                        also works for planned replacements when tread is worn or you have noticed
                        damage before the tyre becomes completely unusable.
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
                      <h3 className="font-extrabold text-zinc-900">Mobile Tyre Fitting While You&apos;re at Work</h3>
                      <p className="text-zinc-600">
                        A tyre problem discovered during the working day does not necessarily mean
                        leaving work and finding a garage appointment. Where access is suitable, we
                        can attend workplace parking areas in Bath and replace the tyre while the
                        vehicle remains there. Provide the business address or postcode when
                        arranging the callout so the vehicle can be located accurately.
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
                      <h3 className="font-extrabold text-zinc-900">Roadside Tyre Help in Bath</h3>
                      <p className="text-zinc-600">
                        A blowout or puncture during a journey may leave you unable to continue
                        safely. Our roadside tyre assistance in Bath can attend suitable locations
                        where the vehicle can be accessed without putting the driver, technician or
                        other road users at unnecessary risk. If you are stopped somewhere exposed
                        or on a busy route, prioritise reaching the safest available position before
                        arranging tyre fitting.
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
                Emergency Mobile Tyre Fitting in Bath, Day or Night
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A tyre failure at night creates the same problem as one during normal garage hours:
                the vehicle may no longer be safe to drive. Rapid Mobile Tyres provides{" "}
                <Link
                  href="/emergency-mobile-tyre-fitting-bristol"
                  className="text-orange-500 hover:underline"
                >
                  emergency tyre fitting in Bath
                </Link>{" "}
                24 hours a day for punctures, blowouts, complete flats and other unexpected tyre
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
                <h3 className="mb-2 text-lg font-extrabold text-zinc-900">Available 24/7</h3>
                <p className="text-zinc-600">
                  Day or night, our mobile tyre service is available 24 hours a day — no waiting
                  for garage opening times, including evenings, nights and weekends.
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
                <h3 className="mb-2 text-lg font-extrabold text-zinc-900">We Come to You</h3>
                <p className="text-zinc-600">
                  Our usual arrival time is around 45–60 minutes, depending on traffic, technician
                  availability, your exact location and whether the required tyre is currently
                  available. Giving us your tyre size and precise position at the beginning helps
                  us assess what is needed before travelling.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden>
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h3l3 4h-1a1 1 0 000 2h1.5a1 1 0 00.8-.4l1.5-2a1 1 0 000-1.2L18 9.4V9a1 1 0 00-1-1h-4V5a1 1 0 00-1-1H3z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-zinc-900">Right Tyre on the Van</h3>
                <p className="text-zinc-600">
                  Our technicians carry a range of tyre stock. Providing your tyre size when
                  calling helps ensure we can check the right replacement is available before
                  setting off to your Bath location.
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
                Mobile Tyres for Bath&apos;s Cars, Vans and SUVs
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Two vehicles parked beside each other can require completely different replacement
                tyres. The correct option depends on dimensions, load index, speed rating and the
                requirements of the vehicle. Providing your vehicle and tyre details when booking
                helps us check a suitable option before attending.
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
                    <h3 className="mb-2 text-lg font-extrabold text-zinc-900 group-hover:text-orange-500 transition-colors">
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
                Four Details That Help Us Arrange Your Bath Callout
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Bath covers a mixture of city streets, residential neighbourhoods and major approach
                roads, so accurate information makes arranging a callout much easier.
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
                  <h3 className="mb-2 font-extrabold text-zinc-900">{step.title}</h3>
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
                Mobile Tyre Assistance on Bath&apos;s Main Roads
              </h2>
              <p className="mb-4 text-zinc-300">
                <span className="font-semibold text-white">The A4</span> is one of Bath&apos;s
                major routes, running under different road names as it passes through and around the
                city — including A4 Newbridge Road on the western side, A4 Box Road further east,
                and A4 London Road. If a tyre develops a problem around an accessible section of
                this corridor, our mobile tyre service can attend suitable locations subject to safe
                working conditions and technician availability.
              </p>
              <p className="mb-4 text-zinc-300">
                <span className="font-semibold text-white">The A36</span> is another major route
                through Bath, including Lower Bristol Road, sections around Widcombe and Claverton
                Street on the eastern side. A tyre problem on this part of the network can affect
                journeys across Bath as well as travel towards neighbouring areas. Our service can
                attend suitable accessible locations around the A36, but roadside fitting must only
                take place where the vehicle can be worked on safely and legally.
              </p>
              <p className="mb-4 text-zinc-300">
                <span className="font-semibold text-white">The A367 Wells Road</span> corridor runs
                south from the city through Lyncombe. A puncture on the approach to Bath can leave
                you facing the awkward choice between continuing on a damaged tyre or finding
                another way to reach a tyre centre. Mobile fitting gives you another option —
                provide your exact position so we can establish whether a safe callout is possible.
              </p>
              <p className="text-zinc-300">
                Give us the exact road name and direction of travel rather than simply saying
                &quot;A4 Bath&quot; or &quot;A36 Bath&quot; where possible. A postcode or shared
                map location is even more helpful.
              </p>
            </div>
          </div>
        </section>

        {/* Replacement tyres / City driving */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Replacement Tyres for Local Driving and Journeys Beyond Bath
                </h2>
                <p className="mb-4 text-zinc-600">
                  Not every Bath driver uses their vehicle in the same way. One car may mainly cover
                  short journeys around the city, while another regularly travels towards Bristol or
                  makes longer trips through Somerset and Wiltshire. Our mobile tyre replacement in
                  Bath is based on your vehicle&apos;s required tyre specification rather than
                  making assumptions from where you drive.
                </p>
                <p className="mb-4 text-zinc-600">
                  Bath city centre includes busy roads, restricted parking areas and a Clean Air
                  Zone. For a vehicle parked on private property or somewhere with straightforward
                  access, fitting can often be simple. For a vehicle stopped in a busy central
                  location, we may need more detail before confirming whether there is enough safe
                  and lawful working space. Sending a postcode or live location helps avoid
                  confusion.
                </p>
                <p className="mb-6 text-zinc-600">
                  Providing the complete tyre marking helps us check suitable replacement options
                  before the mobile unit travels to your location.
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
              <div className="rounded-2xl bg-zinc-50 p-8 ring-1 ring-zinc-100 shadow-sm">
                <h3 className="mb-4 font-extrabold text-zinc-900">Key tyre details to have ready</h3>
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
                      <strong>Load index and speed rating</strong> — especially important for vans
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      3
                    </span>
                    <span>
                      <strong>Vehicle make and model</strong> — helpful if the sidewall is damaged
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      4
                    </span>
                    <span>
                      <strong>Your exact location</strong> — postcode, road name or shared location
                      pin
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Why mobile fits Bath */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Why Mobile Fitting Can Save Time in Bath
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Bath attracts people travelling into the city for work, leisure and education, and
                road congestion is one of the transport challenges affecting the city. When your
                tyre is already unsafe, making another journey across Bath to reach a garage adds
                an unnecessary complication.
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
                  body: "Our 24 hour mobile tyre fitting in Bath brings the service to a suitable location instead of requiring a garage trip — useful for an emergency puncture at night or a planned replacement.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "No Unnecessary Driving",
                  body: "Mobile fitting removes the need to drive on a flat or damaged tyre through Bath's busy city streets, restricted areas or Clean Air Zone to reach a tyre depot.",
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
                  <h3 className="mb-2 font-extrabold text-zinc-900">{card.title}</h3>
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
                Mobile Tyre Coverage Across Bath
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Within Bath itself, drivers may be calling from very different parts of the city,
                so providing the full postcode is more useful than simply saying the vehicle is
                &quot;in Bath&quot;. The service also covers surrounding communities including{" "}
                <Link href="/mobile-tyre-fitting-bitton" className="text-orange-500 hover:underline">
                  Bitton
                </Link>
                ,{" "}
                <Link
                  href="/mobile-tyre-fitting-chewton-keynsham"
                  className="text-orange-500 hover:underline"
                >
                  Chewton Keynsham
                </Link>{" "}
                and{" "}
                <Link
                  href="/mobile-tyre-fitting-chew-magna"
                  className="text-orange-500 hover:underline"
                >
                  Chew Magna
                </Link>
                . If you are in a surrounding village or further outside the city, call with your
                exact location so current coverage and technician availability can be confirmed.
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
                A vehicle can be unable to continue even when its tyres are fine. Rapid Mobile
                Tyres also provides jump start assistance for flat batteries and fuel delivery when
                a vehicle runs out of fuel — giving you several mobile roadside options without
                needing to arrange a traditional garage visit.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and sidewall damage anywhere in our Bath service area.",
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
                  body: "Arrange planned or emergency tyre replacement at your Bath home address, on your driveway or at a safe residential location.",
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
                  body: "Replacement van tyre fitting at your Bath location. Van tyres can require specific load ratings — give us the tyre specification when calling.",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations in and around Bath.",
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
                  body: "Run out of fuel near Bath? Our emergency fuel delivery service can bring the right fuel directly to your location.",
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
                  <h3 className="mb-2 font-extrabold text-zinc-900 group-hover:text-orange-500 transition-colors">
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
              src="/mobile-tyre-fitting-technician-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Need Mobile Tyre Fitting in Bath?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              Whether your tyre goes flat outside your home, develops damage during a journey
              across the city or leaves you unable to continue on one of Bath&apos;s main approach
              roads, you do not necessarily need to drive the vehicle to a tyre centre. Rapid
              Mobile Tyres can bring mobile tyre fitting in Bath directly to your home, workplace
              or suitable roadside location. Contact us with your exact location, vehicle details
              and tyre size so availability can be checked and the appropriate callout arranged.
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
