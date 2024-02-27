import { Outlet } from "react-router";
import Header from "../Layouts/Header";
import Main from "../Main";
import ProductList from "../Layouts/ProductList";

export default function RootComponent() {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
}
