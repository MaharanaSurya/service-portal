import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName : "",
    email : "",
    password : ""
}

const CreateAcc = createSlice({
    name : "AccountCration",
    initialState,
    reducers:{
        AccCreate:(state,action)=>{
            const { userName, email, password } = action.payload;
            state.userName = userName;
            state.email = email;
            state.password = password;
            
        }
    }
});

export const {AccCreate} = CreateAcc.actions;
export default CreateAcc.reducer;