// src/components/Layout/ClientLayout.tsx
"use client";

import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const pretendard = localFont({
  src: "../../fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    window.addEventListener("routeChangeStart", handleStart);
    window.addEventListener("routeChangeComplete", handleComplete);
    window.addEventListener("routeChangeError", handleComplete);

    return () => {
      window.removeEventListener("routeChangeStart", handleStart);
      window.removeEventListener("routeChangeComplete", handleComplete);
      window.removeEventListener("routeChangeError", handleComplete);
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  return (
    <div className={pretendard.className + " bg-gray-50 text-gray-900"}>
      {isLoading && <LoadingSpinner isLoading={isLoading} />}
      {children}
    </div>
  );
}
