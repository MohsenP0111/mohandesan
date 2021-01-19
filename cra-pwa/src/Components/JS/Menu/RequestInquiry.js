import React from "react";
import eventBus from "../../../Event/Event";

const RequestInquiry = () => {
  const activateLink = () => {
    eventBus.dispatch("LinkActivated", {
      message: "https://inquiryservices.tehran.ir/Default.aspx?tabid=273",
    });
  };
  return (
    <div className="subset">
      <button className="btn" onClick={() => activateLink()}>استعلام صحت گواهی های ساختمانی</button>
    </div>
  );
};

export default RequestInquiry;
