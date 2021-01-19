import React from 'react'
import eventBus from "../../../Event/Event";

const License = () => {
    const activateLink = () => {
        eventBus.dispatch("LinkActivated", {
          message: "https://eservices.tceo.ir/member/login.aspx",
        });
      };
    return (
        <div className="subset">
            <button className="btn" onClick={() => activateLink()}>پیگیری تمدید پروانه</button>
            
        </div>
    )
}

export default License
