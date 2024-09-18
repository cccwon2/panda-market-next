import Link from "next/link";
import Logo from "@/app/assets/images/logo/logo.svg";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Logo />
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
