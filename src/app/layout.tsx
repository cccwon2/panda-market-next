import React from "react";
import Head from "next/head";
import "@/styles/global-styles.css";
import Header from "@/components/Layout/Header";
import FooterWrapper from "@/components/Layout/FooterWrapper";
import ClientLayout from "@/components/Layout/ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
        <title>판다마켓</title>
        <link rel="ico" href="favicon.ico" />
      </Head>
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
        <FooterWrapper />
      </ClientLayout>
    </html>
  );
}
