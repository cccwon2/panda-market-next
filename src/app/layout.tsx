import React from "react";
import { Inter } from "next/font/google";
import "@/styles/global-styles.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <head>
        <title>판다마켓</title>
      </head>
      <ClientLayout>
        <Header />
        <main
          className="min-h-screen"
          style={{
            minWidth: "400px",
            margin: "0",
            padding: "0",
          }}
        >
          {children}
        </main>
        <Footer />
      </ClientLayout>
    </html>
  );
}
