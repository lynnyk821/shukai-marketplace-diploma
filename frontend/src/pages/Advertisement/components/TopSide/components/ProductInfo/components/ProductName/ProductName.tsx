import {truncateStringWithN} from "../../../../../../../../utils/helpers/helpers.ts";

type Props = {
    name: string;
};

export default function ProductName({name}: Props) {
    return (
        <p className={"w-full max-h-28 h-20 text-[#414141] text-lg font-monserrat font-medium"}>
            {truncateStringWithN(name, 128)}
        </p>
    );
};