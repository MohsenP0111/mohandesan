import React from "react";
import eventBus from "../../../Event/Event";

const CardBoard = () => {
  const activateLink = () => {
    eventBus.dispatch("LinkActivated", {
      message: "http://91.98.31.150:8041/",
    });
  };
  return (
    <div className="subset">
      <button className="btn" onClick={() => activateLink()}>
        کارتابل مهندسین مجری
      </button>
    </div>
  );
};

export default CardBoard;
