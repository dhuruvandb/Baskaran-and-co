import Loader from "./Loader";
import React, { Suspense } from "react";
export default function Suspenses({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
