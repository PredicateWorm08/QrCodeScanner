import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import {SCAN_DATA} from '../../constants';

import styles from './qrCodeScanner.module.css';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(
      SCAN_DATA, 
      JSON.stringify([...prevData, result[0].rawValue])
    );
}

  return (
    <div className={styles.container}>
      <Scanner 
        onScan={scanHandler}
        components={{
          audio: false,
          finder: false,
        }}
        styles={{
          container: { width: 300 }
        }}
      />
      <p className={styles.result}>{scanned}</p>
    </div>
  )
}