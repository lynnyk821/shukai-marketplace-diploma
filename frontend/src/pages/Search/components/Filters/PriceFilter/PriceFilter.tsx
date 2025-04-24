import PriceFilterLayout from "./PriceFilterLayout.tsx";
import {CommonTitle} from "../../../../../common-components/Titles/MainTitle/CommonTitle.tsx";
import AnimateRotation from "../../../../../utils/animations/AnimateRotation.tsx";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";
import PriceInput from "./components/PriceInput.tsx";
import PriceButton from "./components/PriceButton.tsx";
import {useNavigate} from "react-router-dom";

export default function PriceFilter() {
    const [isActive, setIsActive] = useState(true);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const fromParam = params.get("from");
        const toParam = params.get("to");

        if(fromParam) setMinPrice(fromParam);
        if(toParam) setMaxPrice(toParam);
    }, []);

    const handleApplyPrice = () => {
        const searchParams = new URLSearchParams(window.location.search);

        if (minPrice) searchParams.set("from", minPrice);
        else searchParams.delete("from");

        if (maxPrice) searchParams.set("to", maxPrice);
        else searchParams.delete("to");

        navigate({ search: searchParams.toString() });
    };

    return (
        <PriceFilterLayout>
            <button className="w-full h-full flex text-left" onClick={() => setIsActive(!isActive)}>
                <CommonTitle text="Ціна" />
                <div className="h-full centered ml-auto">
                    <AnimateRotation degree={180} isActive={isActive}>
                        <Icon icon="iconamoon:arrow-down-2-bold" width={20} height={20}/>
                    </AnimateRotation>
                </div>
            </button>
            {isActive && (
                <div className="w-full h-full flex gap-x-4 items-center">
                    <PriceInput
                        value={minPrice}
                        onChange={setMinPrice}
                        placeholder="Від"
                    />
                    <PriceInput
                        value={maxPrice}
                        onChange={setMaxPrice}
                        placeholder="До"
                    />
                    <PriceButton onClick={handleApplyPrice}>Ок</PriceButton>
                </div>
            )}
        </PriceFilterLayout>
    );
};