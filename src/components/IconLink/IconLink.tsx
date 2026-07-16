import {
  FaTwitch,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaSteam,
} from 'react-icons/fa'
import styles from './IconLink.module.css'

const socialLinks = [
  { Icon: FaTwitch, label: 'Twitch', href: '#' },
  { Icon: FaYoutube, label: 'YouTube', href: '#' },
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaTiktok, label: 'TikTok', href: '#' },
  { Icon: FaTwitter, label: 'Twitter', href: '#' },
  { Icon: FaSteam, label: 'Steam', href: '#' },
]

function IconLink() {
  return (
    <div className={styles.container}>
      {socialLinks.map(({ Icon, label, href }) => (
        <a key={label} href={href} className={styles.link} aria-label={label}>
          <Icon className={styles.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default IconLink
