type Props = {
    title: string,
}

export default function DescriptionTitle({title}: Props) {
    return (
        <p className={"text-[#414141] text-xl font-inter font-medium"}>{title}</p>
    );
};