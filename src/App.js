import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import RootComponent from "./components/pages/RootComponent";
import Login from "./components/pages/Login";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";
import { useEffect, useRef, useState } from "react";
import { updateProductDetails } from "./components/store/Slices";
import Layout from "./components/Layouts/Layout";

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
      element: (
        <>
          {loader ? (
            <Loader />
          ) : (
            <Layout>
              <RootComponent />
            </Layout>
          )}
        </>
      ),
      children: [
        {
          path: "cart",
          element: <>{loader ? <Loader /> : <Cart />}</>,
        },
        {
          path: "/:type(login|signup)",
          element: <>{loader ? <Loader /> : <Login />}</>,
        },
        {
          path: "product/:Id",
          element: <>{loader ? <Loader /> : <Product />}</>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
