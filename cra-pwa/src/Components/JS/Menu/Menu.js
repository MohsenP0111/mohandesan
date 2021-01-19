import React from "react";
import "../../CSS/Menu.css";
import CardBoard from "./CardBoard";
import Collaboration from "./Collaboration";
import EngineerCard from "./EngineerCard";
import FileStatus from "./FileStatus";
import FollowRequest from "./FollowRequest";
import Inquiry from "./Inquiry";
import Introduct from "./Introduct";
import License from "./License";
import Municipality from "./Municipality";
import NewsEngineer from "./NewsEngineer";
import RequestInquiry from "./RequestInquiry";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="insideMenu">
        <NewsEngineer />
        <Municipality />
        <FileStatus />
        <RequestInquiry />
        <FollowRequest />
        <EngineerCard />
        <License />
        <Collaboration />
        <Introduct />
        <Inquiry />
        <CardBoard />
      </div>
    </div>
  );
};

export default Menu;
