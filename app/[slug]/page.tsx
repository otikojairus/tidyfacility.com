import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import {
  PHONE_DISPLAY,
  PHONE_E164,
  SEO_PAGES,
  SITE_NAME,
  buildH1,
  buildHighlights,
  buildIntro,
  buildMetaDescription,
  buildMetaTitle,
  buildProcessSteps,
  buildSections,
  bySlug,
  cityFactsFor,
  cityFromTargetArea,
  cityPagesForPillar,
  faqsFor,
  isCityPage,
  isSupportPage,
  pageListLabel,
  pageLocation,
  pillarFor,
  provinceFromTargetArea,
  sameCityPages,
  serviceTopicLabel,
  supportCityLinks,
  supportPagesForPillar,
  toPath,
} from "@/lib/site-data";
import { cityServiceSchema, faqSchema, pageBreadcrumb } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 86400;

export async function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.pageSlug.replace(/^\//, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = bySlug(slug);
  if (!page) return { title: "Page Not Found" };

  return {
    title: buildMetaTitle(page),
    description: buildMetaDescription(page),
    alternates: { canonical: toPath(page.pageSlug) },
    openGraph: {
      title: buildMetaTitle(page),
      description: buildMetaDescription(page),
      url: toPath(page.pageSlug),
      type: "article",
      siteName: SITE_NAME,
    },
  };
}

