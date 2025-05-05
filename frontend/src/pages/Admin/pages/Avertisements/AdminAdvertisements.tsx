// AdminAdvertisements.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminAdvertisementLayout from "../Advertisement/AdminAdvertisementLayout.tsx";
import {BACKEND_URL} from "../../../../globals-env.ts";

interface Advertisement {
    uuid: string;
    title: string;
    status: string;
    userEmail: string;
    description: string;
    images: string[];
}

interface AdvertisementsResponse {
    advertisements: Advertisement[],
    totalPages: number,
}

export default function AdminAdvertisements() {
    const [response, setResponse] = useState<AdvertisementsResponse | null>();
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/user-service/api/admin/advertisements?page=${currentPage}`);
                const data = await response.json();
                setResponse(data as AdvertisementsResponse);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching ads:', error);
            }
        }
        fetchAds();
    }, [])

    const handleRowClick = (uuid: string) => {
        navigate(`/admin/advertisements/${uuid}`);
    };

    return (
        <AdminAdvertisementLayout>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Advertisements Management</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User Email</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {response?.advertisements.map(ad => (
                            <tr
                                key={ad.uuid}
                                onClick={() => handleRowClick(ad.uuid)}
                                className="hover:bg-gray-50 cursor-pointer"
                            >
                                <td className="px-6 py-4">{ad.title}</td>
                                <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full
                        ${ad.status === 'APPROVED' ? 'bg-green-100 text-green-800' 
                            : ad.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-red-100 text-red-800'}`
                    }>
                      {ad.status}
                    </span>
                                </td>
                                <td className="px-6 py-4">{ad.userEmail}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-between items-center">
                    <button
                        disabled={currentPage === 0}
                        onClick={() => setCurrentPage(p => p - 1)}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span>Page {currentPage + 1} of {totalPages + 1}</span>
                    <button
                        disabled={currentPage >= totalPages - 1}
                        onClick={() => setCurrentPage(p => p + 1)}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </AdminAdvertisementLayout>
    );
}