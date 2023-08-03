import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyHeading from "./components/Heading";
import Expanded from "./components/Expanded";
import Calender from "./components/Calender";
import Todo from "./components/Todo";
import moment from "moment";

export const DateContext = createContext();

function App() {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("D MMMM YYYY")
  );
  return (
    <DateContext.Provider value={[selectedDate, setSelectedDate]}>
      <MyHeading title={moment(selectedDate).format("Do MMMM YYYY")} />
      <Expanded style={{ alignItems: "start" }} className="flex" h={"380px"}>
        <Calender />
        <Todo />
      </Expanded>
    </DateContext.Provider>
  );
}

export default App;
