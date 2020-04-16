import React from "react";
import Header from "@components/Header";
import Main from "@components/Main";

import "./index.scss";
import Footer from "@components/Footer";

const Application = () => {
  return (
    <>
      <Header>
        <h1>DataGrid</h1>
      </Header>
      <Main/>
      <Footer/>
    </>
  );
};

export default Application;
