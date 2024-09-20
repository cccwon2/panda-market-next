// src/components/Layout/ClientLayout.tsx
"use client";

import React, { useEffect } from "react";
import localFont from "next/font/local";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { useAtom } from "jotai";
import { loadingAtom } from "@/store/atoms/loadingAtom"; // loadingAtom import

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useAtom(loadingAtom); // Jotai atom 사용

  useEffect(() => {
    setIsLoading(true); // 페이지가 변경될 때 로딩 시작
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // 일정 시간 후 로딩 종료
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams, setIsLoading]);

  return (
    <div className={pretendard.className + " bg-gray-50 text-gray-900"}>
      {isLoading && <LoadingSpinner isLoading={isLoading} />}{" "}
      {/* 로딩 상태가 true일 때만 로딩 스피너 표시 */}
      {children}
    </div>
  );
}
