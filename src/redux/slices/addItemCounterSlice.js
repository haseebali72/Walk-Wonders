// import { createSlice } from "@reduxjs/toolkit";

// const addItemCountSlice= createSlice({
//     name: 'addItemCount',
//     initialState: 0,
//     reducers:{
//         addCount:((state)=>{
//               state += 1
//               return state

//         }),
//         subtractCount:((state)=>{
//             switch (state) {
//                 case 0:
//                     return state;            
//                 default:
//                     return state-1
//             }
//         })
//     }
// })

// export const {addCount} = addItemCountSlice.actions
// export const {subtractCount} = addItemCountSlice.actions

// export default addItemCountSlice.reducer



// const addItemCounterSlice = createSlice({
//   name: "addItemCount",
//   initialState: {},
//   reducers: {
//     addCount: (state, action) => {
//       const { itemId, quantity } = action.payload;
//       state[itemId] = (state[itemId] || 0) + quantity;
//     },
//     subtractCount: (state, action) => {
//       const { itemId, quantity } = action.payload;
//       if (state[itemId] && state[itemId] >= quantity) {
//         state[itemId] -= quantity;
//       } else {
//         state[itemId] = 0;
//       }
//     },
//   },
// });
// addItemCounterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const addItemCounterSlice = createSlice({
    name: "addItemCount",
    initialState: {},
    reducers: {
        addCount: (state, action) => {
            const { itemId, quantity } = action.payload || {};
            if (itemId) {
              state[itemId] = (state[itemId] || 0) + (quantity || 1);
            }
          },
      subtractCount: (state, action) => {
        const { itemId, quantity } = action.payload || {}; 
        if (state[itemId] && state[itemId] >= quantity) {
          state[itemId] -= quantity;
        } else {
          state[itemId] = 0;
        }
      },
    },
  });
  
export const { addCount, subtractCount } = addItemCounterSlice.actions;
export default addItemCounterSlice.reducer;