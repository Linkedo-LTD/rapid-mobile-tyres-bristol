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
  title: "Mobile Tyre Fitting Magor | 24/7 Tyre Replacement",
  description:
    "Need mobile tyre fitting in Magor? Get flat or damaged tyres replaced at your home, workplace or roadside.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-magor",
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
      "Our mobile car tyre fitting in Magor covers many everyday hatchbacks, saloons, estates and family vehicles. Whether the tyre has failed unexpectedly or is due for replacement, fitting can be arranged at a suitable home, workplace or roadside location subject to the required size being available.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "Magor's position close to the M4 and major employment areas means vans are common on surrounding roads. Our mobile van tyre fitting in Magor brings replacement tyres directly to suitable light commercial vehicles, helping working drivers avoid an unnecessary trip to a tyre depot. Provide the full tyre size and load rating whenever possible.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s can require larger tyre dimensions and different load specifications from standard passenger cars. We provide SUV tyre fitting in Magor for suitable vehicles and tyre sizes, subject to current tyre availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us What's Wrong",
    description:
      "Let us know whether you have a puncture, blowout, complete flat, sidewall damage or a tyre that simply needs replacing because of wear.",
  },
  {
    title: "Read the Tyre Size",
    description:
      "The complete tyre size is normally shown on the tyre sidewall. Sending this information helps us check suitable stock before the technician travels.",
  },
  {
    title: "Give Us Your Exact Location",
    description:
      "At a property, the postcode is usually enough. If you are stopped during a journey, provide the road, direction of travel, nearest junction or a shared map location.",
  },
  {
    title: "We Bring the Fitting Service",
    description:
      "Once the tyre requirement and location are confirmed, a technician can travel to the vehicle with the equipment needed for the replacement. Fitting is carried out where safe working conditions are available.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Magor?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Magor is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Magor?",
    answer:
      "Our usual arrival time is around 45–60 minutes. The actual arrival time depends on traffic, technician availability, tyre stock and your exact position.",
  },
  {
    question: "Do you provide emergency tyre fitting in Magor?",
    answer:
      "Yes. Emergency tyre fitting in Magor is available for punctures, blowouts, completely flat tyres and other damage that prevents safe onward travel.",
  },
  {
    question: "Can you replace a tyre at my home in Magor?",
    answer:
      "Yes. Tyre replacement in Magor can usually be completed at a suitable residential location where there is enough safe working space around the vehicle.",
  },
  {
    question: "Can you help near M4 Junction 23A?",
    answer:
      "Our roadside tyre assistance in Magor can attend suitable accessible locations around the local road network near Junction 23A. Welsh Government identifies Junction 23A as the Magor junction. If the vehicle is on the motorway itself, follow motorway safety guidance and only arrange fitting where safe and permitted access is available.",
  },
  {
    question: "Can you help if my tyre fails on the B4245?",
    answer:
      "Yes, subject to safe access and current technician availability. The B4245 runs directly through Magor and provides access towards the A4810 and M4 Junction 23A.",
  },
  {
    question: "Do you attend around the A4810?",
    answer:
      "We can attend suitable locations within our coverage area around the A4810. Give us your exact position, direction of travel or shared map location when calling.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Magor?",
    answer:
      "Yes. We provide mobile car tyre fitting in Magor for many common vehicle types and tyre sizes, subject to stock availability.",
  },
  {
    question: "Can you replace van tyres in Magor?",
    answer:
      "Yes. Our mobile van tyre fitting in Magor is available for suitable light commercial vehicles. Providing the complete tyre size and load rating helps us check the correct specification.",
  },
  {
    question: "Do you provide SUV tyre fitting in Magor?",
    answer:
      "Yes. SUV tyre fitting in Magor is available for suitable vehicles and tyre specifications, subject to current tyre availability.",
  },
  {
    question: "Can I arrange mobile tyre replacement without having a breakdown?",
    answer:
      "Yes. Mobile tyre replacement in Magor can be booked for worn or damaged tyres as well as emergency punctures and blowouts.",
  },
  {
    question: "Do you cover Undy?",
    answer:
      "Magor and Undy are neighbouring communities connected directly by the B4245. Call with your exact postcode so current service coverage and technician availability can be confirmed.",
  },
  {
    question: "Can you attend a workplace or industrial site?",
    answer:
      "Yes, where there is suitable access and safe working space. For large sites, provide the business name, unit number, gate or exact map location to help us find the vehicle.",
  },
  {
    question: "Is mobile tyre fitting available in Magor at weekends?",
    answer:
      "Yes. Our mobile tyre service in Magor operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What should I tell you if I am near the motorway?",
    answer:
      "Give us the road you are on, your direction of travel, nearest junction or service area and a shared map location if possible. If you are on the motorway itself, follow official motorway breakdown guidance and prioritise reaching a safe position before arranging assistance.",
  },
];

