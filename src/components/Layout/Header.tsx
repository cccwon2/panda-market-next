"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="../../app/assets/images/logo.svg"
            alt="판다마켓 로고"
            width={120}
            height={40}
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/community"
                className="text-gray-600 hover:text-blue-500"
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link href="/items" className="text-gray-600 hover:text-blue-500">
                중고마켓
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-gray-600 hover:text-blue-500">
                로그인
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
