import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { FC } from "react";
import React from "react";

const App: FC = () => {
  return <RouterProvider router={routers} />;
};

export default App;
