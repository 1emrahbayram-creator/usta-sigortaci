import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Vercel'in varsayılan alt alanından gelen trafiği ana domaine taşı (SEO: tek kanonik host)
      {
        source: "/:path*",
        has: [{ type: "host", value: "usta-sigortaci.vercel.app" }],
        destination: "https://ustasigortaci.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
