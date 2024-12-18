import {Icon} from "@iconify/react";
import {useState} from "react";
import AnimateRotation from "../../../../utils/animations/AnimateRotation.tsx";
import UserLogoButtonLayout from "./UserLogoButtonLayout.tsx";
import DropdownUserList from "./components/DropdownUserList.tsx";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside.ts";

export default function UserLogoButton() {
    const [isActive, setIsActive] = useState<boolean>(false);

    const dropdownRef = useClickOutside<HTMLUListElement>(() => {
        setIsActive(false);
    });

    return (
        <UserLogoButtonLayout ref={dropdownRef}>
            <button
                className={"h-full gap-1 centered flex text-[#414141]"}
                onClick={() => setIsActive(!isActive)}
                style={{userSelect: "none"}}
            >
                <img
                    className="h-full rounded-full"
                    src="https://avatars.shafastatic.net/5721768_new_avatar_type1730823039"
                    alt="avatar"
                />
                <AnimateRotation degree={180} isActive={isActive}>
                    <Icon icon="iconamoon:arrow-down-2-bold" width={20} height={20}/>
                </AnimateRotation>
            </button>
            {isActive ? <DropdownUserList /> : null}
        </UserLogoButtonLayout>
    );
};