import AddProductLayout from "./NewProductLayout.tsx";
import {Title} from "../../common-components/Title/Title.tsx";
import {NewProductName} from "./components/NewProductName/NewProductName.tsx";
import NewProductPictures from "./components/NewProductPictures/NewProductPictures.tsx";
import NewProductDescription from "./components/NewProductDescription/NewProductDescription.tsx";
import NewProductCategory from "./components/NewProductCategory/NewProductCategory.tsx";

export default function NewProduct() {
    return (
        <AddProductLayout>
            <Title size={"2xl"} text={"Створення оголошення"}/>
            <NewProductPictures />
            <NewProductName />
            <NewProductDescription />
            <NewProductCategory />
        </AddProductLayout>
    );
};