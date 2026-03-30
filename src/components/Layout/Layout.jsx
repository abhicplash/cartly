import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children, user }) => {
  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

