import type { PropsWithChildren } from 'react'
import styles from './Container.module.css'

type ContainerProps = PropsWithChildren<{
  className?: string
}>

function Container({ children, className }: ContainerProps) {
  return (
    <div className={className ? `${styles.container} ${className}` : styles.container}>
      {children}
    </div>
  )
}

export default Container