const areasServed = [
  { name: "Undy", href: null },
  { name: "Caldicot", href: "/mobile-tyre-fitting-caldicot" },
  { name: "Chepstow", href: "/mobile-tyre-fitting-chepstow" },
  { name: "Newport", href: "/mobile-tyre-fitting-newport" },
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
                Magor, Monmouthshire
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Magor</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A tyre problem in Magor can interrupt anything from a short local journey to a trip
                joining the M4. Rapid Mobile Tyres provides mobile tyre fitting in Magor, bringing
                replacement tyres directly to suitable homes, workplaces and roadside locations — 24/7
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

        {/* Tyre help before your journey gets further */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Help Before Your Journey Gets Any Further
                </h2>
                <p className="mb-6 text-zinc-600">
                  Magor sits beside several important road connections, so many vehicles passing
                  through the area are already part-way through a longer journey. That makes
                  discovering a damaged tyre particularly inconvenient. Our mobile tyre fitter in
                  Magor can come to the vehicle so you do not have to continue driving on a tyre that
                  may no longer be safe.
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
                        If you notice a flat tyre before leaving home, mobile fitting can save you
                        from arranging recovery or attempting to reach a garage. Where there is
                        enough safe working space, we can carry out tyre replacement in Magor on a
                        driveway or suitable residential parking area. Our{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          home tyre replacement service
                        </Link>{" "}
                        can also be used for tyres that are worn or damaged but have not yet failed
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
                      <h3 className="font-semibold text-zinc-900">Mobile Fitting at Your Workplace</h3>
                      <p className="text-zinc-600">
                        A tyre problem discovered while your vehicle is parked at work can disrupt
                        the rest of your day. Where site access allows, our mobile service can attend
                        suitable workplace locations and replace the tyre while the vehicle remains
                        parked. Providing the business name, postcode or exact site entrance makes it
                        easier to identify your position.
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
                      <h3 className="font-semibold text-zinc-900">Roadside Assistance When You Cannot Continue</h3>
                      <p className="text-zinc-600">
                        A puncture or blowout while travelling can leave the vehicle unsafe to drive
                        any further. Our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          roadside tyre assistance
                        </Link>{" "}
                        in Magor can attend suitable accessible locations where there is enough safe
                        and permitted space to work. If you are stopped close to a busy junction or
                        fast-moving road, your own safety should come first.
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
                Emergency Mobile Tyre Fitting in Magor
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                Tyre failures do not wait for normal garage opening hours. Rapid Mobile Tyres
                provides emergency tyre fitting in Magor 24 hours a day for punctures, blowouts,
                complete flats and other tyre damage that prevents safe onward travel.
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
                  Providing the tyre size and your precise location when you first call helps us
                  check what is needed before travelling.
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
                Different vehicles place very different demands on their tyres. The correct
                replacement needs to match the required size, load index, speed rating and other
                relevant vehicle specifications.
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
              <p className="font-extrabold text-lg">Need a tyre fitted in Magor?</p>
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

        {/* How it works / Steps */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-zinc-900">
                What We Need Before Heading to Your Vehicle
              </h2>
              <p className="mt-4 text-zinc-600 max-w-xl mx-auto">
                Accurate information helps make a mobile callout much more straightforward.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <div key={step.title} className="relative rounded-xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
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

        {/* Roads section — M4 Junction 23A / B4245 / A4810 */}
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
              Mobile Tyre Assistance Around Magor's Key Roads
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <h3 className="mb-3 text-xl font-extrabold text-orange-400">
                  M4 Junction 23A
                </h3>
                <p className="text-zinc-300">
                  Welsh Government identifies M4 Junction 23A as Magor, while Monmouthshire Council
                  transport documents confirm that the B4245 provides access to Junction 23A through
                  the A4810. That means tyre problems around Magor frequently have the potential to
                  interrupt much longer journeys. If you notice tyre damage before joining the
                  motorway, dealing with it before continuing is the safer option. If a tyre problem
                  occurs on the motorway itself, follow motorway safety guidance and arrange
                  assistance only from a safe position where roadside work is permitted.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-extrabold text-orange-400">
                  B4245 Through Magor and Undy
                </h3>
                <p className="text-zinc-300">
                  The B4245 is the main local road running through Magor and Undy. Monmouthshire
                  Council describes it as the primary highway through Magor and confirms that it
                  connects with the A4810 for access to M4 Junction 23A. The road also continues
                  east towards{" "}
                  <Link href="/mobile-tyre-fitting-caldicot" className="text-orange-400 hover:underline">
                    Caldicot
                  </Link>{" "}
                  and west towards connections with the wider Newport road network. If your tyre
                  becomes damaged along the Magor section of the B4245, give us your exact location
                  or nearby junction when arranging a callout.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-extrabold text-orange-400">
                  A4810 Queensway
                </h3>
                <p className="text-zinc-300">
                  The A4810 Queensway provides another important connection close to Magor.
                  Monmouthshire Council describes the A4810 as running south-west from the M4
                  towards{" "}
                  <Link href="/mobile-tyre-fitting-newport" className="text-orange-400 hover:underline">
                    Newport
                  </Link>{" "}
                  while also serving employment and distribution areas. It connects with the B4245
                  close to Magor and provides access towards Junction 23A. Our mobile service can
                  attend suitable accessible locations around the Magor road network where safe
                  working space is available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Replacement tyres / tyre details */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Fitting for Commuters and Longer-Distance Drivers
                </h2>
                <p className="mb-4 text-zinc-600">
                  Magor's location means local vehicles may spend very little of their time only
                  driving around the village. Some drivers regularly travel towards{" "}
                  <Link href="/mobile-tyre-fitting-newport" className="text-orange-500 hover:underline">
                    Newport
                  </Link>
                  ,{" "}
                  <Link href="/mobile-tyre-fitting-caldicot" className="text-orange-500 hover:underline">
                    Caldicot
                  </Link>{" "}
                  or{" "}
                  <Link href="/mobile-tyre-fitting-chepstow" className="text-orange-500 hover:underline">
                    Chepstow
                  </Link>
                  , while others use the M4 for journeys towards Bristol, Cardiff or further afield.
                </p>
                <p className="mb-6 text-zinc-600">
                  Our mobile tyre replacement in Magor is therefore based on the actual requirements
                  of the vehicle rather than assumptions about how far it travels. Depending on the
                  tyre size and current stock, different replacement options may be available.
                  Provide the complete tyre specification so suitable choices can be checked before
                  the callout.
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
                  A Useful Service for Magor's Employment Areas
                </h2>
                <p className="mb-4 text-zinc-600">
                  Magor also has significant employment and industrial activity nearby.
                  Monmouthshire Council identifies employment land west of Magor with strong
                  transport links to the A4810 and M4 Junction 23A. For employees, tradespeople and
                  drivers using these sites, a flat tyre at work can create unnecessary downtime.
                </p>
                <p className="text-zinc-600">
                  Mobile fitting allows the tyre to be replaced at a suitable workplace location
                  rather than first moving the vehicle to a garage. For large sites, provide the
                  business name, unit number or exact entrance when calling.
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
                Why Mobile Tyre Fitting Works Well in Magor
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                Magor combines a village road network with immediate access to major regional routes.
                That means tyre problems can affect both everyday local journeys and motorway travel.
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
                  text: "Our 24 hour mobile tyre fitting in Magor means a tyre failure at any time of day or night does not have to leave the vehicle stranded until morning.",
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
                  text: "Mobile tyre replacement in Magor can be booked for worn or damaged tyres as well as emergency punctures and blowouts, so you do not have to wait until the tyre fails completely.",
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
                Covering Magor and Nearby Areas
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                Magor is closely connected with Undy, while the B4245 also provides routes towards
                Caldicot and the wider eastern Newport area. If you are outside Magor itself, call
                with your exact postcode so current coverage and technician availability can be
                confirmed.
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
                Tyre failure is not the only problem that can interrupt a journey around Magor.
                Rapid Mobile Tyres also provides further roadside services so the callout can match
                the actual problem affecting the vehicle.
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
              Need Mobile Tyre Fitting in Magor?
            </h2>
            <p className="mb-8 text-zinc-300 max-w-2xl mx-auto">
              Whether you discover a flat tyre at home, suffer damage while travelling along the
              B4245 or have a tyre problem before joining the M4, you do not necessarily need to
              move the vehicle to a tyre centre. Rapid Mobile Tyres can bring mobile tyre fitting in
              Magor directly to your home, workplace or suitable roadside location. Contact us with
              your vehicle details, tyre size and exact position so tyre availability can be checked
              and the appropriate mobile callout arranged.
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
