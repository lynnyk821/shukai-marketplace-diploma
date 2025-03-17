type Props = {
    title?: string,
    children?: React.ReactNode;
}

export default function NewAdvertisementsTitle({title, children}: Props) {
    return (
        <div className={"w-full font-inter text-[#414141] text-xl font-medium"}>
            {title || children}
        </div>
    );
};