import { Icon } from "@iconify/react";
import {SocialMediaButtonProps} from "../../../../../../types/social-media-button-props.ts";
import {MyButtonProps} from "../../../../../../types/my-button-props.ts";

export default function SocialMediaButton(
    {className, icon, onClick }: SocialMediaButtonProps & MyButtonProps & { className: string }
) {
    return (
        <button onClick={onClick}>
            <Icon className={className} icon={icon} width="28" height="28" />
        </button>
    );
};
