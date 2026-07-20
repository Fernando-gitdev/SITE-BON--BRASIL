'use client';

import { useState } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '#pilares', label: 'Pilares' },
  { href: '#numeros', label: 'Números' },
  { href: '/programacao', label: 'Programação' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <Image
            src="/assets/logo-bone-br.svg"
            alt="Boné Brasil"
            className="logo-mark"
            width={821}
            height={329}
            priority
          />
        </a>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="nav-link btn-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Garantir Vaga
          </a>
        </nav>

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
