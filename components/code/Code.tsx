import { CodeBlock as ReactCodeBlock } from "react-code-blocks"

import styles from "./Code.module.css"

import gabriel from "../../themes/gabriel"
import classNames from "classnames"

type CodeProps = {
  children: React.ReactNode
}

type CodeBlockProps = {
  code: string
  language?: string
  compact?: boolean
}

const Quote = () => <span className={styles.quote}>`</span>

const Code: React.FC<CodeProps> = ({ children }) => {
  const quoted = (children: React.ReactNode) => {
    return (
      <>
        <Quote />
        {children}
        <Quote />
      </>
    )
  }

  return <code className={styles.code}>{quoted(children)}</code>
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "text",
  compact = false,
}) => {
  return (
    <div
      className={classNames(styles.codeBlock, {
        [styles.compact]: compact,
      })}
    >
      <ReactCodeBlock
        text={code}
        language={language}
        theme={gabriel}
        wrapLines={true}
        showLineNumbers={false}
      />
    </div>
  )
}

export default Object.assign(Code, {
  Block: CodeBlock,
})
