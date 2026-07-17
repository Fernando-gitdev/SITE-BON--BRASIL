'use client';

import { useRef, useState } from 'react';

export default function Inscricao() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      document
        .getElementById('inscricao')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1500);
  };

  const handleReset = () => {
    formRef.current?.reset();
    setSubmitted(false);
  };

  return (
    <section id="inscricao" className="inscricao-section section-padding">
      <div className="section-glow-orb orb-a" aria-hidden="true"></div>
      <div className="section-glow-orb orb-b" aria-hidden="true"></div>
      <div className="container container-narrow">
        <div className="section-header align-center">
          <span className="section-tagline">Vagas Limitadas</span>
          <h2>Garanta Seu Lote Promocional</h2>
          <p className="section-subtitle">
            Condições especiais valem só para os primeiros inscritos.
            Preencha e assegure sua vaga na BONÉ BRASIL 2026.
          </p>
        </div>

        <div className="form-wrapper reveal-item">
          {!submitted && (
            <form
              id="fairRegistrationForm"
              className="registration-form"
              noValidate
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="form-grid">
                <div className="input-group">
                  <input type="text" id="regName" required placeholder=" " />
                  <label htmlFor="regName">Nome Completo</label>
                  <span className="input-glow"></span>
                </div>

                <div className="input-group">
                  <input type="email" id="regEmail" required placeholder=" " />
                  <label htmlFor="regEmail">E-mail Corporativo</label>
                  <span className="input-glow"></span>
                </div>

                <div className="input-group">
                  <input type="tel" id="regPhone" required placeholder=" " />
                  <label htmlFor="regPhone">WhatsApp / Telefone</label>
                  <span className="input-glow"></span>
                </div>

                <div className="input-group">
                  <input type="text" id="regCompany" required placeholder=" " />
                  <label htmlFor="regCompany">Nome da Empresa / Fábrica</label>
                  <span className="input-glow"></span>
                </div>

                <div className="input-group full-width">
                  <select id="regProfile" required defaultValue="">
                    <option value="" disabled hidden></option>
                    <option value="fabricante">
                      Fabricante de Bonés / Chapéus
                    </option>
                    <option value="fornecedor">
                      Fornecedor de Matéria-prima / Equipamento
                    </option>
                    <option value="comprador">
                      Lojista / Comprador / Distribuidor
                    </option>
                    <option value="parceiro">
                      Instituição Financeira / Parceiro
                    </option>
                    <option value="visitante">Estudante / Visitante Geral</option>
                  </select>
                  <label htmlFor="regProfile" className="select-label">
                    Seu Perfil de Interesse
                  </label>
                  <span className="input-glow"></span>
                </div>

                <div className="input-group full-width">
                  <textarea id="regMessage" rows={4} placeholder=" "></textarea>
                  <label htmlFor="regMessage">
                    Mensagem / Interesse Específico (Opcional)
                  </label>
                  <span className="input-glow"></span>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary btn-full-width"
                  id="submitBtn"
                  disabled={submitting}
                >
                  <span>{submitting ? 'Enviando...' : 'Garantir Minha Vaga'}</span>
                  <div className="btn-glow-effect"></div>
                </button>
              </div>
            </form>
          )}

          {submitted && (
            <div className="form-success-state active" id="formSuccess">
              <div className="success-icon-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="success-check"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Vaga Garantida!</h3>
              <p>
                Sua inscrição na <strong>BONÉ BRASIL 2026</strong> foi
                confirmada. Nossa equipe entra em contato em breve por
                WhatsApp ou e-mail.
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                id="resetFormBtn"
                onClick={handleReset}
              >
                Fazer nova inscrição
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
