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
  title: "Mobile Tyre Fitting Backwell | 24/7 Tyre Assistance",
  description:
    "Need mobile tyre fitting in Backwell? Get flat or damaged tyres replaced at your home, workplace or roadside.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-backwell",
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
      "Our mobile car tyre fitting in Backwell covers many popular hatchbacks, saloons, estates and family vehicles. If you can provide the tyre size shown on the sidewall when booking, it helps us check suitable availability before the technician sets off.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "For tradespeople and businesses, an unusable van can quickly interrupt the working day. Our mobile van tyre fitting in Backwell brings tyre replacement to your location rather than requiring the van to be taken elsewhere. Van tyres can have specific load requirements, so providing vehicle and tyre details when calling is particularly important.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s often use larger tyres or different load and performance specifications from standard passenger cars. We provide SUV tyre fitting in Backwell for suitable sizes and vehicles, subject to tyre availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Explain the Tyre Problem",
    description:
      "Tell us whether you have a flat tyre, puncture, blowout, worn tread or visible damage.",
  },
  {
    title: "Give Us Your Tyre Size",
    description:
      "The tyre size is normally printed on the tyre sidewall. You can also provide your vehicle make, model or registration if you need help checking the specification.",
  },
  {
    title: "Confirm Your Backwell Location",
    description:
      "Let us know whether the vehicle is at home, at work or at the roadside. A postcode or accurate shared location can be especially useful.",
  },
  {
    title: "We Come Out and Fit the Tyre",
    description:
      "Once the tyre and callout details are confirmed, a technician can travel to your location with the equipment required to carry out the replacement where it is safe to do so.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Backwell?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Backwell is available day and night, subject to technician and tyre availability.",
  },
  {
    question: "How long does it usually take for a mobile tyre fitter to reach Backwell?",
    answer:
      "Our usual arrival time is around 45–60 minutes. The actual time can vary depending on traffic, your exact location and technician availability.",
  },
  {
    question: "Can you replace a tyre on my driveway in Backwell?",
    answer:
      "Yes. Tyre replacement in Backwell can usually be carried out at home where there is enough safe space for the technician to work around the vehicle.",
  },
  {
    question: "Can you help with a flat tyre near the A370?",
    answer:
      "We provide roadside tyre assistance in Backwell and around nearby roads where the vehicle is in a safe and accessible location. If you are stopped in a dangerous position, follow the appropriate roadside safety guidance first.",
  },
  {
    question: "Do you offer mobile car tyre fitting in Backwell?",
    answer:
      "Yes. We provide mobile car tyre fitting for many common tyre sizes and vehicle types. Give us the tyre size or your vehicle details when you call so availability can be checked.",
  },
  {
    question: "Can you fit replacement tyres to vans?",
    answer:
      "Yes. Mobile van tyre fitting is available for suitable light commercial vehicles. Van tyres can require specific load ratings, so providing the current tyre specification is important.",
  },
  {
    question: "Do you provide SUV tyre fitting in Backwell?",
    answer:
      "Yes. We can provide replacement tyres for many SUVs and 4x4s, subject to the required size, specification and current stock.",
  },
  {
    question: "Can I book mobile tyre replacement if I haven't broken down?",
    answer:
      "Yes. Mobile tyre replacement in Backwell can be arranged for planned tyre changes as well as emergency situations. You do not need to wait until a tyre is completely flat.",
  },
  {
    question: "Do you cover Nailsea as well as Backwell?",
    answer:
      "Our Backwell coverage includes nearby areas such as Nailsea and other surrounding locations. Provide your postcode when calling so availability for your exact location can be confirmed.",
  },
  {
    question: "What information should I have ready when I call?",
    answer:
      "Your location and tyre size are the most useful details. Providing your vehicle make, model or registration can also help us identify the appropriate tyre specification.",
  },
];

const areasServed = [
  { name: "Nailsea", href: null },
  { name: "Flax Bourton", href: null },
  { name: "Yatton", href: null },
  { name: "Brockley", href: "/mobile-tyre-fitting-brockley" },
  { name: "Barrow Gurney", href: null },
];

