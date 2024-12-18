import {MyContainerProps} from "../../../../types/my-container-props.ts";
import {MyButtonProps} from "../../../../types/my-button-props.ts";

export default function CatalogButtonLayout({ children, onClick }: MyContainerProps & MyButtonProps) {
    return (
        <button className={
                "h-full px-2.5 gap-4 centered rounded-lg " +
                "border-[#414141] border-[1px] text-[#414141] font-inter relative " +
                "hover:text-yellow-600 hover:border-yellow-600 duration-200 ease-in-out border-opacity-70 "
            }
            style={{ userSelect: "none" }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};