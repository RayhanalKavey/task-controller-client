import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../../PAGES/shared/Footer/Footer";
import Navbar from "../../PAGES/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
