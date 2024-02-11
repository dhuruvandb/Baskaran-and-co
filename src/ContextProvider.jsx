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
  // const deleteCart = (buttonId)=>{
  //   const newData = { ...cartValue };
  //   delete newData[buttonId]
  //   setCartValue(newData);    
  //   }
  const addCartValue = (buttonId) => {
    setCartValue((prevTimes) => ({
      ...prevTimes,
      [buttonId]: (prevTimes[buttonId] || 0) + 1,
    }));
  };
  
  const removeCartValue = (buttonId) => {
    setCartValue((prevTimes) => ({
      ...prevTimes,
      [buttonId]: (prevTimes[buttonId] || 0) - 1,
     
    }));
      
    

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
hideCart
      }}
    >
      {children}
    </context.Provider>
  );
}
