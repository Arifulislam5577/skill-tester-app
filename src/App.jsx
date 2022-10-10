import react from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Statistics from "./pages/Statistics";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/quiz/:id",
          element: <Quiz />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
