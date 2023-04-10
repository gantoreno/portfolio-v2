import styles from "./Main.module.css"

const Main: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...rest
}) => {
  return (
    <main className={styles.main} {...rest}>
      {children}
    </main>
  )
}

export default Main
