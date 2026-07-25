import { useEffect, useRef, useState } from 'react'
import Button from '@/components/Button/Button'
import CopyToast from '@/components/CopyToast/CopyToast'
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

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  // Fallback for older browsers / non-secure contexts
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function PartnerCard({
  logo,
  logoAlt = '',
  code = 'DONA',
  benefits,
  placeholderText,
  actionLabel,
  actionIcon = false,
  onAction,
}: PartnerCardProps) {
  const [toastVisible, setToastVisible] = useState(false)
  const toastTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (toastTimer.current !== null) {
        window.clearTimeout(toastTimer.current)
      }
    }
  }, [])

  async function handleCopy() {
    try {
      await copyText(code)
      setToastVisible(true)

      if (toastTimer.current !== null) {
        window.clearTimeout(toastTimer.current)
      }

      toastTimer.current = window.setTimeout(() => {
        setToastVisible(false)
        toastTimer.current = null
      }, 2000)
    } catch {
      // Clipboard may be unavailable.
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
          aria-label={`Copy code ${code}`}
        >
          <div className={styles.codeBox}>
            <span className={styles.codeLabel}>
              CODE: <strong className={styles.codeLabelStrong}>{code}</strong>
            </span>
            <div className={styles.copyIconWrap} onClick={handleCopy}>
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
              <p className={styles.placeholderTitle}>
                THIS SPOT CAN BE <span>YOURS</span>!
              </p>
              <p className={styles.placeholderText}>{placeholderText}</p>
            </div>

            <Button variant="primary" className={styles.action} onClick={onAction}>
              {actionLabel}
            </Button>
          </div>
        )}
      </div>

      <CopyToast message={`Copied “${code}”`} visible={toastVisible} />
    </article>
  )
}

export default PartnerCard
export type { PartnerCardProps }
