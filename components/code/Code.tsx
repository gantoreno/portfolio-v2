import classNames from "classnames"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

import useDarkMode from "../../hooks/useDarkMode"
import usePageLoad from "../../hooks/usePageLoad"
import gabrielDark from "../../themes/gabrielDark"
import gabrielLight from "../../themes/gabrielLight"

import styles from "./Code.module.css"

type CodeProps = {
  children: React.ReactNode
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

type CodeBlockProps = {
  code: string
  language?: string
  compact?: boolean
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "text",
  compact = false,
}) => {
  const isLoaded = usePageLoad()
  const [darkMode] = useDarkMode()

  if (!isLoaded) {
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
