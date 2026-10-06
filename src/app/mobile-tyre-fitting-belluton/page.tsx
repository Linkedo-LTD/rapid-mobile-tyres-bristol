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
  title: "Mobile Tyre Fitting Belluton | 24/7 Tyre Replacement",
  description:
    "Mobile tyre fitting in Belluton for flat or damaged tyres. Get convenient tyre replacement directly at your location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-belluton",
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
      "Our mobile car tyre fitting in Belluton is available for many common hatchbacks, saloons, estates and family cars. Whether the tyre has failed suddenly or is simply due for replacement, fitting can be arranged at a suitable home, workplace or roadside location.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "For tradespeople and working drivers, an unusable van tyre can quickly interrupt appointments or the rest of the working day. Our mobile van tyre fitting in Belluton brings the tyre replacement to the vehicle instead of requiring a trip to a tyre centre. Van tyres can have specific load requirements, so providing the complete size and rating helps us check a suitable replacement.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s often use different tyre sizes and load specifications from standard passenger cars. We provide SUV tyre fitting in Belluton for suitable vehicles and tyre sizes, subject to current availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Explain the Tyre Problem",
    description:
      "Tell us whether the tyre is punctured, completely flat, blown out, visibly damaged or simply due for replacement.",
  },
  {
    title: "Read the Tyre Size",
    description:
      "The tyre dimensions can normally be found on the sidewall. Providing the complete size helps us check what is available before travelling.",
  },
  {
    title: "Give Us an Accurate Location",
    description:
      "A postcode is helpful, but if you are stopped away from a property, also provide the road name, nearest junction or shared map location.",
  },
  {
    title: "We Travel to the Vehicle",
    description:
      "Once the tyre requirement and location have been confirmed, a technician can attend with the fitting equipment required to replace the tyre where conditions allow safe working.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Belluton?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Belluton is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Belluton?",
    answer:
      "Our usual arrival time is around 45–60 minutes. The actual time can vary according to traffic, technician availability, tyre availability and your exact location.",
  },
  {
    question: "Do you provide emergency tyre fitting in Belluton?",
    answer:
      "Yes. Emergency tyre fitting in Belluton is available for punctures, blowouts, complete flats and other tyre damage that makes continued driving unsafe.",
  },
  {
    question: "Can you replace a tyre at my home?",
    answer:
      "Yes. Tyre replacement in Belluton can usually be carried out at a suitable residential location where there is enough safe space around the vehicle.",
  },
  {
    question: "Can you help if I have a flat tyre on the B3130?",
    answer:
      "Our roadside tyre assistance in Belluton can cover suitable accessible locations around the B3130 and surrounding roads. Because parts of Belluton Narrows are genuinely narrow, safe working space must be available before fitting can take place.",
  },
  {
    question: "Can you help near the A37 at Pensford?",
    answer:
      "Yes, subject to current coverage and safe access. The B3130 connects with the A37 around Pensford, close to Belluton. Provide your exact road and direction of travel when calling.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Belluton?",
    answer:
      "Yes. We provide mobile car tyre fitting in Belluton for many common vehicle types and tyre sizes, subject to stock availability.",
  },
  {
    question: "Can you replace tyres on vans?",
    answer:
      "Yes. Our mobile van tyre fitting in Belluton covers suitable light commercial vehicles. Providing the full tyre size and load rating helps us identify the appropriate replacement.",
  },
  {
    question: "Do you provide SUV tyre fitting in Belluton?",
    answer:
      "Yes. SUV tyre fitting in Belluton is available for suitable tyre sizes and vehicle specifications, subject to current tyre availability.",
  },
  {
    question: "Can I book mobile tyre replacement if I have not broken down?",
    answer:
      "Yes. Mobile tyre replacement in Belluton can be arranged for worn or damaged tyres as well as emergency punctures and blowouts.",
  },
  {
    question: "Do you cover Pensford as well as Belluton?",
    answer:
      "Pensford is among the surrounding areas covered from the Belluton page. If you are elsewhere nearby, provide your postcode so exact coverage can be confirmed.",
  },
  {
    question: "What should I tell you if I am on a rural road?",
    answer:
      "Give us your tyre size, vehicle details and exact position. A shared map location, nearby junction or recognisable property can be particularly useful around rural lanes.",
  },
  {
    question: "Is your mobile tyre service available at weekends?",
    answer:
      "Yes. Our mobile tyre service in Belluton operates 24/7, including weekends, subject to technician and tyre availability.",
  },
];

