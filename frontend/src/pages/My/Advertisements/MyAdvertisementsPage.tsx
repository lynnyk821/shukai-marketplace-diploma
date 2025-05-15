import MyAdvertisementsLayout from "./MyAdvertisementsLayout.tsx";
import SidebarNavigation from "../../../common-components/SidebarNavigation/SidebarNavigation.tsx";
import AdvertisementList from "./components/AdvertisementList/AdvertisementList.tsx";

export default function MyAdvertisementsPage() {
    const options = ["Активні", "В обробці", "Відхилені"]

    return (
        <MyAdvertisementsLayout>
            <div className="flex py-10">
                <SidebarNavigation
                    param="status"
                    options={options}
                    title="Вибрати за статусом"
                />
                <AdvertisementList />
            </div>
        </MyAdvertisementsLayout>
    );
};