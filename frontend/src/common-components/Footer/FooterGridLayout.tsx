import {MyContainerProps} from "../../types/my-container-props.ts";

export default function FooterGridLayout({children}: MyContainerProps) {
    return (
        <footer className={"w-screen grid place-items-center bg-[#eee]"}>
            <div className={"w-full max-w-[1200px]"}>
                <ul className={"py-6 grid grid-cols-2 gap-10"}>
                    {children}
                </ul>
            </div>
        </footer>
    );
};