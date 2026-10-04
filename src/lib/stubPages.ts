const SMALL_WORDS = new Set(["a", "an", "the", "and", "or", "for", "to", "of", "in", "on", "at", "is"]);

function titleCase(slug: string) {
  return slug
    .split("-")
    .map((w, i) => (i !== 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

export type StubKind = "location" | "blog" | "category" | "service" | "legal" | "info";

export interface StubPage {
  path: string;
  title: string;
  kind: StubKind;
  image?: string;
}

const mainTowns = [
  "bridgewater",
  "bath",
  "chepstow",
  "gloucestershire",
  "magor",
  "newport",
  "weston-super-mare",
];

const suburbs = [
  "almondsbury",
  "alveston",
  "avonmouth",
  "awkley",
  "backwell",
  "belluton",
  "bishopsworth",
  "bishopton",
  "bitton",
  "bradley-stoke",
  "brentry",
  "brislington",
  "brockley",
  "butcombe",
  "caerwent",
  "caldicot",
  "chelvey",
  "chew-magna",
  "chew-stoke",
  "chewton-keynsham",
  "chittening",
];

export const locationPages: StubPage[] = [
  ...mainTowns.map((t) => ({
    path: `mobile-tyre-fitting-${t}`,
    title: `Mobile Tyre Fitting in ${titleCase(t)}`,
    kind: "location" as const,
  })),
  ...suburbs.map((t) => ({
    path: `mobile-tyre-fitting-${t}`,
    title: `Mobile Tyre Fitting in ${titleCase(t)}`,
    kind: "location" as const,
  })),
  {
    path: "abbots-leigh-mobile-tyre-fitting",
    title: "Mobile Tyre Fitting in Abbots Leigh",
    kind: "location",
  },
];

const blogSlugs = [
  "mobile-tyre-fitting-in-the-uk-trends-and-insights",
  "understanding-the-costs-of-mobile-tyre-fitting-services",
  "the-future-of-tyre-services-innovations-and-how-rapid-mobile-tyres-stays-ahead",
  "fleet-management-solutions-keeping-your-business-rolling-with-rapid-mobile-tyres",
  "what-to-do-when-you-get-a-flat-tyre-in-bristol-step-by-step-guide",
  "how-long-can-you-drive-on-a-spare-tyre-uk-safety-rules-explained",
  "what-to-do-if-your-car-wont-start-a-step-by-step-jump-start-guide-for-drivers-in-the-uk",
  "the-dangers-of-worn-tyres-dont-compromise-your-safety-call-rapid-mobile-tyres",
  "mobile-tyre-fitting-for-fleet-vehicles-efficiency-and-savings",
  "the-importance-of-regular-adas-calibration",
  "what-you-need-to-know-about-your-cars-alternator",
  "safety-first-the-importance-of-timely-tyre-replacements",
  "how-to-read-your-tyre-sidewall-markings",
  "what-are-silent-tyres",
  "mobile-tyre-repair-services-convenience-at-your-doorstep",
  "how-rapid-mobile-tyre-fitting-saves-you-time-and-hassle",
  "emergency-tyre-fitting-getting-back-on-the-road-quickly",
  "how-climate-change-is-changing-car-design",
  "the-benefits-of-24-hour-mobile-tyre-fitting-services",
  "emergency-tyres-24-7",
  "flat-tyre-puncture-repair",
  "how-to-choose-the-right-tyres-for-your-car-a-complete-guide-2",
  "urgently-need-a-new-tyre-call-rapid-mobile-tyres-24-hour-emergency-mobile-tyres",
  "how-much-does-mobile-tyre-fitting-cost-in-bristol-2026-honest-price-guide",
  "cheapest-tyres-in-bristol-2",
];

// Slugs that now have a dedicated page under src/app/ with a real,
// written article — excluded from allStubPages below so the catch-all
// route doesn't try to generate a duplicate static path for them.
const dedicatedBlogSlugs = new Set([
  "mobile-tyre-fitting-in-the-uk-trends-and-insights",
  "understanding-the-costs-of-mobile-tyre-fitting-services",
  "how-long-can-you-drive-on-a-spare-tyre-uk-safety-rules-explained",
  "the-future-of-tyre-services-innovations-and-how-rapid-mobile-tyres-stays-ahead",
  "fleet-management-solutions-keeping-your-business-rolling-with-rapid-mobile-tyres",
]);

const blogImages: Record<string, string> = {
  "mobile-tyre-fitting-in-the-uk-trends-and-insights":
    "/rapid-mobile-tyres-fleet-service-vans-bristol.webp",
  "understanding-the-costs-of-mobile-tyre-fitting-services":
    "/mobile-tyre-fitting-technician-bristol.webp",
  "how-long-can-you-drive-on-a-spare-tyre-uk-safety-rules-explained":
    "/emergency-flat-car-tyre-roadside.webp",
  "the-future-of-tyre-services-innovations-and-how-rapid-mobile-tyres-stays-ahead":
    "/mobile-tyre-fitting-van-interior.webp",
  "fleet-management-solutions-keeping-your-business-rolling-with-rapid-mobile-tyres":
    "/mobile-van-tyre-wheel-replacement-technician.webp",
};

export const blogPosts: StubPage[] = blogSlugs.map((s) => ({
  path: s,
  title: titleCase(s),
  kind: "blog",
  image: blogImages[s],
}));

export const categoryPages: StubPage[] = [
  { path: "category/tyre-solutions", title: "Tyre Solutions", kind: "category" },
  { path: "category/tyre-solutions/page/2", title: "Tyre Solutions — Page 2", kind: "category" },
  { path: "category/tyre-solutions/page/3", title: "Tyre Solutions — Page 3", kind: "category" },
];

// Note: "refund-policy" is intentionally excluded here — it now has a
// dedicated page under src/app/refund-policy/.
export const miscPages: StubPage[] = [
  { path: "locations/rapid-mobile-tyres", title: "Rapid Mobile Tyres Locations", kind: "info" },
];

// Note: locationPages is intentionally excluded here — every location now has
// a dedicated page under src/app/, so the catch-all no longer needs to (and
// must not, to avoid a duplicate-route build conflict) generate them.
// categoryPages and miscPages are also excluded — they are not needed.
// blog posts in dedicatedBlogSlugs are also excluded for the same reason.
export const allStubPages: StubPage[] = [
  ...blogPosts.filter((p) => !dedicatedBlogSlugs.has(p.path)),
];
