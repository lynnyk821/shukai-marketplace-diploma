import {APP_DESCRIPTION} from "../../../../../globals-env.ts";

export function AppDescription() {
    return (
        <li className={"w-full flex pt-5"}>
            <p className={"text-sm font-monserrat leading-9 break-words"}>
                {APP_DESCRIPTION}
            </p>
        </li>
    );
};