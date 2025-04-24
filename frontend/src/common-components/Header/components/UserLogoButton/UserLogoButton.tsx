import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";
import AnimateRotation from "../../../../utils/animations/AnimateRotation.tsx";
import UserLogoButtonLayout from "./UserLogoButtonLayout.tsx";
import DropdownUserList from "./components/DropdownUserList.tsx";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside.ts";
import {UserMeResponse} from "../../../../types/response/user-me-response.ts";
import blankProfile from "../../../../assets/png/blank-profile3.png";
import {axiosInstance} from "../../../../utils/axios/interceptors.ts";
import {TokenManager} from "../../../../utils/helpers/tokenManager.ts";
import {useNavigate} from "react-router-dom";

export default function UserLogoButton() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [me, setMe] = useState<UserMeResponse | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();

    const dropdownRef = useClickOutside<HTMLUListElement>(() => {
        setIsActive(false);
    });

    useEffect(() => {
        const fetchMeData = async () => {
            try {
                const response = await axiosInstance.get('/user-service/api/user/me', {
                    headers: {
                        Authorization: `Bearer ${TokenManager.getAccessToken()}`
                    }
                });

                setIsAuthenticated(true);
                setMe(response.data);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        fetchMeData();
    }, []);
    
    return (
        <UserLogoButtonLayout ref={dropdownRef}>
            {isAuthenticated ? (
                <button
                    className={"h-full centered flex gap-1 text-[#414141]"}
                    onClick={() => setIsActive(!isActive)}
                    style={{ userSelect: "none" }}
                >
                    <img
                        className="h-3/4 rounded-full"
                        src={me?.image ? me.image : blankProfile}
                        alt="avatar"
                    />
                    <AnimateRotation degree={180} isActive={isActive}>
                        <Icon icon="iconamoon:arrow-down-2-bold" width={20} height={20} />
                    </AnimateRotation>
                </button>
            ) : (
                <button
                    className={"h-full centered flex gap-1 text-[#414141]"}
                    onClick={() => navigate('/sign-in')}
                    style={{ userSelect: "none" }}
                >
                    Вхід
                </button>
            )}
            {isActive && isAuthenticated ? <DropdownUserList userId={me?.id} /> : null}
        </UserLogoButtonLayout>
    );
};