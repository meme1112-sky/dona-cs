import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './NavLink.module.css'
import BonusesIcon from '@/assets/layer1.png'
import ContactIcon from'@/assets/email (1) 1.png'


function NavLink() {
  return (
    <a className={styles.container}>
      <div className={styles.iconGroup}>
        <img src={BonusesIcon} alt="Icon" className={styles.icon} />
        <p className={styles.iconTitle}>bonuses</p>
      </div>
      
      <div className={styles.iconGroup}>
        <img src={ContactIcon} alt="Icon" className={styles.icon} />
        <p className={styles.iconTitle}>contact</p>
      </div>
    </a>
  )
}

export default NavLink
