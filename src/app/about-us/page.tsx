import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import AboutWhyChooseUs from "@/components/AboutWhyChooseUs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Rapid Mobile Tyres | Mobile Tyre Fitters Bristol",
  description:
    "Learn about Rapid Mobile Tyres, providing 24/7 mobile tyre fitting and roadside tyre services across Bristol.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <WhoWeAre />

        {/* Photo showcase */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
              On the job
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Thorough Checks, Every Time
            </h2>
            <p className="mt-4 text-zinc-600">
              From tread depth to final fitting, our technicians check the details that keep
              you safe on the road.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-200">
              <Image
                src="/mobile-tyre-tread-depth-inspection.webp"
                alt="Rapid Mobile Tyres technician checking tyre tread depth"
                width={1448}
                height={1086}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <AboutWhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
