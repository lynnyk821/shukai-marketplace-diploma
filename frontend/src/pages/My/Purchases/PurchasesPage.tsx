import PurchasesPageLayout from "./PurchasesPageLayout.tsx";
import PurchasesList from "./components/PurchasesList.tsx";
import SidebarNavigation from "../../../common-components/SidebarNavigation/SidebarNavigation.tsx";

export function PurchasesPage() {
    const options = ["В дорозі", "Здійсненні", "Скасовані"]
    return (
        <PurchasesPageLayout>
            <SidebarNavigation
                options={options}
                param={"status"}
                title={"Вибрати за статусом"}
            />
            <PurchasesList />
        </PurchasesPageLayout>
    );
};