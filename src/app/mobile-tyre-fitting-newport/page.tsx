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
  title: "Mobile Tyre Fitting Newport | 24/7 Tyre Replacement",
  description:
    "Need mobile tyre fitting in Newport? Get replacement tyres fitted at your home, workplace or roadside location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-newport",
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
      "We provide mobile car tyre fitting in Newport for a broad range of everyday vehicles, including hatchbacks, saloons, estates and family cars. Provide your tyre size or vehicle information when you call and we can check suitable options before attending.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "A tyre problem can quickly interrupt a working day when your van is essential to your business. Our mobile van tyre fitting service helps reduce downtime by bringing tyre replacement directly to you at residential, workplace and suitable roadside locations.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s often use larger tyres or specific load and performance ratings. We can help identify a suitable tyre based on your vehicle details and current tyre specification — providing the exact tyre size when booking helps us check availability before attending.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us Where You Are",
    description:
      "Call us with your location in Newport and explain whether your vehicle is at home, at work or stopped at the roadside.",
  },
  {
    title: "Provide Your Tyre Information",
    description:
      "If possible, give us the tyre size printed on the sidewall or your vehicle details. This helps us check an appropriate replacement before travelling.",
  },
  {
    title: "We Arrange the Callout",
    description:
      "Once the tyre and location details are confirmed, a mobile technician is dispatched with the equipment required for the job.",
  },
  {
    title: "Your Tyre Is Replaced at Your Location",
    description:
      "The worn or damaged tyre is removed and the replacement is fitted on-site, allowing you to avoid an unnecessary garage visit.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Newport?",
    answer:
      "Yes. Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Newport and surrounding areas. Availability and arrival times depend on traffic, your location and technician availability.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach me in Newport?",
    answer:
      "Our usual arrival time is around 45–60 minutes. This may vary depending on traffic conditions, technician availability and where you are located within or around Newport.",
  },
  {
    question: "Can you replace a tyre at my home in Newport?",
    answer:
      "Yes. Mobile tyre replacement in Newport can be carried out at your home where there is a suitable and safe place for the technician to work. This can be useful for both urgent tyre problems and planned replacement.",
  },
  {
    question: "Do you provide emergency tyre fitting near the M4 in Newport?",
    answer:
      "We provide roadside tyre assistance around Newport and nearby routes where access is safe and permitted. If you are stopped on the motorway, follow motorway safety guidance and provide your exact location when requesting help.",
  },
  {
    question: "Do you offer mobile van tyre fitting in Newport?",
    answer:
      "Yes. We can assist with mobile van tyre fitting for many light commercial vehicles. Provide your tyre size and vehicle details when calling so we can check suitable tyre availability.",
  },
  {
    question: "Can you fit tyres to SUVs and 4x4s in Newport?",
    answer:
      "Yes. Our SUV tyre fitting service covers many SUVs and 4x4 vehicles, subject to the correct tyre size and specification being available.",
  },
  {
    question: "Which areas around Newport do you cover?",
    answer:
      "We cover Newport and nearby areas including Caerleon, Malpas, Rogerstone, Duffryn, Bettws, Risca, Cwmbran and Magor. If your area is not listed, contact us with your postcode to check coverage.",
  },
  {
    question: "Can I arrange mobile tyre replacement in Newport without an emergency?",
    answer:
      "Yes. Mobile tyre replacement in Newport can be used for planned tyre changes as well as emergency situations, so you do not have to wait until a tyre becomes completely unusable.",
  },
  {
    question: "Is roadside tyre assistance available at night in Newport?",
    answer:
      "Yes. Our 24/7 mobile tyre service is available day and night, subject to technician availability and safe access to your location.",
  },
];

const areasServed = [
  { name: "Caerleon", href: null },
  { name: "Malpas", href: null },
  { name: "Rogerstone", href: null },
  { name: "Duffryn", href: null },
  { name: "Bettws", href: null },
  { name: "Risca", href: null },
  { name: "Cwmbran", href: null },
  { name: "Magor", href: "/mobile-tyre-fitting-magor" },
];

