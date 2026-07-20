export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer-container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <span className="logo-accent">BONÉ</span> BRASIL{' '}
            <span className="logo-year">2026</span>
          </a>
          <p className="footer-desc">
            O maior encontro da cadeia produtiva do boné no Brasil.
          </p>
        </div>

        <div className="footer-links-grid">
          <div>
            <h5 className="footer-title">Navegação</h5>
            <ul className="footer-links">
              <li>
                <a href="#apresentacao">Sobre o Evento</a>
              </li>
              <li>
                <a href="#pilares">Pilares</a>
              </li>
              <li>
                <a href="#numeros">Números</a>
              </li>
              <li>
                <a href="/programacao">Programação</a>
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
