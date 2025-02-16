import NewProductCategoryLayout from "./NewProductCategoryLayout.tsx";

export default function NewProductCategory() {
    return (
        <NewProductCategoryLayout>
            <div className={"w-full font-inter text-[#414141] text-xl font-medium"}>Виберіть категорію</div>
            <div className={"w-full h-72 rounded-md focus:outline-none " +
                "text-[#414141] font-inter " +
                "placeholder:font-monserrat placeholder:text-sm " +
                "border-[1px] border-solid border-[#414141] border-opacity-20"}
            ></div>
        </NewProductCategoryLayout>
    );
};