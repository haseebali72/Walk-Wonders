import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import addItemCounterReducer from "./slices/addItemCounterSlice";
import itemCountReducer from "./slices/itemCountSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        addItemCount : addItemCounterReducer,
        itemCount: itemCountReducer
    }
})

