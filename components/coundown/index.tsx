import React from "react";
import ContentCoundown from "./content";
import HeaderCoundown from "./header";

const Coundown = () => {
  return (
    <div className="coundown">
      <HeaderCoundown />
      <ContentCoundown />
    </div>
  );
};

export default Coundown;
