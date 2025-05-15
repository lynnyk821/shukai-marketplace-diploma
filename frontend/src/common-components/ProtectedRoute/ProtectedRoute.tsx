import {Navigate} from "react-router-dom";
import {useUserStore} from "../../utils/store/useUserStore.ts";
import {MyContainerProps} from "../../types/help/my-container-props.ts";
import {UserRole} from "../../types/common/user-role.ts";

type Props = MyContainerProps & {
    isAdminRoute?: boolean,
}

export default function ProtectedRoute({ children, isAdminRoute = false }: Props) {
    const { user } = useUserStore();
    const isAuthenticated = !!user;

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" replace />;
    } else if (isAdminRoute && user?.role !== UserRole.ADMIN) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}