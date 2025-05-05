import { createRoot } from 'react-dom/client'
import { Routes } from "react-router"
import {BrowserRouter, Navigate, Route} from "react-router-dom";

import './styles/index.css'
import './styles/fonts.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'

import {HomePage} from "./pages/Home/HomePage.tsx";
import AdvertisementPage from "./pages/Advertisement/AdvertisementPage.tsx";
import SearchPage from "./pages/Search/SearchPage.tsx";
import {OrderPage} from "./pages/Order/OrderPage.tsx";
import {SignIn} from "./pages/SignIn/SignIn.tsx";
import {SignUp} from "./pages/SignUp/SignUp.tsx";
import {ForgotPassword} from "./pages/ForgotPassword/ForgotPassword.tsx";
import ProtectedRoute from "./common-components/ProtectedRoute/ProtectedRoute.tsx";
import {ChatPage} from "./pages/Chat/ChatPage.tsx";
import FeaturedAdvertisementsPage from "./pages/FeaturedAdvertisements/FeaturedAdvertisementsPage.tsx";
import AddProduct from "./pages/NewAdvertisement/NewAdvertisementPage.tsx";
import AdminPage from "./pages/Admin/AdminPage.tsx";
import AdminAdvertisements from "./pages/Admin/pages/Avertisements/AdminAdvertisements.tsx";
import AdminAdvertisement from "./pages/Admin/pages/Advertisement/AdminAdvertisement.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage /> }/>
            <Route path="/home" element={<HomePage />} />
            <Route path="/advertisement/:id" element={<AdvertisementPage />} />
            <Route path="/advertisement" element={<Navigate to="/search" replace />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin" element={
                <AdminPage/>
            }/>
            <Route path="/admin/advertisements" element={<AdminAdvertisements />} />
            <Route path="/admin/advertisements/:uuid" element={<AdminAdvertisement />} />
            <Route path="/order" element={
                <OrderPage />
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
                    <AddProduct />
            }/>
            <Route path="/admin" element={
                <AdminPage />
            }/>
        </Routes>
    </BrowserRouter>
)
