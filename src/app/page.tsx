import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import MapAndLocations from "@/components/MapAndLocations";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import TyreBrands from "@/components/TyreBrands";
import TyreBrandStrip from "@/components/TyreBrandStrip";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting Bristol | 24/7 Emergency Replacement",
  description:
    "24/7 mobile tyre fitting in Bristol for flat or damaged tyres. Get fast tyre replacement at your location.",
};

const homeFaqs = [
  {
    question: "Do you provide 24/7 mobile tyre fitting in Bristol?",
    answer:
      "Yes. Rapid Mobile Tyres provides 24/7 mobile tyre fitting across Bristol for drivers who need help at home, work or a suitable roadside location. We can assist with flat tyres, blowouts, damaged tyres and urgent tyre replacement, subject to technician and tyre availability.",
  },
  {
    question: "How quickly can a mobile tyre fitter reach me in Bristol?",
    answer:
      "Our usual roadside arrival time is around 45–60 minutes. Actual arrival time can vary depending on traffic, your exact Bristol location, technician availability and whether the required tyre size is currently available.",
  },
  {
    question: "Can you replace a tyre at my home in Bristol?",
    answer:
      "Yes. We provide tyre fitting at home across Bristol where there is suitable access and enough safe working space around the vehicle. This is useful if you discover a flat or damaged tyre on your driveway and do not want to drive the vehicle to a garage.",
  },
  {
    question: "Do you provide emergency mobile tyre fitting in Bristol?",
    answer:
      "Yes. Our emergency mobile tyre fitting service is available for punctures, blowouts, completely flat tyres and other tyre problems that make the vehicle unsafe to continue driving. We can attend suitable roadside, residential and workplace locations across Bristol.",
  },
  {
    question: "Do you offer same-day mobile tyre fitting in Bristol?",
    answer:
      "Same-day mobile tyre fitting may be available depending on your tyre size, current stock and technician availability. Contact us with your vehicle details, tyre size and Bristol location so we can check the earliest available fitting time.",
  },
  {
    question: "Can you fit tyres for cars, vans and SUVs in Bristol?",
    answer:
      "Yes. We provide mobile tyre fitting for many cars, light commercial vans, SUVs and 4x4s across Bristol. Because different vehicles can require different tyre sizes and load ratings, send us the full tyre specification when you contact us.",
  },
  {
    question: "Can you replace a tyre at the roadside in Bristol?",
    answer:
      "Yes, where there is a safe and permitted place for the technician to work. If you are stopped on a busy road or near a motorway, prioritise your safety and follow the appropriate roadside guidance before arranging tyre assistance.",
  },
  {
    question: "What information do you need when I call for mobile tyre fitting?",
    answer:
      "Please provide your vehicle make and model, full tyre size, the tyre problem and your exact location. A postcode, road name or shared map pin can help us find you quickly, especially if you are stranded away from a numbered address.",
  },
  {
    question: "How much does mobile tyre fitting cost in Bristol?",
    answer:
      "The cost depends on factors such as tyre size, tyre brand or specification, your location and the type of callout required. Contact Rapid Mobile Tyres with your vehicle and tyre details and we can confirm the available options and price before arranging the service.",
  },
  {
    question: "Which areas of Bristol do you cover?",
    answer:
      "We provide mobile tyre assistance across Bristol and surrounding areas, including many residential, commercial and roadside locations. If you are unsure whether your exact location is covered, send us your postcode and we can confirm current availability.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Header />

      <main className="flex-1">
        <Hero />
        <TyreBrandStrip />
        <Services />
        <TyreBrands />
        <WhyChooseUs />
        <Testimonials visibleCount={8} columns={4} className="bg-zinc-50 py-14 sm:py-20" />
        <MapAndLocations />
        <Faq items={homeFaqs} className="bg-zinc-50 py-14 sm:py-20" />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
