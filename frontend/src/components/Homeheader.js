import React from "react";

const Homeheader = () => {
  var dt = new Date();
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ width: "100%", height: "50vh", backgroundColor: "#0b054a" }}
      >
        <div className="container d-flex justify-content-center align-items-center flex-column ">
          <h1 className="text-white header" style={{ fontSize: "30px" }}>
            "Unlocking the Power of Technology, Connecting the World of
            Import-Export."
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homeheader;
