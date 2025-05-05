import FiltersLayout from "./FiltersLayout.tsx";
import PriceFilter from "./PriceFilter/PriceFilter.tsx";
import RegionFilter from "./RegionFilter/RegionFilter.tsx";
import DeliveryFilter from "./DeliveryFilter/DeliveryFilter.tsx";
import PaymentFilter from "./PaymentFilter/PaymentFilter.tsx";

export default function Filters() {
    return (
        <FiltersLayout>
            {/*<CategoryFilter></CategoryFilter>*/}
            <DeliveryFilter></DeliveryFilter>
            <PaymentFilter></PaymentFilter>
            <PriceFilter></PriceFilter>
            <RegionFilter></RegionFilter>
        </FiltersLayout>
    );
};