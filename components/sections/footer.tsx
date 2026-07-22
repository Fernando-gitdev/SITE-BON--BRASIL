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

          <div className="footer-realizacao">
            <span className="footer-title">Realização</span>
            <div className="footer-realizacao-logos">
              <Image src="/assets/f7-producoes-logo.png" alt="F7 Produções" width={44} height={44} />
              <Image src="/assets/serra-negra-logo.webp" alt="Prefeitura de Serra Negra do Norte" width={66} height={44} />
            </div>
          </div>
        </div>

        <div>
          <h5 className="footer-title">Navegação</h5>
          <ul className="footer-links">
            <li>
              <Link href={resolveHref('#apresentacao')}>O Evento</Link>
            </li>
            <li>
              <Link href={resolveHref('#expositores')}>Expositores</Link>
            </li>
            <li>
              <Link href="/programacao">Programação</Link>
            </li>
            <li>
              <Link href="/hospedagens">Hospedagens</Link>
            </li>
            <li>
              <Link href={resolveHref('#contato')}>Contato</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="footer-title">Patrocínios</h5>
          <div className="footer-patrocinios-logos"></div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="site-container footer-bottom-container">
          <p className="copyright">
            &copy; 2026 BONÉ BRASIL. Todos os direitos reservados.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/bonebrasilfeira/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
