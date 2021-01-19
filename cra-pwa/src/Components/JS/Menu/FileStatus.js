import React from "react";
import eventBus from "../../../Event/Event";

const FileStatus = () => {
  const activateLink = () => {
    window.open("https://services6.tehran.ir/urbanmodule")

    // eventBus.dispatch("LinkActivated", {
    //   message: "https://services6.tehran.ir/urbanmodule",
    // });
  };

  return (
    <div className="subset">
      <button className="btn" onClick={() => activateLink()}>
        وضعیت پرونده شهرداری
      </button>
    </div>
  );
};

export default FileStatus;
