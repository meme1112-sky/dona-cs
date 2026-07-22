import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import donaLogo from '@/assets/dona.png'
import csLogo from '@/assets/CS.png'
import bannerImage from '@/assets/image00004 1 1.png'
import bonusIcon from '@/assets/Icon wrapper.png'
import sniperIcon from '@/assets/Group.png'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <img src={donaLogo} alt="dona" className={styles.donaLogo} />
              <img src={csLogo} alt="CS" className={styles.csLogo} />
            </h1>

            <p className={styles.tagline}>
            <img src={sniperIcon} alt="Icon" className={styles.sniperIcon} />
              <span>
                Counter-Strike&apos;s{' '}
                <span className={styles.taglineAccent}>Most Wanted Women</span>
              </span>
            </p>

            <p className={styles.description}>
              I create Counter-Strike content and apparently run an
              international criminal empire in my spare time.
            </p>

            <div className={styles.actions}>
              <Button href="#bonuses" variant="primary">
                <img src={bonusIcon} alt="" className={styles.bonusIcon} />
                Bonuses
              </Button>
              <Button href="#contact" variant="secondary" className={styles.contactIcon}>
                Contact Me
              </Button>
            </div>
          </div>

          <div className={styles.banner}>
            <img
              src={bannerImage}
              alt="donaCS portrait"
              className={styles.bannerImage}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
