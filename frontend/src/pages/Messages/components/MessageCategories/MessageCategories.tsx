import MessageCategoriesLayout from "./MessageCategoriesLayout.tsx";
import {useState} from "react";
import MessageCategoryButton from "./components/MessageCategoryButton.tsx";

export default function MessageCategories() {
    const categories = ["Усі", "Збережені", "Архівні"];
    const [selectedCategory, setSelectedCategory] = useState<string>("Усі");

    return (
        <MessageCategoriesLayout>
            {categories.map((category, index) => (
                <MessageCategoryButton
                    index={index}
                    category={category}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            ))}
        </MessageCategoriesLayout>
    );
};