import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'

const MIN_VISIBLE_MS = 700

function Preloader() {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const start = Date.now()

    function finish() {
      const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - start))
      window.setTimeout(() => setIsHidden(true), remaining)
    }

    if (document.readyState === 'complete') {
      finish()
      return
    }

    window.addEventListener('load', finish)
    return () => window.removeEventListener('load', finish)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isHidden ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isHidden])

  return (
    <div
      className={isHidden ? `${styles.overlay} ${styles.hidden}` : styles.overlay}
      role="status"
      aria-live="polite"
      aria-hidden={isHidden}
    >
      <div className={styles.logo} aria-hidden="true">
        <span className={styles.donaText}>dona</span>
        <span className={styles.csText}>CS</span>
      </div>
      <div className={styles.bar} />
      <span className={styles.srOnly}>Loading dona CS…</span>
    </div>
  )
}

export default Preloader
