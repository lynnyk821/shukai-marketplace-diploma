import {MyContainerProps} from "../../types/help/my-container-props.ts";
import PageLayout from "../../common-components/PageLayout/PageLayout.tsx";
import {MainTitle} from "../../common-components/Titles/MainTitle/MainTitle.tsx";

export default function NewAdvertisementPageLayout({children}: MyContainerProps) {
    return (
        <PageLayout>
            <main className={"w-full mt-32 flex-1 flex justify-center"}>
                <div className={"w-full max-w-container"}>
                    <MainTitle size="2xl" text="Створення оголошення" />
                    {children}
                </div>
            </main>
        </PageLayout>
    );
};