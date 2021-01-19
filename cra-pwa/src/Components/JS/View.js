import React, { useEffect, useState } from "react";
import "../CSS/View.css";
import eventBus from "../../Event/Event";

const View = () => {
  const [Link, setLink] = useState("");

  const Action = (dataLink) => {
    setLink(dataLink.message);
    var myobj = document.getElementById("replace");
    var parent = myobj.parentElement;
    parent.removeChild(myobj);

    var newElement = `
    <object  id="replace" data=${dataLink.message} class="embedobject">
     <embed src=${dataLink.message} class="embed" />
    </object>`;

    var newElement2 = `
    <iframe
    src=${dataLink.message}
    id="replace"
    class="embedobject"></iframe>`;

    // document.domain = "dataLink.message";

    parent.innerHTML = newElement2;
    parent.innerHTML = newElement;
  };

  useEffect(() => {
    eventBus.on("LinkActivated", (data) => Action(data));
  }, [Link]);

  useEffect(function () {
    eventBus.remove("LinkActivated");
  }, []);

  return (
    <div className="View">
      {/* <object
        id="replace"
        data="https://mohandesan.org"
        className="embedobject"
      >
        <embed src="https://mohandesan.org" className="embed" />
      </object> */}
      <iframe
        src="https://mohandesan.org"
        id="replace"
        className="embedobject"
      ></iframe>
    </div>
  );
};

export default View;
