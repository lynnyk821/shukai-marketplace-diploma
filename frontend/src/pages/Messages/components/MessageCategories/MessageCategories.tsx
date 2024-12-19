import MessageCategoriesLayout from "./MessageCategoriesLayout.tsx";
import {useState} from "react";

export default function MessageCategories() {
    const categories = ["Усі", "Збережені", "Архівні"];
    const [selectedCategory, setSelectedCategory] = useState<string>("Усі");

    return (
        <MessageCategoriesLayout>
            {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={
                        `h-fit p-2.5 rounded-lg text-[16px] text-[#414141] font-medium font-inter ` +
                        `transition duration-100 ease-in-out ` +
                        `${
                            selectedCategory === category
                                ? "bg-yellow-600 text-white"
                                : "hover:text-yellow-600"
                        }`
                    }
                >
                    {category}
                </button>
            ))}
        </MessageCategoriesLayout>
    );
};