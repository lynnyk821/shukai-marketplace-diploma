import {MESSAGES} from "../../../../../globals-env.ts";

export default function AllSellerMessages() {
    return (
        <ul className={"flex-1 my-4 pr-2 grid gap-5 overflow-y-scroll custom-scroll"}>
            <div className={"py-2 text-sm text-[#414141] font-monserrat text-center text-opacity-60"}>14 бер 24</div>
            {MESSAGES.map((message, index) => (
                <li
                    key={index}
                    className={`w-full flex ${message.isMe ? "justify-end" : "justify-start"} gap-3`}
                >
                    {!message.isMe && (
                        <span
                            className={"w-10 h-10 rounded-full"}
                            style={{backgroundColor: message.avatar.color}}
                        />
                    )}
                    <div className={"flex flex-col"}>
                        <div className={"h-10 flex gap-2"}>
                            <button
                                className={
                                    "w-fit text-[#414141] hover:text-yellow-600 font-inter font-medium " +
                                    "transition duration-300 ease-in-out"
                                }
                            >
                                {message.username}
                            </button>
                        </div>
                        <div
                            className={`flex-1 max-w-sm p-3 rounded-lg ${
                                message.isMe ? "bg-sky-200 bg-opacity-60" : "bg-[#eee] bg-opacity-60"
                            }`}
                        >
                            <p className={"text-[#414141] font-monserrat font-medium"}>{message.text}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
