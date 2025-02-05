type Props = {
    text: string,
};

export default function DescriptionText({text}: Props) {
    return (
        <p className={"text-lg text-[#414141] font-inter whitespace-pre-line"}>{text}</p>
    );
};