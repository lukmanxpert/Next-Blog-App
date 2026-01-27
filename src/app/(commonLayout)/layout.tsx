import { Navbar } from "@/components/layout/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <h1>Common Layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default CommonLayout;
