import AdminPageLayout from "../../AdminPageLayout.tsx";
import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function AdminAdvertisementLayout({children}: MyContainerProps) {
    return (
        <AdminPageLayout>
            {children}
        </AdminPageLayout>
    );
};