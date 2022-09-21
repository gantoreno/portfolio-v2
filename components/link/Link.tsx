import NextLink, { LinkProps as NextLinkProps } from "next/link"

import styles from "./Link.module.css"

type LinkProps = NextLinkProps & {
  children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a className={styles.link} rel="noopener noreferrer" target="_blank">
        {children}
        <span className={styles.pointer}> ↗</span>
      </a>
    </NextLink>
  )
}

export default Link
