import { createContext, useState } from "react";
export const context = createContext({
  isShowLogIn: false,
  cartValue: {},
  showLogin: () => {},
  hideLogin: () => {},
  addCardValue: () => {},
  removeCartValue: () => {},
});
export default function ContextProvider({ children }) {
  const [isShowLogIn, setShowLogIn] = useState(false);
  const [cartValue, setCartValue] = useState({});
  const showLogin = () => setShowLogIn(!isShowLogIn);
  const hideLogin = () => setShowLogIn(!isShowLogIn);
  const addCartValue = (buttonId) => {
    setCartValue((prevTimes) => ({
      ...prevTimes,
      [buttonId]: (prevTimes[buttonId] || 0) + 1,
    }));
  };

  const removeCartValue = (buttonId) => {
    if (cartValue[buttonId] && cartValue[buttonId] > 0) {
      setCartValue((prevTimes) => ({
        ...prevTimes,
        [buttonId]: (prevTimes[buttonId] || 0) - 1,
      }));
    }
  };
  return (
    <context.Provider
      value={{
        isShowLogIn,
        showLogin,
        hideLogin,
        cartValue,
        addCartValue,
        removeCartValue,
      }}
    >
      {children}
    </context.Provider>
  );
}
