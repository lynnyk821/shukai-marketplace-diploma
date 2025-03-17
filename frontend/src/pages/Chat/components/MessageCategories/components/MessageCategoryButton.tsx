import {MyButtonProps} from "../../../../../types/common/my-button-props.ts";

type Props = MyButtonProps & {
    index: number,
    category: string,
    selectedCategory: string,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
};

export default function MessageCategoryButton({index, category, selectedCategory, setSelectedCategory}: Props) {
    return (
        <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={
                `h-fit p-2 rounded-lg text-[16px] text-[#414141] font-medium font-monserrat ` +
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
    );
};