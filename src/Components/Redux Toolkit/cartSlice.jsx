import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartData = JSON.parse(localStorage.getItem("CartItems"));

const initialState = {
  cartItems: cartData ?? [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addToCart: (state, action) => {
      // console.log(state.cartItems); //prev data
      // console.log(action.payload); //data passed when function is called

      var checkProduct = state.cartItems.filter((v, i) => {
        if (v.id == action.payload.id) {
          return v;
        }
      });

      if (checkProduct.length > 0) {
        const finalData = state.cartItems.map((v, i) => {
          if (v.id == action.payload.id) {
            v.quantity++;
            return v;
          } else {
            return v;
          }
        });
        // console.log(finalData)
        state.cartItems = finalData;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.success("Update cart successfully !");
      } else {
        const data = {
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          quantity: 1,
          description: action.payload.description,
        };
        const finalData = [data, ...state.cartItems];
        state.cartItems = finalData;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.success("Add to cart successfully !");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
