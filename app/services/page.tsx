import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  CITY_PAGES,
  SEO_PAGES,
  SERVICE_PILLARS,
  SITE_NAME,
  SUPPORT_PAGES,
  absoluteUrl,
  cityFromTargetArea,
  isCityPage,
  pageListLabel,
  provinceFromTargetArea,
  toPath,
} from "@/lib/site-data";
import { breadcrumbSchema } from "@/lib/schema";

const serviceFaqs = [
  {
    q: "Where should I start if I manage several facility needs at once?",
    a: "Start with the main service page closest to your most visible or most recurring issue. From there you can check local pages or more specific guides without losing the bigger operational picture.",
  },
  {
    q: "Why are there both national pages and city pages?",
    a: "The national pages explain the service category, while the city pages add local operating context and cross-links to related services in the same market. Together they make the structure more useful for real buyers.",
  },
  {
    q: "Are the guide pages only for compliance topics?",
    a: "No. Some guide pages are compliance-oriented, but others narrow the scope inside a broader service line, such as washroom disposal support or garment-specific rental programs.",
  },
];

export const metadata: Metadata = {
  title: `Commercial Facility Services Canada | ${SITE_NAME}`,
  description:
    "Browse all TidyFacility services including floor mats, carpets, uniforms, washrooms, linen, shop towels, and workplace first aid. City-specific pages across Canada.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Commercial Facility Services Canada | ${SITE_NAME}`,
    description: "Commercial facility services across Canada — mats, carpets, uniforms, washrooms, linen, towels, and first aid. Find local coverage for your city.",
    url: absoluteUrl("/services"),
  },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: serviceFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />

      <section className="page-hero-shell">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">All services</p>
            <h1>Commercial facility services across Canada</h1>
            <p>
              Whether you manage one building or several, this page covers everything TidyFacility offers. It is
              designed for facility managers, operations leaders, and anyone responsible for keeping a commercial
              property clean, safe, and well-stocked. Start with the main service pages if you are comparing options,
              check the detailed guides when you need specifics, and browse the city pages to see what is available
              in your area.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-dark" href={toPath(SERVICE_PILLARS[0].pageSlug)}>
                Explore Services
              </Link>
              <Link className="btn btn-light" href="/">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Main services</p>
            <h2>Our main service categories</h2>
          </div>
          <div className="card-grid card-grid-3">
            {SERVICE_PILLARS.map((page) => (
              <Link className="info-card info-card-link" key={page.pageSlug} href={toPath(page.pageSlug)}>
                <span className="card-tag">Service overview</span>
                <h3>{pageListLabel(page)}</h3>
                <p>Everything you need to know about this service, including what is covered and how to get started.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Specific topics</p>
            <h2>Detailed guides for more specific needs</h2>
          </div>
          <div className="chip-grid">
            {SUPPORT_PAGES.map((page) => (
              <Link className="chip-link" href={toPath(page.pageSlug)} key={page.pageSlug}>
                {pageListLabel(page)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Your city</p>
            <h2>Find service information for your area</h2>
          </div>
          <div className="city-grid">
            {CITY_PAGES.map((page) => (
              <Link className="city-tile" href={toPath(page.pageSlug)} key={page.pageSlug}>
                <strong>{cityFromTargetArea(page.targetArea)}</strong>
                <span>{provinceFromTargetArea(page.targetArea)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-band">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Full directory</p>
            <h2>Browse all pages</h2>
          </div>
          <div className="chip-grid">
            {SEO_PAGES.map((page) => (
              <Link className="chip-link" href={toPath(page.pageSlug)} key={page.pageSlug}>
                {isCityPage(page)
                  ? `${cityFromTargetArea(page.targetArea)}, ${provinceFromTargetArea(page.targetArea)}`
                  : pageListLabel(page)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">FAQs</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="card-grid card-grid-3">
            {serviceFaqs.map((faq) => (
              <article className="info-card" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
