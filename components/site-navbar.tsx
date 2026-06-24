"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_E164, SITE_NAME } from "@/lib/site-data";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${stuck ? " site-header-stuck" : ""}`}>
        <div className="shell nav-row">
          <Link href="/" className="brand-mark" aria-label={SITE_NAME} onClick={() => setOpen(false)}>
            <Image src="/logo.svg" alt={`${SITE_NAME} logo`} width={48} height={48} priority className="brand-logo" />
            <span className="brand-text">
              <strong>{SITE_NAME}</strong>
              <small>Commercial facility support</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-dark nav-call" href={`tel:${PHONE_E164}`}>
              Call {PHONE_DISPLAY}
            </a>
            <button
              type="button"
              className={`menu-toggle${open ? " menu-toggle-open" : ""}`}
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer${open ? " mobile-drawer-open" : ""}`} aria-hidden={!open}>
        <button className="mobile-drawer-backdrop" type="button" aria-label="Close menu" onClick={() => setOpen(false)} />
        <aside className="mobile-drawer-panel">
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <a href={`tel:${PHONE_E164}`} onClick={() => setOpen(false)}>
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
}
