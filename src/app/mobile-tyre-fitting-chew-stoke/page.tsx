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
  title: "Mobile Tyre Fitting Chew Stoke | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Chew Stoke and the wider Chew Valley. 24/7 tyre replacement at home, on rural roads or at the roadside.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-chew-stoke",
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
    title: "Mobile Car Tyre Fitting in Chew Stoke",
    href: "/mobile-car-tyre-fitting-bristol",
    description:
      "Our mobile car tyre fitting in Chew Stoke is available for many common hatchbacks, saloons, estates and family vehicles. Whether the problem happens at home or during a journey, fitting can be arranged at a suitable accessible location subject to tyre availability.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "Vans used by tradespeople and local businesses may regularly travel between Chew Valley communities and Bristol. Our mobile van tyre fitting in Chew Stoke brings replacement tyres directly to suitable light commercial vehicles. Because vans may need particular load-rated tyres, provide the full sidewall information whenever possible.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV and 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s often use larger tyre dimensions or different load specifications from ordinary cars. We provide SUV tyre fitting in Chew Stoke for suitable vehicles and tyre sizes, subject to current availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Explain the Tyre Problem",
    description:
      "Tell us whether the tyre is punctured, completely flat, blown out, losing pressure or visibly damaged. If you are arranging planned replacement rather than emergency assistance, let us know that too.",
  },
  {
    title: "Send Your Complete Tyre Size",
    description:
      "The tyre size can normally be found on the sidewall. Providing the full marking helps us check the correct replacement before the technician sets off.",
  },
  {
    title: "Give an Accurate Location",
    description:
      "At a property, provide your postcode. If you are stopped between addresses or on a rural road, send the road name, nearest junction or a shared map location.",
  },
  {
    title: "Mention Access or Parking Restrictions",
    description:
      "Tell us if the vehicle is parked down a narrow drive, behind a gate or somewhere with limited room around it. Fitting can only take place where the technician has safe access to the vehicle.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Chew Stoke?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Chew Stoke is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Chew Stoke?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival time depends on traffic, technician availability, your precise location and whether the required tyre is currently in stock.",
  },
  {
    question: "Do you provide emergency tyre fitting in Chew Stoke?",
    answer:
      "Yes. Emergency tyre fitting in Chew Stoke is available for punctures, blowouts, completely flat tyres and other tyre damage that prevents safe onward travel.",
  },
  {
    question: "Can you replace a tyre at my home in Chew Stoke?",
    answer:
      "Yes. Tyre replacement in Chew Stoke can usually be completed at a suitable residential property where there is enough safe working space around the vehicle.",
  },
  {
    question: "Can you help if my tyre fails on the B3114?",
    answer:
      "Our roadside tyre assistance in Chew Stoke can attend suitable accessible locations around the B3114. B3114 Bristol Road runs through Chew Stoke and connects with local roads including Pagans Hill, Pilgrims Way and Chapel Lane.",
  },
  {
    question: "Can you attend around Chew Lane?",
    answer:
      "Yes, subject to technician availability and safe access. Chew Lane forms part of the B3114 in the Chew Stoke area.",
  },
  {
    question: "Can you come to Pilgrims Way or Chapel Lane?",
    answer:
      "Yes, where the vehicle is within our coverage and there is safe working access. Bath & North East Somerset Council identifies both roads as connecting with B3114 Bristol Road in Chew Stoke.",
  },
  {
    question: "Can you attend Scot Lane?",
    answer:
      "We can attend suitable locations within our service coverage. Scot Lane is a recognised Chew Stoke road connecting with the local network around Pagans Hill and Pilgrims Way.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Chew Stoke?",
    answer:
      "Yes. Our mobile car tyre fitting in Chew Stoke covers many common vehicle types and tyre sizes, subject to availability.",
  },
  {
    question: "Can you replace van tyres in Chew Stoke?",
    answer:
      "Yes. We provide mobile van tyre fitting in Chew Stoke for suitable light commercial vehicles. Send the complete tyre size and load rating so an appropriate replacement can be checked.",
  },
  {
    question: "Do you provide SUV tyre fitting in Chew Stoke?",
    answer:
      "Yes. SUV tyre fitting in Chew Stoke is available for suitable SUVs, crossovers and 4x4s, subject to tyre availability.",
  },
  {
    question: "Can you attend a rural property?",
    answer:
      "Yes, where the location is within our coverage and safe working access is available. Provide the postcode, property name and any useful directions if the entrance is not easy to identify.",
  },
  {
    question: "Do you cover Chew Magna?",
    answer:
      "Chew Magna is a neighbouring Chew Valley location and has its own dedicated Rapid Tyres service-area page. If you are outside Chew Stoke itself, provide your exact postcode so current technician availability can be confirmed.",
  },
  {
    question: "Can I arrange mobile tyre replacement before the tyre becomes completely flat?",
    answer:
      "Yes. Mobile tyre replacement in Chew Stoke can be arranged for worn or visibly damaged tyres as well as emergency failures. You do not need to wait for a puncture or blowout before arranging replacement.",
  },
  {
    question: "Is your mobile tyre service available at weekends?",
    answer:
      "Yes. Our mobile tyre service in Chew Stoke operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What information should I give you when calling?",
    answer:
      "Provide your vehicle details, complete tyre size and exact location. For rural roads or locations between properties, adding the road name, nearest junction and a shared map pin can make the callout easier to coordinate.",
  },
];

