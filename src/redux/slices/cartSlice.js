import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItem: ((state, action) => {
            let isPresent = false
            state.forEach(element => {
                switch (element.id) {
                    case action.payload.id:
                        isPresent = true
                        break;   
                    default:
                        break;
                }
            })
            if(!isPresent){
                state.push(action.payload)
                console.log(action.payload)
            }
        }),
        removeItem: ((state, action) => {
            return state.filter(item => item.id !== action.payload)
        })
    }
})

export const selectTotalPrice = state => state.cart.reduce((total, item) => total + item.price, 0);
export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer