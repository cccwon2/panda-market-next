"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Layout/Footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  return pathname === "/" ? <Footer /> : null;
};

export default FooterWrapper;
