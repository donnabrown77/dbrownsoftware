/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  basePath: isProd ? "" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
    // https://stackoverflow.com/questions/75571651/using-remark-and-rehype-plugins-with-nextjs-13/75571708#75571708
    mdxRs: false,
  },
});
