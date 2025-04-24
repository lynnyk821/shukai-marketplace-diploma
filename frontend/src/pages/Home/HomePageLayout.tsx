import {MyContainerProps} from "../../types/help/my-container-props.ts";
import PageLayout from "../../common-components/PageLayout/PageLayout.tsx";

export default function HomePageLayout({children}: MyContainerProps) {
    return (
        <PageLayout>
            <main className={"w-full pt-24 flex-1 flex justify-center bg-white"}>
                <div className={"w-full max-w-container"}>{children}</div>
            </main>
        </PageLayout>
    );
};