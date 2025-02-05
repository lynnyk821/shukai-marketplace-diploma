import {Icon} from "@iconify/react";
import TiltShake from "../../../../../utils/animations/TiltShake.tsx";

type Props = {
    date: string,
};

export default function DateInfoAndBottomButtons({date}: Props) {
    return (
        <li className={"w-20 h-full flex flex-col"}>
            <p className={"text-[13px] text-[#414141] font-monserrat  text-right text-opacity-60"}>{date}</p>
            <div className={"ml-auto mt-auto mb-1.5 flex gap-2.5 text-[#414141] text-opacity-70"}>
                <button className={"w-5 h-5 centered hover:text-yellow-600 transition duration-200 ease-in-out"}>
                    <TiltShake>
                        <Icon icon="akar-icons:ribbon" width="19" height="19" />
                    </TiltShake>
                </button>
                <button className={"w-5 h-5 centered hover:text-yellow-600 transition duration-200 ease-in-out"}>
                    <TiltShake>
                        <Icon icon="material-symbols:delete-outline" width="19" height="19" />
                    </TiltShake>
                </button>
            </div>
        </li>
    );
};