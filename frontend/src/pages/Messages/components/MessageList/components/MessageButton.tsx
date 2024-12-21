import MessageProductPicture from "./MessageProductPicture.tsx";
import UserWithMessage from "./UserWithMessage.tsx";
import DateInfoAndBottomButtons from "./DateInfoAndBottomButtons.tsx";

type Props = {
    index: number,
    username: string,
    message: string,
    date: string,
    image: string,
}

export function MessageButton({index, username, image, message, date}: Props) {
    return (
        <button
            key={index}
            className={
                "w-full h-24 p-2 text-[#414141] mb-2.5 rounded-lg font-inter " +
                "border-[1px] border-[#414141] border-opacity-15 " +
                "hover:border-yellow-600 transition duration-200 ease-in"
            }
            style={{
                userSelect: "none"
            }}
        >
            <ul className={"w-full h-full flex items-center gap-3"}>
                <MessageProductPicture image={image} />
                <UserWithMessage username={username} message={message} />
                <DateInfoAndBottomButtons date={date} />
            </ul>
        </button>
    );
};