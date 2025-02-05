import MessageListLayout from "./MessageListLayout.tsx";
import {truncateStringWithN} from "../../../../utils/helpers/helpers.ts";
import {MessageButton} from "./components/MessageButton.tsx";

export default function MessageList() {
    const messages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

    return (
        <MessageListLayout>
            {messages.map((message, index) => (
                <MessageButton
                    index={index}
                    username={"yuranapa"}
                    message={truncateStringWithN("Добрий день, наче на мене шили", 2 * index + 10)}
                    image={message}
                    date={"14 бер 24"}
                />
            ))}
        </MessageListLayout>
    );
};

