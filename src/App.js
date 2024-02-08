import ContextProvider from "./ContextProvider";
import Header from "./components/Layouts/Header";
import Main from "./components/Main";
export default function App() {
  return (
    <ContextProvider>
      <Header />
      <Main />
    </ContextProvider>
  );
}
