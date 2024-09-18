// src/styles/global-styles.tsx
"use client"; // 클라이언트 전용임을 명시

import theme from "./theme";

const GlobalStyles = () => {
  return (
    <style jsx global>{`
      :root {
        --header-height: 70px;
      }

      * {
        @apply m-0 p-0 box-border;
      }

      a {
        @apply no-underline text-inherit;
      }

      button,
      input,
      textarea,
      textarea::placeholder {
        color: theme.colors.gray[400];
      }
      textarea:focus {
        outline-color: theme.colors.blue.primary;
      }

      select {
        @apply font-inherit text-inherit appearance-none;
      }

      button {
        @apply bg-transparent border-none outline-none shadow-none cursor-pointer;
      }

      img,
      svg {
        @apply align-bottom;
      }

      body {
        @apply text-gray-700 break-keep font-sans;
      }

      header {
        @apply fixed top-0 left-0 w-full h-[var(--header-height)] flex justify-between items-center px-4 bg-white border-b border-gray-200 z-50;
      }

      .withHeader {
        @apply mt-[var(--header-height)];
      }

      .button {
        @apply bg-[${theme.colors.blue
          .primary}] text-white inline-flex items-center justify-center;
      }

      .button:hover {
        @apply bg-[${theme.colors.blue.hover}];
      }

      .button:focus {
        @apply bg-[${theme.colors.blue.focus}];
      }

      .button:disabled {
        @apply bg-gray-400 cursor-default pointer-events-none;
      }

      .pill-button {
        @apply text-base font-semibold rounded-full py-3.5 px-8;
      }

      .full-width {
        @apply w-full;
      }

      .break-on-desktop {
        @apply hidden;
      }

      @media ${theme.mediaQuery.tablet} {
        header {
          @apply px-6;
        }

        .pill-button {
          @apply text-xl font-bold py-4 px-32;
        }
      }

      @media ${theme.mediaQuery.desktop} {
        header {
          @apply px-12;
        }

        .break-on-desktop {
          @apply inline;
        }
      }
    `}</style>
  );
};

export default GlobalStyles;
