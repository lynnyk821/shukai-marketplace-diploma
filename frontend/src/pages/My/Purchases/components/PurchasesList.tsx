import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import PaginationControls from "../../../../common-components/PaginationControls/PaginationControls.tsx";
import ProductItem from "../../../../common-components/ProductItem/ProductItem.tsx";
import {ProductItemProps} from "../../../../types/common/product-item-props.ts";
import {useUserStore} from "../../../../utils/store/useUserStore.ts";
import {axiosInstance} from "../../../../utils/axios/interceptors.ts";
import {TokenManager} from "../../../../utils/helpers/tokenManager.ts";

type OrderDto = {
    id: string;
    title: string;
    price: number;
    image: string;
    orderDate: string;
};

type PurchaseResponse = {
    purchases: OrderDto[];
    totalPages: number;
};

export default function PurchasesList() {
    const [purchases, setPurchases] = useState<ProductItemProps[]>([]);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams] = useSearchParams();
    const {user} = useUserStore();

    useEffect(() => {
        const statusParam = searchParams.get("status") || "Активні";
        const encodedStatus = encodeURIComponent(statusParam);
        if (user?.id && encodedStatus) {
            const fetchData = async () => {
                try {
                    const { data } = await axiosInstance.get<PurchaseResponse>(`/order-service/api/orders/purchases/${user.id}` +
                        `?page=${currentPage - 1}` + `&status=${encodedStatus}`, {
                        headers: {
                            Authorization: `Bearer ${TokenManager.getRefreshToken()}`
                        }}
                    )

                    const formatted = data.purchases.map(ad => ({
                        id: ad.id,
                        date: ad.orderDate,
                        title: ad.title,
                        price: ad.price,
                        image: ad.image,
                    }));

                    setPurchases(formatted);
                    setTotalPage(data.totalPages);
                } catch (err) {
                    console.error("Помилка запиту:", err);
                }
            }
            fetchData()
        }
    }, [user?.id, searchParams, currentPage]);

    return (
        <div className={"w-full flex flex-col"}>
            <ul className={"grid grid-cols-4 gap-3"}>
                {purchases.map((product: ProductItemProps) => (
                    <ProductItem
                        newPath={`/my/ad/${product.id}`}
                        key={product.id}
                        className="w-full h-80"
                        product={product}
                        size="lg"
                    />
                ))}
            </ul>
            <PaginationControls
                currentPage={currentPage}
                totalPage={totalPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};