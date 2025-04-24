// @flow
import {CommonTitle} from "../../../../../../common-components/Titles/MainTitle/CommonTitle.tsx";
import AnimateRotation from "../../../../../../utils/animations/AnimateRotation.tsx";
import {Icon} from "@iconify/react";

type Props = {
    title: string;
    isActive: boolean;
    onToggle: () => void;
};

export default function RegionFilterHeader({title, isActive, onToggle}: Props) {
    return (
        <button
            className="w-full h-fit flex text-left items-center"
            onClick={onToggle}
        >
            <CommonTitle text={title} />
            <AnimateRotation
                className="ml-auto"
                degree={180}
                isActive={isActive}
            >
                <Icon icon="iconamoon:arrow-down-2-bold" width={20} height={20}/>
            </AnimateRotation>
        </button>
    );
}