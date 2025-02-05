import ProductPageLayout from "./ProductPageLayout.tsx";
import TopSide from "./components/TopSide/TopSide.tsx";
import BottomSide from "./components/BottomSide/BottomSide.tsx";

export default function ProductPage() {
    return (
        <ProductPageLayout>
            <TopSide />
            <BottomSide />
        </ProductPageLayout>
    );
}
