import { configureStore } from "@reduxjs/toolkit";
import CreateAcc from "./Slices/CreateAcc";


export const store = configureStore({
    reducer : {
        userAcc : CreateAcc
    }
});
