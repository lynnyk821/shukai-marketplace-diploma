import {AppStore} from "../../types/common/app-store.ts";
import {create} from "zustand";

export const useAppStore = create<AppStore>((set) => ({
    isAuthenticated: false,
    isCatalogueOpen: false,
    searchInputValue: "",
    setSearchInputValue: (searchInputValue: string) => set({ searchInputValue }),
    setIsCatalogueOpen: (isCatalogueOpen: boolean) => set({ isCatalogueOpen }),
    setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}))