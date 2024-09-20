/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.samsung.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        pathname: "**",
      },
    ],
  },
  webpack(config) {
    // @svgr/webpack을 사용하여 SVG 파일을 React 컴포넌트로 변환
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    turbo: {
      // TurboPack에서 SVG 파일에 대한 커스텀 로더 설정
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"], // @svgr/webpack을 사용하여 SVG 파일을 JS로 변환
          as: "*.js", // JS로 변환된 파일로 처리
        },
      },
    },
  },
};

export default nextConfig;
