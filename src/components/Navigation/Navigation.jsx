import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav className = {styles.container}>
            <Link className = {styles.button} to="/generate">Генерировать QR код</Link>
            <Link className = {styles.button} to="/scan">Сканировать QR код</Link>
            <Link className = {styles.button} to="/generateHistory">История генерирования</Link>
            <Link className = {styles.button} to="/scanHistory">История сканирования</Link>
        </nav>
    );
};