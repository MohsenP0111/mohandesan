import React from "react";
import eventBus from "../../../Event/Event";

const Municipality = () => {
  const activateLink = () => {
    window.open("https://urban.tehran.ir/Account/Login?ReturnUrl=%2F")
    // eventBus.dispatch("LinkActivated", {
      
    //   message: "https://urban.tehran.ir/Account/Login?ReturnUrl=%2F",
    // });
  };

  return (
    <div className="subset">
      <button className="btn" onClick={() => activateLink()}>
        کارتابل شهرداری
      </button>
    </div>
  );
};

export default Municipality;
