import { createPortal } from 'react-dom'
import styles from './CopyToast.module.css'

type CopyToastProps = {
  message: string
  visible: boolean
}

function CopyToast({ message, visible }: CopyToastProps) {
  if (!visible) return null

  return createPortal(
    <div className={styles.toast} role="status" aria-live="polite">
      {message}
    </div>,
    document.body,
  )
}

export default CopyToast
