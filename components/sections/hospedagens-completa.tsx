import { Building2, MapPin } from 'lucide-react';
import Reveal from '@/components/ui/reveal';

interface CityLodging {
  city: string;
  state: string;
  distance: string;
  isHost?: boolean;
  hotels: string[];
}

const CITIES: CityLodging[] = [
  {
    city: 'Serra Negra do Norte',
    state: 'RN',
    distance: 'Cidade-sede',
    isHost: true,
    hotels: ['Pousada Posto São José II', 'Pousada Posto Sol'],
  },
  {
    city: 'Patos',
    state: 'PB',
    distance: '53,2 km',
    hotels: [
      'Hotel Mundial',
      'Haki Hotel Patos',
      'Hotel Nord Easy Patos',
      'Hotel Rota do Sol',
      'Pousada Patos Prime',
      'Hotel JK',
      'Pousada Central Patos',
      'Pousada Ideal',
      'Hotel Zurique',
      'Hotel Real',
    ],
  },
  {
    city: 'Caicó',
    state: 'RN',
    distance: '46,6 km',
    hotels: [
      'Varandas do Penedo',
      'Pousada Acantoar',
      'Pousada Central Caicó',
      'Pousada Xique-Xique',
      'Regente Hotel',
      'Hotel Porto Bello',
      'Pousada Cristo Rei',
      'Pousada Terra do Sol',
      'Hotel Picanço',
      'Pousada Vila do Príncipe',
      'Pousada e Restaurante O Paladar',
      'Pousada Guanabara',
    ],
  },
  {
    city: 'Paulista',
    state: 'PB',
    distance: '33,7 km',
    hotels: ['Pousada Posto São José I', 'Pousada Posto São João'],
  },
  {
    city: 'São Bento',
    state: 'PB',
    distance: '56,6 km',
    hotels: [
      'Pousada Pancor',
      "Hotel Aconchego's",
      'Hotel Vitória São Bento',
      'Pousada do Sol',
      'Pousada São João',
      'Pousada Tropical',
    ],
  },
];

export default function HospedagensCompleta() {
  return (
    <>
      <section className="hosp-hero section-padding">
        <div className="site-container">
          <Reveal className="section-header align-center">
            <span className="section-tagline">06 a 08 de Agosto</span>
            <h1>Onde se Hospedar</h1>
            <p className="section-subtitle">
              Pousadas e hotéis em Serra Negra do Norte/RN e nas cidades vizinhas para sua
              estadia durante a feira.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="hosp-cities-section section-padding">
        <div className="site-container">
          <div className="hosp-cities-list">
            {CITIES.map((c, i) => (
              <Reveal className={`hosp-city-card ${c.isHost ? 'is-host' : ''}`} delay={i * 0.08} key={c.city}>
                <div className="hosp-city-header">
                  <div>
                    <h2>
                      {c.city}
                      <span className="hosp-city-state">/{c.state}</span>
                    </h2>
                    {!c.isHost && (
                      <span className="hosp-city-distance">
                        <MapPin size={13} strokeWidth={2} />
                        {c.distance} de Serra Negra do Norte
                      </span>
                    )}
                  </div>
                  {c.isHost && <span className="hosp-city-badge">Cidade-sede</span>}
                </div>

                <ul className="hosp-hotel-list">
                  {c.hotels.map((h) => (
                    <li key={h}>
                      <Building2 size={15} strokeWidth={1.75} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
