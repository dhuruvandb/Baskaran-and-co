import { createContext, useState } from "react";
export const context = createContext({
  isShowLogIn: false,
  isShowCart: false,
  cartValue: {},
  showLogin: () => {},
  hideLogin: () => {},
  showCart: () => {},
  hideCart: () => {},
  addCardValue: () => {},
  removeCartValue: () => {},
});
export default function ContextProvider({ children }) {
  const [isShowLogIn, setShowLogIn] = useState(false);
  const [isShowCart, setShowCart] = useState(false);
  const [cartValue, setCartValue] = useState({});
  const showLogin = () => setShowLogIn(!isShowLogIn);
  const hideLogin = () => setShowLogIn(!isShowLogIn);
  const showCart = () => setShowCart(!isShowCart);
  const hideCart = () => setShowCart(!isShowCart);

  const addCartValue = (buttonId) => {
    setCartValue((prevTimes) => ({
      ...prevTimes,
      [buttonId]: (prevTimes[buttonId] || 0) + 1,
    }));
  };

  const removeCartValue = (buttonId) => {
    const updatedCartValue = { ...cartValue };
    if (updatedCartValue[buttonId] > 0) {
      updatedCartValue[buttonId]--;
      if (updatedCartValue[buttonId] === 0) {
        delete updatedCartValue[buttonId];
      }
      setCartValue(updatedCartValue);
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
        isShowCart,
        showCart,
        hideCart,
      }}
    >
      {children}
    </context.Provider>
  );
}
