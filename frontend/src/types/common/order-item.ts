export type OrderItem = {
    advertisement: {
        id: string,
        price: number,
        image: string,
        title: string,
        seller: string
    },
    paymentMethods: Array<string>,
}