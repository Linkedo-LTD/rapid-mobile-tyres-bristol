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
  title: "Mobile Tyre Fitting Bishopsworth | 24/7 Tyre Service",
  description:
    "Mobile tyre fitting in Bishopsworth and South Bristol. 24/7 tyre replacement brought directly to your home, workplace or roadside location.",
  alternates: {
    canonical: "https://rapid-tyres.com/mobile-tyre-fitting-bishopsworth",
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
    title: "Mobile Car Tyre Fitting in Bishopsworth",
    href: "/mobile-car-tyre-fitting-bristol",
    description:
      "Our mobile car tyre fitting in Bishopsworth covers many everyday hatchbacks, saloons, estates and family vehicles. Whether the tyre has failed unexpectedly or simply needs replacing because of wear, fitting can be arranged at a suitable accessible location.",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
  },
  {
    title: "Mobile Van Tyre Fitting",
    href: "/mobile-van-tyre-fitting-bristol",
    description:
      "For tradespeople and working drivers, an unusable van tyre can affect the entire day's schedule. Our mobile van tyre fitting in Bishopsworth brings replacement tyres directly to suitable light commercial vehicles. Van tyres may require particular load ratings, so providing the complete tyre specification is especially useful.",
    image: "/van-tyre-fitting-road-service-bristol.webp",
  },
  {
    title: "SUV Tyre Fitting",
    href: "/suv-tyre-fitting-bristol",
    description:
      "SUVs and 4x4s may use larger tyre sizes or different load specifications from ordinary passenger cars. We provide SUV tyre fitting in Bishopsworth for suitable vehicles and tyre sizes, subject to current availability.",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
  },
];

const steps = [
  {
    title: "Tell Us What the Tyre Is Doing",
    description:
      "Let us know whether the tyre is completely flat, losing pressure, punctured, blown out, visibly damaged or simply worn. This helps us understand whether you are dealing with an emergency or planned replacement.",
  },
  {
    title: "Check the Sidewall",
    description:
      "The complete tyre size is printed on the sidewall. Sending the full marking helps us identify suitable replacement options before travelling.",
  },
  {
    title: "Send the Exact Location",
    description:
      "If you are at home or work, provide the postcode. If you are stopped during a journey, a road name, nearby junction or shared map location can be more useful.",
  },
  {
    title: "Tell Us About Parking or Access",
    description:
      "Residential areas can include narrow streets, shared parking courts and vehicles parked close together. Let us know if access around the vehicle is restricted so we can establish whether there is enough space to work safely.",
  },
];

