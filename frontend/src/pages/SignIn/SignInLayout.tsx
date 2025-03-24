import {MyContainerProps} from "../../types/help/my-container-props.ts";
import AuthorizationLayout from "../../common-components/Authorization/AuthorizationLayout/AuthorizationLayout.tsx";

export default function SignInLayout({children}: MyContainerProps) {
    return (
        <AuthorizationLayout>
            <div className={"max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"}>
                {children}
            </div>
        </AuthorizationLayout>
    );
};