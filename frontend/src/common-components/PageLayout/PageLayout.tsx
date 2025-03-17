import {Header} from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import {MyContainerProps} from "../../types/common/my-container-props.ts";

export default function PageLayout({children}: MyContainerProps) {
    return (
        <div className={"w-screen h-screen flex absolute flex-col z-50"}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};