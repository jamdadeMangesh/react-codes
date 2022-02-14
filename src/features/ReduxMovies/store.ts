import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MovieSlice/MovieSlice";
import postReducer from "../PostAPI/PostSlice/PostSlice";
import checkboxFilterReducer from "../Checkboxes/CheckboxFilterSlice";
export const store = configureStore({
    reducer: {
        movies:moviesReducer,
        postSlice:postReducer,
        checkboxFilters: checkboxFilterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});