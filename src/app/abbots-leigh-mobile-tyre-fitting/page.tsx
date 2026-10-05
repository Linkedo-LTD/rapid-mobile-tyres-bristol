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
  title: "Mobile Tyre Fitting Abbots Leigh | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Abbots Leigh and along the A369 towards Leigh Woods and Bristol. 24/7 tyre replacement at home, work or the roadside.",
  alternates: {
    canonical: "https://rapid-tyres.com/abbots-leigh-mobile-tyre-fitting",
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
    title: "Mobile Car Tyre Fitting in Abbots Leigh",
    href: "/mobile-car-tyre-fitting-bristol",
    description:
      "Our mobile car tyre fitting in Abbots Leigh is available for many common cars used for everyday local travel and commuting. The replacement can be fitted at a suitable home, workplace or roadside position subject to tyre availability.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "A tyre problem on a working van can quickly affect appointments, deliveries or the rest of the working day. Our mobile van tyre fitting in Abbots Leigh covers suitable light commercial vehicles. Because vans may use higher load-rated tyres, provide the complete sidewall specification when arranging the callout.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s can require larger tyre sizes and different load specifications from standard passenger cars. We provide SUV tyre fitting in Abbots Leigh for suitable vehicles and tyre specifications, subject to current stock.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Describe the Problem",
    description:
      "Tell us whether the tyre is punctured, completely flat, blown out, losing pressure or visibly damaged. If you are booking a planned replacement rather than dealing with an emergency, tell us that too.",
  },
  {
    title: "Read the Tyre Size",
    description:
      "The complete tyre size is normally printed on the sidewall. Sending the full marking helps us identify appropriate replacement options before travelling.",
  },
  {
    title: "Give an Exact Location",
    description:
      "For a house or workplace, send the full postcode. If you are stopped on the road, give us the road name, nearest junction, direction of travel or a shared location.",
  },
  {
    title: "Mention Access Conditions",
    description:
      "Tell us if the vehicle is behind gates, on a narrow drive or parked in a location where working space may be limited. This allows us to assess whether fitting can safely be completed where the vehicle is positioned.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Abbots Leigh?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Abbots Leigh is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Abbots Leigh?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival time depends on traffic, technician availability, tyre stock and your exact position.",
  },
  {
    question: "Do you provide emergency tyre fitting in Abbots Leigh?",
    answer:
      "Yes. Emergency tyre fitting in Abbots Leigh is available for punctures, blowouts, complete flats and other tyre damage that prevents safe onward travel.",
  },
  {
    question: "Can you replace a tyre at my home in Abbots Leigh?",
    answer:
      "Yes. Tyre replacement in Abbots Leigh can usually be completed on a suitable driveway or private parking area where there is safe working access.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Abbots Leigh?",
    answer:
      "Yes. Our mobile car tyre fitting in Abbots Leigh covers many common cars and tyre sizes, subject to current availability.",
  },
  {
    question: "Can you replace van tyres in Abbots Leigh?",
    answer:
      "Yes. We provide mobile van tyre fitting in Abbots Leigh for suitable light commercial vehicles. Send the complete tyre size and load rating whenever possible.",
  },
  {
    question: "Do you provide SUV tyre fitting in Abbots Leigh?",
    answer:
      "Yes. SUV tyre fitting in Abbots Leigh is available for suitable SUVs, crossovers and 4x4s, subject to tyre stock.",
  },
  {
    question: "Can you help if my tyre fails on the A369?",
    answer:
      "Our roadside tyre assistance in Abbots Leigh can attend suitable accessible locations around the A369. North Somerset Council identifies the A369 Abbots Leigh Road as part of the local highway network. Give us your exact location and direction of travel when calling.",
  },
  {
    question: "Can you come to Church Road?",
    answer:
      "Yes, subject to technician availability and safe access. Church Road is an established road within Abbots Leigh and is referenced in North Somerset Council's local rights-of-way planning.",
  },
  {
    question: "Can you attend Blackmoor Road?",
    answer:
      "We can attend suitable locations within the service area. North Somerset Council identifies Blackmoor Road and its connection with the A369 in Abbots Leigh.",
  },
  {
    question: "Can you help around Beggar Bush Lane?",
    answer:
      "Yes, where safe working access is available. Beggar Bush Lane is part of the local Abbots Leigh and Leigh Woods road network.",
  },
  {
    question: "Can you come to a rural property?",
    answer:
      "Yes, provided the location is within coverage and there is suitable working space. Send the full postcode, property name and any access instructions that may help us find the vehicle.",
  },
  {
    question: "Do you cover Leigh Woods?",
    answer:
      "Leigh Woods is currently listed among the surrounding areas on the Abbots Leigh page. Provide your postcode so current technician availability can be confirmed.",
  },
  {
    question: "Do you cover Pill and Long Ashton?",
    answer:
      "Both Pill and Long Ashton are currently listed within the surrounding coverage shown on the Abbots Leigh page. Call with the exact vehicle location to confirm availability.",
  },
  {
    question: "Can I arrange mobile tyre replacement before the tyre becomes flat?",
    answer:
      "Yes. Mobile tyre replacement in Abbots Leigh can be arranged for worn or damaged tyres as well as emergency failures. You do not need to wait until the tyre becomes unusable.",
  },
  {
    question: "Is your mobile tyre service available at weekends?",
    answer:
      "Yes. Our mobile tyre service in Abbots Leigh operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What details should I provide when calling?",
    answer:
      "Give us your vehicle details, complete tyre size and precise location. For rural addresses or roadside positions, a property name, nearest junction or shared map pin can also help.",
  },
];

