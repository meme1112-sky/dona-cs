import Button from '@/components/Button/Button'
import starIcon from '@/assets/Star 1.png'
import copyIcon from '@/assets/copy (2) 1.png'
import bonusIcon from '@/assets/Icon wrapper.png'
import styles from './PartnerCard.module.css'

type PartnerCardProps = {
  logo?: string
  logoAlt?: string
  code?: string
  benefits?: string[]
  placeholderTitle?: string
  placeholderText?: string
  actionLabel: string
  actionIcon?: boolean
  onAction?: () => void
}

function PartnerCard({
  logo,
  logoAlt = '',
  code = 'DONA',
  benefits,
  placeholderTitle,
  placeholderText,
  actionLabel,
  actionIcon = false,
  onAction,
}: PartnerCardProps) {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      // Clipboard may be unavailable in non-secure contexts.
    }
  }

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.logoSlot}>
          {logo ? (
            <img src={logo} alt={logoAlt} className={styles.logo} />
          ) : null}
        </div>

        <button
          type="button"
          className={styles.code}
          onClick={handleCopy}
          aria-label={`Copy code ${code}`}
        >
          <span className={styles.codeLabel}>
            CODE: <strong className={styles.codeLabelStrong}> {code}</strong>
          </span>
          <img src={copyIcon} alt="" className={styles.copyIcon} />
        </button>
      </div>

      <div className={styles.body}>
        {benefits ? (
          <ul className={styles.benefits}>
            {benefits.map((item) => (
              <li key={item} className={styles.benefit}>
                <img src={starIcon} alt="" className={styles.star} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.placeholder}>
            <p className={styles.placeholderTitle}>THIS SPOT CAN BE <span>YOURS</span>!</p>
            <p className={styles.placeholderText}>{placeholderText}</p>
          </div>
        )}
      </div>

      <Button variant="primary" className={styles.action} onClick={onAction}>
        {actionIcon ? (
          <img src={bonusIcon} alt="" className={styles.actionIcon} />
        ) : null}
        {actionLabel}
      </Button>
    </article>
  )
}

export default PartnerCard
export type { PartnerCardProps }
