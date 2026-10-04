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
  title: "Mobile Tyre Fitting Gloucestershire | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Gloucestershire for flat or damaged tyres. Get tyre assistance at your chosen location.",
};

const stats = [
  { value: "24/7", label: "Available, every day" },
  { value: "45–60 min", label: "Usual arrival time" },
  { value: "Affordable", label: "Callout rates" },
  { value: "5★", label: "Rated by customers" },
];

const vehicleServices = [
  {
    title: "Mobile Car Tyre Fitting",
    href: "/mobile-car-tyre-fitting-bristol",
    description:
      "Our mobile car tyre fitting in Gloucestershire is available for many common hatchbacks, saloons, estates and family cars. Whether you are dealing with a sudden puncture or replacing a worn tyre, fitting can be arranged at a suitable home, workplace or roadside location.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "For tradespeople, couriers and businesses, a van tyre failure can stop more than just one journey. Our mobile van tyre fitting in Gloucestershire brings tyre replacement to the vehicle. Because commercial vehicles may require specific load-rated tyres, provide the complete tyre specification where possible.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV & 4x4 Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s can use larger tyre sizes and different load or performance specifications from standard passenger cars. We provide SUV tyre fitting in Gloucestershire for suitable vehicles and tyre sizes, subject to current tyre availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us What Has Happened",
    description:
      "Let us know whether you have a puncture, complete flat, blowout, visible sidewall damage or a tyre that is simply worn and due for replacement.",
  },
  {
    title: "Provide the Tyre Size",
    description:
      "The tyre size is normally printed on the sidewall. Your vehicle make, model or registration can also help identify the correct specification.",
  },
  {
    title: "Send Your Exact Location",
    description:
      "Provide the postcode, road name or shared location of the vehicle. If you are on a major route, also tell us your direction of travel and the nearest junction or recognisable landmark.",
  },
  {
    title: "We Arrange the Mobile Fitting",
    description:
      "Once the tyre requirement and location have been confirmed, a technician can travel to the vehicle with the necessary fitting equipment and carry out the replacement where it is safe to work.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Gloucestershire?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Gloucestershire is available day and night, subject to technician availability, location and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach me in Gloucestershire?",
    answer:
      "Our usual arrival time is around 45–60 minutes, but Gloucestershire covers a large area. Traffic, technician location, tyre availability and your exact postcode can all affect the arrival time.",
  },
  {
    question: "Do you provide emergency tyre fitting in Gloucestershire?",
    answer:
      "Yes. Emergency tyre fitting in Gloucestershire is available for punctures, blowouts, flats and other tyre problems that leave the vehicle unsafe to continue driving.",
  },
  {
    question: "Can you replace a tyre at my home?",
    answer:
      "Yes. Tyre replacement in Gloucestershire can usually be carried out at a suitable home address where there is enough safe space around the vehicle.",
  },
  {
    question: "Can you help if I have a tyre problem near the M5?",
    answer:
      "We provide roadside tyre assistance at suitable locations around the Gloucestershire road network, including areas close to the M5. If you are stopped on the motorway itself, follow motorway safety guidance and only arrange fitting where access is safe and permitted.",
  },
  {
    question: "Do you provide roadside tyre assistance around the A40?",
    answer:
      "Yes. Our roadside tyre assistance in Gloucestershire can cover suitable locations around the A40 and other roads within our service area. The A40 is an important route through the county linking Gloucester with Cheltenham and areas further west.",
  },
  {
    question: "Do you offer mobile car tyre fitting in Gloucestershire?",
    answer:
      "Yes. We provide mobile car tyre fitting in Gloucestershire for many common vehicle types and tyre sizes, subject to tyre availability.",
  },
  {
    question: "Can you replace tyres on vans?",
    answer:
      "Yes. Our mobile van tyre fitting in Gloucestershire covers suitable light commercial vehicles. Providing the complete tyre size and load rating helps us identify an appropriate replacement.",
  },
  {
    question: "Do you provide SUV tyre fitting in Gloucestershire?",
    answer:
      "Yes. SUV and 4x4 tyre fitting is available for suitable tyre sizes and specifications, subject to current availability.",
  },
  {
    question: "Can I book mobile tyre replacement even if it is not an emergency?",
    answer:
      "Yes. Mobile tyre replacement in Gloucestershire can be arranged for worn or damaged tyres as well as emergency callouts.",
  },
  {
    question: "Which Gloucestershire towns do you cover?",
    answer:
      "The current service area includes Gloucester, Cheltenham, Stroud, Cirencester, Tewkesbury and a number of other locations across the county. If you are in a smaller town or village, provide your postcode so coverage can be confirmed.",
  },
  {
    question: "What should I tell you if I am stranded on a rural road?",
    answer:
      "Give us your road name, postcode or shared map location, along with your vehicle details and tyre size. If possible, include a nearby junction or landmark to help identify your position.",
  },
  {
    question: "Is mobile tyre fitting available at weekends?",
    answer:
      "Yes. Our mobile tyre service in Gloucestershire operates 24/7, including weekends, subject to technician and tyre availability.",
  },
];

const areasServed = [
  "Gloucester",
  "Cheltenham",
  "Stroud",
  "Cirencester",
  "Tewkesbury",
  "Dursley",
  "Stonehouse",
  "Lydney",
  "Coleford",
  "Cinderford",
  "Tetbury",
  "Nailsworth",
  "Minchinhampton",
  "Winchcombe",
  "Wotton-under-Edge",
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

export default function GloucestershirePage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative bg-zinc-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/mobile-tyre-fitting-gloucestershire-hero-v2.webp"
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
                Gloucestershire
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting Across{" "}
                <span className="text-orange-400">Gloucestershire</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A tyre problem can happen anywhere in Gloucestershire — on a busy route through
                Gloucester, during a journey near Cheltenham, outside your home in Stroud or while
                travelling through one of the county&apos;s more rural areas. Our mobile unit comes
                straight to you — usually within 45–60 minutes, 24/7 for cars, vans and SUVs.
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

        {/* Mobile Tyre Help Across Towns, Villages and Rural Roads */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Mobile Tyre Help Across Towns, Villages and Rural Roads
                </h2>
                <p className="mb-8 text-zinc-600">
                  Gloucestershire is a large and varied county, so tyre problems do not always happen
                  close to a traditional tyre centre. Our mobile tyre fitters can attend suitable
                  residential addresses, business locations and roadside positions across the areas
                  we cover — whether your vehicle is parked in a town, on a driveway in a village or
                  stopped during a longer journey.
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
                        If you notice a flat, damaged or worn tyre while your vehicle is parked at
                        home, there is often no reason to move it first. Where there is a safe
                        working area, we can carry out tyre replacement on a driveway or suitable
                        residential parking space. Our{" "}
                        <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                          home tyre replacement service
                        </Link>{" "}
                        is also useful when tyres are approaching replacement time but have not yet
                        failed.
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
                        A tyre problem during the working day can be disruptive, particularly if the
                        vehicle is needed later for commuting, appointments or deliveries. Our mobile
                        tyre service can attend suitable workplaces throughout the areas we cover in
                        Gloucestershire and replace the tyre while the vehicle remains parked —
                        useful for drivers who would otherwise need to arrange time away from work to
                        visit a tyre centre.
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
                        A puncture or blowout while travelling can leave your vehicle unsafe to
                        continue driving. Our roadside tyre assistance in Gloucestershire can attend
                        suitable locations where there is enough safe and permitted access for the
                        technician to carry out the work. If you are stopped on a motorway,
                        high-speed road or hazardous section of carriageway, follow the appropriate
                        roadside safety guidance before arranging assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/punctured-tyre-gloucestershire.webp"
                    alt="Close-up of a punctured tyre inspected by Rapid Mobile Tyres in Gloucestershire"
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

        {/* Emergency */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Emergency Mobile Tyre Fitting in Gloucestershire
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Gloucestershire drivers travel at all hours, so tyre failures are not limited to
                normal garage opening times. Rapid Mobile Tyres provides emergency tyre fitting in
                Gloucestershire 24 hours a day for punctures, blowouts, sudden pressure loss and
                other tyre damage that prevents safe onward travel.
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
                  garage opening times anywhere across Gloucestershire.
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
                  Our usual arrival time is around 45–60 minutes, depending on your exact location,
                  traffic and technician availability. Because Gloucestershire covers a large area,
                  an accurate postcode or shared location is especially important.
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
                The correct tyre depends on the vehicle, wheel size, load requirements and
                manufacturer specification. Giving us your tyre size and vehicle details before the
                technician travels helps us check a suitable replacement.
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

        {/* How it works */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                What Happens When You Book a Gloucestershire Tyre Callout?
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Because the county covers cities, towns and rural areas, getting the location
                details right is an important part of arranging the service.
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
              src="/completed-tyre-service-gloucestershire.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-3xl font-extrabold">
                Tyre Assistance Around Gloucestershire&apos;s Main Road Network
              </h2>
              <p className="mb-4 text-zinc-300">
                Gloucestershire has a broad road network linking its major towns with the M5 and
                neighbouring counties. Important routes include the M5, A40, A38, A417, A419 and
                A48. The A40 provides an important east–west connection through Gloucester and
                towards Cheltenham, while the A419 links Stroud and Stonehouse with M5 Junction 13.
              </p>
              <p className="mb-4 text-zinc-300">
                The A417/A419 route also forms a strategic connection between Gloucestershire and
                the M4 corridor towards Swindon. A tyre failure on one of these routes can
                interrupt a commute, business journey or longer-distance trip.
              </p>
              <p className="text-zinc-300">
                Our mobile service can assist at suitable locations around the road network we
                cover, provided there is safe and permitted access to the vehicle. If you are
                stopped near the motorway or a busy route, provide your direction of travel and the
                nearest junction when requesting assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Replacement tyres */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Replacement Tyres for Commuting, Motorway and Rural Driving
                </h2>
                <p className="mb-4 text-zinc-600">
                  Around Gloucester and Cheltenham, drivers may be dealing with busy commuter routes
                  and urban journeys. Around Stroud and Stonehouse, the A419 provides an important
                  connection towards the M5. Further across the county, routes serve smaller towns,
                  villages and more rural locations. That variety makes accurate location information
                  particularly important — when you call, tell us exactly where the vehicle is rather
                  than simply saying &ldquo;Gloucestershire&rdquo;.
                </p>
                <p className="mb-6 text-zinc-600">
                  Our mobile tyre replacement in Gloucestershire is based on the specification
                  required for your vehicle, including tyre size, load index and speed rating.
                  Different options may be available depending on your requirements and current
                  stock, so providing the full sidewall information helps us check suitable choices
                  before travelling.
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

        {/* Why mobile */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Why Mobile Tyre Fitting Can Be Useful Across Gloucestershire
              </h2>
              <p className="max-w-2xl text-zinc-600">
                When a county covers major towns, motorway connections and rural communities, the
                nearest suitable tyre centre may not always be convenient. Mobile fitting means the
                tyre service travels to the vehicle instead.
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
                  body: "Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Gloucestershire, allowing drivers to arrange assistance at suitable homes, workplaces and roadside locations.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "No Unnecessary Driving",
                  body: "Mobile fitting removes the need to drive on a flat or damaged tyre to reach a depot — the technician and tyre come to you, wherever you are in the county.",
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
                  body: "The service can be used for urgent breakdown situations as well as planned tyre replacement when tyres are worn but the vehicle is safely parked.",
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
                Gloucestershire Areas We Can Assist
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Our Gloucestershire coverage includes major locations and surrounding areas across
                the county. Because Gloucestershire is geographically large, coverage and arrival
                times can vary by location. If you are in a smaller village or outside one of the
                main towns, call with your postcode so we can confirm whether a technician can
                attend your exact location.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {areasServed.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700"
                >
                  {area}
                </span>
              ))}
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
                A tyre failure is not the only problem that can leave a vehicle stranded. Rapid
                Mobile Tyres also provides{" "}
                <Link href="/jumpstarts" className="text-orange-500 hover:underline">
                  jump start assistance
                </Link>{" "}
                for flat batteries and{" "}
                <Link href="/fuel-delivery" className="text-orange-500 hover:underline">
                  emergency fuel delivery
                </Link>{" "}
                when a driver runs out of petrol or diesel.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and sidewall damage across Gloucestershire, day or night.",
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
                  body: "Arrange planned or emergency tyre replacement at your home address, on your driveway or at a safe residential location anywhere in Gloucestershire.",
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
                  body: "Replacement van tyre fitting at your location in Gloucestershire. Van tyres can require specific load ratings — give us the full specification when calling.",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations across Gloucestershire.",
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
                  body: "Run out of fuel in Gloucestershire? Our emergency fuel delivery service can bring the right fuel to your location.",
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
              src="/mobile-wheel-balancing-gloucestershire.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Need Mobile Tyre Fitting in Gloucestershire?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              Whether you are dealing with a flat tyre at home, a blowout during a longer journey or
              a worn tyre that needs replacing, you do not necessarily need to take the vehicle to a
              tyre centre. Contact us with your postcode or exact location, vehicle details and tyre
              size so we can check availability and arrange the appropriate mobile callout.
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
