import {forwardRef, LegacyRef} from "react";
import SlideDown from "../../../../../utils/animations/SlideDown.tsx";
import UserListItem from "./UserListItem.tsx";
import {Icon} from "@iconify/react";
import {USER_LOGO_LIST} from "../../../../../globals-env.ts";

type Props = {
    userId?: number,
};

const DropdownUserList = forwardRef<HTMLElement, Props>(({ userId }, ref) => {
    return (
        <SlideDown bottom={-10} duration={0.6} isOpen={true} opacity={0}>
            <ul
                ref={ref as LegacyRef<HTMLUListElement>}
                className={
                    "w-56 h-fit mt-2 absolute right-0 bg-white " +
                    "border-[1px] border-solid border-[#414141] border-opacity-20"
                }
            >
                {USER_LOGO_LIST.map((item, key) => (
                    <UserListItem
                        key={key}
                        href={item.href}
                        text={item.text}
                        userId={userId}
                    >
                        <Icon icon={item.icon} width={18} height={18} />
                    </UserListItem>
                ))}
            </ul>
        </SlideDown>
    );
});

export default DropdownUserList;
