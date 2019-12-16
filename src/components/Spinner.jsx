import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "150px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
