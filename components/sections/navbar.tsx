'use client';

import { useState } from 'react';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#publico', label: 'Oportunidade' },
  { href: '#programacao', label: 'Programação' },
  { href: '#local', label: 'O Polo' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-accent">BONÉ</span> BRASIL{' '}
          <span className="logo-year">2026</span>
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
            href="#inscricao"
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
