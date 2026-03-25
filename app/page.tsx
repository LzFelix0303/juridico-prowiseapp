'use client';

import { FormEvent, useState } from 'react';

const integrations = ["ClickSign", "DocuSign", "Google Drive", "CRMs", "ERPs", "Ferramentas de gestão documental"];
const features = ["Apoio à geração de contratos", "Organização de fluxos documentais", "Encaminhamento para assinatura", "Acompanhamento de status", "Rotinas operacionais do jurídico", "Apoio à revisão documental", "Integração com comercial e financeiro"];
const problems = ["Contratos andam devagar", "Assinaturas e acompanhamentos travam o fluxo", "O jurídico perde tempo com tarefas operacionais repetitivas"];
const benefits = ["Mais velocidade contratual", "Mais organização documental", "Menos gargalo operacional", "Mais segurança de processo", "Menos esforço manual", "Mais clareza no fluxo jurídico"];
const ecosystem = ["Veltrix", "Monetra", "Lumora", "Syntrix", "Veredicta", "Procera"];
const heroMetrics = [{"label": "Contratos ativos", "value": "83"}, {"label": "Assinaturas em curso", "value": "21"}, {"label": "Pendências críticas", "value": "4"}];
const mockColumns = [{"title": "Documento", "count": "24", "cards": [{"title": "Contrato iniciado", "text": "Dados organizados"}, {"title": "Versão pronta", "text": "Revisão sinalizada"}]}, {"title": "Assinatura", "count": "13", "cards": [{"title": "Envio realizado", "text": "Parte notificada"}, {"title": "Status monitorado", "text": "Acompanhamento ativo"}]}, {"title": "Fluxo", "count": "7", "cards": [{"title": "Aprovação registrada", "text": "Etapa movida"}, {"title": "Histórico salvo", "text": "Próxima ação definida"}]}];
const howSteps = ["Conecte contratos, documentos e plataformas de assinatura", "Defina fluxo, critérios e contexto jurídico", "A Veredicta executa o operacional e sustenta a ordem do processo"];
const altHeadlines = ["Seu jurídico pode rodar melhor", "Menos atrito nos fluxos jurídicos", "Contratos não deveriam travar"];

