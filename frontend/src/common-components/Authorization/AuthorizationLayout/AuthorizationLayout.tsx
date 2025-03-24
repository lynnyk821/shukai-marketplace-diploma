import bg from "../../../assets/jpeg/shukai_3.jpeg";
import {MyContainerProps} from "../../../types/help/my-container-props.ts";

export default function AuthorizationLayout({children}: MyContainerProps) {
    return (
        <div  className="w-full h-screen py-20 bg-bottom bg-cover "
              style={{ backgroundImage: `url(${bg})` }}
        >
            {children}
        </div>
    );
};