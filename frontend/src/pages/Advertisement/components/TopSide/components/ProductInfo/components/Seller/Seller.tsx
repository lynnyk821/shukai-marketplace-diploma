import SellerLayout from "./SellerLayout.tsx";
import SellerPictureButton from "./components/SellerPictureButton.tsx";
import SellerOtherInfo from "./components/SellerStats.tsx";
import SellerNameWithNumber from "./components/SellerName.tsx";
import {UserProps} from "../../../../../../../../types/common/user-props.ts";
import {formatDate} from "../../../../../../../../utils/helpers/helpers.ts";
import MessageBox from "../MessageBox/MessageBox.tsx";

type Props = {
    region: string,
    user: UserProps,
}

export default function Seller({ region, user }: Props) {
    return (
        <div className={"mt-auto flex flex-col justify-end gap-4 rounded-lg border border-[#414141] border-opacity-30 p-3"}>
            <SellerLayout>
                <SellerPictureButton
                    id={user.id}
                    image={user.image}
                />
                <div className={"w-4/5 flex flex-col gap-1"}>
                    <SellerNameWithNumber
                        id={user.id}
                        phoneNumber={user.phoneNumber}
                        name={user.name}
                    />
                    <SellerOtherInfo
                        region={region}
                        visitingTime={formatDate(user.visitingTime)}
                    />
                </div>
            </SellerLayout>
            <MessageBox placeholder={"Написати повідомлення продавцю..."} />
        </div>
    );
};