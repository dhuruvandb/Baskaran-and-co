import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Suspenses from "../components/Suspense";
import {
  fetchAllProducts,
  fetchProductById,
  fetchProductCategories,
} from "../components/store/Thunks/products-thunk";

import { store } from "../components/store";
import { selectAllProducts } from "../components/store/Selectors/product-selectors";

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
    loader: () => {
      store.dispatch(fetchProductCategories());
      return null;
    },
    children: [
      {
        path: "cart",
        element: (
          <Suspenses>
            <Cart />
          </Suspenses>
        ),
      },
      {
        path: "products/:categoryName",
        element: (
          <Suspenses>
            <Product />
          </Suspenses>
        ),
        loader: ({ params }) => {
          const { categoryName } = params;
          store.dispatch(fetchAllProducts(categoryName));
          return null;
        },
      },
      {
        path: "products/:categoryName/:productId",
        element: (
          <Suspenses>
            <Product />
          </Suspenses>
        ),
        loader: ({ params }) => {
          const { productId } = params;
          store.dispatch(fetchProductById(productId));
          return null;
        },
      },
      {
        path: "checkout",
        element: (
          <Suspenses>
            <Checkout />
          </Suspenses>
        ),
      },
      {
        path: "order-confirmation",
        element: (
          <Suspenses>
            <OrderConfirmation />
          </Suspenses>
        ),
      },
      {
        path: "profile-management",
        element: (
          <Suspenses>
            <ProfileManagement />
          </Suspenses>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspenses>
            <Orders />
          </Suspenses>
        ),
      },
      {
        path: "order-history",
        element: (
          <Suspenses>
            <OrderHistory />
          </Suspenses>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspenses>
            <Wishlist />
          </Suspenses>
        ),
      },
      {
        path: "admin/addProduct",
        element: (
          <Suspenses>
            <ProductForm />
          </Suspenses>
        ),
      },
      {
        path: "login",
        element: (
          <Suspenses>
            <LoginSignupPage />
          </Suspenses>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspenses>
            <LoginSignupPage />
          </Suspenses>
        ),
      },
      {
        path: "forget-password",
        element: (
          <Suspenses>
            <ForgetPassword />
          </Suspenses>
        ),
      },
      {
        path: "about",
        element: (
          <Suspenses>
            <AboutUs />
          </Suspenses>
        ),
      },
      {
        path: "return-policy",
        element: (
          <Suspenses>
            <ReturnPolicy />
          </Suspenses>
        ),
      },
      {
        path: "user-account",
        element: (
          <Suspenses>
            <UserAccount />
          </Suspenses>
        ),
      },
      {
        path: "terms-of-service",
        element: (
          <Suspenses>
            <TermsOfService />
          </Suspenses>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <Suspenses>
            <PrivacyPolicy />
          </Suspenses>
        ),
      },
    ],
  },
]);
