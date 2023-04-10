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
import Paragraph from "../../components/paragraph/Paragraph"
import Quote from "../../components/quote/Quote"
import Spacer from "../../components/spacer/Spacer"

import { getPostBySlug, getPosts } from "../../lib/mdx"
import { ImageProps } from "next/image"

export function resolveImage(src: string) {
  return require(`../../assets/img/blog/${src}`).default
}

// @ts-expect-error
function buildComponents(meta): Components {
  return {
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
    p: ({ children }) => {
      const isImage =
        (children as React.ReactElement<any, React.JSXElementConstructor<any>>)
          ?.type?.name === "img"

      return isImage ? (
        <Figure>{children}</Figure>
      ) : (
        <Paragraph>{children}</Paragraph>
      )
    },
    a: Link,
    blockquote: Quote,
    code: ({ children }) => <Code>{children}</Code>,
    pre: ({ children }) => {
      const code = reactNodeToString(children)
      const language = (
        children as React.ReactElement
      )?.props?.className?.split("-")?.[1] as string

      return <Code.Block code={code} language={language} />
    },
    img: (props) => {
      const { src, alt, ...rest } = props as ImageProps

      return (
        <>
          <Figure.Image src={resolveImage(src as string)} alt={alt} {...rest} />
          <Figure.Caption>{alt}</Figure.Caption>
        </>
      )
    },
  }
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
        <meta name="keywords" content={meta.tags.join(", ").toLowerCase()} />

        <meta property="og:url" content={`https://gantoreno.com${meta.slug}`} />
        <meta property="og:type" content="website" />
        <meta name="title" property="og:title" content={pageTitle} />
        <meta
          name="description"
          property="og:description"
          content={meta.description}
        />
        <meta
          name="image"
          property="og:image"
          content={`https://gantoreno.com/api/og?title=${meta.title}&description=${meta.description}&duration=${meta.duration}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gantoreno.com" />
        <meta
          property="twitter:url"
          content={`https://gantoreno.com${meta.slug}`}
        />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`https://gantoreno.com/api/og?title=${meta.title}&description=${meta.description}&duration=${meta.duration}`}
        ></meta>
      </Head>
      <Header>
        <Article.Hero
          src={resolveImage(meta.image)}
          alt={meta.title}
          priority
        />
        <Spacer bottom="var(--spacing-minor)">
          <Heading level={1} compact>
            {meta.title}
          </Heading>
        </Spacer>
        <Spacer bottom="var(--spacing-minor)">
          <small>
            By <strong>{meta.author}</strong> on {meta.date} ({meta.duration}{" "}
            min read)
          </small>
        </Spacer>
      </Header>
      <MDXRemote {...source} components={buildComponents(meta)} />
      <Spacer top="var(--spacing-major)" height="2.3rem">
        {meta.tags.map((tag: string) => (
          <Article.Tag key={tag}>{tag}</Article.Tag>
        ))}
      </Spacer>
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
