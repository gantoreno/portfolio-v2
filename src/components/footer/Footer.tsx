import Link from "../link/Link"
import Center from "../center/Center"
import Grid from "../grid/Grid"
import Spacer from "../spacer/Spacer"

import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Spacer top="8rem" bottom="2rem">
        <Grid columns={[1, 4]}>
          <Center axis="vertical">
            <strong>Follow me</strong>
          </Center>
          <Spacer align="right">
            <Spacer inline>
              <Link href="https://twitter.com/gantoreno" target="_blank">
                Twitter
              </Link>
            </Spacer>
            <Spacer left="1rem" inline>
              <Link href="https://instagram.com/gantoreno" target="_blank">
                Instagram
              </Link>
            </Spacer>
            <Spacer left="1rem" inline>
              <Link href="https://github.com/gantoreno" target="_blank">
                GitHub
              </Link>
            </Spacer>
            <Spacer left="1rem" inline>
              <Link href="https://linkedin.com/in/gantoreno" target="_blank">
                LinkedIn
              </Link>
            </Spacer>
          </Spacer>
        </Grid>
      </Spacer>
      <Spacer bottom="8rem">
        Copyright &copy; Gabriel Moreno, {new Date().getFullYear()}. All rights
        reserved.
      </Spacer>
    </footer>
  )
}

export default Footer
