import { createRoot } from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import './styles/index.css'
import '@mantine/core/styles.css'
import { Routes } from "react-router"
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home.tsx";

createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)
