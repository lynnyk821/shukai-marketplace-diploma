import {Icon} from "@iconify/react";

export default function UserLogo() {
    return (
        <button className={"h-full gap-1 centered flex text-[#414141]"}>
            <img className="h-full rounded-full"
                 src="https://avatars.shafastatic.net/5721768_new_avatar_type1730823039" alt="avatar"
            />
            <Icon icon="iconamoon:arrow-down-2-bold" className={"w-5 h-5"} />
        </button>
    );
};