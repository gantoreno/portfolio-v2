import { ImageResponse } from "@vercel/og"

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
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: "#fff",
          fontFamily: "Google Sans Mono",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8rem",
            height: "100%",
          }}
        >
          <img
            src="https://gantoreno.com/assets/img/avatar.png"
            alt="Avatar"
            style={{
              width: "360px !important",
              height: "360px !important",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                fontSize: "5rem",
                color: "#000",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Title
            </h1>
            <p style={{ fontSize: "2rem", color: "#888" }}>
              Description (10 min read)
            </p>
          </div>
        </div>
      </div>
    ),
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
