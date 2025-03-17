import {MyContainerProps} from "../../../../types/common/my-container-props.ts";

export default function BigPictureBannerLayout({children} : MyContainerProps) {
    return (
        <div className={"w-full my-10 centered"}>
            <button className={"w-full rounded-2xl overflow-hidden centered"}>
                {children}
            </button>
        </div>
    );
};