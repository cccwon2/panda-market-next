// src/app/auth/login/page.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import InputItem from "@/components/UI/InputItem";
import SocialLogin from "@/components/UI/SocialLogin";
import PasswordInput from "@/components/UI/PasswordInput";
import { requestLogin } from "@/api/authApi";
import { LoginFormValues, LoginResponse } from "@/types/auth-types";

const LoginPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        router.push("/");
      }
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const trimmedData: LoginFormValues = {
      email: data.email.trim(),
      password: data.password.trim(),
    };

    try {
      const result = (await requestLogin(trimmedData)) as LoginResponse;
      console.log(result);

      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", result.accessToken as string);
      }

      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      alert("로그인 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <main className="px-4 py-6 max-w-sm mx-auto md:max-w-2xl md:py-12 lg:py-15">
      <Link
        href="/"
        className="block mb-6 text-center md:mb-10"
        aria-label="홈으로 이동"
      >
        <Image
          src="/logo.svg"
          alt="판다마켓 로고"
          width={198}
          height={50}
          className="w-[198px] md:w-[396px]"
        />
      </Link>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <InputItem
          id="email"
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          register={register("email", {
            required: "이메일을 입력해 주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "잘못된 이메일 형식입니다",
            },
          })}
          setValue={setValue}
          trigger={trigger}
          errorMessage={errors.email?.message}
        />

        <PasswordInput
          id="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          register={register("password", {
            required: "비밀번호를 입력해 주세요",
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해 주세요",
            },
          })}
          errorMessage={errors.password?.message}
        />

        <button
          type="submit"
          disabled={!isValid}
          className="bg-blue-500 text-white py-3.5 px-8 rounded-full text-base font-bold w-full hover:bg-blue-600 focus:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          로그인
        </button>
      </form>

      <SocialLogin />

      <div className="font-medium text-sm text-center mt-6">
        판다마켓이 처음이신가요?{" "}
        <Link
          href="/signup"
          className="text-blue-500 underline underline-offset-2"
        >
          회원가입
        </Link>
      </div>
    </main>
  );
};

export default LoginPage;
