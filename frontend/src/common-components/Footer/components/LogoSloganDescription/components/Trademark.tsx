import {SLOGAN} from "../../../../../globals-env.ts";

export function Trademark() {
    return (
        <li className={"flex-1 flex items-end"}>
            <p className={"text-[12px] font-monserrat break-words"}>
                © 2024 Онлайн-платформа для оголошень «Shukai» - {SLOGAN[0]}
            </p>
        </li>
    );
};