import {Icon} from "@iconify/react";
import TiltShake from "../../../../../utils/animations/TiltShake.tsx";
import { useState } from "react";
import {useClickOutside} from "../../../../../utils/hooks/useClickOutside.ts";
import Cart from "../../../../Cart/Cart.tsx";
import {useAppStore} from "../../../../../utils/hooks/useAppStore.ts";

export default function CartButton() {
    const { cartCapacity } = useAppStore();
    const [isActive, setIsActive] = useState(false);

    const modalRef = useClickOutside<HTMLDivElement>(() => {
        setIsActive(false);
    })

    return (
        <div className={"relative"}>
            <TiltShake>
                <button
                    className={"relative h-full w-7 centered text-sm font-inter text-[#414141] hover:text-yellow-600"}
                    onClick={() => setIsActive(!isActive)}
                    style={{ userSelect: "none" }}
                >
                    <span className={"absolute top-1 left-8 text-sm font-medium rounded-full"}>
                        {cartCapacity}
                    </span>
                    <Icon icon="heroicons:shopping-bag" width="24" height="24"/>
                </button>
            </TiltShake>
            {isActive && (
                <Cart
                    ref={modalRef}
                    setIsActive={setIsActive}
                />
            )}
        </div>
    );
};