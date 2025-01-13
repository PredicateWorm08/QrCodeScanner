import { GENERATE_DATA } from "../constants"
import {QRCodeSVG} from "qrcode.react";
import styles from "./History.module.css";

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    
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