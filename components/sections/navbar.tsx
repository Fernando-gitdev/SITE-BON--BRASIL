'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SELO_CADASTRO_URL } from '@/lib/selo';

const NAV_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: '#selo', label: 'O Selo' },
  { href: '#criterios', label: 'Critérios' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#feira', label: 'A Feira' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';

  // Hash links only resolve on the home page — from any other route
  // (e.g. /hospedagens) they need the leading "/" so Next navigates back
  // to home first, then the browser scrolls to the anchor.
  const resolveHref = (href: string) => (href.startsWith('#') && !onHome ? `/${href}` : href);

  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image
            src="/assets/logo-bone-br.svg"
            alt="Boné Brasil"
            className="logo-mark"
            width={821}
            height={329}
            priority
          />
        </Link>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={SELO_CADASTRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link btn-nav-cta nav-cta-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar Selo
          </a>
        </nav>

        <a
          href={SELO_CADASTRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link btn-nav-cta nav-cta-desktop"
        >
          Solicitar Selo
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          id="menuToggle"
          aria-label="Abrir Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
