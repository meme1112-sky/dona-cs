import Container from '@/components/Container/Container'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'WHAT IS SOLANA CASINOS AND HOW DOES THE PLATFORM WORK?',
    answer:
      'Solana casinos are online casino experiences built around the Solana ecosystem. On this platform you can browse participating casinos, see available offers, and then use Solana to play where supported.',
  },
  {
    question: 'CAN I PLAY DIRECTLY ON YOUR WEBSITE?',
    answer:
      'No. This site helps you discover and access supported casinos. You will be redirected to the casino platform to start playing.',
  },
  {
    question: 'WHICH CASINOS SUPPORT PAYMENTS IN SOLANA (SOL)?',
    answer:
      'Participating casinos vary by region and promotion. Check each casino listing for the most up-to-date payment options and supported currencies.',
  },
  {
    question: 'HOW CAN I CLAIM BONUSES AND PROMO CODES?',
    answer:
      'Bonuses and promo codes are shown on the casino offer cards. Copy the code (if required) and follow the on-site redemption steps before depositing or starting a game.',
  },
  {
    question: 'IS IT SAFE TO PLAY AT THE CASINOS YOU PROMOTE?',
    answer:
      'We only promote casinos we believe are reputable. Still, we recommend reviewing the casino terms, supported payment methods, and responsible gambling tools before you play.',
  },
  {
    question: 'WHAT SHOULD I DO IF I FACE ISSUES WITH DEPOSITS OR WITHDRAWALS?',
    answer:
      'If a transaction fails or takes longer than expected, confirm the network and account details, then contact the casino support with any transaction references. For payment issues, it helps to include timestamps and wallet addresses.',
  },
  {
    question: 'HOW CAN I CONTACT SOLANA CASINOS SUPPORT?',
    answer:
      'Each casino listing includes the correct support channel. Use the “Help” or “Support” page on the redirected casino site for the fastest response.',
  },
]

function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <Container className={styles.inner} style={{ maxWidth: '1200px' }}>
        <header className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
          <p className={styles.subtitle}>Claim exclusive bonuses from my partners!</p>
        </header>

        <div className={styles.list}>
          {faqs.map(({ question, answer }) => (
            <details key={question} className={styles.item}>
              <summary className={styles.summary}>
                <span className={styles.question}>{question}</span>
                <span className={styles.chevron} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>{answer}</div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQ

