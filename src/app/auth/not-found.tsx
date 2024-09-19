// src/app/auth/not-found.tsx
"use client";

export default function AuthNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">
        인증 관련 페이지를 찾을 수 없습니다
      </h1>
      <a href="/auth/login" className="text-blue-500 hover:underline">
        로그인 페이지로 돌아가기
      </a>
    </div>
  );
}
