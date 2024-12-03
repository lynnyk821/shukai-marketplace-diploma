import {Icon} from "@iconify/react";
import {useState} from "react";
import AnimatedRotation from "../../../../utils/animations/AnimatedRotation.tsx";
import UserLogoLayout from "./UserLogoLayout.tsx";
import DropdownUserList from "./components/DropdownUserList.tsx";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside.ts";

export default function UserLogo() {
    const [isActive, setIsActive] = useState<boolean>(false);

    const dropdownRef = useClickOutside<HTMLUListElement>(() => {
        setIsActive(false);
    });

    return (
        <UserLogoLayout ref={dropdownRef}>
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
                <AnimatedRotation degree={180} isActive={isActive}>
                    <Icon icon="iconamoon:arrow-down-2-bold" width={20} height={20}/>
                </AnimatedRotation>
            </button>
            {isActive ? <DropdownUserList /> : null}
        </UserLogoLayout>
    );
};