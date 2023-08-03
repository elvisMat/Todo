import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import DayString from "./DayString";
import Day from "./Day";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { DateContext } from "../App";
function Calender() {
  const days = [];

  const [selectedDate, setSelectedDate] = useContext(DateContext);

  let month = moment(selectedDate).format("MMMM");

  let lastDay = moment().month(month).endOf("month").format("D");
  // set the next month
  function nextMonth() {
    var current = moment().month(month).add(1, "month");
    let format =
      current.format("D") +
      " " +
      current.format("MMMM") +
      " " +
      current.format("YYYY");
    setSelectedDate(format);
  }
  //set the previous month
  function prevMonth() {
    var current = moment().month(month).add(-1, "month");
    let format =
      current.format("D") +
      " " +
      current.format("MMMM") +
      " " +
      current.format("YYYY");
    setSelectedDate(moment(format));
    // console.log(moment(format));
  }

  // console.log();
  const dayOfWeekNumber = moment(selectedDate).startOf("month").day();
  const dayOfWeekNumberAdjusted = dayOfWeekNumber === 0 ? 7 : dayOfWeekNumber;

  for (let index = 0; index < dayOfWeekNumberAdjusted; index++) {
    days.push(" ");
  }
  for (let index = 0; index < parseInt(lastDay); index++) {
    days.push((index + 1).toString());
  }
  let dayStrings = ["su", "mo", "tu", "we", "th", "fr", "sa"];
  let today = moment().format("D");
  return (
    <div className="calender">
      <div className="day-string">
        {dayStrings.map((el) => (
          <DayString key={el} title={el} />
        ))}
      </div>
      <div className="days">
        {days.map((el, i) => (
          <Day
            isSelected={el === moment(selectedDate).format("D")}
            isToday={el == today}
            el={el}
            key={i.toString()}
          />
        ))}
      </div>
      <div className="month">
        <IconButton
          onClick={() => prevMonth()}
          icon={<BiChevronLeft size={"30px"} />}
        />
        {moment(selectedDate).format("MMMM")}
        <IconButton
          onClick={() => nextMonth()}
          icon={<BiChevronRight size={"30px"} />}
        />
      </div>
    </div>
  );
}

export default Calender;
