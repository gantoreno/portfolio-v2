/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  rewrites: () => {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "blog.gantoreno.com",
            },
          ],
          destination: "/blog/:path*",
        },
      ],
    }
  },
}

module.exports = nextConfig
