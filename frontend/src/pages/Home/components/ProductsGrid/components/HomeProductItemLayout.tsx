import {MyContainerProps} from "../../../../../types/my-container-props.ts";
import {useNavigate} from "react-router-dom";

type Props = MyContainerProps & {
    id: string,
}

export default function HomeProductItemLayout({id, children}: Props) {
    const navigate = useNavigate();

    return (
        <button className={
                "w-full flex flex-col gap-1 " +
                "border-b-[1px] border-solid border-[#414141] border-opacity-30 " +
                "hover:border-yellow-600 transition duration-300 ease-in-out"
            }
            onClick={() => navigate(`/products/${id}`)}
        >
            {children}
        </button>
    );
};