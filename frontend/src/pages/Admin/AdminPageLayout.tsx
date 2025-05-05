import {MyContainerProps} from "../../types/help/my-container-props.ts";
import AdminPanel from "./components/AdminPanel/AdminPanel.tsx";

export default function AdminPageLayout({ children }: MyContainerProps) {
    return (
        <div className="w-screen h-screen flex absolute">
            <AdminPanel />

            {/* Основное содержимое */}
            <div className="flex-1 p-6 bg-gray-100 overflow-auto">
                {children}
            </div>
        </div>
    );
};