import {AppStore} from "../../types/common/app-store.ts";
import {create} from "zustand";
import {UserMeResponse} from "../../types/response/user-me-response.ts";

export const useAppStore = create<AppStore>((set) => ({
    userMe: null,
    isCatalogueOpen: false,
    searchInputValue: "",
    cartCapacity: 0,
    setSearchInputValue: (searchInputValue: string) => set({ searchInputValue }),
    setIsCatalogueOpen: (isCatalogueOpen: boolean) => set({ isCatalogueOpen }),
    setUserMe: (userMe: UserMeResponse | null) => set({ userMe }),
    setCartCapacity: (cartCapacity: number) => set({ cartCapacity }),
}))