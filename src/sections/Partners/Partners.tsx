import Container from '@/components/Container/Container'
import PartnerCard from '@/components/PartnerCard/PartnerCard'
import yeetLogo from '@/assets/Vector.png'
import awpImage from '@/assets/4AWP PRINCE 1.png'
import styles from './Partners.module.css'

const partnerBenefits = ['100% DEPOSIT BONUS', '3 FREE CASES']

function Partners() {
  return (
    <section id="bonuses" className={styles.partners}>
      <Container>
        <div className={styles.intro}>
          <div className={styles.copy}>
            <h2 className={styles.title}>
              MY <span className={styles.titleAccent}>PARTNERS</span>
            </h2>
            <p className={styles.subtitle}>
              Claim exclusive bonuses from my partners!
            </p>
          </div>

          <div className={styles.weapon} aria-hidden="true">
            <img
              src={awpImage}
              alt=""
              className={styles.weaponImage}
            />
          </div>
        </div>

        <div className={styles.grid}>
          <PartnerCard
            logo={yeetLogo}
            logoAlt="YEET.com"
            benefits={partnerBenefits}
            actionLabel="Bonuses"
            actionIcon
          />
          <PartnerCard
            logo={yeetLogo}
            logoAlt="YEET.com"
            benefits={partnerBenefits}
            actionLabel="Bonuses"
            actionIcon
          />
          <PartnerCard
            placeholderTitle="THIS SPOT CAN BE YOURS!"
            placeholderText="Contact Dona and secure yourself a spot!"
            actionLabel="Contact"
          />
        </div>
      </Container>
    </section>
  )
}

export default Partners
