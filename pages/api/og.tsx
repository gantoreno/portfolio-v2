import { ImageResponse } from "@vercel/og"
import Og from "../../components/og/Og"

export const config = {
  runtime: "experimental-edge",
}

const fontRegular = fetch(
  new URL("../../fonts/Google Sans Mono Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())
const fontBold = fetch(
  new URL("../../fonts/Google Sans Mono Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url)

  const fontRegularData = await fontRegular
  const fontBoldData = await fontBold

  const title = searchParams.get("title") ?? "Default title"
  const description = searchParams.get("description") ?? "Default description"
  const duration = searchParams.get("duration") ?? "0"

  return new ImageResponse(
    <Og title={title} description={description} duration={duration} />,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Google Sans Mono",
          data: fontRegularData,
          style: "normal",
          weight: 300,
        },
        {
          name: "Google Sans Mono",
          data: fontBoldData,
          weight: 600,
        },
      ],
    }
  )
}
