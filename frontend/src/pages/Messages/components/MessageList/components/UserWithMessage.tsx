type Props = {
    message: string,
    username: string,
};

export default function UserWithMessage({username, message}: Props) {
    return (
        <li className={"h-full flex-1 flex flex-col gap-1.5"}>
            <button
                className={"h-2/5 text-left text-[16px] font-medium hover:text-yellow-600 transition duration-200 ease-in-out"}
            >
                {username}
            </button>
            <p className={"flex-1 text-left font-monserrat"}>
                {message}
            </p>
        </li>
    );
};