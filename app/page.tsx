'use client';

import { FormEvent, useState } from 'react';

const integrations = ["Legal One", "Astrea", "Projuris", "DocuSign", "Gmail", "Google Drive", "Slack", "WhatsApp"];
const tasks = ["Triagem de demandas jurídicas", "Organização documental", "Acompanhamento de prazos", "Follow-ups internos", "Atualização de status de casos", "Gestão de pendências", "Insights operacionais jurídicos", "Ativação de fluxos e checkpoints"];
const ecosystem = ['Monetra', 'Lumora', 'Syntrix', 'Veltrix', 'Veredicta', 'Procera'];
const timeline = [{"step": "01", "title": "Demanda é classificada", "text": "O fluxo organiza tipo, urgência e documentação necessária."}, {"step": "02", "title": "Acompanhamento é ativado", "text": "Prazos, atualizações e follow-ups entram em rotina mais consistente."}, {"step": "03", "title": "Status fica confiável", "text": "O jurídico opera com mais rastreabilidade e menos ruído."}];

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
          <p>Perfeito, avisaremos você.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={`waitlist-form ${compact ? 'waitlist-form--compact' : ''}`} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={compact ? 'email-bottom' : 'email-hero'}>
        E-mail
      </label>
      <input
        id={compact ? 'email-bottom' : 'email-hero'}
        type="email"
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button type="submit">Entrar na lista de espera</button>
    </form>
  );
}

