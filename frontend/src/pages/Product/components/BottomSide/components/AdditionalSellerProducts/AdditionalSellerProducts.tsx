import AdditionalSellerProductsLayout from "./AdditionalSellerProductsLayout.tsx";

type Props = {
    title: string,
    products: string[],
}

export default function AdditionalSellerProducts({title, products}: Props) {
    return (
        <AdditionalSellerProductsLayout>
            <p className={"text-xl mb-8 text-[#414141] font-medium font-inter"}>{title}</p>
            <ul className={"grid grid-cols-6 gap-x-4"}>
                {products.map((product, index) =>
                    <li
                        className={"h-56 flex flex-col cursor-pointer"}
                        key={index}
                    >
                        <div className={"h-3/4 bg-[#eee]"}></div>
                        <div className={"h-1/4 bg-amber-200"}>{product}</div>
                    </li>
                )}
            </ul>

        </AdditionalSellerProductsLayout>
    );
};