import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "@fontsource-variable/nunito";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoApp from "./pages/TodoApp";
import Home from "./pages/Home";
import { ChakraProvider, DarkMode, theme } from "@chakra-ui/react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "todo",
    element: <TodoApp />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={DarkMode}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
