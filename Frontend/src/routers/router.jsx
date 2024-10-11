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
        element: <Cart />,
      },
      {
        path: "products/:categoryName",
        element: <Product />,
      },
      {
        path: "products/:categoryName/:productId",
        element: <Product />,
        loader: ({ params }) => {
          const { productId } = params;
          store.dispatch(fetchProductById(productId));
          return null;
        },
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "profile-management",
        element: <ProfileManagement />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "order-history",
        element: <OrderHistory />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "admin/addProduct",
        element: <ProductForm />,
      },
      {
        path: "login",
        element: <LoginSignupPage />,
      },
      {
        path: "signup",
        element: <LoginSignupPage />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "return-policy",
        element: <ReturnPolicy />,
      },
      {
        path: "user-account",
        element: <UserAccount />,
      },
      {
        path: "terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
