import {MyContainerProps} from "../../types/help/my-container-props.ts";
import {Navigate} from "react-router-dom";

export default function ProtectedRoute({ children }: MyContainerProps) {
    const isAuthenticated = false;
    return isAuthenticated ? children : <Navigate to="/sign-in" replace />;
}