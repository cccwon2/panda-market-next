"use client";

import React from "react";
import theme from "@/styles/theme";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <body
      style={{
        backgroundColor: theme.colors.gray[50],
        color: theme.colors.gray[900],
      }}
    >
      {children}
    </body>
  );
};

export default ClientLayout;
