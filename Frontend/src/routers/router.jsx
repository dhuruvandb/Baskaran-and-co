import Cart from "../pages/Cart";
import ForgetPassword from "../pages/ForgetPassword";
import { LoginSignupPage } from "../pages/LoginSignup";
import { ProductForm } from "../pages/ProductForm";

const { createBrowserRouter } = require("react-router-dom");
const { default: Loader } = require("../components/Loader");
const { default: Layout } = require("../components/Layouts/Layout");
const { default: RootComponent } = require("../components/RootComponent");
const { Product } = require("../pages/Product");
const loader = false;
export const router = createBrowserRouter([
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
        path: "login",
        element: <>{loader ? <Loader /> : <LoginSignupPage />}</>,
      },
      {
        path: "signup",
        element: <>{loader ? <Loader /> : <LoginSignupPage />}</>,
      },
      {
        path: "forget-password",
        element: <>{loader ? <Loader /> : <ForgetPassword />}</>,
      },
      {
        path: "products/category/:categoryName/:productId",
        element: <>{loader ? <Loader /> : <Product />}</>,
      },
      {
        path: "products/category/:categoryName",
        element: <>{loader ? <Loader /> : <Product />}</>,
      },
      {
        path: "admin/addProduct",
        element: <>{loader ? <Loader /> : <ProductForm />}</>,
      },
    ],
  },
]);
