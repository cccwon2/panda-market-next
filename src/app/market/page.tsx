"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/styles/common-styles";
import BestItemsSection from "@/components/UI/market/BestItemsSection";
import AllItemsSection from "@/components/UI/market/AllItemsSection";

const MarketPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // 또는 로딩 인디케이터를 표시할 수 있습니다.
  }

  return (
    <Container>
      <BestItemsSection />
      <AllItemsSection />
    </Container>
  );
};

export default MarketPage;
