import { Image } from "@chakra-ui/react";
import React from "react";

function Section({ id, src, children, isImgLeft = false, title = "Title" }) {
  return (
    <>
      <hr />

      <div className="section">
        <div
          style={{ flex: "3" }}
          className={`section-content ${!isImgLeft ? "order1" : "order2"}`}
        >
          <div className="section-title">{title}</div>
          {children}
        </div>
        <div
          style={{ flex: "2" }}
          className={`section-img ${isImgLeft ? "order1" : "order2"}`}
        >
          <Image src={src} />
        </div>
      </div>
    </>
  );
}

export default Section;
