import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"movies",
    initialState:{TrendingNow:[]},
    reducers:{
        addTendingNowMovies : (state,action)=>{
            state.TrendingNow=action.payload;
        }
    }
})

const CookieSlice=createSlice({
    name:"cookie",
    initialState:{isCookie:false},
    reducers:{
        changeStatus:(state,action)=>{
            state.isCookie=action.payload;
        }
    }
})


const LangSlice=createSlice({
    name:"currlanguage",
    initialState:{selectedLang:"en"},
    reducers:{
        changeCurrlang:(state,action)=>{
            state.selectedLang=action.payload;
        }
    }
})

export const {changeCurrlang}=LangSlice.actions;
export const {addTendingNowMovies}=MovieSlice.actions;
export const {changeStatus}=CookieSlice.actions;

export const langreducer = LangSlice.reducer;
export const trendReducer = MovieSlice.reducer;
export const cookieReducer = CookieSlice.reducer;