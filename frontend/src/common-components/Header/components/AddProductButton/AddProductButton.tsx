import ButtonWithoutBackground from "../../../Buttons/ButtonWithoutBackground/ButtonWithoutBackground.tsx";
import {useNavigateWithScrollBehavior} from "../../../../utils/hooks/useNavigateWithScrollBehavior.ts";

export default function AddProductButton() {
    return (
        <ButtonWithoutBackground onClick={useNavigateWithScrollBehavior("/add-product", "smooth")}>
            Додати товар
        </ButtonWithoutBackground>
    );
};