export function truncateStringWithN(stringData: string, n: number): string {
    return stringData.length > n
        ? stringData.slice(0, n).replace(/[\s.,!?;:]+$/g, '') + '...'
        : stringData;
}

export const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};
