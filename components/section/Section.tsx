import styles from "./Section.module.css"

type SectionProps = {
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className={styles.section}>{children}</section>
}

const SectionBlock: React.FC<SectionProps> = ({ children }) => {
  return <div className={styles.block}>{children}</div>
}

export default Object.assign(Section, {
  Block: SectionBlock,
})
