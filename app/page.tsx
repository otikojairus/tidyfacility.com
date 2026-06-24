import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  CITY_PAGES,
  PHONE_DISPLAY,
  PHONE_E164,
  SERVICE_PILLARS,
  SITE_NAME,
  SUPPORT_PAGES,
  absoluteUrl,
  cityFromTargetArea,
  pageListLabel,
  provinceFromTargetArea,
  toPath,
} from "@/lib/site-data";
import { breadcrumbSchema } from "@/lib/schema";

const homeFaqs = [
  {
    q: "What kind of facilities does TidyFacility support?",
    a: "We write and organize service pages for offices, industrial sites, retail environments, healthcare-adjacent spaces, hospitality operations, and other commercial properties that need dependable day-to-day support.",
  },
  {
    q: "Do you only cover one type of service?",
    a: "No. The site is structured around several facility categories, including mats, carpets, washrooms, uniforms, linen, towels, and workplace first aid programs, so buyers can compare related needs in one place.",
  },
  {
    q: "How should I use the city pages?",
    a: "Start with the main service page, then open the matching city pages to review local context, coverage ideas, and related services in the same market before you make a shortlist.",
  },
];

export const metadata: Metadata = {
  title: `${SITE_NAME} | Commercial Facility Services`,
  description:
    "Commercial facility services across Canada for floor mats, carpets, uniforms, washrooms, linen, towels, and workplace first aid support.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | Commercial Facility Services`,
    description: "Commercial facility support built around cleaner spaces, steadier service, and clearer buying decisions.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />

      <section className="hero-shell">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Built for commercial spaces</p>
            <h1>Facility service decisions that feel clear, grounded, and ready to act on.</h1>
            <p className="hero-intro">
              TidyFacility brings together customer-facing pages for commercial floor mat programs, carpet care,
              washroom support, uniform rental, linen handling, shop towels, and workplace first aid services across
              Canada. Instead of sounding like a generated directory, the site is written to help real facility teams
              understand what each service supports, where local coverage matters, and which related pages deserve a
              closer look before you pick a provider or refine an existing program.
            </p>

            <div className="hero-actions">
              <a className="btn btn-dark" href={`tel:${PHONE_E164}`}>
                Call {PHONE_DISPLAY}
              </a>
              <Link className="btn btn-light" href="/services">
                Explore Services
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Core services</p>
            <h2>Everything your facility needs, covered in one place</h2>
          </div>
          <div className="card-grid card-grid-3">
            {SERVICE_PILLARS.map((page) => (
              <Link className="info-card info-card-link" key={page.pageSlug} href={toPath(page.pageSlug)}>
                <span className="card-tag">Service overview</span>
                <h3>{pageListLabel(page)}</h3>
                <p>Learn what this service covers and what to expect when you bring a provider on board.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="shell split-band">
          <div>
            <p className="eyebrow">How we do things differently</p>
            <h2>Practical information, written for the people managing real facilities</h2>
          </div>
          <p>
            Every page on TidyFacility is written with a real facility manager in mind. You'll find clear headings,
            honest introductions, and FAQs that answer the questions you're actually asking. Related services and
            city pages are linked throughout so you can move naturally from a broad overview into the local or
            topic-specific detail you need.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Specific topics</p>
            <h2>Answers to the questions that come up most</h2>
          </div>
          <div className="chip-grid">
            {SUPPORT_PAGES.map((page) => (
              <Link className="chip-link" key={page.pageSlug} href={toPath(page.pageSlug)}>
                {pageListLabel(page)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-band">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Find your city</p>
            <h2>Local service information across Canada</h2>
          </div>
          <div className="city-grid">
            {CITY_PAGES.slice(0, 18).map((page) => (
              <Link className="city-tile" key={page.pageSlug} href={toPath(page.pageSlug)}>
                <strong>{cityFromTargetArea(page.targetArea)}</strong>
                <span>{provinceFromTargetArea(page.targetArea)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Common questions</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="card-grid card-grid-3">
            {homeFaqs.map((faq) => (
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
