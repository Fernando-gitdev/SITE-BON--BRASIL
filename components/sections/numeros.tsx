import Reveal from '@/components/ui/reveal';
import ScrollFloat from '@/components/ui/scroll-float';

export default function Numeros() {
  return (
    <section id="numeros" aria-label="Números do polo" className="numeros-section section-padding">
      <div className="site-container">
        <Reveal className="section-header align-center">
          <span className="section-tagline">02 · Números do Polo</span>
          <ScrollFloat>O tamanho da força produtiva que você vai encontrar</ScrollFloat>
        </Reveal>

        <div className="stats-grid">
          <Reveal className="stat-card" delay={0.1}>
            <div className="stat-icon-wrapper">
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 18.5C2 15.5 5 15.5 9 15.5H15C19 15.5 22 15.5 22 18.5V20H2V18.5Z" />
                <path d="M12 4C8.5 4 5 7.5 5 12V15.5H19V12C19 7.5 15.5 4 12 4Z" />
                <path d="M12 4V2" />
              </svg>
            </div>
            <div className="stat-number-wrapper">
              <span className="stat-number" data-target="2730">0</span>
            </div>
            <h3 className="stat-title">Pessoas Impactadas</h3>
            <p className="stat-desc">Profissionais e agentes produtivos conectados na feira.</p>
          </Reveal>

          <Reveal className="stat-card highlight-card" delay={0.2}>
            <div className="stat-icon-wrapper">
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21V19C22.9993 18.1137 22.6944 17.2541 22.1351 16.5714" />
                <path d="M16 3.13C16.8604 3.35031 17.6189 3.89069 18.1403 4.65481C18.6617 5.41893 18.9142 6.35753 18.8524 7.30058C18.7905 8.24362 18.4183 9.13289 17.7946 9.80808C17.1709 10.4833 16.3364 10.8986 15.43 11" />
              </svg>
            </div>
            <div className="stat-number-wrapper">
              <span className="stat-number" data-target="2600">0</span>
            </div>
            <h3 className="stat-title">Trabalhadores no Polo</h3>
            <p className="stat-desc">Mão de obra ativa e especializada em Serra Negra do Norte/RN.</p>
          </Reveal>

          <Reveal className="stat-card" delay={0.3}>
            <div className="stat-icon-wrapper">
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 22V16L8 10L14 16L20 10L22 12V22H2Z" />
                <path d="M17 2V6" />
                <path d="M12 2V6" />
              </svg>
            </div>
            <div className="stat-number-wrapper">
              <span className="stat-number" data-target="130">0</span>
            </div>
            <h3 className="stat-title">Fábricas Locais</h3>
            <p className="stat-desc">Fábricas ativas no polo, prontas pra crescer com o mercado nacional.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
