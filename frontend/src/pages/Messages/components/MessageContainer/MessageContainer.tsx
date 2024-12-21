import MessageContainerLayout from "./MessageContainerLayout.tsx";
import AllSellerMessages from "./components/AllSellerMessages.tsx";
import ProductNameWithUserName from "./components/ProductNameWithUserName.tsx";
import MessageInputField from "./components/MessageInputField.tsx";

export default function MessageContainer() {
    return (
        <MessageContainerLayout>
            <ProductNameWithUserName />
            <AllSellerMessages />
            <MessageInputField />
        </MessageContainerLayout>
    );
};