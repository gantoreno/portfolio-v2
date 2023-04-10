import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge",
}

const fontRegular = fetch(
  new URL("../../../fonts/Product Sans Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())
const fontBold = fetch(
  new URL("../../../fonts/Product Sans Bold.ttf", import.meta.url)
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
          fontFamily: "Product Sans",
          lineHeight: "1.5em",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8rem 0px",
            margin: "0px auto",
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
          <div style={{ display: "flex", flexDirection: "column", width: 600 }}>
            <h1
              style={{
                fontSize: 50,
                color: "#000",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              {title}
            </h1>
            <p style={{ fontSize: 30, color: "#888" }}>
              {description} ({duration} min read)
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
