import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/create-todo/CreateTodo";
import Header from "./components/header/Header";
import TodoItem from "./components/todo-item/TodoItem";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const [todos, setTodos] = useState(initialState);

  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onStatusChange = (id) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(newArr);
  };

  const onEdit = (id, newText) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(newArr);
  };

  const newTodos = todos.map((item) => {
    return (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        status={item.status}
        onDelete={onDelete}
        onStatus={onStatusChange}
        onEdit={onEdit}
      />
    );
  });

  const AddTodo = (str) => {
    setTodos([{ text: str, status: false, id: Date.now() }, ...todos]);
  };

  const todoDone = todos.reduce((akk, item) => akk + Number(item.status), 0);

  return (
    <div className="App">
      {}
      <Header todoLength={todos.length} todoDone={todoDone} />
      <div className="content">
        <div>
          <CreateTodo AddTodo={AddTodo} />
        </div>
        <div className="content_body">{newTodos}</div>
      </div>
    </div>
  );
}

export default App;
