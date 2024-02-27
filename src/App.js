import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Product from "./components/Layouts/Product";
import Cart from "./components/Layouts/Cart";
import RootComponent from "./components/pages/RootComponent";
import Header from "./components/Layouts/Header";
import Login from "../src/components/Layouts/Login";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "cart",
          element: (
            <>
              <Header />
              <Cart />
            </>
          ),
        },
        {
          path: "login",
          element: (
            <>
              <Header />
              <Login />
            </>
          ),
        },
        {
          path: "product/:Id",
          element: (
            <>
              <Header />
              <Product />
            </>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
