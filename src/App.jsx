import react from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Statistics from "./pages/Statistics";
import { getQuizById } from "./utils/getQuizById";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          // fetch("testDB/api.json"),
        },
        {
          path: "quiz/:id",
          element: <Quiz />,

          // loader: async ({ params }) => await getQuizById(params.id),
          loader: async ({ params }) =>
            await fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            ),
        },
        {
          path: "statistics",
          element: <Statistics />,
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
