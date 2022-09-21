import styles from "./Page.module.css"

type PageProps = {
  children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <div className={styles.page}>{children}</div>
}

export default Page
