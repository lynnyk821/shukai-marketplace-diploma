import AdvertisementListLayout from "./AdvertisementListLayout.tsx";
import ProductItem from "../../../../../common-components/ProductItem/ProductItem.tsx";
import {ProductItemProps} from "../../../../../types/common/product-item-props.ts";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import PaginationControls from "../../../../../common-components/PaginationControls/PaginationControls.tsx";
import {useUserStore} from "../../../../../utils/store/useUserStore.ts";
import {axiosInstance} from "../../../../../utils/axios/interceptors.ts";
import {TokenManager} from "../../../../../utils/helpers/tokenManager.ts";

type MyAdDTO = {
    id: string;
    title: string;
    price: number;
    image: string;
    createdAt: string;
};

type MyAdsResponse = {
    ads: MyAdDTO[];
    totalPageCount: number;
};

export default function AdvertisementList() {
    const [products, setProducts] = useState<ProductItemProps[]>([]);
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
                    const { data } = await axiosInstance.get<MyAdsResponse>(`/catalogue-service/api/private/catalogue/my-listings` +
                        `?userId=${user.id}` + `&page=${currentPage - 1}` + `&status=${encodedStatus}`, {
                        headers: {
                            Authorization: `Bearer ${TokenManager.getRefreshToken()}`
                        }}
                    )

                    const formatted = data.ads.map(ad => ({
                        id: ad.id,
                        date: ad.createdAt,
                        title: ad.title,
                        price: ad.price,
                        image: ad.image,
                    }));

                    setProducts(formatted);
                    setTotalPage(data.totalPageCount);
                } catch (err) {
                    console.error("Помилка запиту:", err);
                }
            }
            fetchData()
        }
    }, [user?.id, searchParams, currentPage]);

    return (
        <div className={"w-full flex flex-col"}>
            <AdvertisementListLayout>
                {products.map((product: ProductItemProps) => (
                    <ProductItem
                        newPath={`/my/ad/${product.id}`}
                        key={product.id}
                        className="w-full h-80"
                        product={product}
                        size="lg"
                        isMyProduct={true}
                    />
                ))}
            </AdvertisementListLayout>
            <PaginationControls
                currentPage={currentPage}
                totalPage={totalPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
