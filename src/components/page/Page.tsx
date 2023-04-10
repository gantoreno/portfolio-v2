import _ from "./Page.module.css"

import Container from "../container/Container"

const Page: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Page
