import {Logo} from "../../../../Logo/Logo.tsx";

export default function LogoWithText() {
    return (
        <li className={"w-full h-10 flex"}>
            <Logo></Logo>
            <p className={"flex-1 text-lg font-monserrat font-medium centered"}>Онлайн-платформа для оголошень</p>
        </li>
    );
};