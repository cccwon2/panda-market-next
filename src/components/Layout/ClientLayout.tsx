// src/components/Layout/ClientLayout.tsx
"use client";

import React, { useEffect } from "react";
import localFont from "next/font/local";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { Provider, useAtomValue, useSetAtom } from "jotai";
import { loadingAtom } from "@/store/loadingAtom"; // loadingAtom import

const pretendard = localFont({
  src: "../../fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isLoading = useAtomValue(loadingAtom);
  const setIsLoading = useSetAtom(loadingAtom);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams, setIsLoading]);

  return (
    <div className={pretendard.className + " bg-gray-50 text-gray-900"}>
      {isLoading && <LoadingSpinner isLoading={isLoading} />}
      {children}
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </Provider>
  );
}
