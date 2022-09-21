import { default as NextLink } from "next/link"
import { BiMoon, BiSun } from "react-icons/bi"

import useDarkMode from "../../hooks/useDarkMode"
import Center from "../center/Center"
import Container from "../container/Container"
import Link from "../link/Link"

import styles from "./Navbar.module.css"

const Logo: React.FC = () => {
  return (
    <NextLink href="/" className={styles.home}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 100"
        className={styles.logo}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="Layer_2-2" data-name="Layer 2">
              <g id="Layer_1-2-2" data-name="Layer 1-2">
                <path d="M50,37.5a25,25,0,0,0-6.62-16.95A18.74,18.74,0,0,0,50,6.25a6.25,6.25,0,0,0-12.5,0,6.25,6.25,0,0,1-6.25,6.25H25a25,25,0,0,0,0,50A12.5,12.5,0,1,1,12.5,75,6.25,6.25,0,0,0,0,75,25,25,0,1,0,41.53,56.25,24.92,24.92,0,0,0,50,37.5Zm-37.5,0A12.5,12.5,0,1,1,25,50,12.5,12.5,0,0,1,12.5,37.5Z" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </NextLink>
  )
}

const Navbar: React.FC = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()

  const Icon = darkMode ? BiSun : BiMoon

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <div className={styles.links}>
            <Link href="#about">About</Link>
            <Link href="#work">Work</Link>
            <Link href="#blog">Blog</Link>
            <Center axis="vertical">
              <Icon className={styles.icon} onClick={() => toggleDarkMode()} />
            </Center>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
