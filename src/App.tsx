import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import News from "./pages/News";
import About from "./pages/About";
import RouterLayout from "./layout/RouterLayout";
import Services from "./pages/Services";
import BlogDetails from "./pages/BlogDetails";
import CardDetails from "./pages/CardDetails";

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