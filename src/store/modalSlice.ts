import { ModalStateType } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ModalStateType = {
    isOpen: false,
    type: ""
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setIsOpen: (state, { payload }) => {
            state.isOpen = payload;
        },
        setModalType: (state, { payload }) => {
            state.type = payload;
        }
    }
});

export const { setIsOpen, setModalType } = modalSlice.actions
export default modalSlice.reducer;