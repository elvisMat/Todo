import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigation } from "react-router-dom";

function MyHeading({ w, title, fontSize }) {
  const nav = useNavigation;
  return (
    <div style={{ width: w ?? "100%" }} className="heading">
      <h3>{title}</h3>
      <Button fontSize={"sm"}>Back</Button>
      <hr />
    </div>
  );
}

export default MyHeading;
