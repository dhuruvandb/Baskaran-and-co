import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./ContextProvider";
import Header from "./components/Layouts/Header";
import Main from "./components/Main";
import Product from "./components/Layouts/Product";

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/main" element={<Main />} />
          <Route path={`/product/:id`} element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
