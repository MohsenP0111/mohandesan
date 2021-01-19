import React from "react";
import eventBus from "../../../Event/Event";

const NewsEngineer = () => {
  const activateLink = () => {
    eventBus.dispatch("LinkActivated", {
      message: "https://mohandesan.org",
    });
  };

  return (
    <div className="subset">
      <button className="btn current" onClick={() => activateLink()}>
        اخبار مهندسان
      </button>
    </div>
  );
};

export default NewsEngineer;
