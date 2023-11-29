import React from "react";

const PerPage = ({ limit, changeLimit }) => {
  return (
    <input
      className="limit"
      type="number"
      defaultValue={limit}
      onChange={(evt) => {
        changeLimit(evt.target.value);
      }}
    />
  );
};

export default PerPage;
