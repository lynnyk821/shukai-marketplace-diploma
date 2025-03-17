import {MyContainerProps} from "../../types/common/my-container-props.ts";
import PageLayout from "../../common-components/PageLayout/PageLayout.tsx";

export default function HomePageLayout({children}: MyContainerProps) {
    return (
        <PageLayout>
            <main className={"w-full mt-24 flex-1 centered"}>
                <div className={"w-full max-w-container"}>{children}</div>
            </main>
        </PageLayout>
    );
};