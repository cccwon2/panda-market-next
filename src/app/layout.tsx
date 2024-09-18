"use client";

import { Inter } from "next/font/google";
import "../styles/global-styles"; // 전역 스타일
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import theme from "../styles/theme";

// Google 폰트 설정
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>판다마켓</title>
      </head>
      <body
        className={inter.className}
        style={{
          backgroundColor: theme.colors.gray[50],
          color: theme.colors.gray[900],
        }}
      >
        <Header />
        <main
          className="min-h-screen"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
