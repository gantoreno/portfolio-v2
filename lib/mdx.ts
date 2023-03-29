import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

const root = process.cwd()

export type PostMetadata = {
  slug: string
  title: string
  duration: number
  description: string
  date: string
  hero: string
}

export const getPosts = async () => {
  return fs.readdirSync(path.join(root, "articles"))
}

export const getPostBySlug = async (slug: string) => {
  const mdx = fs.readFileSync(
    path.join(root, "articles", `${slug}.mdx`),
    "utf-8"
  )

  const { data, content } = matter(mdx)
  const source = await serialize(content, {})

  return {
    source,
    meta: {
      ...data,
      slug,
      date: new Date(data.date).toDateString(),
    },
  }
}

export const getPostsWithMetadata = async (): Promise<PostMetadata[]> => {
  const posts = await getPosts()
  const postsWithMetadata = Promise.all(
    posts.map(async (post) => {
      const { meta } = await getPostBySlug(post.replace(".mdx", ""))

      return meta
    })
  )

  return postsWithMetadata as unknown as PostMetadata[]
}
