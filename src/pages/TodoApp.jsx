import { createContext, useState } from "react";
import "../styles/App.css";
import MyHeading from "../components/Heading";
import Expanded from "../components/Expanded";
import Calender from "../components/Calender";
import Todo from "../components/Todo";
import moment from "moment";

export const DateContext = createContext();

function TodoApp() {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("D MMMM YYYY")
  );
  return (
    <div className="page">
      <DateContext.Provider value={[selectedDate, setSelectedDate]}>
        <MyHeading title={moment(selectedDate).format("Do MMMM YYYY")} />
        <Expanded
          style={{ alignItems: "start", marginTop: "50px" }}
          className="flex"
          h={"380px"}
        >
          <Calender />
          <Todo />
        </Expanded>
      </DateContext.Provider>
    </div>
  );
}

export default TodoApp;
