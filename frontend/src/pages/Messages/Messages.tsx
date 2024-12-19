import { MessagesLayout } from "./MessagesLayout.tsx";
import MessageCategories from "./components/MessageCategories/MessageCategories.tsx";

export function Messages() {
    return (
        <MessagesLayout>
            <div className={"w-full h-[40rem] flex gap-8"}>
                {/* Левая панель с категориями */}
                <div className={"w-1/3 flex flex-col flex-1 gap-4"}>
                    <MessageCategories />
                    <div className={"flex-1 bg-[#eee]"}></div>
                </div>
                {/* Правая панель */}
                <div className={"w-2/3 h-full rounded-xl bg-[#eee]"}>

                </div>
            </div>
        </MessagesLayout>
    );
}
