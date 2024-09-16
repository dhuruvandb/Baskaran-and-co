import Cart from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import ForgetPassword from "../pages/ForgetPassword";
import { LoginSignupPage } from "../pages/LoginSignup";
import { OrderConfirmation } from "../pages/OrderConfirmation";
import { ProductForm } from "../pages/ProductForm";
import React, { Suspense } from "react";
import { ProfileManagement } from "../pages/ProfileManagement";
import { OrderHistory } from "../pages/OrderHistory";
import { Wishlist } from "../pages/Wishlist";
import { AboutUs } from "../pages/AboutUs";
import { ReturnPolicy } from "../pages/ReturnPolicy";
import { UserAccount } from "../pages/UserAccount";
import TermsOfService from "../pages/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Orders from "../pages/Orders";

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
        <RootComponent />
      </Layout>
    ),
    children: [
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "products/:categoryName",
        element: (
          <Suspense fallback={<Loader />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "products/:categoryName/:productId",
        element: (
          <Suspense fallback={<Loader />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<Loader />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "order-confirmation",
        element: (
          <Suspense fallback={<Loader />}>
            <OrderConfirmation />
          </Suspense>
        ),
      },
      {
        path: "profile-management",
        element: (
          <Suspense fallback={<Loader />}>
            <ProfileManagement />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<Loader />}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: "order-history",
        element: (
          <Suspense fallback={<Loader />}>
            <OrderHistory />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<Loader />}>
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "admin/addProduct",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductForm />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <LoginSignupPage />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loader />}>
            <LoginSignupPage />
          </Suspense>
        ),
      },
      {
        path: "forget-password",
        element: (
          <Suspense fallback={<Loader />}>
            <ForgetPassword />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "return-policy",
        element: (
          <Suspense fallback={<Loader />}>
            <ReturnPolicy />
          </Suspense>
        ),
      },
      {
        path: "user-account",
        element: (
          <Suspense fallback={<Loader />}>
            <UserAccount />
          </Suspense>
        ),
      },
      {
        path: "terms-of-service",
        element: (
          <Suspense fallback={<Loader />}>
            <TermsOfService />
          </Suspense>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
    ],
  },
]);
