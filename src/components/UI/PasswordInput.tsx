// src/components/UI/InputItem.tsx
"use client";

import React, { useState } from "react";
import eyeInvisibleIcon from "@/images/icons/eye-invisible.svg";
import eyeVisibleIcon from "@/images/icons/eye-visible.svg";
import InputItem from "./InputItem";
import { UseFormRegisterReturn } from "react-hook-form";
import Image from "next/image";

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const PasswordInput = ({
  id,
  label,
  placeholder,
  register,
  errorMessage,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <InputItem
        id={id}
        label={label}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        register={register}
        errorMessage={errorMessage}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        aria-label="비밀번호 보기"
      >
        <Image
          width={24}
          height={24}
          className="w-6 h-6"
          src={showPassword ? eyeVisibleIcon : eyeInvisibleIcon}
          alt={
            showPassword
              ? "비밀번호 표시 상태 아이콘"
              : "비밀번호 숨김 상태 아이콘"
          }
        />
      </button>
    </div>
  );
};

export default PasswordInput;