const faqs = [
  {
    question: "Do you provide 24 hour mobile tyre fitting in Bishopsworth?",
    answer:
      "Yes. Our 24 hour mobile tyre fitting in Bishopsworth is available day and night, subject to technician availability and the required tyre being available.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach Bishopsworth?",
    answer:
      "Our usual arrival time is around 45–60 minutes. Actual arrival time depends on Bristol traffic, technician availability, your exact location and current tyre stock.",
  },
  {
    question: "Do you provide emergency tyre fitting in Bishopsworth?",
    answer:
      "Yes. Emergency tyre fitting in Bishopsworth is available for punctures, blowouts, complete flats and other tyre damage that prevents safe onward travel.",
  },
  {
    question: "Can you replace my tyre at home in Bishopsworth?",
    answer:
      "Yes. Tyre replacement in Bishopsworth can usually be completed at a suitable residential location where there is enough safe working space around the vehicle.",
  },
  {
    question: "Do you provide mobile car tyre fitting in Bishopsworth?",
    answer:
      "Yes. Our mobile car tyre fitting in Bishopsworth covers many common cars and tyre sizes, subject to current availability.",
  },
  {
    question: "Can you replace van tyres in Bishopsworth?",
    answer:
      "Yes. We provide mobile van tyre fitting in Bishopsworth for suitable light commercial vehicles. Provide the complete tyre size and load rating whenever possible.",
  },
  {
    question: "Do you provide SUV tyre fitting in Bishopsworth?",
    answer:
      "Yes. SUV tyre fitting in Bishopsworth is available for suitable vehicles and tyre specifications, subject to current tyre availability.",
  },
  {
    question: "Can you help on Kings Head Lane?",
    answer:
      "We can attend suitable accessible locations within our coverage area. Kings Head Lane is a recognised Bishopsworth road, and Bristol City Council identifies it around Kings Head Park. Provide the full postcode or exact location when calling.",
  },
  {
    question: "Can you help around Bedminster Down?",
    answer:
      "Bedminster Down is currently listed within the surrounding coverage of the Bishopsworth page and is officially part of the wider Bishopsworth ward. Call with your exact postcode so availability can be confirmed.",
  },
  {
    question: "Do you cover Highridge?",
    answer:
      "Highridge is also listed within the current Bishopsworth coverage and forms part of the Bishopsworth ward.",
  },
  {
    question: "Can you help near the A38 or Hartcliffe Way?",
    answer:
      "Our roadside tyre assistance in Bishopsworth can attend suitable accessible locations around the wider South Bristol road network. If you are stopped on a busy or faster road, provide your exact location and prioritise reaching a safe position before arranging fitting.",
  },
  {
    question: "Can I arrange mobile tyre replacement without having a puncture?",
    answer:
      "Yes. Mobile tyre replacement in Bishopsworth can be arranged for worn or damaged tyres before they become an emergency. You do not need to wait for the tyre to become completely flat.",
  },
  {
    question: "Can you come to my workplace?",
    answer:
      "Yes, where there is suitable access and enough safe working space around the vehicle. Provide the business address, postcode and any useful parking instructions when calling.",
  },
  {
    question: "Is your mobile tyre service available at weekends?",
    answer:
      "Yes. Our mobile tyre service in Bishopsworth operates 24/7, including weekends, subject to technician and tyre availability.",
  },
  {
    question: "What information should I give you when I call?",
    answer:
      "Provide your vehicle details, complete tyre size and exact location. If the vehicle is stopped during a journey rather than at an address, also provide the road name, direction of travel, nearest junction or shared map position.",
  },
];

