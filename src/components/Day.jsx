import React, { useContext, useEffect } from "react";
import { DateContext } from "../App";
import moment from "moment";

function Day({ el, isToday, isSelected = false }) {
  let str = el;
  if (el !== " " && el.length === 1) {
    str = "0" + el;
  }
  const [selectedDate, setSelectedDate] = useContext(DateContext);
  let month = moment(selectedDate).format("MMMM");
  let format = el + " " + month + " " + moment(selectedDate).format("YYYY");
  const handleClick = () => {
    setSelectedDate(moment(format));
  };

  return (
    <div
      onClick={() => handleClick()}
      className="day"
      style={{ fontWeight: isSelected ? "bold" : "normal" }}
      id={isToday ? "today" : ""}
    >
      {str}
      {isToday && <span className="dot"></span>}
    </div>
  );
}

export default Day;
