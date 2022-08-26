import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: '',
    category:0,
    categoryPhones:0,
    categoryLapts:0,
    open:false
  },
  reducers: {
    getSearch(state,action){
        state.search = action.payload
    },
    getId(state,action){
        state.category = action.payload
    },
    getIdPhones(state,action){
        state.categoryPhones = action.payload
    },
    getIdLapts(state,action){
        state.categoryLapts = action.payload
    },
    getOpen(state,action){
        state.open = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { getSearch,getId,getIdPhones,getIdLapts,getOpen } = filterSlice.actions;

export default filterSlice.reducer;
