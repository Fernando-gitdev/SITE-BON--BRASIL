'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const NAV_LINKS = [
  { href: '#apresentacao', label: 'O Evento' },
  { href: '#expositores', label: 'Expositores' },
  { href: '/programacao', label: 'Programação' },
  { href: '/hospedagens', label: 'Hospedagens' },
  { href: 'https://maps.app.goo.gl/TBdPRiy9hBr3Mayi7', label: 'Localização', external: true },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';

  // Hash links only resolve on the home page — from any other route
  // (e.g. /programacao) they need the leading "/" so Next navigates back
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link btn-nav-cta nav-cta-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Garantir Vaga
          </a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link btn-nav-cta nav-cta-desktop"
        >
          Garantir Vaga
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
