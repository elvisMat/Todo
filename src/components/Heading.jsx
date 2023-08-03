import React from "react";

function MyHeading({ w, title, fontSize }) {
  return (
    <div style={{ width: w ?? "100%" }} className="heading">
      <h3>{title}</h3>
      <hr />
    </div>
  );
}

export default MyHeading;
