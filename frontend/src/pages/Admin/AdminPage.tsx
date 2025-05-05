import AdminPageLayout from "./AdminPageLayout.tsx";

export default function AdminPage() {
    return (
        <AdminPageLayout>
            <div>
                <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
                <p>Welcome to the admin panel. Select a section from the sidebar.</p>
            </div>
        </AdminPageLayout>
    );
};