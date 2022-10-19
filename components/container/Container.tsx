import styles from "./Container.module.css"

const Container: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...rest
}) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  )
}

export default Container
