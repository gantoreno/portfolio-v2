import Image from "next/image"
import Heading from "../heading/Heading"
import styles from "./Og.module.css"

import avatar from "../../assets/img/avatar.png"
import Paragraph from "../pragraph/Paragraph"

type OgProps = {
  title: string
  description: string
  duration: string
}

const Og: React.FC<OgProps> = ({ title, description, duration }) => {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        border: "1px solid",
        fontFamily: "Google Sans Mono",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8rem",
          height: "100%",
        }}
      >
        <img
          src="/assets/img/avatar.png"
          alt="Avatar"
          style={{
            width: "360px !important",
            height: "360px !important",
          }}
        />
        <div>
          <h1 style={{ fontSize: "5rem", color: "#000", marginBottom: "2rem" }}>
            {title}
          </h1>
          <p style={{ fontSize: "2rem", color: "#888" }}>
            {description} ({duration} min read)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Og
