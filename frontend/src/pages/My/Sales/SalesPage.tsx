import SalesPageLayout from "./SalesPageLayout.tsx";
import SidebarNavigation from "../../../common-components/SidebarNavigation/SidebarNavigation.tsx";
import SalesList from "./components/SalesList.tsx";

export default function SalesPage() {
    const options = ["В дорозі", "Здійсненні", "Скасовані"]
    return (
        <SalesPageLayout>
            <SidebarNavigation
                options={options}
                param={"status"}
                title={"Вибрати за статусом"}
            />
            <SalesList />
        </SalesPageLayout>
    );
};