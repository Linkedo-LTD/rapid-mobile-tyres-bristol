import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Rapid Mobile Tyres",
  description:
    "Read how Rapid Mobile Tyres collects, uses and protects personal information when you use our website and services.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rapid-tyres.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Privacy Policy" breadcrumb="Home / Privacy Policy" />
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <p className="text-zinc-600 leading-7">
              This Privacy Policy explains how Rapid Mobile Tyres Ltd (trading as{" "}
              <strong>Rapid Mobile Tyres Bristol</strong>) collects, uses, and protects
              personal information you provide to us, or that we collect when you use our
              website or services. We are committed to handling your data in accordance with
              the UK General Data Protection Regulation (UK GDPR) and the Data Protection
              Act 2018.
            </p>

            <p className="mt-4 text-sm text-zinc-500">Last updated: September 2026</p>

            <div className="mt-12 space-y-10">

              {/* 1. Who We Are */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  1. Who We Are
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    <span className="font-semibold text-zinc-800">Business name: </span>
                    Rapid Mobile Tyres Ltd (trading as Rapid Mobile Tyres Bristol)
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Address: </span>
                    {siteConfig.address}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Email: </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-orange-600 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Phone: </span>
                    <a href={siteConfig.phoneHref} className="text-orange-600 hover:underline">
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p>
                    We act as the data controller for personal information collected through
                    this website and in the course of providing our services.
                  </p>
                </div>
              </div>

              {/* 2. What Information We Collect */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  2. What Information We Collect
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    <span className="font-semibold text-zinc-800">Contact enquiries: </span>
                    Our website includes a contact form that collects your name, email address,
                    phone number, postcode, service type, and tyre size. When you submit this
                    form, your browser opens your email application and pre-populates a message
                    addressed to us. No data is transmitted to or stored by our website server
                    when you use this form — the information is handled entirely by your email
                    client and your email provider.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">
                      Direct communications:{" "}
                    </span>
                    If you contact us directly by phone, email, WhatsApp, or Facebook
                    Messenger, we may retain records of that communication in order to respond
                    to your enquiry and arrange your service.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Service information: </span>
                    When we carry out a tyre fitting or roadside assistance job, we may note
                    your name, contact details, vehicle details, and the location at which the
                    service was performed.
                  </p>
                </div>
              </div>

              {/* 3. How We Use Your Information */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  3. How We Use Your Information
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>We use personal information only for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Responding to your enquiries and booking requests</li>
                    <li>Providing and arranging mobile tyre fitting and roadside assistance services</li>
                    <li>Communicating with you about your service, including follow-up if required</li>
                    <li>Complying with legal and regulatory obligations</li>
                  </ul>
                  <p>
                    We do not use your personal information for automated decision-making or
                    profiling.
                  </p>
                </div>
              </div>

              {/* 4. Legal Basis for Processing */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  4. Legal Basis for Processing
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    <span className="font-semibold text-zinc-800">Contract performance: </span>
                    Processing your name, contact details, and vehicle information is necessary
                    to fulfil a contract for services (or to take steps at your request before
                    entering into one).
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Legitimate interests: </span>
                    Where we retain communication records to respond to enquiries or resolve
                    service issues, we do so on the basis of our legitimate interests in
                    operating our business, provided those interests are not overridden by your
                    rights.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Legal obligation: </span>
                    We may retain certain records to comply with applicable law.
                  </p>
                </div>
              </div>

              {/* 5. Cookies and Tracking */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  5. Cookies and Tracking
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Our website does not use analytics tracking scripts, advertising pixels, or
                    third-party marketing cookies. We do not embed Google Analytics, Facebook
                    Pixel, or similar tracking tools.
                  </p>
                  <p>
                    The website uses fonts served from our own server infrastructure (via
                    Next.js font optimisation), which means no font requests are made to Google
                    servers when you visit the site.
                  </p>
                  <p>
                    Our website may use essential technical cookies set by the hosting
                    infrastructure (Vercel) to support basic website operation and security.
                    These are not used to identify or track you across other websites.
                  </p>
                </div>
              </div>

              {/* 6. Third Parties */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  6. Third-Party Services
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    <span className="font-semibold text-zinc-800">Hosting (Vercel): </span>
                    Our website is hosted by Vercel, Inc. Vercel may process server access
                    logs (which can include your IP address and browser information) as part of
                    hosting and security operations. For details, see Vercel&apos;s own Privacy
                    Policy.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Email provider: </span>
                    When you contact us by email, your message is processed by your own email
                    provider and ours. We do not share your email address with third parties
                    for marketing purposes.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Facebook / WhatsApp: </span>
                    Our website contains links to our Facebook page and a WhatsApp contact
                    link. If you follow these links, your interaction with those platforms is
                    governed by Meta&apos;s Privacy Policy. No Meta tracking pixel or SDK is
                    embedded on our website.
                  </p>
                  <p>
                    We do not sell your personal information to third parties.
                  </p>
                </div>
              </div>

              {/* 7. Data Retention */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  7. Data Retention
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We retain personal information only for as long as is necessary for the
                    purposes set out in this policy, or as required by applicable law. If you
                    would like us to delete any personal information we hold about you, please
                    contact us using the details in section 1.
                  </p>
                </div>
              </div>

              {/* 8. Your Rights */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  8. Your Rights Under UK GDPR
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      <span className="font-semibold text-zinc-800">Access: </span>
                      request a copy of the personal data we hold about you
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Rectification: </span>
                      ask us to correct inaccurate or incomplete data
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Erasure: </span>
                      request that we delete your personal data in certain circumstances
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Restriction: </span>
                      ask us to restrict how we use your data
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Objection: </span>
                      object to us processing your data on the basis of legitimate interests
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Portability: </span>
                      receive your data in a structured, machine-readable format where applicable
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us at{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-orange-600 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                    . We will respond within one calendar month.
                  </p>
                  <p>
                    If you are unsatisfied with how we handle your request, you have the right
                    to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
                    at ico.org.uk.
                  </p>
                </div>
              </div>

              {/* 9. Security */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  9. Data Security
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We take reasonable steps to protect personal information from loss,
                    misuse, or unauthorised access. Our website is served over HTTPS. We do
                    not store payment card details.
                  </p>
                </div>
              </div>

              {/* 10. Changes */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  10. Changes to This Policy
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be
                    published on this page with a revised &quot;Last updated&quot; date. We
                    encourage you to review this page periodically.
                  </p>
                </div>
              </div>

            </div>

            <p className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              For any privacy-related questions or requests, please contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-orange-600 hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={siteConfig.phoneHref} className="text-orange-600 hover:underline">
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
