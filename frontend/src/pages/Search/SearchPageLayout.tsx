import {MyContainerProps} from "../../types/help/my-container-props.ts";
import PageLayout from "../../common-components/PageLayout/PageLayout.tsx";

export default function SearchPageLayout({children}: MyContainerProps) {
    return (
        <PageLayout>
            <main className={"w-full mt-32 flex-1 flex justify-center"}>
                <div className={"w-full max-w-container"}>{children}</div>
            </main>
        </PageLayout>
    );
};