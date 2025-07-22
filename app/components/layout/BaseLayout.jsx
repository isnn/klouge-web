import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function BaseLayout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-col flex-grow bg-gray-50 text-gray-700">
        <Header />
        {children}
      </div>
    </div>
  );
}
