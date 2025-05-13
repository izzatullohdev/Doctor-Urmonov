import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./layout/RouterLayout";
import { AppProvider } from "./context/AppContext";

const Home = React.lazy(() => import('./pages/Home'));
const Blog = React.lazy(() => import('./pages/Blog'));
const News = React.lazy(() => import('./pages/News'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const BlogDetails = React.lazy(() => import('./pages/BlogDetails'))
const CardDetails = React.lazy(() => import('./pages/CardDetails'));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "services",
          element: <Services />
        },
        {
          path: "/card/:id",
          element: <CardDetails />
        },
        {
          path: "/blog/:id",
          element: <BlogDetails />
        }
      ],
    },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
