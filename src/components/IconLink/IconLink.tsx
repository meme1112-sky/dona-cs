import { useState } from 'react'
import { FaTwitch, FaYoutube, FaInstagram, FaSteam } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import styles from './IconLink.module.css'

const socialLinks = [
  { Icon: FaTwitch, label: 'Twitch', href: 'https://www.twitch.tv/donacs' },
  { Icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@donacsgo' },
  { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/donacsgo' },
  { Icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com/donacsgo' },
  { Icon: FaSteam, label: 'Steam', href: 'https://steamcommunity.com/id/donacsgo/' },
]

function IconLink() {
  const [clicked, setClicked] = useState<Set<string>>(new Set())

  return (
    <div className={styles.container}>
      {socialLinks.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={clicked.has(label) ? `${styles.link} ${styles.clicked}` : styles.link}
          aria-label={label}
          onClick={() => setClicked((prev) => new Set(prev).add(label))}
        >
          <Icon className={styles.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default IconLink
