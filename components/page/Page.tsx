import Container from "../container/Container"

import _ from "./Page.module.css"

const Page: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Page
