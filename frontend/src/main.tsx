import { createRoot } from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import { Routes } from "react-router"
import {BrowserRouter, Navigate, Route} from "react-router-dom";
import {HomePage} from "./pages/Home/HomePage.tsx";

import './styles/index.css'
import './styles/fonts.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'

import AdvertisementPage from "./pages/Advertisement/AdvertisementPage.tsx";
import {ChatPage} from "./pages/Chat/ChatPage.tsx";
import FeaturedAdvertisementsPage from "./pages/FeaturedAdvertisements/FeaturedAdvertisementsPage.tsx";
import AddProduct from "./pages/NewAdvertisement/NewAdvertisementPage.tsx";
import SearchPage from "./pages/Search/SearchPage.tsx";
import ProtectedRoute from "./common-components/ProtectedRoute/ProtectedRoute.tsx";
import {SignUp} from "./pages/SignUp/SignUp.tsx";
import {ForgotPassword} from "./pages/ForgotPassword/ForgotPassword.tsx";
import {SignIn} from "./pages/SignIn/SignIn.tsx";

createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage /> }/>
                <Route path="/home" element={<HomePage />} />
                <Route path="/advertisement/:id" element={<AdvertisementPage />} />
                <Route path="/advertisement" element={<Navigate to="/search" replace />} />
                <Route path="/messages" element={<ChatPage />} />
                <Route path="/favorites" element={<FeaturedAdvertisementsPage />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)
