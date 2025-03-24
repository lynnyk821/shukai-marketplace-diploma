import {MyContainerProps} from "../../types/help/my-container-props.ts";
import {useAppStore} from "../../utils/hooks/useAppStore.ts";
import {Navigate} from "react-router-dom";

export default function ProtectedRoute({ children }: MyContainerProps) {
    const {isAuthenticated} = useAppStore();
    return isAuthenticated ? children : <Navigate to="/signin" replace />;
}