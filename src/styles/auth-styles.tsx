// src/styles/auth-styles.tsx
"use client"; // 클라이언트 전용임을 명시

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo/logo.svg";

export const AuthContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <main className="px-4 py-6 max-w-sm mx-auto md:max-w-2xl md:py-12 lg:py-15">
    {children}
  </main>
);

export const LogoHomeLink: React.FC = () => (
  <Link href="/" className="block mb-6 text-center md:mb-10">
    <Image
      src={Logo}
      alt="Logo"
      width={198}
      height={50}
      className="w-[198px] md:w-[396px]"
    />
  </Link>
);

export const Form: React.FC<
  React.PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>>
> = ({ children, ...props }) => (
  <form {...props} className="flex flex-col gap-6">
    {children}
  </form>
);

export const AuthSwitch: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="font-medium text-sm text-center">{children}</div>
);

export const SubmitButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-blue-500 text-white py-3.5 px-8 rounded-full text-base font-bold w-full hover:bg-blue-600 focus:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
  >
    {children}
  </button>
);

// 링크 스타일을 위한 유틸리티 컴포넌트
export const StyledLink: React.FC<
  React.PropsWithChildren<{ href: string }>
> = ({ children, href }) => (
  <Link href={href} className="text-blue-500 underline underline-offset-2">
    {children}
  </Link>
);
