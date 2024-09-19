"use client";

import React from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return <body className="bg-gray-50 text-gray-900">{children}</body>;
};

export default ClientLayout;
