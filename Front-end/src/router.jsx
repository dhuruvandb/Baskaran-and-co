import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import CategoryPage from "./Category.jsx";
import WishlistPage from "./WishList.jsx";

// Lazy-loaded components
const Cart = lazy(() => import("./Cart.jsx"));
const Loading = lazy(() => import("./Loading.jsx"));
const AppFooter = lazy(() => import("./Layouts/Footer.jsx"));
const AppHeader = lazy(() => import("./Layouts/Header.jsx"));
const Checkout = lazy(() => import("./Checkout.jsx"));
const MyAccount = lazy(() => import("./MyAccount.jsx"));
const OrderHistoryPage = lazy(() => import("./OrderHistory.jsx"));
const AddressBookPage = lazy(() => import("./AddressBook.jsx"));
const ProfilePage = lazy(() => import("./Profile.jsx"));
const AboutUsPage = lazy(() => import("./AboutUs.jsx"));
const ContactUsPage = lazy(() => import("./ContactUs.jsx"));

// Lazy-loaded components already
const Products = lazy(() => import("./Products.jsx"));
const ProductDetail = lazy(() => import("./ProductDetail.jsx"));
const LoginSignUp = lazy(() => import("./LoginSignUp.jsx"));

export const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <Outlet />
        <AppFooter />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <CategoryPage />,
      },
      {
        path: "/category/:page",
        element: <CategoryPage />,
      },
      {
        path: "/:category/page/:page",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginSignUp />,
      },
      {
        path: "/signup",
        element: <LoginSignUp />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
      },
      {
        path: "/my-account/profile",
        element: <ProfilePage />,
      },
      {
        path: "/my-account/orders",
        element: <OrderHistoryPage />,
      },
      {
        path: "/my-account/addresses",
        element: <AddressBookPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
    ],
  },
]);
