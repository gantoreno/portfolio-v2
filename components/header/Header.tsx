import Spacer from "../spacer/Spacer"

import styles from "./Header.module.css"

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Spacer top="8rem" bottom="8rem">
        {children}
      </Spacer>
    </header>
  )
}

export default Header
