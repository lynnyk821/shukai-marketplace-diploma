export type AppStore = {
    isAuthenticated: boolean,
    isCatalogueOpen: boolean,
    searchInputValue: string,
    setIsCatalogueOpen: (isCatalogueOpen: boolean) => void,
    setSearchInputValue: (searchInputValue: string) => void,
    setIsAuthenticated: (isAuthenticated: boolean) => void,
}