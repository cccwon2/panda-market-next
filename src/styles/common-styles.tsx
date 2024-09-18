import Link from "next/link";
import { twMerge } from "tailwind-merge";
import theme from "./theme";

export const Container = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={twMerge(
      "flex flex-col p-4 md:p-6 lg:max-w-7xl lg:mx-auto lg:py-6",
      className
    )}
    {...props}
  />
);

export const SectionTitle = ({
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) => (
  <h1
    className={twMerge(
      "text-xl font-bold text-gray-800 md:text-2xl",
      className
    )}
    {...props}
  />
);

export const FlexContainer = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={twMerge("flex justify-between items-center", className)}
    {...props}
  />
);

export const Button = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={twMerge(
      `bg-[${theme.colors.blue.primary}] text-white py-3 px-6 rounded-lg text-base font-bold cursor-pointer hover:bg-[${theme.colors.blue.hover}] focus:bg-[${theme.colors.blue.focus}] disabled:bg-gray-400 disabled:cursor-default disabled:pointer-events-none`,
      className
    )}
    {...props}
  />
);

export const StyledLink = ({
  className,
  pill,
  ...props
}: { pill?: boolean } & React.ComponentProps<typeof Link>) => (
  <Link
    className={twMerge(
      `bg-[${theme.colors.blue.primary}] text-white py-3 px-6 text-base font-bold cursor-pointer hover:bg-[${theme.colors.blue.hover}] focus:bg-[${theme.colors.blue.focus}] disabled:bg-gray-400 disabled:cursor-default disabled:pointer-events-none`,
      pill ? "rounded-full" : "rounded-lg",
      className
    )}
    {...props}
  />
);

export const LineDivider = ({
  className,
  ...props
}: React.HTMLProps<HTMLHRElement>) => (
  <hr
    className={twMerge("w-full border-none h-px bg-gray-200 my-4", className)}
    {...props}
  />
);
