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

  const isPlaceholder = !logo

  return (
    <article className={styles.card}>
      <div className={isPlaceholder ? `${styles.top} ${styles.topSplit}` : styles.top}>
        <div className={isPlaceholder ? `${styles.logoSlot} ${styles.logoSlotEmpty}` : styles.logoSlot}>
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
          <div className={styles.codeBox}>
            <span className={styles.codeLabel}>
              CODE: <strong className={styles.codeLabelStrong}>{code}</strong>
            </span>
            <div className={styles.copyIconWrap}>
              <img src={copyIcon} alt="" className={styles.copyIcon} />
            </div>
          </div>
        </button>
      </div>

      <div className={styles.content}>
        {benefits ? (
          <>
            <div className={styles.body}>
              <ul className={styles.benefits}>
                {benefits.map((item) => (
                  <li key={item} className={styles.benefit}>
                    <img src={starIcon} alt="" className={styles.star} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="primary" className={styles.action} onClick={onAction}>
              {actionIcon ? (
                <img src={bonusIcon} alt="" className={styles.actionIcon} />
              ) : null}
              {actionLabel}
            </Button>
          </>
        ) : (
          <div className={styles.placeholderContent}>
            <div className={styles.placeholder}>
              <p className={styles.placeholderTitle}>THIS SPOT CAN BE <span>YOURS</span>!</p>
              <p className={styles.placeholderText}>{placeholderText}</p>
            </div>

            <Button variant="primary" className={styles.action} onClick={onAction}>
              {actionLabel}
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}

export default PartnerCard
export type { PartnerCardProps }
