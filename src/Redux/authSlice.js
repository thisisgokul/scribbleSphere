import {createSlice} from "@reduxjs/toolkit";
const storedUserData=JSON.parse(localStorage.getItem('userData'));

const initialState={
    user:storedUserData || null,
    loading:false,
};

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
            state.loading=false
            localStorage.setItem('userData',JSON.stringify(action.payload));
        },
        logout:(state)=>{
            state.user=null;
            state.loading=false;
            localStorage.removeItem('userData');

        }
    }
})

export const {login,logout}= authSlice.actions;
export default authSlice.reducer;