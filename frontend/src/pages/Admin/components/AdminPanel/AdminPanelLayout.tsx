import {MyContainerProps} from "../../../../types/help/my-container-props.ts";

export default function AdminPanelLayout({children}: MyContainerProps) {
    return (
        <div className="w-64 bg-gray-800 text-white p-4">
            <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
            {children}
        </div>
    );
};