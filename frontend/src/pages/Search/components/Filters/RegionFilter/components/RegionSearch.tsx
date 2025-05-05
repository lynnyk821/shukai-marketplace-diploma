type Props = {
    value: string,
    onChange: (value: string) => void,
};

export default function RegionSearch({ value, onChange }: Props) {
    return (
        <input
            type="text"
            placeholder="Пошук регіонів..."
            className={
                "p-2 font-montserrat text-sm focus:outline-none " +
                "rounded-md border border-solid border-[#414141] border-opacity-30 " +
                "placeholder:font-montserrat placeholder:text-[14px] " +
                "placeholder:text-[#414141]"
            }
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}