import styles from "./Spacer.module.css"

type SpacerProps = {
  top?: string
  right?: string
  bottom?: string
  left?: string
  children: React.ReactNode
  align?: "left" | "right" | "center" | "justify"
  padding?: boolean
  inline?: boolean
}

const Spacer: React.FC<SpacerProps> = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  inline = false,
  padding = false,
  align = "left",
  children,
}) => {
  return (
    <div
      style={{
        [padding ? "padding" : "margin"]: `${top} ${right} ${bottom} ${left}`,
        display: inline ? "inline" : "block",
        textAlign: align,
      }}
    >
      {children}
    </div>
  )
}

export default Spacer
