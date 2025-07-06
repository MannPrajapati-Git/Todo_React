import "./App.css";
import About from "./components/About";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  // Initialize todos from localStorage
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // State for todos
  const [todos, setTodos] = useState(initTodo);

  // Delete handler
  const onDelete = (todo) => {
    console.log("Deleting:", todo);
    setTodos(todos.filter((e) => e !== todo));
    // ❌ Don't set localStorage manually here — useEffect will handle it
  };

  // Add handler
  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log("Added:", myTodo);
  };

  // Update localStorage on todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Navbar title="MyTodosList" />

      <Routes>
        {/* Redirect / to home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home route */}
        <Route
          path="/home"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />

        {/* About route */}
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
