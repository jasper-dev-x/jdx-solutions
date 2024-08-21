/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/:path*",
      has: [{type: "host", value: "www.jdx.solutions"}],
      destination: "https://jdx.solutions/:path*",
      permanent: true,
    },
  ],
};

export default nextConfig;
