import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { blogPosts, categoryPages } from "@/lib/stubPages";

export const metadata: Metadata = {
  title: "Blog - Rapid Mobile Tyres Bristol",
  description: "Tyre safety tips, cost guides, and news from Rapid Mobile Tyres Bristol.",
  alternates: {
    canonical: "https://rapid-tyres.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          title="Blog"
          breadcrumb="Home / Blog"
          subtitle="Tyre safety tips, cost guides and news from Rapid Mobile Tyres Bristol."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.path}
                  href={`/${post.path}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-100 transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-orange-50 to-zinc-100">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-12 w-12 text-orange-300"
                          aria-hidden
                        >
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M12 3v2M12 19v2M21 12h-2M5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600 ring-1 ring-orange-200">
                      Tyre Solutions
                    </span>
                    <h2 className="flex-1 text-lg font-bold leading-snug text-zinc-900 transition-colors group-hover:text-orange-600">
                      {post.title}
                    </h2>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600">
                      Read article
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="font-semibold text-zinc-900">Browse by category</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {categoryPages.map((c) => (
                  <Link
                    key={c.path}
                    href={`/${c.path}`}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200 transition-colors hover:bg-orange-50 hover:text-orange-600 hover:ring-orange-200"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
