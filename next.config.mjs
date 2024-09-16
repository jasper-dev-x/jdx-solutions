/** @type {import('next').NextConfig} */

export const images = {
  formats: ["image/avif", "image/webp"],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "firebasestorage.googleapis.com",
    },
  ],
};
