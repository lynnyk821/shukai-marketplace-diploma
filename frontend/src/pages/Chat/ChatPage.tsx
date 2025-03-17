import { ChatPageLayout } from "./ChatPageLayout.tsx";
import MessageCategories from "./components/MessageCategories/MessageCategories.tsx";
import MessageList from "./components/MessageList/MessageList.tsx";
import MessageContainer from "./components/MessageContainer/MessageContainer.tsx";

export function ChatPage() {
    return (
        <ChatPageLayout>
            {/* Левая панель с категориями */}
            <div className={"w-1/3 h-full flex flex-col flex-1"}>
                <MessageCategories />
                <MessageList />
            </div>
            {/* Правая панель */}
            <MessageContainer />
        </ChatPageLayout>
    );
}
