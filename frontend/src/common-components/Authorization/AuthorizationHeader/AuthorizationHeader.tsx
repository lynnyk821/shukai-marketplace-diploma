import {MyContainerProps} from "../../../types/help/my-container-props.ts";

export default function AuthorizationHeader({children}:MyContainerProps) {
    return (
        <h2 className="text-2xl font-inter text-[#414141] font-bold mb-6 text-center">
            {children}
        </h2>
    );
};