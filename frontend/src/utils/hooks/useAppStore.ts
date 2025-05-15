import {AppStore} from "../../types/common/app-store.ts";
import {create} from "zustand";

export const useAppStore = create<AppStore>((set) => ({
    cartCapacity: 0,
    searchInputValue: "",
    isCatalogueOpen: false,
    setSearchInputValue: (searchInputValue: string) => set({ searchInputValue }),
    setIsCatalogueOpen: (isCatalogueOpen: boolean) => set({ isCatalogueOpen }),
    setCartCapacity: (cartCapacity: number) => set({ cartCapacity }),
}))