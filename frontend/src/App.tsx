import {Navigate, Outlet, Route} from "react-router-dom";
import {HomePage} from "./pages/Home/HomePage.tsx";
import AdvertisementPage from "./pages/Advertisement/AdvertisementPage.tsx";
import SearchPage from "./pages/Search/SearchPage.tsx";
import {SignIn} from "./pages/SignIn/SignIn.tsx";
import {SignUp} from "./pages/SignUp/SignUp.tsx";
import {ForgotPassword} from "./pages/ForgotPassword/ForgotPassword.tsx";
import AdminPage from "./pages/Admin/AdminPage.tsx";
import MyAdvertisementsPage from "./pages/My/Advertisements/MyAdvertisementsPage.tsx";
import EditAdvertisementPage from "./pages/My/EditAdvertisement/EditAdvertisementPage.tsx";
import {PurchasesPage} from "./pages/My/Purchases/PurchasesPage.tsx";
import SalesPage from "./pages/My/Sales/SalesPage.tsx";
import AdminAdvertisements from "./pages/Admin/pages/Avertisements/AdminAdvertisements.tsx";
import AdminAdvertisement from "./pages/Admin/pages/Advertisement/AdminAdvertisement.tsx";
import {OrderPage} from "./pages/Order/OrderPage.tsx";
import {ChatPage} from "./pages/Chat/ChatPage.tsx";
import ProtectedRoute from "./common-components/ProtectedRoute/ProtectedRoute.tsx";
import FeaturedAdvertisementsPage from "./pages/FeaturedAdvertisements/FeaturedAdvertisementsPage.tsx";
import AddProduct from "./pages/NewAdvertisement/NewAdvertisementPage.tsx";
import {Routes} from "react-router";
import {useUserStore} from "./utils/store/useUserStore.ts";
import {useEffect} from "react";
import {TokenManager} from "./utils/helpers/tokenManager.ts";
import {axiosInstance} from "./utils/axios/interceptors.ts";

export default function App() {
    const { setUser } = useUserStore();

    useEffect(() => {
        const token = TokenManager.getAccessToken();

        if (!token) {
            setUser(null)
            return
        }

        const fetchUser = async () => {
            try {
                const res = await axiosInstance.get("/user-service/api/user/me", {
                    headers: {
                        Authorization: `Bearer ${TokenManager.getAccessToken()}`
                    }
                });
                setUser(res.data);
            } catch (e) {
                console.warn("Не удалось получить /me:", e);
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<HomePage /> }/>
            <Route path="/home" element={<HomePage />} />
            <Route path="/advertisement/:id" element={<AdvertisementPage />} />
            <Route path="/advertisement" element={<Navigate to="/search" replace />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/my/*" element={
                <ProtectedRoute>
                    <Outlet />
                </ProtectedRoute>
            }>
                <Route path="ads" element={<MyAdvertisementsPage />} />
                <Route path="ad/:id" element={<EditAdvertisementPage />} />
                <Route path="purchases" element={<PurchasesPage />} />
                <Route path="sales" element={<SalesPage />} />
            </Route>
            <Route path="/admin/*" element={
                <ProtectedRoute isAdminRoute={true}>
                    <Outlet />
                </ProtectedRoute>
            }>
                <Route index element={<AdminPage />} />
                <Route path="advertisements" element={<AdminAdvertisements />} />
                <Route path="advertisements/:uuid" element={<AdminAdvertisement />} />
            </Route>
            <Route path="/order" element={
                <ProtectedRoute>
                    <OrderPage />
                </ProtectedRoute>
            } />
            <Route path="/messages" element={
                <ChatPage />
            }/>
            <Route path="/favorites" element={
                <ProtectedRoute>
                    <FeaturedAdvertisementsPage />
                </ProtectedRoute>
            }/>
            <Route path="/add-product" element={
                <ProtectedRoute>
                    <AddProduct />
                </ProtectedRoute>
            }/>
        </Routes>
    );
};