export default function Page() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <div>
            <strong>Veredicta</strong>
            <span>Ecossistema ProWise</span>
          </div>
        </a>

        <nav className="header-nav">
          <a href="#como-funciona">Como funciona</a>
          <a href="#integracoes">Integrações</a>
          <a href="#ecossistema">ProWise</a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <span className="section-label">Agentes de IA para Jurídico</span>
          <h1>Execução jurídica, com mais controle.</h1>
          <p>A Veredicta integra gestão jurídica, documentos, comunicação e fluxos internos para operar triagem, acompanhamento, organização de prazos, atualização de status e rotinas do jurídico com mais rigor.</p>
          <div className="hero-notes">
            <span>Integra ferramentas jurídicas</span>
            <span>Opera rotinas com rigor</span>
            <span>Mais controle de prazos</span>
          </div>
          <WaitlistForm />
        </div>

        <div className="hero-mockup" aria-label="Mockup de operação Veredicta">
          <div className="mockup-window">
            <div className="mockup-topbar">
              <span />
              <span />
              <span />
            </div>

            <div className="mockup-body--hero">
              <div className="mockup-header-band">
                <article><span>Casos ativos</span><strong>83</strong></article>
                <article><span>Prazos monitorados</span><strong>29</strong></article>
                <article><span>Pendências críticas</span><strong>4</strong></article>
              </div>

              <div className="pipeline-board">
                <div className="pipeline-column"><header><strong>Triagem</strong><span>21</span></header><div className="deal-card"><b>Demanda recebida</b><small>Contexto jurídico organizado</small></div>
                  <div className="deal-card"><b>Documento classificado</b><small>Responsável definido</small></div></div>
                <div className="pipeline-column"><header><strong>Acompanhar</strong><span>15</span></header><div className="deal-card"><b>Prazo monitorado</b><small>Atualização registrada</small></div>
                  <div className="deal-card"><b>Follow-up ativo</b><small>Pendência sinalizada</small></div></div>
                <div className="pipeline-column"><header><strong>Responder</strong><span>8</span></header><div className="deal-card"><b>Peça preparada</b><small>Fluxo encaminhado</small></div>
                  <div className="deal-card"><b>Status atualizado</b><small>Próxima ação definida</small></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section problem-section">
        <div className="section-heading">
          <span className="section-label">O problema</span>
          <h2>Jurídico não pode operar no improviso.</h2>
          <p>Documentos, prazos, solicitações e status espalhados criam retrabalho, risco e perda de controle sobre o fluxo jurídico.</p>
        </div>

        <div className="simple-grid simple-grid--3">
          <article><h3>Fragmentado</h3><p>Documentos, demandas e comunicação sem continuidade operacional.</p></article>
          <article><h3>Manual</h3><p>Triagem, acompanhamento e atualização exigindo esforço constante.</p></article>
          <article><h3>Sensível</h3><p>Prazos e pendências não podem depender de desorganização.</p></article>
        </div>
      </section>

      <section id="como-funciona" className="content-section how-section">
        <div className="section-heading">
          <span className="section-label">Como funciona</span>
          <h2>A operação jurídica vira um fluxo mais rigoroso.</h2>
          <p>A Veredicta conecta os sistemas do jurídico e transforma isso em execução mais organizada, rastreável e confiável.</p>
        </div>

        <div className="steps-row">
          <article>
            <strong>01</strong>
            <h3>Integra</h3>
            <p>Conecta sistemas, canais, dados e etapas da operação.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Executa</h3>
            <p>Aciona tarefas reais com lógica operacional e mais consistência.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Atualiza</h3>
            <p>Retroalimenta status, histórico e próximos passos ao longo do fluxo.</p>
          </article>
        </div>
      </section>

      <section className="content-section bento-section">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-label">Benefícios</span>
            <h2>Mais rigor. Menos ruído operacional.</h2>
          </div>
          <p>O jurídico ganha suporte para operar solicitações, documentos e prazos com mais continuidade e menos retrabalho.</p>
        </div>

        <div className="bento-grid">
          <article className="bento-card bento-card--wide"><small>Controle</small><h3>Prazos e etapas mais visíveis.</h3><p>Mais clareza sobre o que entrou, o que está em andamento e o que exige ação.</p></article>
          <article className="bento-card"><small>Produtividade</small><h3>Menos tempo em tarefas repetitivas.</h3><p>A equipe foca mais em análise e menos em organização manual.</p></article>
          <article className="bento-card"><small>Confiabilidade</small><h3>Fluxos mais rastreáveis.</h3><p>Status, documentos e próximas ações ficam melhor organizados.</p></article>
        </div>
      </section>

      <section className="content-section timeline-section">
        <div className="section-heading">
          <span className="section-label">Usando a Veredicta</span>
          <h2>Como o jurídico ganha mais continuidade.</h2>
        </div>

        <div className="timeline-grid">
          {timeline.map((item) => (
            <article key={item.step}>
              <strong>{item.step}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section tasks-section">
        <div className="section-heading">
          <span className="section-label">O que a Veredicta executa</span>
          <h2>Tarefas reais da operação.</h2>
        </div>

        <div className="task-cloud">
          {tasks.map((task) => (
            <span key={task}>{task}</span>
          ))}
        </div>
      </section>

      <section id="integracoes" className="content-section integrations-section">
        <div className="section-heading">
          <span className="section-label">Integrações</span>
          <h2>Opera sobre a stack que já existe.</h2>
        </div>

        <div className="logo-cloud">
          {integrations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="content-section compare-section">
        <div className="section-heading">
          <span className="section-label">Antes e depois</span>
          <h2>De uma operação manual para um fluxo mais coordenado.</h2>
        </div>

        <div className="compare-grid">
          <article>
            <small>Antes</small>
            <h3>Operação jurídica dispersa</h3>
            <ul><li>Prazos acompanhados manualmente</li><li>Documentação espalhada</li><li>Atualizações inconsistentes</li><li>Muito esforço para manter o fluxo</li></ul>
          </article>

          <article className="compare-grid__highlight">
            <small>Depois</small>
            <h3>Fluxo jurídico mais controlado</h3>
            <ul><li>Mais consistência operacional</li><li>Prazos e status mais confiáveis</li><li>Documentos melhor organizados</li><li>Mais controle sem mais peso manual</li></ul>
          </article>
        </div>
      </section>

      <section id="ecossistema" className="content-section ecosystem-section">
        <div className="section-heading">
          <span className="section-label">Ecossistema ProWise</span>
          <h2>Parte de uma arquitetura maior de marcas e operações.</h2>
        </div>

        <div className="logo-cloud logo-cloud--muted">
          {ecosystem.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="content-section final-section">
        <div className="section-heading">
          <span className="section-label">Lista de espera</span>
          <h2>Entre na lista para acompanhar a Veredicta.</h2>
          <p>Se a sua operação já pede mais consistência e menos fricção, deixe seu e-mail.</p>
        </div>

        <WaitlistForm compact />
      </section>

      <footer className="site-footer">
        <div>
          <strong>Veredicta</strong>
          <span>Agentes de IA para Jurídico</span>
        </div>
        <p>Ecossistema ProWise</p>
      </footer>
    </main>
  );
}
