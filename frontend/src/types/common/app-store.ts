import {UserMeResponse} from "../response/user-me-response.ts";

export type AppStore = {
    userMe: UserMeResponse | null,
    isCatalogueOpen: boolean,
    searchInputValue: string,
    cartCapacity: number,
    setIsCatalogueOpen: (isCatalogueOpen: boolean) => void,
    setSearchInputValue: (searchInputValue: string) => void,
    setUserMe: (userMe: UserMeResponse | null) => void,
    setCartCapacity: (cartCapacity: number) => void,
}