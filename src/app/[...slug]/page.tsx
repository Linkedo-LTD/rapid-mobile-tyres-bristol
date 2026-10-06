import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { allStubPages, type StubKind } from "@/lib/stubPages";
import { siteConfig } from "@/lib/data";

const bodyText: Record<StubKind, string> = {
  location:
    "Need mobile tyre fitting here? Rapid Mobile Tyres Bristol offers fast, reliable 24/7 callouts — home, work, or roadside.",
  blog: "Full article coming soon. In the meantime, call us for advice or browse our other blog posts.",
  category: "Full article archive coming soon.",
  service: "Full details coming soon — see our Services page or call us to book.",
  legal: "Full policy details coming soon. Contact us with any questions.",
  info: "See Areas We Cover for our full coverage area.",
};

function findPage(slug: string[]) {
  const path = slug.join("/");
  return allStubPages.find((p) => p.path === path);
}

export function generateStaticParams() {
  return allStubPages.map((p) => ({ slug: p.path.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const page = findPage(slug);
  return {
    title: page ? `${page.title} - ${siteConfig.name}` : siteConfig.name,
    alternates: {
      canonical: `https://rapid-tyres.com/${slug.join("/")}`,
    },
  };
}

export default async function StubPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const page = findPage((await params).slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title={page.title} breadcrumb={`Home / ${page.title}`} />
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
            <p className="text-zinc-600">{bodyText[page.kind]}</p>
            <a
              href={siteConfig.phoneHref}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
