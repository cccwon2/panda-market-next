import facebookLogo from "@/app/assets/images/social/facebook-logo.svg";
import twitterLogo from "@/app/assets/images/social/twitter-logo.svg";
import youtubeLogo from "@/app/assets/images/social/youtube-logo.svg";
import instagramLogo from "@/app/assets/images/social/instagram-logo.svg";
import { Link } from "react-router-dom";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 text-base p-8 flex justify-between items-center flex-wrap gap-[60px] md:px-[104px] md:pb-[108px] lg:px-[200px] lg:pb-[108px]">
    <div className="order-3 w-full md:order-none md:w-auto">©codeit - 2024</div>

    <div className="flex gap-[30px] text-gray-200">
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/faq">FAQ</Link>
    </div>

    <div className="flex gap-3">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="판다마켓 페이스북"
      >
        <Image src={facebookLogo} alt="페이스북" width={20} height={20} />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="판다마켓 트위터"
      >
        <Image src={twitterLogo} alt="트위터" width={20} height={20} />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="판다마켓 유튜브"
      >
        <Image src={youtubeLogo} alt="유튜브" width={20} height={20} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="판다마켓 인스타그램"
      >
        <Image src={instagramLogo} alt="인스타그램" width={20} height={20} />
      </a>
    </div>
  </footer>
);

export default Footer;
