import React, { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { DateContext } from "../pages/TodoApp";
import { TodoContext } from "./Todo";

function TodoCard({ title, id, isDone }) {
  const [done, setDone] = useState(isDone ?? false);
  const [selectedDate, setSelectedDate] = useContext(DateContext);
  const [value, setValue, remove] = useLocalStorage("my-todos", []);
  const [todos, setTodos] = useContext(TodoContext);
  function markEventAsComplete(id, array) {
    let jsonData = array;
    const eventToUpdate = jsonData.find((event) => event.id === id);

    if (eventToUpdate) {
      eventToUpdate.isComplete = !eventToUpdate.isComplete;
      console.log(`Event with ID ${id} marked as complete.`);
    } else {
      console.log(`Event with ID ${id} not found.`);
    }

    return jsonData;
  }
  function handleClick() {
    setDone(!done);
    let arr = markEventAsComplete(id, todos);
    let arr2 = markEventAsComplete(id, value);
    setTodos(arr);
    setValue(arr2);
  }

  return (
    <div onClick={() => handleClick()} className="todo_card">
      {done ? <del>{title}</del> : title}
    </div>
  );
}

export default TodoCard;
