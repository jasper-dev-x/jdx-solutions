/** @type {import('next').NextConfig} */

export async function redirects() {
  return [
    {
      source: "/:path*",
      has: [{type: "host", value: "www.jdx.solutions"}],
      destination: "https://jdx.solutions/:path*",
      permanent: true,
    },
  ];
}

