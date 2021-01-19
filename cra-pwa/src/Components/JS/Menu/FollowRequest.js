import React from 'react'
import eventBus from "../../../Event/Event";

const FollowRequest = () => {
    const activateLink = () => {
        eventBus.dispatch("LinkActivated", {
          message: "https://observer.tceo.ir/Default.aspx?pId=0&Itm=113",
        });
      };
    return (
        <div className="subset">
            <button className="btn" onClick={() => activateLink()}>پیگیری درخواست کنترل نقشه های فاز 2</button>
            
        </div>
    )
}

export default FollowRequest
