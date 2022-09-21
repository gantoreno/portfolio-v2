import NextLink, { LinkProps as NextLinkProps } from "next/link"

import styles from "./Link.module.css"

type LinkProps = NextLinkProps & {
  children: React.ReactNode
  target?: string
}

const Link: React.FC<LinkProps> = ({ href, children, target = "_blank" }) => {
  return (
    <NextLink href={href}>
      <a className={styles.link} rel="noopener noreferrer" target={target}>
        {children}
        <span className={styles.pointer}> ↗</span>
      </a>
    </NextLink>
  )
}

export default Link
