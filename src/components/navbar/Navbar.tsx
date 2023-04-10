import Image from "next/image"
import { default as NextLink } from "next/link"
import { BiMoon, BiSun } from "react-icons/bi"

import useDarkMode from "../../hooks/useDarkMode"
import usePageLoad from "../../hooks/usePageLoad"
import Center from "../center/Center"
import Container from "../container/Container"
import Link from "../link/Link"

import styles from "./Navbar.module.css"

import logo from "../../assets/svg/logo.svg"

const Logo: React.FC = () => {
  return (
    <NextLink href="/" className={styles.home}>
      <a aria-label="Home">
        <Image
          src={logo}
          className={styles.logo}
          width={24}
          height={48}
          alt="Logo"
        />
      </a>
    </NextLink>
  )
}

const Navbar: React.FC = () => {
  const isLoaded = usePageLoad()
  const [darkMode, toggleDarkMode] = useDarkMode()

  if (!isLoaded) {
    return null
  }

  const Icon = darkMode ? BiSun : BiMoon

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <div className={styles.links}>
            <Link href="/#about-me">About</Link>
            <Link href="/#work-and-projects">Work</Link>
            <Link href="/#blog">Blog</Link>
            <Center axis="vertical">
              <button
                aria-label={`Toggle ${darkMode ? "light" : "dark"} mode`}
                className={styles.toggler}
                onClick={() => toggleDarkMode()}
              >
                <Icon className={styles.icon} />
              </button>
            </Center>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
