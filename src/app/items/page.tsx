"use client";

import React, { useEffect, useState } from "react";
import "@/styles/common-styles.css";
import BestItemsSection from "@/components/UI/item/BestItemsSection";
import AllItemsSection from "@/components/UI/item/AllItemsSection";

const MarketPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // 또는 로딩 인디케이터를 표시할 수 있습니다.
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <BestItemsSection width={282} height={282} />
      <AllItemsSection width={220} height={220} />
    </div>
  );
};

export default MarketPage;