const areasServed = [
  { name: "Leigh Woods", href: null },
  { name: "Failand", href: null },
  { name: "Long Ashton", href: null },
  { name: "Pill", href: null },
  { name: "Ashton Court", href: null },
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
              src="/mobile-tyre-pressure-check-abbots-leigh.webp"
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
                Abbots Leigh, North Somerset
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Abbots Leigh</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A damaged tyre in Abbots Leigh can be inconvenient whether your vehicle is sitting
                outside your home or you notice the problem while travelling along the A369
                towards Bristol. Rapid Mobile Tyres provides mobile tyre fitting in Abbots Leigh,
                bringing replacement tyres and fitting equipment directly to suitable homes,
                workplaces and roadside locations. We can help with punctures, blowouts,
                completely flat tyres and planned replacements, allowing the vehicle to remain
                where it is instead of making an unnecessary journey to a tyre centre.
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

        {/* A Tyre Service That Comes Into the Village */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  A Tyre Service That Comes Into the Village
                </h2>
                <p className="mb-8 text-zinc-600">
                  Abbots Leigh combines village properties, quieter side roads and one important
                  through-route connecting the area with Bristol and surrounding North Somerset
                  communities. That makes mobile fitting especially useful when the vehicle is
                  already parked somewhere suitable. Our mobile tyre fitter in Abbots Leigh can
                  attend the location and replace the tyre where there is safe access and enough
                  working space.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Tyre Fitting at Home</h3>
                      <p className="text-zinc-600">
                        If you discover a flat tyre before leaving home, driving it elsewhere may
                        cause further damage. We can carry out{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          tyre replacement in Abbots Leigh
                        </Link>{" "}
                        on a suitable driveway or private parking area. Home fitting can also be
                        arranged when tread wear or visible tyre damage has been identified before
                        the tyre fails completely.
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
                        Callouts to Rural and Larger Properties
                      </h3>
                      <p className="text-zinc-600">
                        Some properties around Abbots Leigh sit away from denser residential
                        streets and may have longer entrances, private drives or less obvious
                        access points. Providing the postcode, property name and any useful
                        directions helps us reach the correct location. A shared map pin can be
                        particularly useful where the entrance is not easy to identify from the
                        road.
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
                      <h3 className="font-semibold text-zinc-900">Help Away From Home</h3>
                      <p className="text-zinc-600">
                        If a puncture or blowout happens while travelling through the village, our
                        roadside tyre assistance in Abbots Leigh can attend suitable accessible
                        locations. Roadside fitting is always dependent on there being enough safe
                        and permitted working space around the vehicle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/driveway-wheel-replacement-abbots-leigh.webp"
                    alt="Mobile tyre fitting technician replacing a wheel on a driveway in Abbots Leigh"
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
                Emergency Mobile Tyre Fitting in Abbots Leigh
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A tyre can fail at any time, including evenings, weekends and overnight. Rapid
                Mobile Tyres provides emergency tyre fitting in Abbots Leigh 24 hours a day for
                punctures, blowouts and other tyre damage that leaves the vehicle unsafe to
                continue. Sending the complete tyre size and location when you first contact us
                helps us check the replacement before travelling.
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
                  for garage opening times.
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
                  availability, tyre availability and your exact location.
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
                Vehicle type matters when selecting the replacement tyre. The correct tyre needs
                to match dimensions, load index, speed rating and the manufacturer&apos;s
                requirements.
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

        {/* Getting Your Abbots Leigh Callout Right First Time */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Getting Your Abbots Leigh Callout Right First Time
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                The quickest way to arrange useful assistance is to give us accurate information
                from the start.
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

        {/* Roads section — A369 and Church Road */}
        <section className="relative bg-zinc-900 py-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/roadside-spare-tyre-fitting-abbots-leigh.webp"
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
                  Mobile Tyre Assistance Along the A369
                </h2>
                <p className="mb-4 text-zinc-300">
                  The A369 is the key road through Abbots Leigh and one of the strongest local
                  features for this page. North Somerset Council records the A369 through the
                  village and specifically references A369 Abbots Leigh Road in local highway
                  notices. The Abbots Leigh Parish Council has also highlighted the level of
                  traffic using the A369 through the village.
                </p>
                <p className="text-zinc-300">
                  For local drivers, it forms an important connection towards Leigh Woods and
                  Bristol in one direction and other North Somerset communities in the other. If
                  your tyre develops a problem around the A369, give us the exact road position or
                  nearest junction. Fitting can only take place where it is safe for both the
                  vehicle and technician.
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-extrabold">Tyre Help Around Church Road</h2>
                <p className="mb-4 text-zinc-300">
                  Church Road is one of the established local roads in Abbots Leigh. North
                  Somerset Council&apos;s rights-of-way plan specifically references Church Road
                  within Abbots Leigh village and its connection towards Leigh Woods.
                </p>
                <p className="text-zinc-300">
                  If your vehicle is parked at a property around Church Road, mobile fitting can
                  avoid having to move it onto the A369 while the tyre is damaged. Provide your
                  full postcode and any useful property details when arranging the callout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blackmoor Road, Beggar Bush Lane and Pill Road */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Mobile Tyre Callouts Around Blackmoor Road
                </h2>
                <p className="mb-4 text-zinc-600">
                  Another useful local reference is Blackmoor Road. North Somerset Council
                  identifies Blackmoor Road in Abbots Leigh and its connection with the A369 in
                  official rights-of-way documentation. A tyre problem on one of these quieter
                  local roads can still leave you unable to continue your journey.
                </p>
                <p className="mb-6 text-zinc-600">
                  If you are not at a numbered property, a shared location can make it easier to
                  identify where the vehicle is parked.
                </p>
                <h3 className="mb-3 font-bold text-zinc-900">Tyre Assistance Around Beggar Bush Lane</h3>
                <p className="text-zinc-600">
                  Beggar Bush Lane is also part of the local road network around Abbots Leigh and
                  Leigh Woods. North Somerset Council specifically references Beggar Bush Lane in
                  its Abbots Leigh rights-of-way information, while historic road notices also
                  record highway works there. This is particularly relevant for drivers travelling
                  between Abbots Leigh and the Bristol side of the area. If your tyre becomes
                  unusable around Beggar Bush Lane, send your exact position rather than relying
                  only on the road name.
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-8 ring-1 ring-zinc-100">
                <h3 className="mb-4 font-bold text-zinc-900">Mobile Tyre Fitting Around Pill Road</h3>
                <p className="mb-4 text-zinc-600">
                  Pill Road is another recognised road associated with Abbots Leigh. North
                  Somerset&apos;s street records include Pill Road within the Abbots Leigh
                  locality, helping connect the village with the wider area towards Pill.
                </p>
                <p className="text-zinc-600 mb-6">
                  For drivers making local journeys between villages, a puncture can be
                  inconvenient even when the destination is only a few miles away. Our mobile
                  service allows the replacement to come to the vehicle instead of asking you to
                  continue on a damaged tyre.
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
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Before Travelling Towards Leigh Woods and Bristol */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Before Travelling Towards Leigh Woods and Bristol
              </h2>
              <p className="mb-4 text-zinc-600">
                Abbots Leigh sits immediately west of Leigh Woods, with the A369 providing the
                principal road connection towards Bristol. North Somerset Council&apos;s current
                Leigh Woods parking area includes Abbots Leigh Road, Bridge Road, Church Road,
                North Road and Rownham Hill, showing how closely the two areas connect.
              </p>
              <p className="text-zinc-600">
                If you notice low pressure, sidewall damage or another tyre problem before
                starting a journey towards Bristol, dealing with it locally can be safer than
                hoping the tyre lasts until you reach the city. Our mobile tyre replacement in
                Abbots Leigh allows a suitable replacement to be fitted before you continue.
              </p>
            </div>
          </div>
        </section>

        {/* Tyres for Rural Roads and Bristol Commuting */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Tyres for Rural Roads and Bristol Commuting
              </h2>
              <p className="mb-4 text-zinc-600">
                Vehicles based in Abbots Leigh may be used for two very different types of
                driving. One journey might involve quieter local roads and village properties,
                while the next uses the A369 towards Bristol.
              </p>
              <p className="text-zinc-600">
                The correct tyre therefore needs to suit the vehicle itself rather than being
                selected simply because of the location. Depending on your tyre size and current
                stock, different replacement options may be available. Send the full tyre
                specification so suitable options can be checked.
              </p>
            </div>
          </div>
        </section>

        {/* Why Mobile Tyre Fitting Works Well in Abbots Leigh */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Why Mobile Tyre Fitting Works Well in Abbots Leigh
              </h2>
              <p className="max-w-2xl text-zinc-600">
                A damaged tyre is inconvenient anywhere, but village locations can make a garage
                visit more awkward because reaching one may require travelling on a main road
                first.
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
                  body: "Our 24 hour mobile tyre fitting in Abbots Leigh removes the extra journey a garage visit would otherwise require.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "The Tyre Fitting Comes to You",
                  body: "For residents, commuters and local businesses, the main advantage is simple: the tyre fitting comes to the vehicle.",
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
                  body: "The service can be used when a tyre has failed unexpectedly or when you want to replace a worn or damaged tyre before it becomes an emergency.",
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
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Covering Abbots Leigh and Nearby Areas
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Our coverage from Abbots Leigh includes Leigh Woods, Failand, Long Ashton, Pill and
                Ashton Court. These areas support the local relevance of the page without
                weakening its main focus on Abbots Leigh. The connection with Leigh Woods is
                especially strong, with North Somerset Council documentation referring to routes
                between Abbots Leigh village and Leigh Woods. If your vehicle is outside Abbots
                Leigh itself, provide the exact postcode so current coverage and technician
                availability can be confirmed.
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
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                More Than Mobile Tyre Replacement
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A tyre is not the only issue that can leave your vehicle unable to continue. Rapid
                Mobile Tyres also provides jump start assistance for flat batteries and fuel
                delivery when a vehicle runs out of fuel, alongside its mobile tyre fitting
                services.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and sidewall damage — including village locations around Abbots Leigh.",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations in and around Abbots Leigh.",
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
                  body: "Run out of fuel near Abbots Leigh? Our emergency fuel delivery service can bring the right fuel to your location.",
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

        <Faq items={faqs} title="Mobile Tyre Fitting Abbots Leigh FAQs" />

        {/* Final CTA */}
        <section className="relative bg-zinc-900 py-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/country-road-tyre-fitting-abbots-leigh.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Need Mobile Tyre Fitting in Abbots Leigh?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              Whether your tyre is flat outside your home, becomes damaged along the A369 or
              leaves you unable to continue towards Leigh Woods or Bristol, you do not necessarily
              need to drive the vehicle to a tyre centre. Rapid Mobile Tyres can bring mobile tyre
              fitting in Abbots Leigh directly to a suitable home, workplace or roadside location.
              Contact us with your vehicle details, tyre size and exact position so current
              availability can be checked and the appropriate mobile tyre callout arranged.
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
