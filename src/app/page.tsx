"use client";

import React from "react";
import Link from "next/link";
import Feature from "@/components/UI/Feature";
import heroImage from "@/images/home/hero-image.png";
import bottomBannerImage from "@/images/home/bottom-banner-image.png";
import feature1Image from "@/images/home/feature1-image.png";
import feature2Image from "@/images/home/feature2-image.png";
import feature3Image from "@/images/home/feature3-image.png";

export default function HomePage() {
  return (
    <>
      <section
        className="bg-blue-100 w-full h-[60vh] min-h-[500px] text-center bg-no-repeat bg-bottom bg-[length:130%] md:h-[90vh] md:bg-[length:120%] lg:text-left lg:h-[540px] lg:flex lg:flex-col lg:justify-center lg:bg-[80%_bottom] lg:bg-[length:55%]"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="min-w-[400px] max-w-[1200px] w-full mx-auto px-4 pt-[30px]">
          <div className="font-bold sm:pt-[100px] min-w-[300px] text-lg leading-tight pt-12 md:text-4xl md:leading-tight md:pt-[84px] md:pb-6 lg:pt-0 lg:pb-8">
            일상의 모든 물건을 <br className="md:hidden lg:inline" />
            거래해 보세요
          </div>
          <Link
            href="/items"
            className="mt-[30px] px-8 py-4 w-[20vw] min-w-[200px] max-w-[340px] bg-blue-500 text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-colors duration-300"
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
          direction="row"
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
          direction="row"
        />
      </section>

      <section
        className="bg-blue-100 w-full h-[60vh] text-center bg-no-repeat bg-bottom bg-[length:130%] md:h-[90vh] md:bg-[length:120%] lg:text-left lg:h-[540px] lg:flex lg:flex-col lg:justify-center lg:bg-[80%_bottom] lg:bg-[length:55%]"
        style={{ backgroundImage: `url(${bottomBannerImage.src})` }}
      >
        <div className="max-w-[1200px] w-full mx-auto px-4">
          <h1 className="font-bold text-3xl leading-[44.8px] pt-12 md:text-4xl md:leading-[56px] md:pt-[84px] md:pb-6 lg:pt-0 lg:pb-8">
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h1>
        </div>
      </section>
    </>
  );
}
