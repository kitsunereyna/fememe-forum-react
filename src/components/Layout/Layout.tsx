import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  title: string;
  children: React.ReactElement[] | React.ReactElement;
}

const Layout = ({ children, title }: LayoutProps) => {
  useEffect(() => {
    document.title = `${title} | FEMEME`;
  }, [title]);

  return (
    <div className="w-screen h-screen bg-gray-200 overflow-auto">
      <Navbar />
      <div className="p-16">{children}</div>
    </div>
  );
};

export default Layout;
