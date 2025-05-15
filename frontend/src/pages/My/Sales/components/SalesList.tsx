import {useEffect, useState} from "react";
import {ProductItemProps} from "../../../../types/common/product-item-props.ts";
import {useSearchParams} from "react-router-dom";
import ProductItem from "../../../../common-components/ProductItem/ProductItem.tsx";
import PaginationControls from "../../../../common-components/PaginationControls/PaginationControls.tsx";
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

type SalesResponse = {
    sales: OrderDto[];
    totalPages: number;
};

export default function SalesList() {
    const [sales, setSales] = useState<ProductItemProps[]>([]);
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
                    const { data } = await axiosInstance.get<SalesResponse>(
                        `/order-service/api/orders/sales/${user.id}?page=${currentPage - 1}&status=${encodedStatus}`, {
                            headers: {
                                Authorization: `Bearer ${TokenManager.getRefreshToken()}`
                            }
                        }
                    )

                    const formatted = data.sales.map(ad => ({
                        id: ad.id,
                        date: ad.orderDate,
                        title: ad.title,
                        price: ad.price,
                        image: ad.image,
                    }));

                    setSales(formatted);
                    setTotalPage(data.totalPages);
                } catch (err) {
                    console.error("Помилка завантаження оголошень, перевірте підключення сервера:", err);
                }
            }
            fetchData()
        }
    }, [user?.id, searchParams, currentPage]);

    return (
        <div className={"w-full flex flex-col"}>
            <ul className={"grid grid-cols-4 gap-3"}>
                {sales.map((product: ProductItemProps) => (
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