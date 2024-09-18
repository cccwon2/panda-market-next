"use client";

import Image from "next/image";
import TagDisplay from "./TagDisplay";
import LikeButton from "./LikeButton";
import theme from "@/styles/theme";
import SeeMoreIcon from "@/app/assets/images/icons/ic_kebab.svg";
import { Product } from "@/types/product-types";

interface ItemProfileSectionProps {
  product: Product;
}

const ItemProfileSection: React.FC<ItemProfileSectionProps> = ({ product }) => {
  const handleLike = () => {
    // 여기에 좋아요 처리 로직을 구현하세요
    console.log(`상품 ${product.id} 좋아요 토글`);
  };

  return (
    <section
      className={`flex flex-col gap-4 ${theme.mediaQuery.tablet} flex-row ${theme.mediaQuery.desktop} gap-6`}
    >
      <div className={`w-full ${theme.mediaQuery.tablet} w-2/5 max-w-[486px]`}>
        <Image
          src={product.images[0]}
          alt={`${product.name} 상품 대표 사진`}
          width={486}
          height={486}
          className="rounded-xl w-full h-auto"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 items-start">
        <div className="w-full relative">
          <button className="absolute right-0">
            <SeeMoreIcon />
          </button>

          <div>
            <h1
              className={`text-base font-semibold mb-2 ${theme.mediaQuery.tablet} text-xl mb-3 ${theme.mediaQuery.desktop} text-2xl mb-4`}
            >
              {product.name}
            </h1>
            <h2
              className={`text-2xl font-semibold ${theme.mediaQuery.tablet} text-3xl ${theme.mediaQuery.desktop} text-4xl`}
            >
              {product.price.toLocaleString()}원
            </h2>
          </div>

          <hr className="my-4 border-gray-200" />

          <div>
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              상품 소개
            </h3>
            <p className="text-base leading-[140%]">{product.description}</p>
          </div>

          <div className="my-6">
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              상품 태그
            </h3>
            <TagDisplay tags={product.tags} />
          </div>
        </div>

        <LikeButton
          isFavorite={product.isFavorite}
          favoriteCount={product.favoriteCount}
          onLike={handleLike}
        />
      </div>
    </section>
  );
};

export default ItemProfileSection;