function RelatedLinks({ slug }: { slug: string }) {
  const page = bySlug(slug);
  if (!page) return null;

  const pillar = pillarFor(page);
  const siblingCities = sameCityPages(page);
  const pillarCities = cityPagesForPillar(pillar);
  const pillarSupport = supportPagesForPillar(pillar);
  const relatedCities = supportCityLinks(page, 5);

  if (page.pageType === "Service Pillar") {
    return (
      <section className="section-block">
        <div className="section-head">
          <p className="eyebrow">Also serving these cities</p>
          <h2>Find this service in your city</h2>
        </div>
        <div className="city-grid">
          {pillarCities.map((item) => (
            <Link className="city-tile" key={item.pageSlug} href={toPath(item.pageSlug)}>
              <strong>{cityFromTargetArea(item.targetArea)}</strong>
              <span>{provinceFromTargetArea(item.targetArea)}</span>
            </Link>
          ))}
        </div>

        {pillarSupport.length > 0 && (
          <>
            <div className="section-head section-head-tight">
              <p className="eyebrow">Related topics</p>
              <h2>Dive deeper into specific details</h2>
            </div>
            <div className="chip-grid">
              {pillarSupport.map((item) => (
                <Link className="chip-link" key={item.pageSlug} href={toPath(item.pageSlug)}>
                  {pageListLabel(item)}
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    );
  }

  if (isCityPage(page)) {
    return (
      <section className="section-block">
        <div className="section-head">
          <p className="eyebrow">Also available</p>
          <h2>Other services in this area</h2>
        </div>
        <div className="card-grid card-grid-3">
          <Link className="info-card info-card-link" href={toPath(pillar.pageSlug)}>
            <span className="card-tag">Full service page</span>
            <h3>{pageListLabel(pillar)}</h3>
            <p>See everything about this service across Canada, including what it covers and how it typically works.</p>
          </Link>
          {siblingCities.map((item) => (
            <Link className="info-card info-card-link" key={item.pageSlug} href={toPath(item.pageSlug)}>
              <span className="card-tag">Also in {cityFromTargetArea(item.targetArea)}</span>
              <h3>{serviceTopicLabel(item)}</h3>
              <p>Another service we cover for {cityFromTargetArea(item.targetArea)} facilities.</p>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section-block">
      <div className="section-head">
        <p className="eyebrow">Explore more</p>
        <h2>The main service page and local examples</h2>
      </div>
      <div className="card-grid card-grid-3">
        <Link className="info-card info-card-link" href={toPath(pillar.pageSlug)}>
          <span className="card-tag">Full service page</span>
          <h3>{pageListLabel(pillar)}</h3>
          <p>Everything about this service across Canada, including scope, scheduling, and what to ask a provider.</p>
        </Link>
        {relatedCities.map((item) => (
          <Link className="info-card info-card-link" key={item.pageSlug} href={toPath(item.pageSlug)}>
            <span className="card-tag">{cityFromTargetArea(item.targetArea)}, {provinceFromTargetArea(item.targetArea)}</span>
            <h3>{serviceTopicLabel(item)}</h3>
            <p>See how this service applies locally, including area-specific factors and related options.</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function DynamicSeoPage({ params }: Props) {
  const { slug } = await params;
  const page = bySlug(slug);
  if (!page) notFound();

  const faqs = faqsFor(page);
  const sections = buildSections(page);
  const highlights = buildHighlights(page);
  const steps = buildProcessSteps(page);
  const facts = cityFactsFor(page);
  const schema = cityServiceSchema(page)
    ? [pageBreadcrumb(page), faqSchema(page), ...(cityServiceSchema(page) || [])]
    : [pageBreadcrumb(page), faqSchema(page)];

  return (
    <main>
      <JsonLd data={schema} />

      <section className="page-hero-shell">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">
              {isCityPage(page) ? `Service in ${pageLocation(page)}` : isSupportPage(page) ? "Service guide" : "Facility service"}
            </p>
            <h1>{buildH1(page)}</h1>
            <p>{buildIntro(page)}</p>
            <div className="hero-actions">
              <a className="btn btn-dark" href={`tel:${PHONE_E164}`}>
                Call {PHONE_DISPLAY}
              </a>
              <Link className="btn btn-light" href="/services">
                View All Services
              </Link>
            </div>
          </div>

          <aside className="page-summary-card">
            <span className="summary-chip">Ready to get started?</span>
            <p>Talk through your facility needs with our team. We can help you work out the right program for your space, your schedule, and your budget.</p>
            <a className="btn btn-dark" href={`tel:${PHONE_E164}`}>
              Call {PHONE_DISPLAY}
            </a>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="card-grid card-grid-3">
            {highlights.map((item) => (
              <article className="info-card" key={item.title}>
                <span className="card-tag">{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {facts && (
        <section className="section-block section-soft">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">About {pageLocation(page)}</p>
              <h2>Local conditions that affect your service schedule</h2>
            </div>
            <div className="card-grid card-grid-3">
              <article className="info-card">
                <h3>Neighbourhood context</h3>
                <p>
                  Facilities near {facts.neighborhoods[0]} and {facts.neighborhoods[1]} often deal with different
                  traffic patterns, delivery windows, and occupant expectations than quieter suburban sites.
                </p>
              </article>
              <article className="info-card">
                <h3>High-traffic zones</h3>
                <p>
                  Buildings near {facts.landmarks[0]} and {facts.landmarks[1]} may need tighter scheduling because
                  presentation issues get noticed faster by visitors and staff.
                </p>
              </article>
              <article className="info-card">
                <h3>Climate and weather</h3>
                <p>{facts.climate} — this can affect how often mats need swapping, how quickly garments soil, or when replenishment runs short.</p>
              </article>
            </div>
          </div>
        </section>
      )}

      {sections.map((section) => (
        <section className="section-block" key={section.title}>
          <div className="shell reading-section">
            <div className="section-head">
              <h2>{section.title}</h2>
            </div>
            <div className="reading-copy">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-block section-band">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Getting started</p>
            <h2>Steps most facilities follow when setting up a service</h2>
          </div>
          <div className="timeline-grid">
            {steps.map((step, index) => (
              <article className="timeline-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="shell">
        <RelatedLinks slug={page.pageSlug} />
      </div>

      <section className="section-block">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">FAQs</p>
            <h2>Common questions about this service</h2>
          </div>
          <div className="card-grid card-grid-3">
            {faqs.map((faq) => (
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
