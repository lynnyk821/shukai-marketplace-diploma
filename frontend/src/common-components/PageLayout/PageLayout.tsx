import {Header} from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import {MyContainerProps} from "../../types/help/my-container-props.ts";

type Props = MyContainerProps & {
    isFixed?: boolean;
}

export default function PageLayout({isFixed, children}: Props) {
    return (
        <div className={"w-screen h-screen flex absolute flex-col z-50"}>
            <Header isFixed={isFixed}></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};