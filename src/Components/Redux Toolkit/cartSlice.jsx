import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartData = JSON.parse(localStorage.getItem("cartItems"));

const initialState = {
  cartItems: cartData ?? [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
     const finalData = state.cartItems.map((v,i)=>{
      if(v.id == action.payload){
        v.quantity++;
      }else{
        return v;
      }

     })

     state.cartItems = finalData;
     localStorage.setItem('cartItems', JSON.stringify(finalData));
    },
    decrement: (state, action) => {
       const finalData = state.cartItems.map((v,i)=>{
      if(v.id == action.payload && v.quantity > 1){
        v.quantity--;
      }else{
        return v;
      }

     })

     state.cartItems = finalData;
    localStorage.setItem('cartItems', JSON.stringify(finalData));

    },
    remove: (state, action)=>{
      const finalData = state.cartItems.filter((v,i)=>{
        if(v.id == action.payload){

        }else{
          return v;
        }
      })
      state.cartItems = finalData;
    localStorage.setItem('cartItems', JSON.stringify(finalData));

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
export const { addToCart , increment, decrement, remove} = cartSlice.actions;

export default cartSlice.reducer;
