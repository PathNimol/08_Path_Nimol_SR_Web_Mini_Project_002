import React from "react";
import SidebarComponent from "./workspace/_components/SidebarComponent";
import Navbar from "./workspace/_components/NavbarComponent";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SidebarComponent />

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto bg-gray-100">
        {/* Navbar */}
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
