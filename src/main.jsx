import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Layout } from './Layout';
import {QrCodeGenerator} from './components/Generate/QrCodeGenerator';
import {QrCodeScanner} from './components/Scan/QrCodeScanner';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
)
