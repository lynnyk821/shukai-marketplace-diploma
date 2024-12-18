import DescriptionTitle from "./components/DescriptionTitle.tsx";
import ProductDescriptionLayout from "./ProductDescriptionLayout.tsx";
import DescriptionText from "./components/DescriptionText.tsx";

export default function ProductDescription() {
    const description =
        "Сумочка в Еко шкірі та текстиліі\n" +
        "Розмір : 26*22*10\n" +
        "Матеріал - «Еко» шкіра + текстиль\n" +
        "Одне відділення на близкавці, є підкладка.\n" +
        "Коротка руча в комплекті.\n" +
        "Довжина ремінця - 120 см"

    return (
        <ProductDescriptionLayout>
            <DescriptionTitle title={"Опис"} />
            <DescriptionText text={description} />
        </ProductDescriptionLayout>
    );
};