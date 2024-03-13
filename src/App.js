import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "./components/Layouts/Product";
import Cart from "./components/Layouts/Cart";
import RootComponent from "./components/pages/RootComponent";
import Header from "./components/Layouts/Header";
import Login from "./components/Layouts/Login";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";
import { useEffect, useRef, useState } from "react";
import { updateProductDetails } from "./components/store/Slices";

export default function App() {
  const initialLoad = useRef(true);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }
    fetch("https://baskaran-and-co-default-rtdb.firebaseio.com/items.json")
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        data.forEach((element) => {
          dispatch(updateProductDetails(element));
        });
      })
      .catch((error) => {
        setLoader(false);
        console.error(error);
      });
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>{loader ? <Loader /> : <RootComponent />}</>,
      children: [
        {
          path: "cart",
          element: (
            <>
              {loader ? (
                <Loader />
              ) : (
                <>
                  <Header />
                  <Cart />
                </>
              )}
            </>
          ),
        },
        {
          path: "/:type(login|signup)",
          element: (
            <>
              {loader ? (
                <Loader />
              ) : (
                <>
                  <Header />
                  <Login />
                </>
              )}
            </>
          ),
        },
        {
          path: "product/:Id",
          element: (
            <>
              {loader ? (
                <Loader />
              ) : (
                <>
                  <Header />
                  <Product />
                </>
              )}
            </>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
