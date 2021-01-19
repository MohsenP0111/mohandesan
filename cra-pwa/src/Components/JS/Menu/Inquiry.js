import React from 'react'
import eventBus from "../../../Event/Event";

const Inquiry = () => {
    const activateLink = () => {
        eventBus.dispatch("LinkActivated", {
          message: "https://myservices.tehran.ir/",
        });
      };
    return (
        <div className="subset">
            <button className="btn" onClick={() => activateLink()}>استعلام طرح تفصیلی ملک ها</button>
            
        </div>
    )
}

export default Inquiry
