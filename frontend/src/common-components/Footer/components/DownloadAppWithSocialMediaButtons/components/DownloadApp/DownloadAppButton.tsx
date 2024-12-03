import {MyButtonProps} from "../../../../../../types/my-button-props.ts";

type Props = MyButtonProps & {
    img: string,
    alt: string,
};

export function DownloadAppButton({img, alt, onClick}: Props) {
    return (
        <button className={"w-32 h-fit rounded-lg border-[1px] border-[#414141] border-opacity-30 border-solid"}
                onClick={onClick}
                style={{ userSelect: "none" }}
        >
            <img className={"w-32 rounded-lg"} src={img} alt={alt} />
        </button>
    );
}