import {Icon} from "@iconify/react";
import { useState } from "react";
import AnimateRotation from "../../../../utils/animations/AnimateRotation.tsx";
import UserLogoButtonLayout from "./UserLogoButtonLayout.tsx";
import DropdownUserList from "./components/DropdownUserList.tsx";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside.ts";
import {useNavigate} from "react-router-dom";
import {HugeIconUserAccount} from "./components/HugeIconUserAccount.tsx";
import {useUserStore} from "../../../../utils/store/useUserStore.ts";

export default function UserLogoButton() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { user } = useUserStore();
    const navigate = useNavigate();

    const dropdownRef = useClickOutside(() => {
        setIsActive(false);
    });

    const isAuthenticated = !!user;

    return (
        <UserLogoButtonLayout>
            {isAuthenticated ? (
                <button
                    className={"h-full centered flex gap-1 text-[#414141] hover:text-yellow-600 transition duration-300 ease-in-out"}
                    onClick={() => setIsActive(!isActive)}
                    style={{ userSelect: "none" }}
                >
                    {user?.image
                        ? <img
                            className="h-3/4 rounded-full"
                            src={user.image}
                            alt="avatar"
                        />
                        : <HugeIconUserAccount></HugeIconUserAccount>
                    }
                    <AnimateRotation degree={180} isActive={isActive}>
                        <Icon icon="iconamoon:arrow-down-2-bold" width={20} height={20} />
                    </AnimateRotation>
                </button>
            ) : (
                <button
                    className={"h-full centered flex gap-1 text-[#414141]"}
                    onClick={() => navigate('/sign-in')}
                    style={{ userSelect: "none" }}
                >
                    Вхід
                </button>
            )}
            {isActive && isAuthenticated ? <DropdownUserList ref={dropdownRef} userId={user?.id} /> : null}
        </UserLogoButtonLayout>
    );
};