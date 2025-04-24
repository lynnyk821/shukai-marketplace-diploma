
type Props = {
    text?: string,
    size?: "xl" | "2xl" | "3xl"
};

export function CommonTitle({size, text}: Props) {
    const textSize = (() => {
        switch (size) {
            case "xl":
                return "text-xl";
            case "2xl":
                return "text-2xl";
            case "3xl":
                return "text-3xl";
            default:
                return "lg";
        }
    })();

    return (
        <p className={`text-[#414141] font-inter font-bold ${textSize}`}>
            {text}
        </p>
    );
};