const areasServed = [
  { name: "Chew Magna", href: "/mobile-tyre-fitting-chew-magna" },
  { name: "Bishop Sutton", href: null },
  { name: "Winford", href: null },
  { name: "Nempnett Thrubwell", href: null },
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
                Chew Stoke, Chew Valley
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Chew Stoke</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A tyre problem in Chew Stoke can leave you facing a difficult choice: continue
                driving on a damaged tyre towards a larger town, or leave the vehicle where it is
                and arrange help. Rapid Mobile Tyres provides mobile tyre fitting in Chew Stoke,
                bringing replacement tyres and fitting equipment directly to suitable homes,
                workplaces and roadside locations. Whether your tyre goes flat before leaving
                home, becomes damaged during a journey through the Chew Valley or needs replacing
                because of wear, our mobile service allows the fitting to be completed where the
                vehicle is already located.
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

        {/* Tyre Replacement Designed Around Village Life */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Replacement Designed Around Village Life
                </h2>
                <p className="mb-8 text-zinc-600">
                  Chew Stoke is not a dense urban area with tyre centres around every corner.
                  Local journeys often involve village streets, rural roads and connections
                  towards neighbouring communities, making mobile fitting particularly useful when
                  a tyre is no longer safe. Our mobile tyre fitter in Chew Stoke can attend
                  suitable locations and replace the tyre without requiring you to drive the
                  vehicle elsewhere first.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Tyre Fitting at Your Home</h3>
                      <p className="text-zinc-600">
                        A flat tyre discovered on the driveway can stop the day before it has even
                        started. Where there is enough safe working space, we can carry out{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          tyre replacement in Chew Stoke
                        </Link>{" "}
                        at your property. Home fitting can also be arranged for tyres showing
                        excessive wear, cracking or other damage before they become completely
                        unusable.
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
                      <h3 className="font-semibold text-zinc-900">
                        Callouts to Rural and Village Properties
                      </h3>
                      <p className="text-zinc-600">
                        Some properties around Chew Stoke are reached by smaller roads, lanes or
                        private entrances. If your vehicle is parked somewhere that is difficult
                        to identify from a normal street address, give us the full postcode along
                        with any useful entrance instructions. A shared location can also help
                        when the vehicle is at a rural property rather than on a clearly numbered
                        street.
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
                      <h3 className="font-semibold text-zinc-900">
                        Roadside Help When You Cannot Continue
                      </h3>
                      <p className="text-zinc-600">
                        If a puncture or blowout happens while travelling through the area,
                        continuing on the damaged tyre may cause further damage or create an
                        unnecessary safety risk. Our roadside tyre assistance in Chew Stoke can
                        attend suitable locations where there is enough safe and permitted space
                        for the technician to work. If you are stopped on a narrow or poorly
                        visible road, prioritise reaching the safest available position.
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
                Emergency Mobile Tyre Fitting in Chew Stoke
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Tyre failures can happen outside normal garage opening hours, including evenings,
                weekends and overnight. Rapid Mobile Tyres provides emergency tyre fitting in Chew
                Stoke 24 hours a day for punctures, blowouts, complete flats and other tyre damage
                that prevents safe onward travel. Providing the complete tyre size and precise
                location when you call helps us check the job before travelling.
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
                  for garage opening times, even in rural parts of the Chew Valley.
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
                  Our usual arrival time is around 45–60 minutes, depending on technician
                  availability, traffic, your exact position and whether the required tyre is
                  currently available.
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
                Vehicles used around Chew Stoke can have very different tyre requirements. The
                correct replacement needs to match the tyre dimensions, load rating, speed rating
                and the requirements of the vehicle.
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

        {/* What We Need Before Travelling to You */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                What We Need Before Travelling to You
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Finding a vehicle in a village or rural setting can be different from locating one
                on a major city road. A few details help us arrange your callout correctly.
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

        {/* Roads section — B3114 Bristol Road and Chew Lane */}
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
                  Mobile Tyre Assistance Along the B3114 Bristol Road
                </h2>
                <p className="mb-4 text-zinc-300">
                  The B3114 Bristol Road is one of the main routes through Chew Stoke. Bath &amp;
                  North East Somerset Council identifies the B3114 through the village, including
                  the section between Pagans Hill and Walley Court Road. Avon and Somerset Police
                  also lists B3114 Bristol Road, Chew Stoke near Quarry Hay, confirming its
                  importance as a defined local route through the village.
                </p>
                <p className="text-zinc-300">
                  For drivers travelling through Chew Stoke, a tyre problem on or near this road
                  can interrupt both local journeys and travel towards the wider Chew Valley. If
                  your vehicle is stopped near the B3114, provide the exact road name, nearest
                  junction or shared position when arranging assistance.
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-extrabold">
                  Tyre Help Around Chew Lane
                </h2>
                <p className="mb-4 text-zinc-300">
                  The B3114 continues through the wider Chew Stoke area and is also identified
                  locally as Chew Lane. Avon and Somerset Police lists B3114 Chew Lane, Chew Stoke
                  as a recognised road location.
                </p>
                <p className="text-zinc-300">
                  If a tyre becomes damaged while you are travelling along this route, our mobile
                  service can attend suitable accessible locations where safe working space is
                  available. Give us the precise road position rather than simply saying you are
                  &ldquo;near Chew Stoke&rdquo;, particularly if you are between villages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilgrims Way/Chapel Lane and Scot Lane/Pagans Hill */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Mobile Tyre Callouts Around Pilgrims Way and Chapel Lane
                </h2>
                <p className="mb-4 text-zinc-600">
                  Chew Stoke also contains smaller local roads that connect directly with the
                  B3114. Bath &amp; North East Somerset Council identifies Pilgrims Way and Chapel
                  Lane in Chew Stoke, with both connecting to B3114 Bristol Road. These roads are
                  useful local references for residential callouts.
                </p>
                <p className="mb-6 text-zinc-600">
                  If your vehicle is parked around Pilgrims Way, Chapel Lane or nearby streets,
                  providing the full postcode normally makes the location straightforward to
                  identify. For tighter residential positions, let us know if vehicles are parked
                  closely around the damaged tyre.
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
                <h3 className="mb-4 font-bold text-zinc-900">
                  Tyre Assistance Around Scot Lane and Pagans Hill
                </h3>
                <p className="mb-4 text-zinc-600">
                  Another locally distinctive part of Chew Stoke is the road network around Scot
                  Lane and Pagans Hill. Bath &amp; North East Somerset Council road notices
                  confirm Scot Lane and show its connections with Pagans Hill, Pilgrims Way, Blind
                  Lane and the B3114.
                </p>
                <p className="text-zinc-600">
                  This matters for mobile fitting because a driver may be only a short distance
                  from the main B3114 but still be parked on a much smaller village road. A
                  postcode or shared map position can therefore be more useful than simply naming
                  Chew Stoke.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Mobile Tyre Fitting for Chew Valley Journeys */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Mobile Tyre Fitting for Chew Valley Journeys
              </h2>
              <p className="mb-4 text-zinc-600">
                Many vehicles based in Chew Stoke will spend a significant amount of time
                travelling beyond the village itself. Drivers may regularly make short journeys
                through neighbouring Chew Valley communities or travel towards Bristol and other
                parts of Bath and North East Somerset.
              </p>
              <p className="text-zinc-600">
                Our mobile tyre replacement in Chew Stoke is based on the vehicle&apos;s required
                tyre specification rather than making assumptions about where it is normally
                driven. Depending on the tyre size and current stock, different replacement
                options may be available. Providing the complete sidewall information helps us
                check suitable choices before travelling.
              </p>
            </div>
          </div>
        </section>

        {/* Why Mobile Fitting Makes Sense in Chew Stoke */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Why Mobile Fitting Makes Sense in Chew Stoke
              </h2>
              <p className="max-w-2xl text-zinc-600">
                In a rural village, reaching a garage may require travelling several miles before
                the tyre can even be inspected. That is not ideal when the tyre is already flat or
                visibly damaged.
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
                  body: "Our 24 hour mobile tyre fitting in Chew Stoke brings the fitting equipment and replacement tyre to the vehicle instead of requiring a drive to a garage.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "No Unnecessary Driving",
                  body: "Mobile fitting removes the need to drive an already damaged tyre several miles just to reach a garage.",
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
                  body: "The service can be used for emergencies as well as planned tyre changes when you have already spotted wear or damage.",
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
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Covering Chew Stoke and the Nearby Chew Valley
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Chew Stoke sits within a network of nearby Chew Valley communities rather than
                functioning as an isolated location. The strongest local relationships are with
                places such as{" "}
                <Link href="/mobile-tyre-fitting-chew-magna" className="text-orange-500 hover:underline">
                  Chew Magna
                </Link>
                , Winford, Bishop Sutton and neighbouring rural settlements, while the local B3114
                road network provides connections through the wider area. This page is kept
                focused on Chew Stoke rather than trying to optimise equally for every nearby
                village. If you are outside Chew Stoke itself, provide your exact postcode so
                current coverage and technician availability can be confirmed.
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
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                More Than Mobile Tyre Replacement
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A tyre is not always the reason a vehicle cannot continue. Rapid Mobile Tyres also
                provides jump start assistance for flat batteries and fuel delivery when a
                vehicle runs out of fuel, alongside its mobile tyre fitting services.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and sidewall damage — including rural locations across the Chew Valley.",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations in and around Chew Stoke.",
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
                  body: "Run out of fuel near Chew Stoke? Our emergency fuel delivery service can bring the right fuel to your location.",
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

        <Faq items={faqs} title="Mobile Tyre Fitting Chew Stoke FAQs" />

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
              Need Mobile Tyre Fitting in Chew Stoke?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              Whether your tyre goes flat outside your home, becomes damaged around Bristol Road
              or leaves you unable to continue somewhere on the Chew Valley road network, you do
              not necessarily need to drive the vehicle to a tyre centre. Rapid Mobile Tyres can
              bring mobile tyre fitting in Chew Stoke directly to a suitable home, workplace or
              roadside location. Contact us with your vehicle details, tyre size and exact
              position so current availability can be checked and the appropriate mobile tyre
              callout arranged.
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
