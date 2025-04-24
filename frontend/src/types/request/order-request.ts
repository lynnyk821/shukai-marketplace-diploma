export type OrderRequest = {
    userInfo: {
        firstName: string;
        lastName: string;
        middleName?: string; // Додано optional тип
        phoneNumber: string;
    };
    adInfo: {
        sellerName: string;
        adName: string;
        price: number;
    };
    paymentMethod: string;
    deliveryMethod: {
        service: string;
        city: string;
        warehouse: string;
    };
};