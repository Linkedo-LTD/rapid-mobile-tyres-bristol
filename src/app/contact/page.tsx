import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Rapid Mobile Tyres | 24/7 Tyre Help Bristol",
  description:
    "Contact Rapid Mobile Tyres for 24/7 mobile tyre fitting in Bristol. Check tyre availability and get assistance.",
  alternates: {
    canonical: "https://rapid-tyres.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Contact Us" breadcrumb="Home / Contact" />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
