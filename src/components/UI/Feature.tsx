"use client";

import React from "react";
import Image from "next/image";
import theme from "../../styles/theme";

interface FeatureProps {
  image: string;
  alt: string;
  featureName: string;
  title: string;
  description: string;
  direction?: "row" | "row-reverse";
}

const Feature: React.FC<FeatureProps> = ({
  image,
  alt,
  featureName,
  title,
  description,
  direction = "row",
}) => {
  return (
    <div
      className={`mb-16 flex flex-col ${
        direction === "row-reverse" ? "md:flex-row-reverse" : "md:flex-row"
      } md:items-center md:gap-[5%] md:mb-[138px]`}
    >
      <Image src={image} alt={alt} className="w-full mb-5 md:w-1/2 md:mb-0" />
      <div className="flex-1">
        <h2
          className={`text-[${theme.colors.blue}] text-base leading-[1.4] font-bold mb-2 md:text-lg md:leading-[1.4] md:mb-3`}
        >
          {featureName}
        </h2>
        <h1 className="font-bold text-2xl leading-[1.4] md:text-4xl md:leading-[1.4] lg:text-[40px] lg:leading-[1.4]">
          {title}
        </h1>
        <p className="font-medium text-base leading-[1.2] tracking-[0.08em] mt-5 md:text-lg md:leading-[1.2] lg:text-2xl lg:leading-[1.2] lg:mt-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
