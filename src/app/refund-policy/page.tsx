import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { refundPolicy } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund Policy - Rapid Mobile Tyres Bristol",
  description:
    "Read the Rapid Mobile Tyres refund policy and learn about the conditions that may apply to service refunds.",
  alternates: {
    canonical: "https://rapid-tyres.com/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Refund Policy" breadcrumb="Home / Refund Policy" />
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <p className="text-zinc-600 leading-7">{refundPolicy.intro}</p>

            <div className="mt-12 space-y-10">
              {refundPolicy.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-bold tracking-tight text-zinc-950">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.items.map((item, index) => (
                      <p key={item.title ?? index} className="text-sm leading-7 text-zinc-600">
                        {item.title && <span className="font-semibold text-zinc-800">{item.title}: </span>}
                        {item.text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              {refundPolicy.note}
            </p>

            <p className="mt-8 text-sm font-medium text-zinc-800">Thank you for choosing Rapid Mobile Tyres Ltd.</p>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
