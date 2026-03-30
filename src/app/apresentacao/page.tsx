import Link from "next/link";
import styles from "./presentation.module.css";

const slides = [
  {
    id: "01",
    title: "Análise de Riscos - TechStore Ltda.",
    content:
      "Objetivo: identificar, classificar e priorizar riscos de segurança da informação, com contramedidas alinhadas aos princípios de segurança.",
    bullets: [
      "Baseado no escopo do exercício",
      "Foco em riscos operacionais e de dados",
      "Priorização via matriz P x I",
    ],
  },
  {
    id: "02",
    title: "Riscos Críticos Prioritários",
    content:
      "Os riscos de maior urgência exigem ações imediatas para reduzir impacto financeiro, legal e reputacional.",
    bullets: [
      "Acesso não autorizado aos dados de clientes (12 - Extremo)",
      "Ataques DDoS ao site de vendas (9 - Alto)",
      "Vazamento de dados sensíveis do banco (8 - Alto)",
    ],
  },
  {
    id: "03",
    title: "Contramedidas Essenciais",
    content:
      "Conjunto mínimo recomendado para elevar maturidade de segurança em curto prazo.",
    bullets: [
      "Controle de acesso por perfil e menor privilégio",
      "MFA para acessos remotos e revisão periódica de contas",
      "Criptografia, logs, auditoria e trilhas de alteração",
      "Proteção anti-DDoS, WAF, CDN e monitoramento contínuo",
    ],
  },
  {
    id: "04",
    title: "Princípios Protegidos",
    content:
      "As recomendações reforçam os pilares fundamentais da segurança da informação.",
    bullets: [
      "Confidencialidade: proteção contra exposição de dados",
      "Integridade: prevenção de alterações indevidas",
      "Disponibilidade: continuidade dos serviços críticos",
      "Autenticidade: validação de identidade de usuários",
    ],
  },
  {
    id: "05",
    title: "Plano de Ação Recomendado",
    content:
      "Estratégia de execução em ondas curtas para reduzir risco rapidamente.",
    bullets: [
      "Semana 1: MFA, revisão de acessos e políticas de senha",
      "Semana 2: proteção anti-DDoS, WAF e monitoração",
      "Semana 3: criptografia e melhoria de auditoria",
      "Semana 4: treinamento anti-phishing e simulações",
    ],
  },
  {
    id: "06",
    title: "Conclusão",
    content:
      "A TechStore pode reduzir significativamente sua exposição com medidas técnicas e administrativas coordenadas e contínuas.",
    bullets: [
      "Tratar primeiro riscos extremos e altos",
      "Formalizar governança e rotina de revisão de riscos",
      "Manter treinamento e monitoramento permanentes",
    ],
  },
];

export default function PresentationPage() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Modo Apresentação</h1>
        <nav>
          <Link href="/">Voltar ao relatório</Link>
        </nav>
      </header>

      <section className={styles.deck}>
        {slides.map((slide) => (
          <article key={slide.id} className={styles.slide}>
            <p className={styles.slideId}>Slide {slide.id}</p>
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
            <ul>
              {slide.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
