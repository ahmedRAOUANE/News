import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modalSlice";
import filtersSlice from "./filtersSlice";

const store = configureStore({
    reducer: {
        modal: modalSlice,
        filters: filtersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;