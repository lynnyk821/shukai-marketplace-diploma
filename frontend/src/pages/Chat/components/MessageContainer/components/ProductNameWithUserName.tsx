import {truncateStringWithN} from "../../../../../utils/helpers/helpers.ts";
import TiltShake from "../../../../../utils/animations/TiltShake.tsx";
import {Icon} from "@iconify/react";

export default function ProductNameWithUserName() {
    return (
        <div className={
            "w-full h-[4.5rem] flex gap-4 py-2 px-3 text-[#414141] " +
            "border-b-[1px] border-[#414141] border-opacity-15"}
        >
            <div className={"w-12 h-full"}>
                <div className={"w-full h-full rounded-lg centered text-[#414141] bg-sky-200"}>1</div>
            </div>
            <button className={"flex-1 flex flex-col h-full hover:text-yellow-600 transition duration-300 ease-in-out"}>
                <p className={"w-full text-[16px] font-monserrat font-medium text-left"}>
                    {truncateStringWithN("Вітровка технологічна gore-tex mammut vintage трекінг trekking outdoor", 67)}
                </p>
                <p className={"mt-auto w-full text-[16px] text-left font-inter font-bold text-[#414141]"}>450 грн.</p>
            </button>
            <div className={"w-fit flex flex-col h-full"}>
                <p className={"text-[13px] text-[#414141] font-monserrat  text-right text-opacity-60"}>14 бер 24</p>
                <div className={"flex gap-2 text-[#414141] text-opacity-70 ml-auto mt-auto"}>
                    <button className={"w-6 h-6 centered hover:text-yellow-600 transition duration-200 ease-in-out"}>
                        <TiltShake>
                            <Icon icon="akar-icons:ribbon" width="22" height="22" />
                        </TiltShake>
                    </button>
                    <button className={"w-6 h-6 centered hover:text-yellow-600 transition duration-200 ease-in-out"}>
                        <TiltShake>
                            <Icon icon="material-symbols:delete-outline" width="22" height="22" />
                        </TiltShake>
                    </button>
                </div>
            </div>
        </div>

    );
};