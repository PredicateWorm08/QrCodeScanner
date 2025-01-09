import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import styles from './qrCodeScanner.module.css';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
}

  return (
    <div className={styles.container}>
      <Scanner 
        allowMultiple
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