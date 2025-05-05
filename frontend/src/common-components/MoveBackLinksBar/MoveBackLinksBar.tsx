import { useNavigate } from "react-router-dom";
import MoveBackLinksBarLayout from "./MoveBackLinksBarLayout.tsx";
import {CategoryProps} from "../../types/common/category-props.ts";

type Props = {
    category?: CategoryProps,
}

export default function MoveBackLinksBar({category}: Props) {
    const navigate = useNavigate();

    const handleGoTo = (category: string) => {
        navigate(category);
    };

    return (
        <MoveBackLinksBarLayout>
            <button
                className={"hover:text-yellow-600 transition duration-300 ease-in-out"}
                onClick={() => handleGoTo(String(category?.path))}
            >
                {"На головну / " + category?.name}
            </button>
        </MoveBackLinksBarLayout>
    );
}
