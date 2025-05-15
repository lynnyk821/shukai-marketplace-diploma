import {UseFormSetValue, UseFormWatch} from "react-hook-form";

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

export const handleImageUpload = async (
    file: File, index: number, setValue: UseFormSetValue<any>, watch: UseFormWatch<any>
) => {
    const base64 = await convertToBase64(file);
    const currentPhotos = [...watch("images")];
    currentPhotos[index] = base64;
    setValue("images", currentPhotos, { shouldValidate: true });
};

export const handleImageDelete = (
    index: number, setValue: UseFormSetValue<any>, watch: UseFormWatch<any>
) => {
    const newPhotos = [...watch("images")];
    newPhotos[index] = "";
    setValue("images", newPhotos, { shouldValidate: true });
};


export const formatDate = (date: Date | string): string => {
    const thisDate = new Date(date);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Функція для форматування часу (години:хвилини)
    const formatTime = (date: Date): string => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // Перевірка, чи дата сьогодні
    if (thisDate.toDateString() === today.toDateString()) {
        const timeDifference = today.getTime() - thisDate.getTime(); // Різниця в мілісекундах

        // Якщо різниця менше години
        if (timeDifference < 1000 * 60 * 60) {
            const minutesAgo = Math.floor(timeDifference / (1000 * 60)); // Різниця в хвилинах
            if (minutesAgo < 1) {
                return `менше хвилини тому`;
            } else {
                const minutesText = minutesAgo === 1 ? "хвилину" : "хвилини";
                return `${minutesAgo} ${minutesText} тому`;
            }
        } else {
            const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60)); // Різниця в годинах
            const hoursText = hoursAgo === 1 ? "годину" : "години";
            return `${hoursAgo} ${hoursText} тому`;
        }
    }

    // Перевірка, чи дата вчора
    if (thisDate.toDateString() === yesterday.toDateString()) {
        return `вчора о ${formatTime(thisDate)}`;
    }

    // Для старіших дат
    const day = thisDate.getDate();
    const month = thisDate.toLocaleString('uk-UA', { month: 'long' }); // Назва місяця українською
    const year = thisDate.getFullYear();

    return `${day} ${month} ${year}`;
};