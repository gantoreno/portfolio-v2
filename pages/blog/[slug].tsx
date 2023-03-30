import { Components } from "@mdx-js/react/lib"
import { GetStaticPropsContext } from "next"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
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
  const pageTitle = `Gabriel Moreno - ${meta.title}`

  return (
    <Article>
      <Head>
        <title>{pageTitle}</title>
        <meta name="author" content={meta.author} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>
      <Header>
        <Article.Hero src={meta.featuredImage} />
        <Heading level={1}>{meta.title}</Heading>
        <Spacer bottom="var(--spacing-minor)">
          <small>
            By <strong>{meta.author}</strong> on {meta.date} ({meta.duration}{" "}
            min read)
          </small>
        </Spacer>
      </Header>
      <MDXRemote {...source} components={components} />
      <div style={{ marginTop: "var(--spacing-major)", lineHeight: "2.3rem" }}>
        {meta.tags.map((tag: string) => (
          <Article.Tag key={tag}>{tag}</Article.Tag>
        ))}
      </div>
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
