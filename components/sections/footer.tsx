'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SELO_CADASTRO_URL, SELO_LOGIN_URL } from '@/lib/selo';

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
            O selo de qualidade da cadeia produtiva do boné, criado pela feira Boné Brasil.
          </p>

          <div className="footer-realizacao">
            <span className="footer-title">Realização</span>
            <div className="footer-realizacao-logos">
              <a href="https://www.instagram.com/f7producoesof/" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/f7-producoes-logo.png" alt="F7 Produções" width={44} height={44} />
              </a>
              <a href="https://serranegra.rn.gov.br/" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/serra-negra-logo.webp" alt="Prefeitura de Serra Negra do Norte" width={66} height={44} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h5 className="footer-title">Navegação</h5>
          <ul className="footer-links">
            <li>
              <Link href={resolveHref('#selo')}>O Selo</Link>
            </li>
            <li>
              <Link href={resolveHref('#criterios')}>Critérios</Link>
            </li>
            <li>
              <Link href={resolveHref('#como-funciona')}>Como funciona</Link>
            </li>
            <li>
              <Link href={resolveHref('#feira')}>A Feira 2026</Link>
            </li>
            <li>
              <a href={SELO_CADASTRO_URL} target="_blank" rel="noopener noreferrer">
                Solicitar o selo
              </a>
            </li>
            <li>
              <a href={SELO_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                Área da empresa
              </a>
            </li>
            <li>
              <Link href={resolveHref('#contato')}>Contato</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="footer-title">Patrocínio</h5>
          <div className="footer-patrocinios-logos">
            <Image
              src="/assets/sebrae-patrocinio.svg"
              alt="Sebrae"
              width={62}
              height={34}
            />
            <Image
              src="/assets/banco-do-nordeste-patrocinador.svg"
              alt="Banco do Nordeste"
              width={125}
              height={45}
            />
            {/* Stacked two-line lockup, so it needs extra height to not read
                as much smaller than the wide wordmarks around it. */}
            <Image
              src="/assets/apex-patrocinio.svg"
              alt="Apex Brasil"
              width={84}
              height={48}
              className="is-tall"
            />
            <Image
              src="/assets/fiern-patrocinador.webp"
              alt="FIERN"
              width={176}
              height={45}
            />
          </div>
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
