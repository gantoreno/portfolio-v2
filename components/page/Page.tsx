import classNames from "classnames"

import useDarkMode from "../../hooks/useDarkMode"

import styles from "./Page.module.css"

type PageProps = {
  children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
  const [isDarkMode] = useDarkMode()

  return (
    <div
      className={classNames(styles.page, {
        [styles.dark]: isDarkMode,
      })}
    >
      {children}
    </div>
  )
}

export default Page
