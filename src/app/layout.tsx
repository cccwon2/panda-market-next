import React, { Suspense } from "react";
import "@/styles/global-styles.css";
import FooterWrapper from "@/components/Layout/FooterWrapper";
import ClientLayout from "@/components/Layout/ClientLayout";
import Header from "@/components/Layout/Header";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>판다마켓</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Suspense로 전체 ClientLayout 감싸기 */}
        <Suspense fallback={<LoadingSpinner isLoading={true} />}>
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
        </Suspense>
      </body>
    </html>
  );
}
