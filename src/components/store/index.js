import { createStore } from "redux";
import { DECREMENT, INCREMENT } from "../constants/constants";
const stateValues = { cartValue: {} };
function counterfun(state = stateValues, action) {
  console.log(state.cartValue);
  const { type, buttonId } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        cartValue: {
          ...state.cartValue,
          [buttonId]: (state.cartValue[buttonId] || 0) + 1,
        },
      };
    case DECREMENT:
      if (state.cartValue[buttonId] > 0) {
        const updatedC = { ...state.cartValue };
        updatedC[buttonId]--;
        if (updatedC[buttonId] === 0) {
          delete updatedC[buttonId];
        }
        return {
          ...state,
          cartValue: updatedC,
        };
      }
      return state;

    default:
      return state;
  }
}
export const store = createStore(counterfun);
