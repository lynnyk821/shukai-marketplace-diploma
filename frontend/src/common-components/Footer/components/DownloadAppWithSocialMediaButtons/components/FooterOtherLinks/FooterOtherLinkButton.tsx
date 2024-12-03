import {MyButtonProps} from "../../../../../../types/my-button-props.ts";

type Props = MyButtonProps & {
    text: string,
    href?: string,
};

export default function FooterOtherLinkButton({text, onClick}: Props) {
    return (
        <button onClick={onClick}>
            <p className={"text-[13px] font-monserrat text-left text-[#414141] hover:text-yellow-600"}>
                {text}
            </p>
        </button>
    );
};