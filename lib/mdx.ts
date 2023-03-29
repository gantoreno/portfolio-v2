import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

const root = process.cwd()

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
      date: new Date(data.date).toDateString(),
    },
  }
}
