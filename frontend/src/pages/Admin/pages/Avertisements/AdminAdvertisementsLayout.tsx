import {MyContainerProps} from "../../../../types/help/my-container-props.ts";
import AdminPageLayout from "../../AdminPageLayout.tsx";

export default function AdminAdvertisementsLayout({children}: MyContainerProps) {
    return (
        <AdminPageLayout>
            {children}
        </AdminPageLayout>
    );
};