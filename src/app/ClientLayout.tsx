"use client";

import React from "react";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <body className={pretendard.className + " bg-gray-50 text-gray-900"}>
      {children}
    </body>
  );
};

export default ClientLayout;