function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`waitlist-success ${compact ? 'waitlist-success--compact' : ''}`}>
        <div className="success-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5 9.2 16.7 19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <strong>Você entrou na lista de espera.</strong>
          <p>Perfeito. Avisaremos você.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="capture-card">
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor={compact ? 'email-bottom' : 'email-hero'}>E-mail</label>
        <input id={compact ? 'email-bottom' : 'email-hero'} type="email" placeholder="Seu melhor e-mail" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <button type="submit">Entrar na lista de espera</button>
      </form>
      <p className="capture-note">Interesse antecipado para líderes que querem operar melhor.</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="page-shell" style={{ ['--brand' as string]: '#6a5a7a' }}>
      <header className="site-header">
        <a className="brand" href="#top">
          <div>
            <strong>Veredicta</strong>
            <span>Ecossistema ProWise</span>
          </div>
        </a>

        <div className="header-actions">
          <nav className="header-nav">
            <a href="#visao-geral">Visão geral</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#integracoes">Integrações</a>
            <a href="#ecossistema">Ecossistema ProWise</a>
          </nav>
          <a className="header-button" href="#lista">Entrar na lista de espera</a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <span className="section-label">Jurídico</span>
          <h1>Seu jurídico perde velocidade quando contratos e fluxos ainda dependem de operação manual.</h1>
          <p className="hero-subtitle">Se você é um líder jurídico e sofre com documentos dispersos, assinaturas lentas e acompanhamento contratual desorganizado, a Veredicta é a sua resposta.</p>
          <p>A Veredicta conecta seus fluxos jurídicos e coloca agentes de IA para executar etapas operacionais com mais ordem e agilidade.</p>
          <div className="hero-notes">
            <span>Seu jurídico pode rodar melhor</span>
            <span>Menos atrito nos fluxos jurídicos</span>
            <span>Contratos não deveriam travar</span>
          </div>
          <WaitlistForm />
        </div>

        <div className="hero-visual">
          <div className="mockup-window">
            <div className="mockup-topbar"><span /><span /><span /></div>
            <div className="mockup-body">
              <div className="mockup-header-band">
                {heroMetrics.map((item) => (
                  <article key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
              <div className="pipeline-board">
                {mockColumns.map((column) => (
                  <div className="pipeline-column" key={column.title}>
                    <header>
                      <strong>{column.title}</strong>
                      <span>{column.count}</span>
                    </header>
                    {column.cards.map((card) => (
                      <div className="deal-card" key={card.title}>
                        <b>{card.title}</b>
                        <small>{card.text}</small>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visao-geral" className="content-section">
        <div className="section-heading">
          <span className="section-label">O problema</span>
          <h2>O operacional não deveria travar a área.</h2>
        </div>
        <div className="problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem}>
              <h3>{problem}</h3>
              <p>{problem}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="content-section">
        <div className="section-heading">
          <span className="section-label">Como funciona</span>
          <h2>Conecte, dê contexto e deixe a operação rodar.</h2>
        </div>
        <div className="steps-grid">
          {howSteps.map((step, index) => (
            <article className="step-card" key={step}>
              <strong>0{index + 1}</strong>
              <h3>{index === 0 ? 'Conecte suas ferramentas' : index === 1 ? 'Dê contexto ao agente' : 'Deixe a operação rodar'}</h3>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="section-label">O que executa</span>
          <h2>Fluxos reais. Tarefas reais.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature}>
              <div className="feature-icon">{['◦','↗','✓','→','⊕','⋯','◇','▣'][index % 8]}</div>
              <h3>{feature}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="section-label">Benefícios</span>
          <h2>Benefício concreto, sem peso desnecessário no time.</h2>
        </div>
        <div className="benefits-grid">
          <div>
            <ul className="bullet-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="benefits-visual">
            <div className="visual-stat"><span>Operação</span><strong>Mais contínua</strong></div>
            <div className="visual-stat"><span>Execução</span><strong>Menos manual</strong></div>
            <div className="visual-stat"><span>Visibilidade</span><strong>Mais confiável</strong></div>
            <div className="visual-mini">
              <div><span className="hero-note">Área</span><strong>Jurídico</strong></div>
              <div><span className="hero-note">Marca</span><strong>Veredicta</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="integracoes" className="content-section">
        <div className="section-heading">
          <span className="section-label">Integrações</span>
          <h2>Trabalha sobre a stack que sua empresa já usa.</h2>
          <p>Sem exigir troca radical de ferramenta para a operação começar a rodar melhor.</p>
        </div>
        <div className="integration-grid">
          {integrations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="ecossistema" className="content-section">
        <div className="section-heading">
          <span className="section-label">Ecossistema ProWise</span>
          <h2>Uma arquitetura de marcas focadas em execução empresarial com IA.</h2>
        </div>
        <div className="ecosystem-grid">
          {ecosystem.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="lista" className="content-section">
        <div className="section-heading">
          <span className="section-label">Lista de espera</span>
          <h2>Entre para acompanhar a Veredicta.</h2>
          <p>Se essa operação ainda depende demais do manual, seu interesse já pode entrar na lista.</p>
        </div>
        <WaitlistForm compact />
      </section>

      <footer className="site-footer">
        <div>
          <strong>Veredicta</strong>
          <span>Ecossistema ProWise</span>
        </div>
        <div className="footer-links">
          <a href="#visao-geral">Visão geral</a>
          <a href="#integracoes">Integrações</a>
          <a href="https://prowisebr.com" target="_blank" rel="noreferrer">ProWise</a>
        </div>
      </footer>
    </main>
  );
}
