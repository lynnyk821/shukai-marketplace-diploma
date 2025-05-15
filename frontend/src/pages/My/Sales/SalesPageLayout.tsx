import {MyContainerProps} from "../../../types/help/my-container-props.ts";
import {CommonTitle} from "../../../common-components/Titles/MainTitle/CommonTitle.tsx";
import PageLayout from "../../../common-components/PageLayout/PageLayout.tsx";

export default function SalesPageLayout({children}: MyContainerProps) {
    return (
        <PageLayout>
            <main className={"w-full mt-32 flex-1 flex justify-center"}>
                <div className={"w-full max-w-container"}>
                    <CommonTitle size="2xl" text="Мої продажі" />
                    <div className={"flex py-10"}>{children}</div>
                </div>
            </main>
        </PageLayout>
    );
};