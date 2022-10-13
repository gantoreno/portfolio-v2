import Container from "../container/Container"

import _ from "./Page.module.css"

type PageProps = {
  children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Page
