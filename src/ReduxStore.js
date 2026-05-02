import { configureStore } from "@reduxjs/toolkit";
import { trendReducer } from "./StoreSlices";
import { cookieReducer } from "./StoreSlices";
import { langreducer } from "./StoreSlices";

const ReduxStore=configureStore({
    reducer:{
        movies:trendReducer,
        cookie:cookieReducer,
        currlanguage:langreducer,
    }
})

export default ReduxStore;