const locationPin = (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-orange-600" aria-hidden>
    <path d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function BackwellPage() {
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
                Backwell &amp; Surrounding Areas
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Mobile Tyre Fitting in Backwell
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                A damaged tyre can turn a normal journey into an unexpected delay. Rapid Mobile Tyres
                provides mobile tyre fitting in Backwell, bringing tyre replacement directly to your home,
                workplace or suitable roadside location — for cars, vans and SUVs throughout Backwell and
                nearby parts of North Somerset, 24/7.
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

        {/* Intro — tyre replacement that comes to your location */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Tyre replacement that comes to your location
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                We Come to You — Home, Work or Roadside
              </h2>
              <p className="mt-4 leading-7 text-zinc-600">
                When a tyre has lost pressure completely or suffered serious damage, continuing to drive can
                make the problem worse. Our mobile tyre fitters in Backwell bring the necessary fitting
                equipment to the vehicle — attending suitable driveways, workplaces, car parks and roadside
                locations for both planned replacements and unexpected tyre problems.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Mobile Tyre Fitting at Home",
                    body: "If your vehicle is already parked safely at home, there is usually no reason to move it simply to replace a tyre. Our technicians can attend suitable residential locations in Backwell and fit a replacement tyre on-site — especially convenient for worn tread, sidewall damage or a slow puncture discovered before your next journey.",
                  },
                  {
                    title: "Workplace Tyre Replacement",
                    body: "A tyre problem during the working day can be disruptive, particularly if you depend on your vehicle for commuting or business. Where there is a suitable working space, our mobile tyre service can attend workplaces around Backwell and carry out the replacement while the vehicle remains parked.",
                  },
                  {
                    title: "Roadside Tyre Assistance in Backwell",
                    body: (
                      <>
                        If you suffer a puncture or blowout while travelling, it may not be safe to continue
                        driving. Our{" "}
                        <Link
                          href="/emergency-mobile-tyre-fitting-bristol"
                          className="font-medium text-orange-600 hover:underline"
                        >
                          roadside tyre assistance
                        </Link>{" "}
                        in Backwell is available for suitable locations where a technician can work safely.
                        If your vehicle is in a hazardous position, prioritise your own safety and follow
                        the appropriate roadside guidance before arranging a callout.
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
                Emergency Mobile Tyre Fitting in Backwell
              </h2>
              <p className="mt-4 text-zinc-600">
                Tyre failures do not always happen when local garages are open. We provide emergency tyre
                fitting in Backwell 24 hours a day for drivers dealing with punctures, blowouts, damaged
                tyre walls, complete pressure loss and other situations where the tyre is no longer suitable
                for continued driving.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: (
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  ),
                  title: "24/7 Availability",
                  body: "We respond to emergency callouts day and night, including weekends and bank holidays, throughout Backwell and nearby parts of North Somerset.",
                },
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  ),
                  title: "45–60 Min Response",
                  body: "Our usual arrival time is around 45–60 minutes, although this depends on traffic, technician availability and your exact location at the time of the call.",
                },
                {
                  icon: (
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7H5v2h2V7z" />
                  ),
                  title: "Right Tyre on the Van",
                  body: "We carry a range of tyre sizes so we can fit the correct tyre at your Backwell location — no second trip to a garage needed.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
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
                Tyre Fitting for Different Vehicles
              </h2>
              <p className="mt-4 text-zinc-600">
                Cars, vans and SUVs can require very different tyre sizes and specifications. Before
                attending, we use the information you provide to help identify a suitable replacement tyre
                for your vehicle.
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
                Arranging a Mobile Tyre Callout in Backwell
              </h2>
              <p className="mt-4 text-zinc-600">
                The information you provide when calling helps us identify the correct tyre and location
                before travelling.
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

        {/* A370 roads section */}
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
                A370 coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Mobile Tyre Assistance Around the A370
              </h2>
              <p className="mt-4 text-zinc-400">
                The A370 is one of the main routes through Backwell, linking the village with nearby areas
                including Flax Bourton and routes towards Bristol and Weston-super-Mare. Station Road also
                connects the village with the Nailsea &amp; Backwell railway station area.
              </p>
              <p className="mt-4 text-zinc-400">
                A tyre problem along a busy local route can make it difficult to reach a tyre centre
                safely. Our mobile service can attend suitable locations around Backwell and the surrounding
                road network, subject to safe access. When calling from the roadside, providing a road
                name, nearby junction, postcode or shared location helps us identify where the vehicle is
                stopped.
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

        {/* Tyre options */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Choosing the right tyre
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Replacement Tyres for Everyday and Longer Journeys
              </h2>
              <p className="mt-4 leading-7 text-zinc-600">
                Backwell drivers use their vehicles for everything from short local journeys to commuting
                towards Bristol and travelling further across North Somerset. Your replacement tyre should
                therefore match your vehicle specification rather than simply fitting the wheel — tyre
                width, profile, diameter, load rating and speed rating all need to be considered.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Our mobile tyre replacement in Backwell includes different tyre options subject to the
                specification you need and current availability.
              </p>
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Why choose */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Why use us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                A Convenient Alternative to Visiting a Garage
              </h2>
              <p className="mt-4 leading-7 text-zinc-600">
                Mobile tyre fitting is particularly useful when the tyre itself prevents you from travelling
                safely. Instead of organising vehicle recovery or attempting to drive on a damaged tyre, a
                technician can come to your location and complete the fitting there.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Backwell, covering suitable
                residential addresses, workplaces and roadside locations for both planned and emergency tyre
                replacement.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "24/7 Service", body: "Available day and night, including weekends and bank holidays — no need to wait until a garage opens." },
                { title: "We Come to You", body: "Home, workplace or suitable roadside location — no recovery truck or unnecessary garage journey required." },
                { title: "Cars, Vans & SUVs", body: "Mobile fitting for a wide range of passenger vehicles and light commercial vehicles across Backwell." },
                { title: "Planned & Emergency", body: "Both urgent tyre problems and planned replacements can be handled through the same convenient mobile service." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">Coverage</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Mobile Tyre Coverage Around Backwell
            </h2>
            <p className="mt-4 text-zinc-600">
              Our service is available across Backwell and nearby parts of North Somerset, including
              Nailsea, Flax Bourton, Yatton,{" "}
              <Link href="/mobile-tyre-fitting-brockley" className="font-medium text-orange-600 hover:underline">
                Brockley
              </Link>{" "}
              and Barrow Gurney. Backwell also has close transport links with Nailsea through Nailsea &amp;
              Backwell railway station, while the A370 provides an important connection towards Flax Bourton
              and surrounding communities. If you are outside Backwell itself, provide your postcode when
              calling so your exact location and current technician availability can be checked.
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

        {/* More services */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                Additional services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Tyre Help Is Not Our Only Mobile Service
              </h2>
              <p className="mt-4 text-zinc-600">
                Sometimes the vehicle problem is caused by something other than the tyres. Rapid Mobile
                Tyres also provides mobile roadside services for other common situations — including{" "}
                <Link href="/jumpstarts" className="font-medium text-orange-600 hover:underline">
                  jump start assistance
                </Link>{" "}
                if the battery is flat and{" "}
                <Link href="/fuel-delivery" className="font-medium text-orange-600 hover:underline">
                  emergency fuel delivery
                </Link>{" "}
                if the vehicle has run out of fuel.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Emergency Mobile Tyre Fitting",
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  description:
                    "Blowout, puncture or sidewall damage — 24/7 emergency assistance at your Backwell location, usually within 45–60 minutes.",
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
                    "Dedicated car tyre fitting for hatchbacks, saloons, estates and everyday vehicles — fitted at your location.",
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
              Need Mobile Tyre Fitting in Backwell?
            </h2>
            <p className="mt-4 text-zinc-300">
              If your tyre is flat, damaged or due for replacement, you do not have to make the problem
              harder by trying to reach a garage. Contact us with your location, vehicle details and tyre
              size, and we can check the appropriate tyre and technician availability for your callout.
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
