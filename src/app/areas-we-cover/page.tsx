import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AreasGrid from "@/components/AreasGrid";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Areas | Bristol & Nearby Locations",
  description:
    "Find mobile tyre fitting areas across Bristol and nearby locations. Check coverage and get tyre help near you.",
  alternates: {
    canonical: "https://rapid-tyres.com/areas-we-cover",
  },
};

export default function AreasWeCoverPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Areas We Cover" breadcrumb="Home / Areas We Cover" />
        <AreasGrid />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
