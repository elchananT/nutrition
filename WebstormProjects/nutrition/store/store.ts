import { create } from "zustand";

export type ModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

const createModalStore = () =>
    create<ModalState>((set) => ({
        isOpen: false,
        open: () => set({ isOpen: true }),
        close: () => set({ isOpen: false }),
    }));

export const useBookingModal = createModalStore();
export const useDownloadModal = createModalStore();
export const useCaseStudyModal = createModalStore();
