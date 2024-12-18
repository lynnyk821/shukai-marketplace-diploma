import ProductLayout from "./ProductLayout.tsx";
import TopSide from "./components/TopSide/TopSide.tsx";
import BottomSide from "./components/BottomSide/BottomSide.tsx";

export default function Product() {
    return (
        <ProductLayout>
            <TopSide />
            <BottomSide />
        </ProductLayout>
    );
}
