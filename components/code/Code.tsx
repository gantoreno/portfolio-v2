import classNames from "classnames"
import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import useDarkMode from "../../hooks/useDarkMode"
import gabrielDark from "../../themes/gabrielDark"
import gabrielLight from "../../themes/gabrielLight"

import styles from "./Code.module.css"

type CodeProps = {
  children: React.ReactNode
}

type CodeBlockProps = {
  code: string
  language?: string
  compact?: boolean
}

const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <code className={styles.code}>
      <span className={styles.quote}>`</span>
      {children}
      <span className={styles.quote}>`</span>
    </code>
  )
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "text",
  compact = false,
}) => {
  const [darkMode] = useDarkMode()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <div
      className={classNames(styles.codeBlock, {
        [styles.compact]: compact,
      })}
    >
      <SyntaxHighlighter
        language={language}
        style={darkMode ? gabrielDark : gabrielLight}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default Object.assign(Code, {
  Block: CodeBlock,
})
