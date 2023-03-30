import styles from "./Spacer.module.css"

type SpacerProps = React.HTMLAttributes<HTMLElement> & {
  top?: string
  right?: string
  bottom?: string
  left?: string
  align?: "left" | "right" | "center" | "justify"
  padding?: boolean
  inline?: boolean
  height?: string
}

const Spacer: React.FC<SpacerProps> = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  inline = false,
  padding = false,
  align = "left",
  height = "inherit",
  children,
}) => {
  return (
    <div
      style={{
        [padding ? "padding" : "margin"]: `${top} ${right} ${bottom} ${left}`,
        display: inline ? "inline" : "block",
        textAlign: align,
        lineHeight: height,
      }}
    >
      {children}
    </div>
  )
}

export default Spacer
