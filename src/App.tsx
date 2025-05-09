import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./layout/RouterLayout";
import { AppProvider } from "./context/AppContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: (
            <div>
              <p className="font-poppins font-normal">Poppins 400</p>
              <p className="font-poppins font-medium">Poppins 500</p>
              <p className="font-poppins font-semibold">Poppins 600</p>
              <p className="font-poppins font-bold">Poppins 700</p>
              <p className="font-poppins font-extrabold">Poppins 800</p>
              <p className="font-poppins font-black">Poppins 900</p>
            </div>
          ),
        },
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
