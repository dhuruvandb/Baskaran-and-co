import { Outlet } from "react-router";
import Main from "../Main";
import React from "react";
export default function RootComponent() {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
}
