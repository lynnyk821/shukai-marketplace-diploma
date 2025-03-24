import {MyContainerProps} from "../../../../../types/help/my-container-props.ts";
import {useNavigate} from "react-router-dom";

type Props = MyContainerProps & {
    text: string,
    href: string,
    userId?: number,
}

export default function UserListItem({text, children, href, userId} : Props) {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(href);
    }

    return (
        <button
            className={"w-full flex items-center px-4 pt-5 last:pb-5 gap-4 text-[#414141] hover:text-yellow-600"}
            onClick={handleOnClick}
        >
            {children}
            <p className={"text-sm font-monserrat"}>{text}</p>
        </button>
    );
};