"use client";

import useModal from '@/hooks/useModal';
import { RootState } from '@/store';
import { ModalType } from '@/utils/types';
import { useSelector } from 'react-redux';
import FiltersModal from './modals/FiltersModal';

const renderModal = ({ modalType }: { modalType: ModalType }) => {
    switch (modalType) {
        case "filters":
            return <FiltersModal />;
        default:
            return null;
    }
}

const Modal = () => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const modalType: ModalType = useSelector((state: RootState) => state.modal.type);
    const { closeModal } = useModal();

    return isOpen && (
        <div onClick={closeModal} className='px-5 fixed top-0 left-0 bg-black/50 w-screen h-screen flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='p-5 rounded-lg border border-gray-300 shadow-md bg-slate-200 w-full md:w-1/2 lg:w-1/3 max-w-full max-h-96 overflow-hidden'>
                {renderModal({ modalType })}
            </div>
        </div>
    )
}

export default Modal