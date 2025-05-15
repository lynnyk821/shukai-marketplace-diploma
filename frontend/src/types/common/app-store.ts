import {UserResponse} from "../response/user-response.ts";

export type AppStore = {
    isCatalogueOpen: boolean,
    searchInputValue: string,
    cartCapacity: number,
    setIsCatalogueOpen: (isCatalogueOpen: boolean) => void,
    setSearchInputValue: (searchInputValue: string) => void,
    setCartCapacity: (cartCapacity: number) => void,
}