const locationPin = (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-orange-600" aria-hidden>
    <path d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function NewportPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div className="absolute inset-0">
            <Image
              src="/mobile-tyre-fitting-technician-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-45"
              preload
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
            <div className="max-w-xl">
              <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                Newport &amp; Surrounding Areas
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Tyre Fitting in Newport
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Need mobile tyre fitting in Newport without having to arrange recovery or drive on a
                damaged tyre? Whether you&apos;re dealing with a puncture in the city, a damaged tyre near
                the Southern Distributor Road, or need a replacement at home — our mobile service comes
                directly to you for cars, vans and SUVs, 24/7.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now: {siteConfig.phone}
                </a>
                <Link
                  href="/services"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-zinc-200 bg-white py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:px-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-zinc-950 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-zinc-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Intro — Mobile tyre fitting wherever you are */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Mobile tyre fitting wherever you are in Newport
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                We Bring the Tyre Service to You
              </h2>
              <p className="mt-4 leading-7 text-zinc-600">
                A flat or damaged tyre can leave you stuck at the worst possible time. Our mobile tyre
                fitting service in Newport removes the need to reach a garage by bringing the equipment
                and suitable replacement tyre directly to your location — residential areas, workplaces,
                business premises and suitable roadside locations throughout Newport.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Home Tyre Replacement in Newport",
                    body: "If your vehicle is parked at home with a worn, punctured or unsafe tyre, we can arrange a mobile tyre replacement without you having to move the car — useful for both urgent problems and planned tyre changes.",
                  },
                  {
                    title: "Workplace Tyre Fitting",
                    body: "For drivers who cannot afford to lose working time, we can attend suitable workplaces and commercial locations across Newport — particularly useful for commuters, tradespeople and drivers who depend on their cars or vans throughout the day.",
                  },
                  {
                    title: "Roadside Tyre Assistance in Newport",
                    body: (
                      <>
                        A tyre blowout, severe puncture or sidewall problem can make it unsafe to continue
                        driving. Our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="font-medium text-orange-600 hover:underline"
                        >
                          emergency mobile tyre fitting
                        </Link>{" "}
                        can provide help at your location where access is safe and permitted.
                      </>
                    ),
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600/10">
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-orange-600" aria-hidden>
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-600">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.phoneHref}
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {siteConfig.phone}
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-2xl">
                <Image
                  src="/mobile-car-tyre-fitting-bmw-i3-bristol.webp"
                  alt="Mobile tyre fitting technician fitting a tyre at a customer's location"
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl sm:block">
                <p className="text-2xl font-bold text-orange-600">45–60 min</p>
                <p className="text-xs text-zinc-500">Usual arrival time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency section */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Emergency tyre fitting
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Emergency Mobile Tyre Fitting in Newport
              </h2>
              <p className="mt-4 text-zinc-600">
                Unexpected tyre problems can happen at any time, which is why we provide emergency tyre
                fitting in Newport 24 hours a day. We assist with flat tyres, punctures, blowouts,
                damaged sidewalls and tyres that are no longer safe to use — at home, at work or at
                suitable roadside locations.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  ),
                  title: "24/7 Availability",
                  body: "We respond to emergency callouts day and night, including weekends and bank holidays, throughout Newport and surrounding areas.",
                },
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  ),
                  title: "45–60 Min Response",
                  body: "Our usual arrival time is around 45–60 minutes, depending on traffic, your exact location within or around Newport and technician availability.",
                },
                {
                  icon: (
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7H5v2h2V7z" />
                  ),
                  title: "Right Tyre on the Van",
                  body: "We carry a range of tyre sizes so we can fit the correct tyre at your location in Newport — no second trip to a garage needed.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600/10">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-orange-600" aria-hidden>
                      {card.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 font-semibold text-zinc-950">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{card.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/emergency-mobile-tyre-fitting-bristol"
                className="inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                Emergency Tyre Fitting
              </Link>
            </div>
          </div>
        </section>

        {/* Vehicle services */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Car, Van &amp; SUV Tyre Fitting
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Tyre Fitting for Cars, Vans and SUVs
              </h2>
              <p className="mt-4 text-zinc-600">
                Newport drivers use a wide range of vehicles, and each requires the correct tyre size, load
                rating and specification. Provide your tyre size or vehicle details when calling so we can
                confirm availability before attending.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {vehicleServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-zinc-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 transition-all group-hover:gap-2">
                      Learn more
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-orange-100 bg-orange-50 p-8 text-center">
              <p className="text-base font-semibold text-zinc-950">
                Not sure which service you need? Call us and we&apos;ll help.
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Tell us your vehicle type and postcode and we&apos;ll confirm what we can do.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Simple process
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                How Our Newport Mobile Tyre Service Works
              </h2>
              <p className="mt-4 text-zinc-600">
                Arranging tyre fitting is simple and can usually be handled in a few straightforward steps.
              </p>
            </div>

            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-zinc-950">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Newport main roads coverage */}
        <section className="relative overflow-hidden bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="absolute inset-0">
            <Image
              src="/rapid-mobile-tyres-fleet-service-vans-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/60" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                M4, A48 &amp; A467 coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Mobile Tyre Assistance on Newport&apos;s Main Roads
              </h2>
              <p className="mt-4 text-zinc-400">
                Newport sits on a busy road network used by local commuters and drivers travelling between
                South Wales and the West of England. Routes including the M4, A48 and A467 carry significant
                traffic around the city, and a tyre problem on these routes can quickly become disruptive.
              </p>
              <p className="mt-4 text-zinc-400">
                If you experience tyre trouble near one of Newport&apos;s main routes, our mobile tyre
                service can attend suitable nearby locations where it is safe and permitted to work. Always
                follow motorway and roadside safety guidance if you are stranded on a high-speed road, and
                provide your exact location or nearest junction when requesting assistance.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/emergency-mobile-tyre-fitting-bristol"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-600 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-400 hover:bg-zinc-900"
                >
                  Emergency Tyre Fitting
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">Coverage</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Mobile Tyre Fitting Across Newport and Nearby Areas
            </h2>
            <p className="mt-4 text-zinc-600">
              Our mobile tyre fitters in Newport cover the city and several surrounding communities,
              helping drivers access tyre assistance without travelling far. If you are unsure whether
              your address or current location is covered, contact us with your postcode and we can
              confirm availability.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {areasServed.map((area) =>
                area.href ? (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2.5 text-sm font-medium text-orange-700 transition-colors hover:border-orange-300 hover:bg-orange-100"
                  >
                    {locationPin}
                    {area.name}
                  </Link>
                ) : (
                  <span
                    key={area.name}
                    className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-700"
                  >
                    {locationPin}
                    {area.name}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* More than tyre fitting */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Additional services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                More Than Tyre Replacement
              </h2>
              <p className="mt-4 text-zinc-600">
                Alongside mobile tyre fitting, drivers in Newport can access a range of dedicated mobile
                roadside services — all at your location, whenever you need them.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Emergency Mobile Tyre Fitting",
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  description:
                    "Blowout, puncture or sidewall damage — 24/7 emergency assistance at your Newport location, usually within 45–60 minutes.",
                },
                {
                  title: "Tyre Replacement at Home",
                  href: "/tyre-replacement-at-home-bristol",
                  description:
                    "New tyres fitted on your driveway or parking space — same day or scheduled, no garage visit required.",
                },
                {
                  title: "Mobile Car Tyre Fitting",
                  href: "/mobile-car-tyre-fitting-bristol",
                  description:
                    "Dedicated car tyre fitting for hatchbacks, saloons, estates and family cars — fitted at your location across Newport.",
                },
                {
                  title: "Mobile Van Tyre Fitting",
                  href: "/mobile-van-tyre-fitting-bristol",
                  description:
                    "Keep your van on the road with on-site van tyre replacement — reducing downtime for tradespeople and commercial drivers.",
                },
                {
                  title: "Jump Start",
                  href: "/jumpstarts",
                  description:
                    "Flat battery? Our technicians arrive with jump-start equipment and get your engine running again.",
                },
                {
                  title: "Emergency Fuel Delivery",
                  href: "/fuel-delivery",
                  description:
                    "Run out of petrol or diesel? We deliver enough fuel to get you safely to the nearest station.",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-semibold text-zinc-950 transition-colors group-hover:text-orange-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 transition-all group-hover:gap-2">
                    Learn more
                    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <TyreBrands />

        <Faq items={faqs} />

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-50 sm:py-28">
          <div className="absolute inset-0">
            <Image
              src="/mobile-tyre-fitting-technician-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need Mobile Tyre Fitting in Newport?
            </h2>
            <p className="mt-4 text-zinc-300">
              If your tyre is flat, damaged or worn, you do not necessarily need to arrange recovery or
              attempt to drive to a garage. Contact Rapid Mobile Tyres with your location and tyre
              details — we&apos;ll check availability and arrange for a mobile technician to assist you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
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
