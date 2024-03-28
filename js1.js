module.exports = {
  // Enable the Tailwind CSS styles for the entire project
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, immutable",
          },
        ],
      },
    ];
  },
};