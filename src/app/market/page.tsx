"use client";

import React from "react";
import { Container } from "@/styles/common-styles";
import BestItemsSection from "@/components/UI/market/BestItemsSection";
import AllItemsSection from "@/components/UI/market/AllItemsSection";

const MarketPage: React.FC = () => {
  return (
    <Container>
      <BestItemsSection />
      <AllItemsSection />
    </Container>
  );
};

export default MarketPage;
