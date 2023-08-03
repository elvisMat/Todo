import React from "react";
import { capitalizeFirstLetter } from "../utils";

function DayString({ title }) {
  return <div className={title}>{capitalizeFirstLetter(title)}</div>;
}

export default DayString;
