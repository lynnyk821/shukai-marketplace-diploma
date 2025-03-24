import {MyContainerProps} from "../../types/help/my-container-props.ts";

export default function FooterGridLayout({children}: MyContainerProps) {
    return (
        <footer className={"mt-16 w-screen grid place-items-center bg-[#eee]"}>
            <div className={"w-full max-w-container"}>
                <ul className={"py-6 grid grid-cols-2 gap-10"}>
                    {children}
                </ul>
            </div>
        </footer>
    );
};