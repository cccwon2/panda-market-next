import React from "react";
import "@/styles/global-styles.css";
import FooterWrapper from "@/components/Layout/FooterWrapper";
import ClientLayout from "@/components/Layout/ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>판다마켓</title>
        <link rel="ico" href="favicon.ico" />
      </head>
      <ClientLayout>
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
