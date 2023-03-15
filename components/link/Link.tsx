import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { BiLinkExternal } from "react-icons/bi"

import styles from "./Link.module.css"

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href = "#",
  children,
  target,
}) => {
  return (
    <NextLink href={href}>
      <a className={styles.link} rel="noopener noreferrer" target={target}>
        {children}
        <span className={styles.pointer}>
          <BiLinkExternal />
        </span>
      </a>
    </NextLink>
  )
}

export default Link
