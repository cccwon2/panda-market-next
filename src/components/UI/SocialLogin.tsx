// src/components/UI/InputItem.tsx
"use client"; // 클라이언트 전용임을 명시

import Image, { StaticImageData } from "next/image";
import googleLogo from "@/app/assets/images/social/google-logo.png";
import kakaoLogo from "@/app/assets/images/social/kakao-logo.png";

interface SocialLoginLinkProps {
  name: string;
  url: string;
  logoSrc: string | StaticImageData;
}

const SocialLoginLink: React.FC<SocialLoginLinkProps> = ({
  name,
  url,
  logoSrc,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="block"
    >
      <Image src={logoSrc} alt={name} width={42} height={42} />
    </a>
  );
};

const SocialLogin: React.FC = () => {
  return (
    <div className="bg-blue-100 rounded-lg flex items-center justify-between p-4 my-6">
      <h3 className="font-medium text-base">간편 로그인하기</h3>

      <div className="flex gap-4">
        <SocialLoginLink
          name="구글 로그인"
          url="https://www.google.com/"
          logoSrc={googleLogo}
        />
        <SocialLoginLink
          name="카카오톡 로그인"
          url="https://www.kakaocorp.com/page/"
          logoSrc={kakaoLogo}
        />
      </div>
    </div>
  );
};

export default SocialLogin;
