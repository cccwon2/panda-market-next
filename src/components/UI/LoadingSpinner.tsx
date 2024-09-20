// src/components/UI/LoadingSpinner.tsx
"use client";

import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

interface LoadingSpinnerProps {
  isLoading: boolean;
  size?: number;
  color?: string;
  minLoadTime?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  isLoading,
  size = 20,
  color = "#3692ff",
  minLoadTime = 500,
}) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [isLoading, minLoadTime]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9998]">
      <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-[9999]">
        <PulseLoader size={size} color={color} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
