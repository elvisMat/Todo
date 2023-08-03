import React from "react";

function Expanded({ style, h, w, children, className }) {
  return (
    <div
      style={{ ...style, width: w ?? "100%", height: h ?? "100%" }}
      className={`${className} expanded `}
    >
      {children}
    </div>
  );
}

export default Expanded;
