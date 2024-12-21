export function truncateStringWithN(stringData: string, n: number): string {
    return stringData.length > n
        ? stringData.slice(0, n).replace(/[\s.,!?;:]+$/g, '') + '...'
        : stringData;
}
