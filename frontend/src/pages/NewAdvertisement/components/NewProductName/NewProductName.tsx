import {NewProductNameLayout} from "./NewProductNameLayout.tsx";

export function NewProductName() {
    return (
        <NewProductNameLayout>
            <div className={"w-full font-inter text-[#414141] text-xl font-medium"}>Вкажіть назву</div>
            <input
                className={
                    "w-full h-12 p-3 rounded-md focus:outline-none " +
                    "text-[#414141] font-inter " +
                    "placeholder:font-monserrat placeholder:text-sm " +
                    "border-[1px] border-solid border-[#414141] border-opacity-20"
                }
                placeholder={"Наприклад: Книга Вимикач. Книга 3"}
            />
        </NewProductNameLayout>
    );
};