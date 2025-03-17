import { useLocation, useNavigate } from "react-router-dom";
import MoveBackLinksBarLayout from "./MoveBackLinksBarLayout.tsx";

export default function MoveBackLinksBar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Получаем массив частей пути
    const pathSegments = location.pathname.split("/").filter(Boolean);

    // Формируем маршруты для каждой части пути
    const breadcrumbs = pathSegments.map((segment, index) => ({
        name: decodeURIComponent(segment), // Расшифровка из URI
        path: "/" + pathSegments.slice(0, index + 1).join("/"), // Полный путь до сегмента
    }));

    const handleGoTo = (path: string) => {
        navigate(path);
    };

    return (
        <MoveBackLinksBarLayout>
            {breadcrumbs.map((breadcrumb, index) => (
                <div
                    className="w-full py-2 flex items-center text-[#414141] text-[16px] font-inter"
                    key={index}
                >
                    <button
                        className={"hover:text-yellow-600 transition duration-300 ease-in-out"}
                        onClick={() => handleGoTo(breadcrumb.path)}
                    >
                        {breadcrumb.name}
                    </button>
                    {index < breadcrumbs.length - 1 && <span>{"\u00A0" + "/" + "\u00A0"}</span>}
                </div>
            ))}
        </MoveBackLinksBarLayout>
    );
}
