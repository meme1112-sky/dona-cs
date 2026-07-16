import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import styles from './Container.module.css'

type ContainerProps = PropsWithChildren<ComponentPropsWithoutRef<'div'>>

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={className ? `${styles.container} ${className}` : styles.container}
    >
      {children}
    </div>
  )
}

export default Container
