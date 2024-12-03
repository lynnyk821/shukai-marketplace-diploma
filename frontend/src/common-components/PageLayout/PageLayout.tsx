import {MyContainerProps} from "../../types/my-container-props.ts";
import {Header} from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

export default function PageLayout({children} : MyContainerProps) {
    return (
        <div className={"w-screen h-screen flex flex-col"}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};