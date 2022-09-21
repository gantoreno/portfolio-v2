import styles from "./Section.module.css"

type SectionProps = {
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <div className={styles.section}>{children}</div>
}

const SectionBlock: React.FC<SectionProps> = ({ children }) => {
  return <div className={styles.block}>{children}</div>
}

export default Object.assign(Section, {
  Block: SectionBlock,
})
