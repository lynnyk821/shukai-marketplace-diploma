import { useNavigate } from "react-router-dom";

export function useNavigateWithScrollBehavior(path: string, behavior: "smooth" | "instant") {
    const navigate = useNavigate();

    const navigateAndScrollToTop = () => {
        navigate(path);

        window.scrollTo({
            top: 0,
            behavior: behavior === "smooth" ? "smooth" : "instant",
        });
    };

    return navigateAndScrollToTop;
}
