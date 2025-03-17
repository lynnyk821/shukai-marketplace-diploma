import DescriptionTitle from "./components/DescriptionTitle.tsx";
import ProductDescriptionLayout from "./ProductDescriptionLayout.tsx";
import DescriptionText from "./components/DescriptionText.tsx";

type Props = {
    description: string,
}

export default function ProductDescription({description}: Props) {
    return (
        <ProductDescriptionLayout>
            <DescriptionTitle title={"Опис"} />
            <DescriptionText text={description} />
        </ProductDescriptionLayout>
    );
};