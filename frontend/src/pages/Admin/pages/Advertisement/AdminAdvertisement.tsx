import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Advertisement {
    uuid: string;
    title: string;
    status: string;
    userEmail: string;
    description: string;
    images: string[];
}

export default function AdminAdvertisement() {
    const { uuid } = useParams();
    const [ad, setAd] = useState<Advertisement | null>(null);

    useEffect(() => {
        const fetchAd = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/user-service/api/admin/advertisements/${uuid}`
                );
                const data = await response.json();
                setAd(data);
            } catch (error) {
                console.error('Error fetching ad details:', error);
            }
        };

        fetchAd();
    }, [uuid]);

    if (!ad) return <div>Loading...</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{ad.title}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <p><strong>Status:</strong> {ad.status}</p>
                    <p><strong>User Email:</strong> {ad.userEmail}</p>
                </div>
                <div>
                    <p><strong>Description:</strong></p>
                    <p className="text-gray-600">{ad.description}</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                {ad.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Ad image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                ))}
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => {
                        fetch(
                            `http://localhost:8080/user-service/api/admin/advertisements/${ad.uuid}/reject`,
                            { method: 'DELETE' }
                        ).then(() => window.history.back());
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Reject
                </button>
                <button
                    onClick={() => {
                        fetch(
                            `http://localhost:8080/user-service/api/admin/advertisements/${ad.uuid}/approve`,
                            { method: 'POST' }
                        ).then(() => window.history.back());
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Approve
                </button>
            </div>
        </div>
    );
}