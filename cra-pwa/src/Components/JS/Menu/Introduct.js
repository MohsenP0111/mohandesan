import React from 'react'
import eventBus from "../../../Event/Event";

const Introduct = () => {
    const activateLink = () => {
        eventBus.dispatch("LinkActivated", {
          message: "http://www.mohandesan.org/fa/Pages/Index/UnderConstruction",
        });
      };
    return (
        <div className="subset">
            <button className="btn" onClick={() => activateLink()}>معرفی پروژه های مجری</button>
            
        </div>
    )
}

export default Introduct
