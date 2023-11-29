import { ArrowIcon } from "assets/icons";
import React from "react";

const Next = ({ onClick }) => {
  return (
    <button className="next" onClick={onClick}>
      <ArrowIcon />
    </button>
  );
};

export default Next;
