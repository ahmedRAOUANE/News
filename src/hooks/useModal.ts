"use client";

import { setIsOpen, setModalType } from "@/store/modalSlice";
import { ModalType } from "@/utils/types";
import { useDispatch } from "react-redux";

/**
 * useModal hook
 *
 * This hook provides functions to open and close a modal.
 *
 * @returns {Object} An object with two functions: `openModal` and `closeModal`.
 *                   `openModal` sets the `modal.isOpen` state to true, and
 *                   `closeModal` sets the state to false.
 */

const useModal = () => {
    const dispatch = useDispatch();

    const openModal = (type: ModalType) => {
        dispatch(setIsOpen(true));
        dispatch(setModalType(type));
    };

    const closeModal = () => {
        dispatch(setIsOpen(false));
    };

    return { openModal, closeModal };
}

export default useModal;