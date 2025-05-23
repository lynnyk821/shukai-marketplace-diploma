import {MyContainerProps} from "../../types/help/my-container-props.ts";
import PageLayout from "../../common-components/PageLayout/PageLayout.tsx";

export default function AdvertisementPageLayout({children}: MyContainerProps) {
    return (
        <PageLayout>
            <main className={"w-full mt-24 flex-1 flex justify-center"}>
                <div className={"w-full max-w-container"}>{children}</div>
            </main>
        </PageLayout>
    );
};