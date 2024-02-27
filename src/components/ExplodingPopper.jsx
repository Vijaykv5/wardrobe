import React, { useState } from "react";
import { createPopper } from "@popperjs/core";

const ExplodingPopper = ({ triggerContent, popperContent }) => {
  const [popperVisible, setPopperVisible] = useState(false);

  const handleTriggerClick = () => {
    setPopperVisible(!popperVisible);
  };

  return (
    <div>
      <div onClick={handleTriggerClick}>{triggerContent}</div>
      {popperVisible && (
        <div>
          <div>{popperContent}</div>
        </div>
      )}
    </div>
  );
};

export default ExplodingPopper;
