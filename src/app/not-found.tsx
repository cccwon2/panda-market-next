// src/app/not-found.tsx
"use client";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
      <p className="text-lg mb-8">
        요청하신 페이지가 존재하지 않거나 잘못된 경로입니다.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        홈으로 돌아가기
      </a>
    </div>
  );
}
