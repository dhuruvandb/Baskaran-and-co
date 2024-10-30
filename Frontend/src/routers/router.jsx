import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Suspenses from "../components/Suspense";

// Layout and Root Components
const Layout = lazy(() => import("../components/Layouts/Layout"));
const RootComponent = lazy(() => import("../components/RootComponent"));

// User Account and Authentication
const LoginSignupPage = lazy(() => import("../pages/LoginSignup"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
const UserAccount = lazy(() => import("../pages/UserAccount"));
const ProfileManagement = lazy(() => import("../pages/ProfileManagement"));

// Cart and Checkout
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));

// Order Related Pages
const OrderConfirmation = lazy(() => import("../pages/OrderConfirmation"));
const OrderHistory = lazy(() => import("../pages/OrderHistory"));
const Orders = lazy(() => import("../pages/Orders"));

// Product and Wishlist
const Product = lazy(() => import("../pages/Product"));
const ProductForm = lazy(() => import("../pages/ProductForm"));
const Wishlist = lazy(() => import("../pages/Wishlist"));

// Static and Informational Pages
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ReturnPolicy = lazy(() => import("../pages/ReturnPolicy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspenses>
        <Layout>
          <RootComponent />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "cart",
    element: (
      <Suspenses>
        <Layout>
          <Cart />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "products/:categoryName",
    element: (
      <Suspenses>
        <Layout>
          <Product />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "products/:categoryName/:productIdentifier",
    element: (
      <Suspenses>
        <Layout>
          <Product />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "checkout",
    element: (
      <Suspenses>
        <Layout>
          <Checkout />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "order-confirmation",
    element: (
      <Suspenses>
        <Layout>
          <OrderConfirmation />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "profile-management",
    element: (
      <Suspenses>
        <Layout>
          <ProfileManagement />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "orders",
    element: (
      <Suspenses>
        <Layout>
          <Orders />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "order-history",
    element: (
      <Suspenses>
        <Layout>
          <OrderHistory />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "wishlist",
    element: (
      <Suspenses>
        <Layout>
          <Wishlist />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "admin/addProduct",
    element: (
      <Suspenses>
        <Layout>
          <ProductForm />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "login",
    element: (
      <Suspenses>
        <Layout>
          <LoginSignupPage />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspenses>
        <Layout>
          <LoginSignupPage />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "forget-password",
    element: (
      <Suspenses>
        <Layout>
          <ForgetPassword />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "about",
    element: (
      <Suspenses>
        <Layout>
          <AboutUs />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "return-policy",
    element: (
      <Suspenses>
        <Layout>
          <ReturnPolicy />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "user-account",
    element: (
      <Suspenses>
        <Layout>
          <UserAccount />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "terms-of-service",
    element: (
      <Suspenses>
        <Layout>
          <TermsOfService />
        </Layout>
      </Suspenses>
    ),
  },
  {
    path: "privacy-policy",
    element: (
      <Suspenses>
        <Layout>
          <PrivacyPolicy />
        </Layout>
      </Suspenses>
    ),
  },
]);
