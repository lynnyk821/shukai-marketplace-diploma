import { Icon } from "@iconify/react";
import {SocialMediaButtonProps} from "../../../../../../types/social-media-button-props.ts";
import {MyButtonProps} from "../../../../../../types/my-button-props.ts";
import TiltShake from "../../../../../../utils/animations/TiltShake.tsx";

export default function SocialMediaButton(
    {className, icon, onClick }: SocialMediaButtonProps & MyButtonProps & { className: string }
) {
    return (
        <button onClick={onClick}>
            <TiltShake>
                <Icon className={`${className} transition duration-200 ease-in-out`} icon={icon} width="28" height="28" />
            </TiltShake>
        </button>
    );
};
