import NewProductDescriptionLayout from "./NewProductDescriptionLayout.tsx";

export default function NewProductDescription() {
    return (
        <NewProductDescriptionLayout>
            <div className={"w-full font-inter text-[#414141] text-xl font-medium"}>Опис</div>
            <div className={"w-full h-20 rounded-md focus:outline-none " +
                "text-[#414141] font-inter " +
                "placeholder:font-monserrat placeholder:text-sm " +
                "border-[1px] border-solid border-[#414141] border-opacity-20"}
            ></div>
        </NewProductDescriptionLayout>
    );
};