import { Building2, MapPin } from 'lucide-react';
import Reveal from '@/components/ui/reveal';
import { buildWhatsAppUrlForPhone } from '@/lib/whatsapp';

interface Hotel {
  name: string;
  phone?: string;
}

interface CityLodging {
  city: string;
  state: string;
  distance: string;
  isHost?: boolean;
  hotels: Hotel[];
}

const CITIES: CityLodging[] = [
  {
    city: 'Serra Negra do Norte',
    state: 'RN',
    distance: 'Cidade-sede',
    isHost: true,
    hotels: [
      { name: 'Pousada Posto São José II', phone: '(84) 99618-1873' },
      { name: 'Pousada Posto Sol', phone: '(84) 99948-2453' },
    ],
  },
  {
    city: 'Patos',
    state: 'PB',
    distance: '53,2 km',
    hotels: [
      { name: 'Hotel Mundial', phone: '(83) 99919-5344' },
      { name: 'Haki Hotel Patos', phone: '(83) 99828-5919' },
      { name: 'Hotel Nord Easy Patos', phone: '(83) 99880-0041' },
      { name: 'Hotel Rota do Sol' },
      { name: 'Pousada Patos Prime', phone: '(83) 98192-1182' },
      { name: 'Hotel JK', phone: '(83) 99627-7054' },
      { name: 'Pousada Central Patos', phone: '(83) 99631-0671' },
      { name: 'Pousada Ideal' },
      { name: 'Hotel Zurique', phone: '(83) 99141-9489' },
      { name: 'Hotel Real' },
    ],
  },
  {
    city: 'Caicó',
    state: 'RN',
    distance: '46,6 km',
    hotels: [
      { name: 'Varandas do Penedo', phone: '(84) 99601-9187' },
      { name: 'Pousada Acantoar', phone: '(84) 99640-1999' },
      { name: 'Pousada Central Caicó', phone: '(84) 99987-2865' },
      { name: 'Pousada Xique-Xique', phone: '(84) 92000-7799' },
      { name: 'Regente Hotel' },
      { name: 'Hotel Porto Bello', phone: '(84) 99648-4161' },
      { name: 'Pousada Cristo Rei', phone: '(84) 99889-7272' },
      { name: 'Pousada Terra do Sol', phone: '(84) 99663-8700' },
      { name: 'Hotel Picanço' },
      { name: 'Pousada Vila do Príncipe' },
      { name: 'Pousada e Restaurante O Paladar' },
      { name: 'Pousada Guanabara', phone: '(84) 99681-0448' },
    ],
  },
  {
    city: 'Paulista',
    state: 'PB',
    distance: '33,7 km',
    hotels: [
      { name: 'Pousada Posto São José I', phone: '(83) 99993-0505' },
      { name: 'Pousada Posto São João', phone: '(83) 99967-0892' },
    ],
  },
  {
    city: 'São Bento',
    state: 'PB',
    distance: '56,6 km',
    hotels: [
      { name: 'Pousada Pancor', phone: '(83) 99967-1485' },
      { name: "Hotel Aconchego's" },
      { name: 'Hotel Vitória São Bento', phone: '(83) 99939-5666' },
      { name: 'Pousada do Sol', phone: '(83) 99621-3118' },
      { name: 'Pousada São João', phone: '(83) 99967-0892' },
      { name: 'Pousada Tropical' },
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
                  {c.hotels.map((hotel) => (
                    <li key={hotel.name}>
                      <span className="hosp-hotel-name">
                        <Building2 size={15} strokeWidth={1.75} />
                        <span>{hotel.name}</span>
                      </span>
                      {hotel.phone && (
                        <a
                          href={buildWhatsAppUrlForPhone(
                            hotel.phone,
                            `Olá! Vi o ${hotel.name} no site da Boné Brasil 2026 e gostaria de saber sobre hospedagem durante a feira.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hosp-hotel-whatsapp"
                          aria-label={`Falar no WhatsApp com ${hotel.name}`}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.06 3.14 4.99 4.41.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.13-.27-.2-.56-.35z" />
                            <path d="M12.01 2C6.49 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.01 22C17.52 22 22 17.52 22 12S17.52 2 12.01 2zm0 18.15a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3 .79.8-2.93-.19-.3a8.13 8.13 0 1 1 6.83 3.75z" />
                          </svg>
                        </a>
                      )}
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
