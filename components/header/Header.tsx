import Spacer from "../spacer/Spacer"

import styles from "./Header.module.css"

type HeaderProps = {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Spacer top="8rem" bottom="8rem">
        {children}
      </Spacer>
    </header>
  )
}

export default Header
