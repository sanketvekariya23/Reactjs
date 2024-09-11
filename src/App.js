import { useState, useEffect } from 'react';
import './App.css';
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import { Todo } from './MyComponents/Todo';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodo] = useState(initTodo);

  // To update localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Delete the todo
  const onDelete = (todo) => {
    setTodo(todos.filter((e) => {
      return e !== todo;
    }));
  };

  // Add todo
  const addTodo = (title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodo([...todos, mytodo]);
  };

  return (
    <>
      <Router>
        <Header title="My ToDos List" />
        <Routes>
          <Route path='/' element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todo todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
