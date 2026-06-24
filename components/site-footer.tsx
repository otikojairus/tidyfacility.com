import Image from "next/image";
import Link from "next/link";
import {
  CITY_PAGES,
  PHONE_DISPLAY,
  PHONE_E164,
  SERVICE_PILLARS,
  SITE_NAME,
  SUPPORT_PAGES,
  cityFromTargetArea,
  pageListLabel,
  provinceFromTargetArea,
  toPath,
} from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-panel footer-brand-panel">
          <div className="brand-mark footer-brand">
            <Image src="/logo.svg" alt={`${SITE_NAME} logo`} width={48} height={48} className="brand-logo" />
            <span className="brand-text">
              <strong>{SITE_NAME}</strong>
              <small>Commercial facility support</small>
            </span>
          </div>
          <p>
            Built for facility teams that want clean presentation, smoother supply programs, and clearer commercial
            service decisions across Canada.
          </p>
          <a className="btn btn-accent footer-call" href={`tel:${PHONE_E164}`}>
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div className="footer-panel">
          <h2>Core Services</h2>
          <nav className="footer-links" aria-label="Core services">
            {SERVICE_PILLARS.map((page) => (
              <Link key={page.pageSlug} href={toPath(page.pageSlug)}>
                {pageListLabel(page)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-panel">
          <h2>Guides</h2>
          <nav className="footer-links" aria-label="Guides">
            {SUPPORT_PAGES.map((page) => (
              <Link key={page.pageSlug} href={toPath(page.pageSlug)}>
                {pageListLabel(page)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-panel">
          <h2>Featured Cities</h2>
          <nav className="footer-links footer-cities" aria-label="Featured cities">
            {CITY_PAGES.slice(0, 15).map((page) => (
              <Link key={page.pageSlug} href={toPath(page.pageSlug)}>
                {cityFromTargetArea(page.targetArea)}, {provinceFromTargetArea(page.targetArea)}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>Helping commercial facilities across Canada run cleaner, safer, and better stocked.</p>
        <nav className="footer-bottom-links" aria-label="Footer utility">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
        </nav>
      </div>

      <div className="footer-orb footer-orb-a" aria-hidden="true" />
      <div className="footer-orb footer-orb-b" aria-hidden="true" />
    </footer>
  );
}
