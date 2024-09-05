import Cart from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import ForgetPassword from "../pages/ForgetPassword";
import { LoginSignupPage } from "../pages/LoginSignup";
import { OrderConfirmation } from "../pages/OrderConfirmation";
import { ProductForm } from "../pages/ProductForm";
import React from "react";
import { ProfileManagement } from "../pages/ProfileManagement";
import { OrderHistory } from "../pages/OrderHistory";
import { Wishlist } from "../pages/Wishlist";
import { AboutUs } from "../pages/AboutUs";
import { Home } from "../pages/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Loader } = require("../components/Loader");
const { default: Layout } = require("../components/Layouts/Layout");
const { default: RootComponent } = require("../components/RootComponent");
const { Product } = require("../pages/Product");
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    children: [
      {
        path: "cart",
        element: (
          <React.Suspense fallback={<Loader />}>
            <Cart />
          </React.Suspense>
        ),
      },
      {
        path: "products/category/:categoryName",
        element: (
          <React.Suspense fallback={<Loader />}>
            <Product />
          </React.Suspense>
        ),
      },
      {
        path: "products/category/:categoryName/:productId",
        element: (
          <React.Suspense fallback={<Loader />}>
            <Product />
          </React.Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <React.Suspense fallback={<Loader />}>
            <Checkout />
          </React.Suspense>
        ),
      },
      {
        path: "order-confirmation",
        element: (
          <React.Suspense fallback={<Loader />}>
            <OrderConfirmation />
          </React.Suspense>
        ),
      },
      {
        path: "profile-management",
        element: (
          <React.Suspense fallback={<Loader />}>
            <ProfileManagement />
          </React.Suspense>
        ),
      },
      {
        path: "order-history",
        element: (
          <React.Suspense fallback={<Loader />}>
            <OrderHistory />
          </React.Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <React.Suspense fallback={<Loader />}>
            <Wishlist />
          </React.Suspense>
        ),
      },
      {
        path: "admin/addProduct",
        element: (
          <React.Suspense fallback={<Loader />}>
            <ProductForm />
          </React.Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <React.Suspense fallback={<Loader />}>
            <LoginSignupPage />
          </React.Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <React.Suspense fallback={<Loader />}>
            <LoginSignupPage />
          </React.Suspense>
        ),
      },
      {
        path: "forget-password",
        element: (
          <React.Suspense fallback={<Loader />}>
            <ForgetPassword />
          </React.Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <React.Suspense fallback={<Loader />}>
            <AboutUs />
          </React.Suspense>
        ),
      },
    ],
  },
]);
