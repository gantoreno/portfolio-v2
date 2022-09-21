import styles from "./Container.module.css"

type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  )
}

export default Container
