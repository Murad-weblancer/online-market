import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products:[],
    totalCount:0
  },
  reducers: {
    addProducts(state,action){
        const findIndex = state.products.find(obj => obj.id === action.payload.id)

        if(findIndex){
            findIndex.count++
        }else{
            state.products.push({
                ...action.payload,
                count:1
            })
        }

        state.totalCount = state.products.reduce((sum,obj)=>(obj.price*obj.count)+sum,0)

    },
    removeProducts(state,action){
      state.products = state.products.filter(obj=>obj.id !== action.payload)
      state.totalCount = state.products.reduce((sum,obj)=>(obj.price*obj.count)-sum,0)
    },
    increment(state,action){
      const findIndex = state.products.find(obj => obj.id === action.payload)
      if(findIndex){
        findIndex.count++
      }
      state.totalCount = state.products.reduce((sum,obj)=>(obj.price*obj.count)+sum,0)

    },
    decriment(state,action){
      const findIndex = state.products.find(obj => obj.id === action.payload)
      if(findIndex.count>1){
        findIndex.count--
      }
      state.totalCount = state.products.reduce((sum,obj)=>(obj.price*obj.count)-sum,0)

    },
    clearCart(state){
      state.products = []
      state.totalCount = 0
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProducts,removeProducts,increment,decriment,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
