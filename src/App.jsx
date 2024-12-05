import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

// layouts
import MaineLayout from "./layouts/MaineLayout";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";

const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // delete qo'shish
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MaineLayout />,
      children: [
        {
          index: true,
          element: <Home todos={todos} deleteTodo={deleteTodo} />,
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
