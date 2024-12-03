import {AppStore} from "../../types/app-store.ts";
import {create} from "zustand";

export const useAppStore = create<AppStore>((set) => ({
    isCatalogOpen: false,
    setIsCatalogOpen: (isCatalogOpen: boolean) => set({ isCatalogOpen }),
}))