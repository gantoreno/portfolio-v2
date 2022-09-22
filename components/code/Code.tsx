import classNames from "classnames"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vs, vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"

import useDarkMode from "../../hooks/useDarkMode"

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
  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <div
      className={classNames(styles.codeBlock, {
        [styles.compact]: compact,
      })}
    >
      <SyntaxHighlighter
        language={language}
        style={darkMode ? vscDarkPlus : vs}
        wrapLines={true}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default Object.assign(Code, {
  Block: CodeBlock,
})
