import {MyContainerProps} from "../../../../../types/my-container-props.ts";

type Props = MyContainerProps & {
    text: string,
    href?: string,
}

export default function UserListItem({text, children} : Props) {
    return (
        <button
            className={"w-full flex items-center px-4 pt-5 last:pb-5 gap-4 text-[#414141] hover:text-yellow-600"}
        >
            {children}
            <p className={"text-sm font-monserrat"}>{text}</p>
        </button>
    );
};