import {MyContainerProps} from "../../../../../types/my-container-props.ts";
import {useNavigateWithScrollBehavior} from "../../../../../utils/hooks/useNavigateWithScrollBehavior.ts";

type Props = MyContainerProps & {
    id: string,
}

export default function HomeProductItemLayout({id, children}: Props) {
    const navigate = useNavigateWithScrollBehavior(`/products/${id}`, "instant");

    return (
        <button className={
                "w-full flex flex-col gap-1 " +
                "border-b-[1px] border-solid border-[#414141] border-opacity-30 " +
                "hover:border-yellow-600 transition duration-300 ease-in-out"
            }
            onClick={navigate}
        >
            {children}
        </button>
    );
};