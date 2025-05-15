import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import './styles/index.css'
import './styles/fonts.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'

import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
