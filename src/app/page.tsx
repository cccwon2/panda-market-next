"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Layout/Footer";
import Feature from "@/components/UI/Feature";
import theme from "@/styles/theme";
import heroImage from "@/app/assets/images/home/hero-image.png";
import bottomBannerImage from "@/app/assets/images/home/bottom-banner-image.png";
import feature1Image from "@/app/assets/images/home/feature1-image.png";
import feature2Image from "@/app/assets/images/home/feature2-image.png";
import feature3Image from "@/app/assets/images/home/feature3-image.png";

const HomePage: React.FC = () => {
  return (
    <>
      <section
        className={`bg-[${theme.colors.blue.primary}] h-[60vh] text-center bg-no-repeat bg-bottom bg-[length:130%] md:h-[90vh] md:bg-[length:120%] lg:text-left lg:h-[540px] lg:flex lg:flex-col lg:justify-center lg:bg-[80%_bottom] lg:bg-[length:55%]`}
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="lg:max-w-[1200px] lg:w-full lg:mx-auto">
          <h1 className="font-bold text-3xl leading-[44.8px] pt-12 md:text-4xl md:leading-[56px] md:pt-[84px] md:pb-6 lg:pt-0 lg:pb-8">
            일상의 모든 물건을 <br className="md:hidden lg:inline" />
            거래해 보세요
          </h1>
          <Link
            href="/items"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-medium"
          >
            구경하러 가기
          </Link>
        </div>
      </section>

      <section className="py-[51px] px-4 md:py-6 md:px-6 lg:py-[138px] lg:px-6 lg:max-w-[1200px] lg:mx-auto">
        <Feature
          image={feature1Image.src}
          alt="인기 상품"
          featureName="Hot item"
          title="인기 상품을 확인해 보세요"
          description="가장 HOT한 중고거래 물품을 판다마켓에서 확인해 보세요"
        />
        <Feature
          image={feature2Image.src}
          alt="검색 기능"
          featureName="Search"
          title="구매를 원하는 상품을 검색하세요"
          description="구매하고 싶은 물품은 검색해서 쉽게 찾아보세요"
          direction="row-reverse"
        />
        <Feature
          image={feature3Image.src}
          alt="판매 상품 등록"
          featureName="Register"
          title="판매를 원하는 상품을 등록하세요"
          description="어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요"
        />
      </section>

      <section
        className={`bg-[${theme.colors.blue.primary}] h-[60vh] text-center bg-no-repeat bg-bottom bg-[length:130%] md:h-[90vh] md:bg-[length:120%] lg:text-left lg:h-[540px] lg:flex lg:flex-col lg:justify-center lg:bg-[80%_bottom] lg:bg-[length:55%]`}
        style={{ backgroundImage: `url(${bottomBannerImage.src})` }}
      >
        <div className="lg:max-w-[1200px] lg:w-full lg:mx-auto">
          <h1 className="font-bold text-3xl leading-[44.8px] pt-12 md:text-4xl md:leading-[56px] md:pt-[84px] md:pb-6 lg:pt-0 lg:pb-8">
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h1>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
