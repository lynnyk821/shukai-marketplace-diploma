export type AppStore = {
    isCatalogueOpen: boolean,
    searchInputValue: string,
    setIsCatalogueOpen: (isCatalogueOpen: boolean) => void,
    setSearchInputValue: (searchInputValue: string) => void,
}