import { SCAN_DATA } from "../constants"
import {QRCodeSVG} from "qrcode.react";
import styles from "./History.module.css";

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    
    return (
        <div>
            {data.map((text) => (
                <p className={styles.history} key={text}>
                    {text}
                    <QRCodeSVG value={text} size={100}/>
                </p>
            ))}
        </div>
    )
}