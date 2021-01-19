import React from "react";
import Header from "./Header";
import View from "./View";
import Menu from "./Menu/Menu";
import "../CSS/Main.css";
import NewsEngineer from "./Menu/NewsEngineer";

const Main = () => {
  return (
    <div className="Main">
      <Header/>
      <Menu/>
      <View />
    </div>
  );
};

export default Main;
