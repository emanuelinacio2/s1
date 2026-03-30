import Link from "next/link";
import styles from "./page.module.css";

const riskRows = [
  {
    risk: "Acesso não autorizado de funcionário aos dados de clientes",
    probability: 3,
    impact: 4,
    score: 12,
    classification: "Extremo",
    countermeasure:
      "Controle de acesso por perfil, menor privilégio, logs e auditoria de acessos.",
    principle: "Confidencialidade",
  },
  {
    risk: "Ataque DDoS ao site de vendas",
    probability: 3,
    impact: 3,
    score: 9,
    classification: "Alto",
    countermeasure:
      "Proteção anti-DDoS, firewall de aplicação, CDN e monitoramento contínuo.",
    principle: "Disponibilidade",
  },
  {
    risk: "Vazamento de dados sensíveis do banco (CPF, endereço e cartão)",
    probability: 2,
    impact: 4,
    score: 8,
    classification: "Alto",
    countermeasure:
      "Criptografia de dados sensíveis, mascaramento e acesso restrito ao banco.",
    principle: "Confidencialidade",
  },
  {
    risk: "Alteração indevida de pedidos ou pagamentos",
    probability: 2,
    impact: 3,
    score: 6,
    classification: "Médio",
    countermeasure:
      "Controle de integridade, trilha de auditoria e segregação de funções.",
    principle: "Integridade",
  },
  {
    risk: "Falha na autenticação de usuários com acesso remoto por VPN",
    probability: 2,
    impact: 4,
    score: 8,
    classification: "Alto",
    countermeasure:
      "MFA, política de senhas fortes e revisão periódica de contas.",
    principle: "Autenticidade",
  },
  {
    risk: "Interrupção do sistema de e-mail corporativo por ataque ou falha",
    probability: 2,
    impact: 2,
    score: 4,
    classification: "Médio",
    countermeasure:
      "Filtro antispam/antiphishing, redundância e backup de caixas de e-mail.",
    principle: "Disponibilidade",
  },
  {
    risk: "Malware/ransomware em estações de trabalho ou servidores",
    probability: 2,
    impact: 4,
    score: 8,
    classification: "Alto",
    countermeasure:
      "Antivírus/EDR, sistemas atualizados e treinamento contra phishing.",
    principle: "Integridade e Disponibilidade",
  },
];

const justifications = [
  {
    title: "1. Acesso não autorizado aos dados de clientes",
    text: "Como já houve incidente no cenário, a chance de recorrência é alta e o impacto é crítico. Limitar acesso por perfil e registrar trilhas de auditoria reduz exposição e aumenta rastreabilidade.",
    principle: "Confidencialidade",
  },
  {
    title: "2. Ataque DDoS ao site",
    text: "A indisponibilidade do e-commerce por horas afeta receita e reputação. Proteção anti-DDoS, WAF e CDN ajudam a absorver tráfego malicioso e manter o serviço online.",
    principle: "Disponibilidade",
  },
  {
    title: "3. Vazamento de dados do banco de dados",
    text: "Dados pessoais e financeiros possuem alto risco legal e reputacional. Criptografia e restrição de acesso reduzem impacto e dificultam exploração dos dados vazados.",
    principle: "Confidencialidade",
  },
  {
    title: "4. Alteração indevida de pedidos e pagamentos",
    text: "Mudanças sem autorização geram perdas financeiras e conflitos operacionais. Auditoria e segregação de funções previnem fraudes e facilitam detecção de desvios.",
    principle: "Integridade",
  },
  {
    title: "5. Falhas de autenticação na VPN",
    text: "Acesso remoto aumenta superfície de ataque. MFA e política robusta de credenciais fortalecem validação de identidade e reduzem invasões por contas comprometidas.",
    principle: "Autenticidade",
  },
  {
    title: "6. Indisponibilidade do e-mail corporativo",
    text: "O e-mail é canal central de operação. Redundância, backup e filtros de segurança reduzem interrupções e minimizam impacto sobre processos críticos.",
    principle: "Disponibilidade",
  },
  {
    title: "7. Infecção por malware/ransomware",
    text: "Ambientes com trabalho remoto e troca frequente de e-mails são alvos recorrentes. EDR, atualização contínua e capacitação dos usuários diminuem risco técnico e humano.",
    principle: "Integridade e Disponibilidade",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop} aria-hidden />
      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Emanuel Inácio "Rico"</p>
          <h1>Análise de Riscos em Segurança da Informação</h1>
          <p className={styles.subtitle}>
            Escopo do exercício para a TechStore Ltda. com mapeamento de riscos,
            contramedidas e recomendações finais.
          </p>
          <div className={styles.badges}>
            <span>Confidencialidade</span>
            <span>Integridade</span>
            <span>Disponibilidade</span>
            <span>Autenticidade</span>
          </div>
          <div className={styles.actions}>
            <Link href="/apresentacao" className={styles.primaryAction}>
              Abrir modo apresentação
            </Link>
          </div>
        </header>

        <section className={styles.card}>
          <h2>1. Objetivo e Entregáveis</h2>
          <p>
            Identificar, classificar e priorizar riscos de segurança da
            informação, propondo controles técnicos e administrativos para
            reduzir a probabilidade de novos incidentes.
          </p>
          <ul>
            <li>Tabela de mapeamento de riscos com matriz P x I.</li>
            <li>Justificativa individual dos riscos e contramedidas.</li>
            <li>Conclusão com prioridades de ação para a organização.</li>
          </ul>
        </section>

        <section className={styles.card}>
          <h2>2. Tabela de Mapeamento de Riscos</h2>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Risco identificado</th>
                  <th>P</th>
                  <th>I</th>
                  <th>P x I</th>
                  <th>Classificação</th>
                  <th>Contramedida</th>
                  <th>Princípio protegido</th>
                </tr>
              </thead>
              <tbody>
                {riskRows.map((item) => (
                  <tr key={item.risk}>
                    <td>{item.risk}</td>
                    <td>{item.probability}</td>
                    <td>{item.impact}</td>
                    <td>{item.score}</td>
                    <td>
                      <span
                        className={`${styles.tag} ${
                          item.classification === "Extremo"
                            ? styles.extreme
                            : item.classification === "Alto"
                            ? styles.high
                            : styles.medium
                        }`}
                      >
                        {item.classification}
                      </span>
                    </td>
                    <td>{item.countermeasure}</td>
                    <td>{item.principle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.card}>
          <h2>3. Justificativa dos Riscos e Contramedidas</h2>
          <div className={styles.grid}>
            {justifications.map((item) => (
              <article key={item.title} className={styles.justification}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>Princípio protegido: {item.principle}</small>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.card}>
          <h2>4. Conclusão</h2>
          <p>
            A TechStore apresenta fragilidades relevantes em controles de acesso
            e resiliência operacional. A priorização imediata deve focar riscos
            classificados como extremo e alto, com adoção de MFA, criptografia,
            proteção anti-DDoS, trilhas de auditoria, backup e treinamento de
            usuários.
          </p>
          <p>
            Com a execução dessas medidas, a empresa eleva maturidade de
            segurança e reduz impacto de incidentes sobre operação, finanças e
            reputação.
          </p>
        </section>
      </main>
    </div>
  );
}
