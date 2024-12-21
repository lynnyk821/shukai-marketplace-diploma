import { MessagesLayout } from "./MessagesLayout.tsx";
import MessageCategories from "./components/MessageCategories/MessageCategories.tsx";
import MessageList from "./components/MessageList/MessageList.tsx";
import MessageContainer from "./components/MessageContainer/MessageContainer.tsx";

export function Messages() {
    return (
        <MessagesLayout>
            {/* Левая панель с категориями */}
            <div className={"w-1/3 h-full flex flex-col flex-1"}>
                <MessageCategories />
                <MessageList />
            </div>
            {/* Правая панель */}
            <MessageContainer />
        </MessagesLayout>
    );
}
