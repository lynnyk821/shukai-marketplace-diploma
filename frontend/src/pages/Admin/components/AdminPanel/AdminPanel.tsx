import AdminPanelLayout from "./AdminPanelLayout.tsx";

export default function AdminPanel() {
    return (
        <AdminPanelLayout>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <a href="/admin/advertisements" className="block px-4 py-2 rounded hover:bg-gray-700">
                            Advertisements
                        </a>
                    </li>
                    <li>
                        <a href="/admin/users" className="block px-4 py-2 rounded hover:bg-gray-700">
                            Users
                        </a>
                    </li>
                    <li>
                        <a href="/admin/categories" className="block px-4 py-2 rounded hover:bg-gray-700">
                            Categories
                        </a>
                    </li>
                    <li>
                        <a href="/admin/settings" className="block px-4 py-2 rounded hover:bg-gray-700">
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </AdminPanelLayout>
    );
};