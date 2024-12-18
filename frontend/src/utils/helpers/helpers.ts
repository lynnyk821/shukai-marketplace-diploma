export function truncateProductName(productName: string, n: number): string {
    return productName.length > n
        ? productName.slice(0, n).replace(/[\s.,!?;:]+$/g, '') + '...'
        : productName;
}
