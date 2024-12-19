import { createRoot } from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import { Routes } from "react-router"
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home.tsx";

import './styles/index.css'
import './styles/fonts.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'

import Product from "./pages/Product/Product.tsx";
import {Messages} from "./pages/Messages/Messages.tsx";

createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/favorites" element={<Product />} />
                <Route path="/cart" element={<Product />} />
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)