const areasServed = [
  { name: "Bedminster Down", href: null },
  { name: "Highridge", href: null },
  { name: "Withywood", href: null },
  { name: "Hartcliffe", href: null },
  { name: "Whitchurch", href: null },
  { name: "Dundry", href: null },
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
                Bishopsworth, South Bristol
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Mobile Tyre Fitting in{" "}
                <span className="text-orange-400">Bishopsworth</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-300 sm:text-xl">
                A tyre problem can quickly disrupt your day when the vehicle is sitting outside
                your home, parked before work or unable to continue somewhere around South
                Bristol. Rapid Mobile Tyres provides mobile tyre fitting in Bishopsworth, bringing
                replacement tyres directly to suitable homes, workplaces and roadside locations.
                Instead of trying to reach a tyre centre on a damaged tyre, you can arrange for the
                fitting service to come to the vehicle. We can assist with unexpected punctures and
                blowouts as well as tyres that need replacing because of wear or visible damage.
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

        {/* Tyre Replacement Where Your Vehicle Is Already Parked */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Tyre Replacement Where Your Vehicle Is Already Parked
                </h2>
                <p className="mb-8 text-zinc-600">
                  Bishopsworth is primarily a residential part of South Bristol, so many tyre
                  problems are first discovered on driveways, residential streets and local
                  parking areas. Mobile fitting is designed around exactly that situation. Our
                  mobile tyre fitter in Bishopsworth can attend the vehicle where there is enough
                  safe access and working space.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">Flat Tyre on the Driveway</h3>
                      <p className="text-zinc-600">
                        You may only notice a tyre has lost pressure when you are ready to leave
                        home. If the vehicle is parked somewhere suitable, we can carry out{" "}
                        <Link
                          href="/tyre-replacement-at-home-bristol"
                          className="text-orange-500 hover:underline"
                        >
                          tyre replacement in Bishopsworth
                        </Link>{" "}
                        without asking you to drive it anywhere first. This avoids putting
                        additional stress on an already damaged tyre or wheel.
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
                        Tyre Problems During the Working Day
                      </h3>
                      <p className="text-zinc-600">
                        A tyre can also become a problem while the vehicle is parked at work.
                        Where access permits, mobile fitting can be arranged at a workplace or
                        suitable private parking area so the replacement is completed without
                        another journey to a garage. Provide the full address and any useful
                        parking details when booking.
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
                        Help When You Cannot Continue Safely
                      </h3>
                      <p className="text-zinc-600">
                        If a tyre fails during a journey, continuing to drive may turn a tyre
                        problem into wheel damage or create an unnecessary safety risk. Our
                        roadside tyre assistance in Bishopsworth can attend suitable accessible
                        locations. If the vehicle is stopped somewhere narrow, busy or poorly
                        visible, move to the safest available position where possible before
                        arranging the callout.
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
                Emergency Mobile Tyre Fitting in Bishopsworth
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                Not every puncture happens conveniently during normal garage opening hours. Rapid
                Mobile Tyres provides emergency tyre fitting in Bishopsworth 24 hours a day for
                punctures, blowouts, complete flats and other tyre damage that prevents safe
                onward travel. Giving us the full tyre size when you call helps us check the
                correct replacement before travelling.
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
                  Our usual arrival time is around 45–60 minutes, depending on technician
                  availability, Bristol traffic, your exact position and whether the required tyre
                  is currently available.
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
                The Right Tyre for the Vehicle You Drive
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A tyre should never be selected only because it fits the wheel diameter. Width,
                profile, load rating, speed rating and the requirements of the vehicle all matter.
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

        {/* Before We Set Off */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Before We Set Off: Four Things We Need From You
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A few accurate details can make arranging your callout much easier.
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

        {/* Roads section — residential roads and Bedminster Down / Highridge */}
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
                  Mobile Tyre Help Around Bishopsworth&apos;s Residential Roads
                </h2>
                <p className="mb-4 text-zinc-300">
                  Bishopsworth differs from areas built around motorway junctions or large
                  industrial estates. Most local callouts are likely to start on ordinary
                  residential streets and neighbourhood roads.
                </p>
                <p className="text-zinc-300">
                  Local references include Kings Head Lane, Vicarage Road, Highridge Road and
                  Bedminster Down Road, all within the Bishopsworth/Highridge part of South
                  Bristol. Bristol City Council records Kings Head Park as bordered by Kings Head
                  Lane and Vicarage Road and identifies Highridge Common within Bishopsworth. If
                  your vehicle is on one of the smaller residential roads rather than a major
                  route, giving the full postcode can help identify your position quickly.
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-extrabold">
                  Tyre Assistance Around Bedminster Down and Highridge
                </h2>
                <p className="mb-4 text-zinc-300">
                  Bishopsworth is closely connected with Bedminster Down and Highridge. Bristol
                  City Council specifically identifies both neighbourhoods as part of the
                  Bishopsworth ward, along with part of Withywood. That makes this page naturally
                  relevant to drivers making short journeys between these neighbouring parts of
                  South Bristol.
                </p>
                <p className="text-zinc-300">
                  If your tyre becomes unusable before reaching a larger road, mobile fitting can
                  save you from attempting to travel across the area on a damaged tyre. For
                  locations outside Bishopsworth itself, provide your postcode so current coverage
                  can be confirmed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A38/Hartcliffe Way and A4174 */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                  Mobile Tyre Assistance Towards the A38 and Hartcliffe Way
                </h2>
                <p className="mb-4 text-zinc-600">
                  Drivers travelling south or west from Bishopsworth may connect with the wider
                  A38/Hartcliffe Way corridor. Bristol City Council&apos;s infrastructure planning
                  identifies the A38/Hartcliffe Way as part of the key South West Bristol road
                  network. For local drivers, routes towards the A38 may form part of journeys
                  towards central Bristol, North Somerset or other parts of the region.
                </p>
                <p className="mb-6 text-zinc-600">
                  If you notice a damaged tyre before joining a faster or busier route, dealing
                  with it first is preferable to continuing on a tyre that may no longer be safe.
                  Our mobile service can attend suitable accessible locations around the local
                  road network, subject to safe working conditions.
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
                  Tyre Help Around South Bristol&apos;s A4174 Connections
                </h3>
                <p className="mb-4 text-zinc-600">
                  The wider South Bristol road network also includes the A4174, which Bristol City
                  Council identifies alongside the A38/Hartcliffe Way in its South West Bristol
                  transport planning. These routes are important for journeys between residential
                  parts of South Bristol and neighbouring areas.
                </p>
                <p className="text-zinc-600">
                  A tyre failure before or during one of these journeys can leave the driver
                  needing help away from a convenient tyre centre. If you are stopped near a busy
                  junction or main road, give us your exact position and direction of travel when
                  calling. Roadside fitting is always subject to safe and permitted access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TyreBrands />

        {/* Tyres for Short Bristol Journeys and Daily Commuting */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Tyres for Short Bristol Journeys and Daily Commuting
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Not every vehicle in Bishopsworth spends its life on motorways. Many tyres are used
                mainly for school runs, commuting, shopping and regular trips across South Bristol.
                Frequent local journeys still require the correct tyre specification and adequate
                tread condition.
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
                  title: "Based on Your Vehicle",
                  body: "Our mobile tyre replacement in Bishopsworth is based on your vehicle's actual requirements rather than making assumptions about how it is driven.",
                },
                {
                  icon: (
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  ),
                  title: "Options Checked in Advance",
                  body: "Depending on your tyre size and current availability, different replacement options may be available. Give us the complete tyre details so suitable options can be checked before the technician travels.",
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
                  body: "The service can be used for unexpected tyre failures as well as planned replacement once worn tread or damage has already been noticed.",
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

        {/* Why Mobile Tyre Fitting Works Well in a Residential Area */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Why Mobile Tyre Fitting Works Well in a Residential Area
              </h2>
              <p className="mb-4 text-zinc-600">
                A flat tyre outside your home creates a simple problem: the vehicle needs a tyre,
                but the tyre centre is somewhere else. Mobile fitting removes that extra journey.
              </p>
              <p className="text-zinc-600">
                Rapid Mobile Tyres provides 24 hour mobile tyre fitting in Bishopsworth, allowing
                tyre replacement to be arranged at suitable homes, workplaces and roadside
                locations. It can be used for emergency failures, but it is also useful when you
                have already spotted worn tread or tyre damage and want a replacement without
                organising a garage visit.
              </p>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="bg-zinc-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                Bishopsworth and the Surrounding South Bristol Area
              </h2>
              <p className="max-w-2xl text-zinc-600">
                Our coverage from Bishopsworth includes Bedminster Down, Highridge, Withywood,
                Hartcliffe, Whitchurch and Dundry. Bristol City Council separately confirms the
                strong neighbourhood relationship between Bishopsworth, Bedminster Down, Highridge
                and Withywood. This page is kept focused on Bishopsworth rather than trying to
                optimise equally for every neighbouring area. If your vehicle is outside
                Bishopsworth itself, call with your exact postcode so current coverage and
                technician availability can be confirmed.
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

        {/* More Roadside Help */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-zinc-900">
                More Roadside Help When the Tyres Aren&apos;t the Problem
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-600">
                A vehicle does not need a puncture to become stranded. Rapid Mobile Tyres also
                provides jump start assistance for flat batteries and fuel delivery when a vehicle
                runs out of fuel, alongside its mobile tyre fitting services — so drivers can
                choose assistance based on what has actually stopped the vehicle.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/emergency-mobile-tyre-fitting-bristol",
                  title: "Emergency Tyre Fitting",
                  body: "24/7 emergency mobile tyre fitting for unexpected punctures, blowouts and sidewall damage across South Bristol.",
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
                  body: "If a flat battery rather than a tyre is the problem, our mobile jump start service can attend suitable locations in and around Bishopsworth.",
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
                  body: "Run out of fuel near Bishopsworth? Our emergency fuel delivery service can bring the right fuel to your location.",
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

        <Faq items={faqs} title="Mobile Tyre Fitting Bishopsworth FAQs" />

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
              Need Mobile Tyre Fitting in Bishopsworth?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
              Whether your tyre is flat outside your home, becomes damaged during a journey around
              South Bristol or leaves you unable to continue towards one of the area&apos;s main
              roads, you do not necessarily need to take the vehicle to a tyre centre. Rapid Mobile
              Tyres can bring mobile tyre fitting in Bishopsworth directly to your home, workplace
              or suitable roadside location. Contact us with your vehicle details, tyre size and
              exact position so availability can be checked and the appropriate mobile tyre
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
