import {MyContainerProps} from "../../types/help/my-container-props.ts";
import PageLayout from "../../common-components/PageLayout/PageLayout.tsx";

export default function OrderPageLayout({children}: MyContainerProps) {
    return (
        <PageLayout isFixed={true}>
            <main className={"w-full flex-1 centered"}>
                <div className={"w-full h-full flex max-w-container gap-10 py-8"}>{children}</div>
            </main>
        </PageLayout>
    );
};