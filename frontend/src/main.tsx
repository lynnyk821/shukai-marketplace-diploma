import { createRoot } from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import { Routes } from "react-router"
import {BrowserRouter, Route} from "react-router-dom";
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

createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/products/:id" element={<AdvertisementPage />} />
                <Route path="/messages" element={<ChatPage />} />
                <Route path="/favorites" element={<FeaturedAdvertisementsPage />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)
