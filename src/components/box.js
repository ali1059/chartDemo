import React from "react";

const Box = ({ label, color }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", margin: "1rem 1.5rem" }}
    >
      <div
        style={{
          height: 20,
          width: 20,
          backgroundColor: `${color}`,
          margin: "0.5rem",
        }}
        className="square"
      ></div>
      <small>{label}</small>
    </div>
  );
};

export default Box;
