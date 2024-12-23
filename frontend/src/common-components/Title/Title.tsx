
type Props = {
    text?: string,
};

export function Title({text}: Props) {
    return (
        <p className={"my-8 text-[#414141] text-xl font-monserrat font-medium"}>
            {text}
        </p>
    );
};