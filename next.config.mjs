/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "ik.imagekit.io",
      "dual-maroon-ard-draft.caffeine.xyz", // ✅ ADD THIS
    ],
  },
};

export default nextConfig;