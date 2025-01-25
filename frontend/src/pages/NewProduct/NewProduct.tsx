import AddProductLayout from "./NewProductLayout.tsx";
import {Title} from "../../common-components/Title/Title.tsx";

export default function NewProduct() {
    return (
        <AddProductLayout>
            <Title text={"Створення оголошення"}/>
            <div className={"w-full h-20"}>Вкажіть назву</div>
            <div className={"w-full h-20"}>Категорія</div>
            <div className={"w-full h-20"}></div>
            <div className={"w-full h-20"}></div>
            <div className={"w-full h-20"}></div>
        </AddProductLayout>
    );
};