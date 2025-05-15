export type OrderRequest = {
    customer: {
        firstName: string;
        lastName: string;
        middleName: string;
        phoneNumber: string;
    },
    delivery: {
        service: string;
        city: string;
        warehouse: string;
    },
    advertisement: {
        id: string,
        title: string;
        image: string;
        price: number;
        seller: string;
    },
    paymentMethod: string;
};