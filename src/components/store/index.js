// import { createStore } from "redux";
import {createSlice,configureStore} from  "@reduxjs/toolkit"
// import { DECREMENT, INCREMENT } from "../constants/constants";
const stateValues = { cartValue: {} };
const cartValue = createSlice({
  name:"CartValueUpdate",
  initialState:stateValues.cartValue,
  reducers:{
    incrementCartValue(state,buttonId){
         stateValues.cartValue[buttonId]= (state.cartValue[buttonId] || 0) + 1
    },
    decrementCartValue(state,buttonId){
      if (state.cartValue[buttonId] > 0) {
        state.cartValue[buttonId]--;
        if (state.cartValue[buttonId] === 0) {
          delete state.cartValue[buttonId];
        }
      }
    }
  }
})

// function counterfun(state = stateValues, action) {
  
//   const { type, buttonId } = action;
//   switch (type) {
//     case INCREMENT:
//       return {
//         ...state,
//         cartValue: {
//           ...state.cartValue,
//           [buttonId]: (state.cartValue[buttonId] || 0) + 1,
//         },
//       };
//     case DECREMENT:
//       if (state.cartValue[buttonId] > 0) {
//         const updatedC = { ...state.cartValue };
//         updatedC[buttonId]--;
//         if (updatedC[buttonId] === 0) {
//           delete updatedC[buttonId];
//         }
//         return {
//           ...state,
//           cartValue: updatedC,
//         };
//       }
//       return state;

//     default:
      
//       return state;
      
//   }
  
// }
export const cartValueActions = cartValue.actions
export const store = configureStore({
  reducer:{
    cartValue:cartValue.reducer,
  }
});
