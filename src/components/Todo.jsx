import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import TodoCard from "./TodoCard";
import { Button } from "@chakra-ui/react";
import moment from "moment";
import { useLocalStorage } from "react-use";
import { DateContext } from "../App";

export const TodoContext = createContext();
function Todo() {
  const [selectedDate] = useContext(DateContext);
  const [value, setValue, remove] = useLocalStorage("my-todos", []);

  // const matchingItems = );

  const selectedMoment = moment(moment(selectedDate));
  const [todos, setTodos] = useState(
    value.filter((item) => moment(item.date).isSame(selectedMoment))
    // value.filter((el) => moment(el.date) == selectedDate)
  );

  const [itemInput, setItemInput] = useState("");
  useEffect(() => {
    setTodos(value.filter((item) => moment(item.date).isSame(selectedMoment)));
  }, [selectedDate, value]);
  // setValue();
  function addTodo() {
    setTodos([
      {
        id: moment(),
        date: selectedDate,
        title: itemInput,
        isComplete: false,
      },
      ...todos,
    ]);
    setValue([
      {
        id: moment(),
        date: selectedDate,
        title: itemInput,
        isComplete: false,
      },
      ...value,
    ]);

    setItemInput("");
  }
  function isDateInPast(dateString) {
    const dateToCheck = moment(dateString, "YYYY-MM-DD");
    const currentDate = moment();

    return dateToCheck.isBefore(currentDate, "day");
  }
  // console.log();
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      <div className="todo">
        <div>Things you gotta do</div>
        {!isDateInPast(selectedDate) && (
          <div className="form">
            <input
              value={itemInput}
              onChange={(e) => setItemInput(e.target.value)}
              type="text"
              placeholder="Add an item"
              name="item"
              id="item"
              onKeyDown={(el) => {
                //add to on enter key pressed
                if (el.key == "Enter" && itemInput.length > 3) {
                  // console.log("adding");
                  addTodo();
                }
              }}
            />
            <button onClick={() => addTodo()} disabled={itemInput.length < 4}>
              Add
            </button>
          </div>
        )}
        <div className="todo-list">
          {todos.length == 0 && (
            <div style={{ paddingLeft: "6px" }}>Nothing yet</div>
          )}
          {todos.map((el) => (
            <TodoCard
              id={el.id}
              onClick={setTodos}
              isDone={el.isComplete}
              title={el.title + " " + moment(el.date).format("Do MMMM YYYY")}
              key={el.id}
            />
          ))}
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default Todo;
