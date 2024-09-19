import Link from "next/link";
import Logo from "@/images/logo/logo.svg";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Link href="/" className="mr-8">
          <Logo />
        </Link>
        <nav className="flex-grow">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/community"
                className="text-gray-600 font-semibold hover:text-blue-500"
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className="text-gray-600 font-semibold hover:text-blue-500"
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/login"
          className="text-gray-600 font-semibold hover:text-blue-500"
        >
          로그인
        </Link>
      </div>
    </header>
  );
}
