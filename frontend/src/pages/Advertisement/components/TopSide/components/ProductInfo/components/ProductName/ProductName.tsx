import {truncateStringWithN} from "../../../../../../../../utils/helpers/helpers.ts";

type Props = {
    name: string;
};

export default function ProductName({name}: Props) {
    return (
        <p className={"w-full h-28 text-[#414141] text-xl font-monserrat font-medium mt-6"}>
            {truncateStringWithN(name, 128)}
        </p>
    );
};