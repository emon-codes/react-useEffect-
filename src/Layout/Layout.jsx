import React from "react";
import Header from "../shaird/Header";
import Footer from "../shaird/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
