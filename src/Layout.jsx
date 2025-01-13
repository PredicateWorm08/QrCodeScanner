import { Routes, Route } from "react-router-dom";
import {Navigation} from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { GenerateHistory } from "./components/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.menu}>
        <h1 className = {styles.title}> QR Code Studio</h1>
        <Navigation/>
      </div>
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
}

export { Layout };