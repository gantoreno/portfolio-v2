export const getReadingTime = (content: string): number => {
  const filtered = content.replace(/[^a-z0-9 ]/gi, "")
  const words = filtered.split(" ")
  const count = words.length

  return Math.round(count / 200)
}
