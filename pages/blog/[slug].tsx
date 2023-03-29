import { Components } from "@mdx-js/react/lib"
import { GetStaticPropsContext } from "next"
import { MDXRemote } from "next-mdx-remote"
import reactNodeToString from "react-node-to-string"

import Article from "../../components/article/Article"
import Code from "../../components/code/Code"
import Figure from "../../components/figure/Figure"
import Header from "../../components/header/Header"
import Heading from "../../components/heading/Heading"
import Link from "../../components/link/Link"
import Paragraph from "../../components/pragraph/Paragraph"
import Quote from "../../components/quote/Quote"
import Spacer from "../../components/spacer/Spacer"

import { getPostBySlug, getPosts } from "../../lib/mdx"

const components: Components = {
  h1: ({ children }) => (
    <Heading level={1} linkable>
      {reactNodeToString(children)}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading level={2} linkable>
      {reactNodeToString(children)}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading level={3} linkable>
      {reactNodeToString(children)}
    </Heading>
  ),
  p: Paragraph,
  a: Link,
  blockquote: Quote,
  code: ({ children }) => <Code>{children}</Code>,
  pre: ({ children }) => {
    const code = reactNodeToString(children)
    const language = (children as React.ReactElement)?.props?.className?.split(
      "-"
    )?.[1] as string

    return <Code.Block code={code} language={language} />
  },
  img: ({ src, alt }) => <Figure.Image src={src} alt={alt} />,
}

// @ts-expect-error
const Post = ({ source, meta }) => {
  return (
    <Article>
      <Header>
        <Article.Hero src={meta.featuredImage} />
        <Spacer bottom="var(--spacing-minor)">
          <strong>{meta.author}</strong> • {meta.date} • {meta.duration} min
          read
        </Spacer>
        <Heading level={1} compact>
          {meta.title}
        </Heading>
      </Header>
      <MDXRemote {...source} components={components} />
    </Article>
  )
}

export default Post

export async function getStaticProps({ params }: GetStaticPropsContext) {
  // @ts-expect-error
  const { source, meta } = await getPostBySlug(params.slug)

  return { props: { source, meta } }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map((filename) => {
      return {
        params: {
          slug: filename.replace(".mdx", ""),
        },
      }
    }),
    fallback: false,
  }
}
