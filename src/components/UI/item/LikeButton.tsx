// src/components/UI/InputItem.tsx
"use client"; // 클라이언트 전용임을 명시

import React, { useState } from "react";
import HeartIcon from "@/images/icons/ic_heart.svg";

interface LikeButtonProps {
  isFavorite: boolean;
  favoriteCount: number;
  onLike: unknown;
}

const LikeButton = ({
  isFavorite: initialIsFavorite,
  favoriteCount: initialFavoriteCount,
}: LikeButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [favoriteCount, setFavoriteCount] = useState(initialFavoriteCount);

  const handleLike = () => {
    setIsFavorite(!isFavorite);
    setFavoriteCount(isFavorite ? favoriteCount - 1 : favoriteCount + 1);
  };

  return (
    <button
      onClick={() => handleLike}
      className={`flex items-center space-x-1 ${
        isFavorite ? "text-red-500" : "text-gray-500"
      }`}
    >
      <HeartIcon className={isFavorite ? "fill-current" : "stroke-current"} />
      <span>{favoriteCount}</span>
    </button>
  );
};

export default LikeButton;
