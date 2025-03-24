import SellerLayout from "./SellerLayout.tsx";
import SellerPictureButton from "./components/SellerPictureButton.tsx";
import SellerStats from "./components/SellerStats.tsx";
import SellerName from "./components/SellerName.tsx";
import {UserProps} from "../../../../../../../../types/common/user-props.ts";
import {formatDate} from "../../../../../../../../utils/helpers/helpers.ts";
import MessageBox from "../MessageBox/MessageBox.tsx";

type Props = {
    region: string,
    user: UserProps,
}

export default function Seller({ region, user }: Props) {
    return (
        <div className={"flex-1 flex flex-col justify-end gap-4"}>
            <SellerLayout>
                <SellerPictureButton
                    id={user.id}
                    image={user.image}
                />
                <div className={"flex flex-col gap-1"}>
                    <SellerName
                        id={user.id}
                        name={user.name}
                    />
                    <SellerStats
                        region={region}
                        phoneNumber={user.phoneNumber}
                        visitingTime={formatDate(user.visitingTime)}
                    />
                </div>
            </SellerLayout>
            <MessageBox placeholder={"Написати повідомлення продавцю..."} />
        </div>
    );
};