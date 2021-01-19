import React from "react";
import eventBus from "../../../Event/Event";

const EngineerCard = () => {
  const activateLink = () => {
    eventBus.dispatch("LinkActivated", {
      message: "https://observer.tceo.ir/Login.aspx",
    });
  };
  return (
    <div className="subset">
      <button className="btn" onClick={() => activateLink()}>
        کارتابل نظام مهندسی
      </button>
    </div>
  );
};

export default EngineerCard;
