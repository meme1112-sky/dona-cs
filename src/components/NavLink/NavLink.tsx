import styles from './NavLink.module.css'
import BonusesIcon from '@/assets/layer1.png'
import ContactIcon from '@/assets/email (1) 1.png'

function NavLink() {
  return (
    <div className={styles.container}>
      <a href="#bonuses" className={styles.iconGroup}>
        <img src={BonusesIcon} alt="" className={styles.icon} />
        <span className={styles.iconTitle}>bonuses</span>
      </a>

      <a href="#contact" className={styles.iconGroup}>
        <img src={ContactIcon} alt="" className={styles.icon} />
        <span className={styles.iconTitle}>contact</span>
      </a>
    </div>
  )
}

export default NavLink
