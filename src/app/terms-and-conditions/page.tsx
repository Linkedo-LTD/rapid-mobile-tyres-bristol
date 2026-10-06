import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rapid Mobile Tyres",
  description:
    "Read the terms and conditions for using Rapid Mobile Tyres and requesting our mobile tyre and roadside services.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rapid-tyres.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Terms & Conditions"
          breadcrumb="Home / Terms & Conditions"
        />
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <p className="text-zinc-600 leading-7">
              These Terms and Conditions govern the use of the Rapid Mobile Tyres Bristol
              website and the provision of mobile tyre fitting and roadside assistance
              services by Rapid Mobile Tyres Ltd. By contacting us, making a booking, or
              using our services, you agree to these Terms. Please read them carefully.
            </p>

            <p className="mt-4 text-sm text-zinc-500">Last updated: September 2026</p>

            <div className="mt-12 space-y-10">

              {/* 1. About Us */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  1. About Rapid Mobile Tyres
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Rapid Mobile Tyres Ltd (trading as{" "}
                    <strong>Rapid Mobile Tyres Bristol</strong>) is a mobile tyre fitting
                    and roadside assistance company operating across Bristol and the wider
                    South West of England.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Address: </span>
                    {siteConfig.address}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800">Phone: </span>
                    <a href={siteConfig.phoneHref} className="text-orange-600 hover:underline">
                      {siteConfig.phone}
                    </a>
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
                </div>
              </div>

              {/* 2. Scope */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  2. Scope of These Terms
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    These Terms apply to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>All mobile tyre fitting services (cars, SUVs, and vans)</li>
                    <li>Emergency tyre fitting and roadside tyre replacement</li>
                    <li>Jump start services</li>
                    <li>Emergency fuel delivery services</li>
                    <li>Use of our website at rapid-tyres.com</li>
                  </ul>
                  <p>
                    Nothing in these Terms affects any rights you have under applicable UK
                    consumer law, including the Consumer Rights Act 2015.
                  </p>
                </div>
              </div>

              {/* 3. Booking and Service Requests */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  3. Booking and Service Requests
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    You can request our services by telephone, email, WhatsApp, or our
                    website contact form. A booking or service request is confirmed when we
                    acknowledge it and agree an estimated arrival time with you.
                  </p>
                  <p>
                    We reserve the right to decline a service request where we are unable
                    to attend safely or where a booking falls outside our current service area
                    or operational capacity.
                  </p>
                </div>
              </div>

              {/* 4. Customer Responsibilities */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  4. Customer Responsibilities
                </h2>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  4.1 Accurate Information
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    When making a service request, you are responsible for providing accurate
                    information including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Vehicle make, model, and tyre size</li>
                    <li>Your exact location (address, postcode, or GPS coordinates)</li>
                    <li>A working contact telephone number</li>
                    <li>The nature of the problem (e.g. flat tyre, blowout, dead battery)</li>
                  </ul>
                  <p>
                    Providing incorrect tyre size information may mean the technician arrives
                    without the correct tyre. In such cases we will endeavour to source the
                    correct tyre as quickly as possible, but we cannot guarantee immediate
                    availability and additional time or cost may apply.
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  4.2 Safe Working Location
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    You must ensure the technician can access your vehicle safely. Where
                    possible, please:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Move the vehicle off the carriageway if it is safe to do so</li>
                    <li>Activate your hazard lights</li>
                    <li>Keep passengers away from the roadside</li>
                    <li>Ensure there is sufficient space for the technician to work</li>
                  </ul>
                  <p>
                    Our technicians may decline to work in a location they deem unsafe.
                    Where this occurs we will discuss alternative options with you.
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  4.3 Access to the Vehicle
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    You or an authorised person must be present at the service location when
                    the technician arrives, or must make suitable arrangements for access to
                    the vehicle. If the technician cannot access the vehicle on arrival, this
                    may be treated as a failed callout (see section 7).
                  </p>
                </div>
              </div>

              {/* 5. Arrival Times */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  5. Technician Arrival and Estimated Response Times
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We aim to reach most locations within Bristol and surrounding areas
                    within approximately 45–60 minutes of your call. This is an{" "}
                    <strong>estimate only</strong> and not a guarantee. Actual arrival
                    times may vary due to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Traffic and road conditions</li>
                    <li>Technician availability at the time of your call</li>
                    <li>Tyre or parts availability for your specific vehicle</li>
                    <li>Your distance from our operational base</li>
                    <li>Weather or other circumstances outside our control</li>
                  </ul>
                  <p>
                    We will keep you informed of any significant delay. We are available
                    24 hours a day, 7 days a week, including weekends and bank holidays.
                  </p>
                </div>
              </div>

              {/* 6. Tyre and Parts Availability */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  6. Tyre and Parts Availability
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We carry a wide range of tyre sizes and brands on our vehicles,
                    including premium brands (Michelin, Continental, Pirelli, Bridgestone,
                    Goodyear, Dunlop) and quality budget options (Nexen, Falken, Avon,
                    Kumho, Nankang). However, we cannot guarantee that every tyre size
                    will be in stock at all times.
                  </p>
                  <p>
                    We will confirm tyre availability when you call and advise on the most
                    suitable option for your vehicle and budget. Where your preferred brand
                    or specification is not available, we will discuss alternatives with you
                    before proceeding.
                  </p>
                </div>
              </div>

              {/* 7. Cancellations and Failed Callouts */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  7. Cancellations, Changes, and Failed Callouts
                </h2>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  7.1 Cancellations and Changes
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    If you need to cancel or reschedule a pre-arranged (non-emergency)
                    appointment, please notify us as early as possible and ideally at least
                    one day in advance. Please contact us by phone or email to cancel.
                  </p>
                  <p>
                    For emergency callouts, please call us immediately if your situation
                    resolves itself before the technician arrives. If a technician has
                    already been dispatched, a call-out charge may apply depending on the
                    nature and timing of the cancellation. We will discuss any charge with
                    you before it is applied.
                  </p>
                </div>

                <h3 className="mt-6 text-base font-semibold text-zinc-800">
                  7.2 Failed or Inaccessible Callouts
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Where a technician attends your location but is unable to carry out the
                    service because the vehicle is inaccessible, you are not present, or the
                    information provided was materially inaccurate, a callout charge may
                    apply. We will discuss any charge with you before it is applied.
                  </p>
                </div>
              </div>

              {/* 8. Pricing and Payment */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  8. Pricing and Payment
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Prices depend on the tyre size, vehicle type, service required, and your
                    location. We provide clear, competitive pricing with no hidden charges.
                    A quote will be given before work commences.
                  </p>
                  <p>
                    We accept major credit and debit cards and cash. Payment is taken at the
                    time of service completion.
                  </p>
                  <p>
                    Quoted prices are valid for the specific service discussed and may vary
                    if the scope of work changes on arrival (for example, if additional
                    damage is discovered that was not identified during the initial call).
                    Any variation will be discussed and agreed with you before additional
                    work is carried out.
                  </p>
                </div>
              </div>

              {/* 9. Supply and Fitting of Tyres */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  9. Supply and Fitting of Tyres
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We supply and fit tyres sourced by us. All tyres are fitted on-site at
                    your location. Our technicians use professional-grade equipment and
                    follow industry safety standards when removing and fitting tyres.
                  </p>
                  <p>
                    You should inspect the completed work before the technician leaves. If
                    you have any concerns about the quality of the fitting, please raise them
                    with the technician at the time or contact us promptly after the service.
                  </p>
                </div>
              </div>

              {/* 10. Roadside Safety */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  10. Roadside Safety
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Our technicians are trained to work safely at roadsides and use
                    appropriate warning signs, hazard lights, and safety equipment. You must
                    follow any reasonable safety instructions given by our technician during
                    a roadside callout.
                  </p>
                  <p>
                    We may decline to carry out or continue a service where, in the
                    technician&apos;s reasonable judgement, the conditions pose an
                    unacceptable risk to safety.
                  </p>
                </div>
              </div>

              {/* 11. Service Limitations */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  11. Service Limitations
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We provide mobile tyre fitting, jump start, and fuel delivery services.
                    We do not provide general mechanical repairs, full vehicle servicing,
                    or recovery/towing services as standard. If additional work beyond our
                    scope is required, we will advise you accordingly.
                  </p>
                  <p>
                    We reserve the right to decline a service where we determine it cannot
                    be carried out safely or to a proper standard with the equipment and
                    parts available.
                  </p>
                </div>
              </div>

              {/* 12. Liability */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  12. Liability
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We take care to carry out all services to a professional standard. If
                    our service causes damage to your vehicle as a direct result of our
                    negligence, please contact us promptly so we can investigate and, where
                    appropriate, resolve the matter.
                  </p>
                  <p>
                    We are not liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      Pre-existing damage to your vehicle that was present before we arrived
                    </li>
                    <li>
                      Damage arising from inaccurate information you provided (for example,
                      an incorrect tyre size)
                    </li>
                    <li>
                      Loss of use of your vehicle, loss of earnings, or other indirect or
                      consequential losses
                    </li>
                    <li>
                      Delays or non-attendance caused by circumstances outside our reasonable
                      control (see section 13)
                    </li>
                  </ul>
                  <p>
                    Nothing in these Terms limits or excludes our liability for death or
                    personal injury caused by our negligence, or for any other liability
                    that cannot be limited or excluded by law.
                  </p>
                  <p>
                    Your statutory rights as a consumer are not affected by these Terms.
                  </p>
                </div>
              </div>

              {/* 13. Events Outside Our Control */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  13. Events Outside Our Reasonable Control
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We will not be in breach of these Terms, nor liable for delay or failure
                    in performance, where this is caused by circumstances beyond our
                    reasonable control, including but not limited to severe weather,
                    accidents blocking roads, civil unrest, or failures of third-party
                    suppliers. We will notify you as soon as reasonably practicable and
                    endeavour to agree an alternative arrangement.
                  </p>
                </div>
              </div>

              {/* 14. Website Use */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  14. Website Use
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Our website is provided for information and service enquiry purposes.
                    You may use our website for lawful purposes only. You must not use it
                    in any way that causes disruption, or attempt to gain unauthorised
                    access to our systems.
                  </p>
                  <p>
                    We make reasonable efforts to ensure the website is accurate and
                    up to date, but we do not guarantee that it is free from errors.
                    We reserve the right to update or withdraw website content at any time.
                  </p>
                </div>
              </div>

              {/* 15. Intellectual Property */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  15. Intellectual Property
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    All content on this website — including text, images, logos, and page
                    design — is owned by or licensed to Rapid Mobile Tyres Ltd. You may
                    not reproduce, distribute, or use any content from this website for
                    commercial purposes without our prior written consent.
                  </p>
                </div>
              </div>

              {/* 16. Third-Party Links */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  16. Third-Party Links
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Our website may contain links to third-party websites (such as our
                    Facebook page or WhatsApp). These links are provided for your
                    convenience. We are not responsible for the content, privacy practices,
                    or availability of those external sites, and linking to them does not
                    imply our endorsement.
                  </p>
                </div>
              </div>

              {/* 17. Privacy and Cookies */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  17. Privacy and Cookies
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    Your use of our website and services is also subject to our{" "}
                    <Link href="/privacy-policy" className="text-orange-600 hover:underline">
                      Privacy Policy
                    </Link>
                    , which explains how we collect, use, and protect your personal
                    information in accordance with UK GDPR and the Data Protection Act 2018.
                  </p>
                </div>
              </div>

              {/* 18. Changes to Terms */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  18. Changes to These Terms
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    We may update these Terms from time to time. The current version will
                    always be available on this page with a &quot;Last updated&quot; date.
                    Continued use of our services after any changes constitutes your
                    acceptance of the revised Terms.
                  </p>
                </div>
              </div>

              {/* 19. Governing Law */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  19. Governing Law and Jurisdiction
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    These Terms are governed by the laws of England and Wales. Any disputes
                    arising under or in connection with these Terms shall be subject to the
                    exclusive jurisdiction of the courts of England and Wales.
                  </p>
                </div>
              </div>

              {/* 20. Contact */}
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-950">
                  20. Contact Us
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p>
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li>
                      <span className="font-semibold text-zinc-800">Phone: </span>
                      <a href={siteConfig.phoneHref} className="text-orange-600 hover:underline">
                        {siteConfig.phone}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Email: </span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-orange-600 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-zinc-800">Address: </span>
                      {siteConfig.address}
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <p className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              These Terms do not affect your statutory rights as a consumer under UK law.
              For more information about your consumer rights, visit{" "}
              <span className="font-medium text-zinc-800">citizensadvice.org.uk</span>.
            </p>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
