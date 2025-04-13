import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

// Eager-loaded components
import CategoryPage from "./Category";
import WishlistPage from "./WishList";
import React from "react";

// Lazy-loaded components
const Cart = lazy(() => import("./Cart"));
const Loading = lazy(() => import("./Loading"));
const AppFooter = lazy(() => import("./Layouts/Footer"));
const AppHeader = lazy(() => import("./Layouts/Header"));
const Checkout = lazy(() => import("./Checkout"));
const MyAccount = lazy(() => import("./MyAccount"));
const OrderHistoryPage = lazy(() => import("./OrderHistory"));
const AddressBookPage = lazy(() => import("./AddressBook"));
const ProfilePage = lazy(() => import("./Profile"));
const AboutUsPage = lazy(() => import("./AboutUs"));
const ContactUsPage = lazy(() => import("./ContactUs"));
const Products = lazy(() => import("./Products"));
const ProductDetail = lazy(() => import("./ProductDetail"));
const LoginSignUp = lazy(() => import("./LoginSignUp"));

// App Layout Wrapper
const AppLayout = () => (
  <Suspense fallback={<Loading />}>
    <AppHeader />
    <Outlet />
    <AppFooter />
  </Suspense>
);

// Route configuration
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <CategoryPage /> },
      { path: "category/:page", element: <CategoryPage /> },
      { path: ":category/page/:page", element: <Products /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <LoginSignUp /> },
      { path: "signup", element: <LoginSignUp /> },
      { path: "checkout", element: <Checkout /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "contact", element: <ContactUsPage /> },
      { path: "my-account", element: <MyAccount /> },
      { path: "my-account/profile", element: <ProfilePage /> },
      { path: "my-account/orders", element: <OrderHistoryPage /> },
      { path: "my-account/addresses", element: <AddressBookPage /> },
      { path: "wishlist", element: <WishlistPage /> },
    ],
  },
]);
