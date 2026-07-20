'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const resolveHref = (href: string) => (href.startsWith('#') && !onHome ? `/${href}` : href);

  return (
    <footer className="footer">
      <div className="site-container footer-container">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Image
              src="/assets/logo-bone-br.svg"
              alt="Boné Brasil"
              className="logo-mark"
              width={821}
              height={329}
            />
          </Link>
          <p className="footer-desc">
            O maior encontro da cadeia produtiva do boné no Brasil.
          </p>
        </div>

        <div className="footer-links-grid">
          <div>
            <h5 className="footer-title">Navegação</h5>
            <ul className="footer-links">
              <li>
                <Link href={resolveHref('#apresentacao')}>Sobre o Evento</Link>
              </li>
              <li>
                <Link href={resolveHref('#pilares')}>Pilares</Link>
              </li>
              <li>
                <Link href={resolveHref('#numeros')}>Números</Link>
              </li>
              <li>
                <Link href="/programacao">Programação</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="footer-title">Realização</h5>
            <ul className="footer-links">
              <li>
                <span>Prefeitura Municipal de Serra Negra do Norte/RN</span>
              </li>
              <li>
                <span>Associação dos Fabricantes de Bonés</span>
              </li>
              <li>
                <span>Apoio Institucional SEBRAE/RN</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="site-container footer-bottom-container">
          <p className="copyright">
            &copy; 2026 BONÉ BRASIL. Todos os direitos reservados.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
