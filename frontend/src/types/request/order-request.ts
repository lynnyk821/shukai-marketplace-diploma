export type OrderRequest = {
    seller: {
        id: number;
        name: string;
    },
    customer: {
        id?: number;
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
        title: string;
        image: string;
        price: number;
        paymentMethod: string;
    }
};