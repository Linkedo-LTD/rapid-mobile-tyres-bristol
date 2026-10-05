import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { siteConfig } from "@/lib/data";

const GTM_ID = "GTM-MXDN8DVC";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rapid-tyres.com"),
  title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
  description:
    "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
  openGraph: {
    title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
    description:
      "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
    images: [{ url: "/rapid-mobile-tyres-open-graph.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
    description:
      "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
    images: ["/rapid-mobile-tyres-open-graph.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  url: "https://rapid-tyres.com",
  telephone: "+447494247246",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ryeleaze, Shirehampton",
    addressLocality: "Bristol",
    postalCode: "BS11 9FN",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4882,
    longitude: -2.6866,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    "Bristol",
    "Bath",
    "Bridgwater",
    "Newport",
    "Chepstow",
    "Weston-super-Mare",
    "Gloucester",
    "Magor",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Tyre & Roadside Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Tyre Fitting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Mobile Tyre Fitting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jump Start",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fuel Delivery",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Van Tyre Fitting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SUV Tyre Fitting",
        },
      },
    ],
  },
  sameAs: ["https://www.facebook.com/rapidmobiletyresltd"],
  image: "https://rapid-tyres.com/rapid-mobile-tyres-open-graph.webp",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: "https://rapid-tyres.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://rapid-tyres.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  );
}
