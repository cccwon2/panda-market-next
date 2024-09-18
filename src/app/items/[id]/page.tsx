"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Link from "next/link";
import { getProductDetail } from "@/api/itemApi";
import ItemProfileSection from "@/components/UI/item/ItemProfileSection";
import ItemCommentSection from "@/components/UI/item/ItemCommentSection";
import BackIcon from "@/app/assets/images/icons/ic_back.svg";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { Product } from "@/types/product-types";

const ItemPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { productId } = useParams();
  const productIdNumber = Number(productId);

  useEffect(() => {
    async function fetchProduct() {
      if (!productIdNumber) {
        setError("상품 아이디가 제공되지 않았어요.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data: Product = await getProductDetail(productIdNumber);
        if (!data) {
          throw new Error("해당 상품의 데이터를 찾을 수 없습니다.");
        }
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [productIdNumber]);

  if (error) {
    alert(`오류: ${error}`);
  }

  if (!productId || !product) return null;

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <div className="container mx-auto px-4">
        <ItemProfileSection product={product} />

        <hr className="my-6 border-t border-gray-200" />

        <ItemCommentSection productId={productIdNumber} />

        <Link
          href="/items"
          className="flex items-center gap-2 text-lg font-semibold mx-auto mt-8 text-blue-600 hover:text-blue-800"
        >
          목록으로 돌아가기
          <BackIcon className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
};

export default ItemPage;