const areasServed = [
  { name: "Pensford", href: null },
  { name: "Chew Magna", href: "/mobile-tyre-fitting-chew-magna" },
  { name: "Keynsham", href: null },
  { name: "Compton Dando", href: null },
  { name: "Chew Stoke", href: "/mobile-tyre-fitting-chew-stoke" },
  { name: "Whitchurch", href: null },
  { name: "Bishop Sutton", href: null },
  { name: "Stanton Drew", href: null },
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
              src="/mobile-tyre-fitting-belluton-hero.webp"
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
                Belluton, Bath and North East Somerset
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Belluton</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                When a tyre problem happens in a smaller rural location, getting the vehicle to a
                tyre centre can be more difficult than the tyre replacement itself. Rapid Mobile
                Tyres provides mobile tyre fitting in Belluton, bringing a replacement tyre and
                fitting equipment directly to your home, workplace or suitable roadside location —
                24/7 for cars, vans and SUVs.
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

        {/* Tyre Replacement That Comes to Your Location */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Replacement That Comes to Your Location
                </h2>
                <p className="mb-8 text-zinc-600">
                  Belluton is very different from a busy town-centre location. Residential
                  properties, narrower roads and surrounding rural routes mean a damaged tyre can
                  leave you with fewer convenient options nearby. Our mobile tyre fitters in
                  Belluton can attend suitable locations and complete the tyre replacement where
                  your vehicle is already parked — giving local drivers a practical option when the
                  vehicle cannot be moved safely.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-zinc-900">Tyre Fitting at Your Home</h3>
                      <p className="text-zinc-600">
                        If you notice a puncture or damaged tyre while your vehicle is parked at
                        home, there may be no need to arrange recovery or attempt to drive
                        elsewhere. Where the driveway or parking area provides enough safe working
                        space, we can fit the replacement tyre at your property. Our{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          home tyre replacement service
                        </Link>{" "}
                        can also be used for planned replacement when a tyre is worn but has not
                        yet failed completely.
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
                      <h3 className="font-extrabold text-zinc-900">
                        Mobile Tyre Fitting for Work and Daily Commitments
                      </h3>
                      <p className="text-zinc-600">
                        A tyre problem does not always happen during a convenient part of the day.
                        If your vehicle is parked at a suitable workplace or other accessible
                        location around Belluton, mobile fitting allows the tyre to be changed
                        without adding a separate visit to a tyre depot — particularly useful when
                        the vehicle is needed again later in the day.
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
                      <h3 className="font-extrabold text-zinc-900">
                        Roadside Tyre Assistance in Belluton
                      </h3>
                      <p className="text-zinc-600">
                        A puncture or blowout on one of the quieter roads around Belluton can
                        leave you unable to continue safely. Our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          roadside tyre assistance
                        </Link>{" "}
                        can attend suitable locations where the technician has safe and permitted
                        access around the vehicle. If you are stopped close to a bend, narrow
                        carriageway or faster-moving road, prioritise your safety and move to a
                        safer position where possible before arranging fitting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/tyre-tread-check-belluton.webp"
                    alt="Rapid Mobile Tyres technician checking tyre tread depth in Belluton"
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
                Emergency Mobile Tyre Fitting in Belluton
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Tyre failures are not limited to normal garage opening hours. Rapid Mobile Tyres
                provides emergency tyre fitting in Belluton 24 hours a day for punctures, blowouts,
                complete pressure loss and other damage that prevents safe onward travel. Our usual
                arrival time is around 45–60 minutes, depending on traffic, technician availability
                and your exact location.
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
                  for garage opening times, even in a small rural village like Belluton.
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
                <h3 className="mb-2 text-lg font-extrabold text-zinc-900">Share Your Location Clearly</h3>
                <p className="text-zinc-600">
                  Because Belluton is a small rural area, providing an accurate postcode, road name
                  or shared map location can be especially useful when requesting an emergency
                  callout.
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
                The correct replacement tyre depends on the vehicle and its specification. Passenger
                cars, work vans and larger SUVs can require different tyre dimensions, load ratings
                and performance characteristics, so we recommend providing the full tyre size when
                you call.
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
                Making a Belluton Tyre Callout Straightforward
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                In a small rural location, clear information can make a big difference when
                arranging mobile assistance.
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
              src="/journey-after-tyre-fitting-belluton.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-3xl font-extrabold">
                Mobile Tyre Assistance Around the B3130 Belluton Narrows and the A37
              </h2>
              <p className="mb-4 text-zinc-300">
                One of the most distinctive local road features is Stanton Road through Belluton
                Narrows, which Bath &amp; North East Somerset Council identifies as part of the
                B3130 around Pensford. These narrower rural sections are very different from a wide
                urban road, and a tyre failure can become particularly inconvenient if the vehicle
                cannot be moved safely.
              </p>
              <p className="mb-4 text-zinc-300">
                Belluton sits beside Pensford, where the B3130 connects with the A37. The A37 is
                an important route for journeys towards Bristol and through this part of Bath and
                North East Somerset, so many Belluton drivers use it when travelling beyond the
                immediate village area.
              </p>
              <p className="mb-4 text-zinc-300">
                Our mobile tyre service can attend suitable accessible locations around Belluton
                and the nearby B3130 and A37 network. If you are stranded on a narrow road, give
                us your precise position and only arrange fitting where there is enough safe space
                for the technician to work.
              </p>
              <p className="text-zinc-300">
                Providing your exact road, postcode, nearby junction or shared location can help
                us identify you more easily when you call.
              </p>
            </div>
          </div>
        </section>

        {/* Replacement Tyres section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Replacement Tyres for Rural and Longer-Distance Driving
                </h2>
                <p className="mb-4 text-zinc-600">
                  Vehicles based around Belluton may cover a combination of short local journeys,
                  rural roads and longer trips towards Bristol or other parts of the region.
                  Whatever the journey, the replacement tyre should meet the specification required
                  for the vehicle.
                </p>
                <p className="mb-6 text-zinc-600">
                  Our mobile tyre replacement in Belluton can include different tyre options
                  depending on the size, load rating, speed rating and current stock available.
                  Providing the full tyre information before the technician sets off helps us
                  identify suitable choices without relying on guesswork.
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
              <div className="rounded-2xl bg-zinc-50 p-8 shadow-sm ring-1 ring-zinc-100">
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
                Why Mobile Tyre Fitting Is Useful in a Smaller Village
              </h2>
              <p className="max-w-2xl text-zinc-600">
                When you live in or travel through a smaller settlement, the nearest tyre centre
                may not be somewhere you can easily reach with a damaged tyre. Mobile fitting
                solves that problem by bringing the service to the vehicle.
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
                  body: "Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Belluton for suitable residential addresses, workplaces and roadside locations.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "No Unnecessary Driving",
                  body: "Mobile fitting removes the need to drive on a flat or damaged tyre to reach a depot — the service comes to the vehicle, so you avoid risking further damage.",
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
                  body: "The service can be used for urgent tyre failures as well as planned replacement, helping you avoid unnecessary driving when a tyre needs attention.",
                },
                {
                  icon: (
                    <>
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h3l3 4h-1a1 1 0 000 2h1.5a1 1 0 00.8-.4l1.5-2a1 1 0 000-1.2L18 9.4V9a1 1 0 00-1-1h-4V5a1 1 0 00-1-1H3z" />
                    </>
                  ),
                  title: "Cars, Vans & SUVs",
                  body: "The service covers cars, vans and SUVs, with additional help available for flat batteries and running out of fuel rather than a tyre problem.",
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
                Covering Belluton and the Surrounding Chew Valley Area
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Belluton sits within Bath and North East Somerset, closely associated with Pensford
                in council mapping and road records. Our wider service area includes{" "}
                <Link
                  href="/mobile-tyre-fitting-chew-magna"
                  className="text-orange-500 hover:underline"
                >
                  Chew Magna
                </Link>
                ,{" "}
                <Link
                  href="/mobile-tyre-fitting-chew-stoke"
                  className="text-orange-500 hover:underline"
                >
                  Chew Stoke
                </Link>
                , Keynsham, Compton Dando, Whitchurch, Bishop Sutton and Stanton Drew. If you are
                outside Belluton itself, provide your postcode or current location when calling so
                coverage and technician availability can be confirmed.
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
                Not every vehicle problem is caused by the tyres. Rapid Mobile Tyres also provides
                jump start assistance for vehicles affected by a flat battery and emergency fuel
                delivery when a driver runs out of fuel — giving drivers a range of mobile options
                without first having to arrange a traditional garage visit.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and sidewall damage — including rural locations around Belluton and the B3130.",
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
                  body: "Arrange planned or emergency tyre replacement at your home address, on your driveway or at a safe residential location in Belluton.",
                  icon: (
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  ),
                },
                {
                  href: "/mobile-car-tyre-fitting-bristol",
                  title: "Mobile Car Tyre Fitting",
                  body: "Tyre fitting for cars of many makes and models. Providing the tyre size when booking helps ensure the right replacement is checked before we set off.",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations in and around Belluton.",
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
                  body: "Run out of fuel near Belluton? Our emergency fuel delivery service can bring the right fuel to your location.",
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
              Need Mobile Tyre Fitting in Belluton?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              A flat or damaged tyre in a rural location does not mean you should risk driving to
              the nearest tyre centre. Rapid Mobile Tyres can bring mobile tyre fitting in Belluton
              directly to your home, workplace or suitable roadside location. Contact us with your
              exact location, vehicle details and tyre size so we can check availability and arrange
              the appropriate mobile callout.
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
