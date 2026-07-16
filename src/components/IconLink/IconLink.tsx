import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './IconLink.module.css'
import twitchIcon from '@/assets/twitch (2) 1.png'
import youtubeIcon from'@/assets/youtube (3) 1.png'
import instagramIcon from '@/assets/instagram (3) 1.png'
import tiktokIcon from'@/assets/tik-tok (1) 1.png'
import twitterIcon from '@/assets/twitter (4) 1.png'
import steamIcon from'@/assets/steam (2) 1.png'

function IconLink() {
  return (
    <a className={styles.container}>
      <img src={twitchIcon} alt="Icon" className={styles.icon} />
      <img src={youtubeIcon} alt="Icon" className={styles.icon} />
      <img src={instagramIcon} alt="Icon" className={styles.icon} />
      <img src={tiktokIcon} alt="Icon" className={styles.icon} />
      <img src={twitterIcon} alt="Icon" className={styles.icon} />
      <img src={steamIcon} alt="Icon" className={styles.icon} />
    </a>
  )
}

export default IconLink
