import React from 'react'
import eventBus from "../../../Event/Event";

const Collaboration = () => {
  const activateLink = () => {
    eventBus.dispatch("LinkActivated", {
      message: "http://www.mohandesan.org/fa/Pages/Index/UnderConstruction",
    });
  };
    return (
        <div className="subset">
          <button className="btn"  onClick={() => activateLink()}>آگهی همکاری با مهندسین دارای پروانه اشتغال</button>
            
        </div>
    )
}

export default Collaboration
