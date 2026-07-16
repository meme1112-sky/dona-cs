import { useEffect, useRef, useState, type FormEvent } from 'react'
import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import planeLeft from '@/assets/Paper_Plane_PNG_Clip_Art_Image-1492395217 1.png'
import planeRight from '@/assets/Paper_Plane_PNG_Clip_Art_Image-1492395217 2.png'
import trailLeft from '@/assets/Vector 7.png'
import trailRight from '@/assets/Vector 8.png'
import styles from './Contact.module.css'

const inquiryTypes = [
  'Partnership',
  'Sponsorship',
  'Media / Press',
  'General question',
]

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [inquiryType, setInquiryType] = useState('')
  const [message, setMessage] = useState('')
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const inquiryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isInquiryOpen) return

    function onPointerDown(event: MouseEvent) {
      if (!inquiryRef.current?.contains(event.target as Node)) {
        setIsInquiryOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsInquiryOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isInquiryOpen])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section id="contact" className={styles.contact}>
      {/* Left decoration: plane + dashed trail */}
      <div className={styles.decorLeft} aria-hidden="true">
        <img src={trailLeft} alt="" className={styles.trailLeft} />
        <img src={planeLeft} alt="" className={styles.planeLeft} />
      </div>

      {/* Right decoration: plane + dashed trail */}
      <div className={styles.decorRight} aria-hidden="true">
        <img src={trailRight} alt="" className={styles.trailRight} />
        <img src={planeRight} alt="" className={styles.planeRight} />
      </div>

      <Container className={styles.inner}>
        {/* 1. First part — heading */}
        <div className={styles.first}>
          <h2 className={styles.title}>
            <span className={styles.titleAccent}>CONTACT</span> ME
          </h2>
          <p className={styles.subtitle}>
            Claim exclusive bonuses from my partners!
          </p>
        </div>

        {/* 2. Contact me part — form */}
        <div className={styles.formPart}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formIntro}>
              <h3 className={styles.formTitle}>Your message</h3>
              <p className={styles.formHint}>
                Take a quick look at our{' '}
                <a href="#faq" className={styles.formHintLink}>
                  Frequently Asked Questions
                </a>{' '}
                before reaching out — you might find the solution right away and
                save valuable time.
              </p>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Your Name / Company</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your personal or company name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email Address</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </label>

            <div className={styles.field} ref={inquiryRef}>
              <span className={styles.label} id="inquiry-type-label">
                Inquiry Type
              </span>
              <input type="hidden" name="inquiryType" value={inquiryType} />
              <button
                type="button"
                className={`${styles.select} ${inquiryType ? styles.selectValue : styles.selectPlaceholder}`}
                aria-haspopup="listbox"
                aria-expanded={isInquiryOpen}
                aria-labelledby="inquiry-type-label"
                onClick={() => setIsInquiryOpen((open) => !open)}
              >
                {inquiryType || 'Select inquiry type'}
              </button>
              {isInquiryOpen ? (
                <ul
                  className={styles.selectMenu}
                  role="listbox"
                  aria-labelledby="inquiry-type-label"
                >
                  {inquiryTypes.map((type) => (
                    <li key={type} role="option" aria-selected={inquiryType === type}>
                      <button
                        type="button"
                        className={styles.selectOption}
                        onClick={() => {
                          setInquiryType(type)
                          setIsInquiryOpen(false)
                        }}
                      >
                        {type}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Message</span>
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Type your question here..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <Button type="submit" variant="primary" className={styles.submit}>
              Send Message
            </Button>
          </form>
        </div>

        {/* 3. Last part — bottom glow / curve */}
        {/* <div className={styles.last} aria-hidden="true" /> */}
      </Container>
    </section>
  )
}

export default Contact
