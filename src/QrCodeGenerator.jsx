import { useState } from "react";
import {QRCodeSVG} from "qrcode.react";

import styles from "./qrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('hello');
  const [result, setResult] = useState('');

  const onClickHandler = (event) => {
   // console.log('jkkdfjdkfjdk');
   
   setResult(value);
   setValue('');
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        value={value}
        placeholder="Введите текст..." 
        onChange={onChangeHandler} 
        className={styles.input}
        />
      <button type="button" className={styles.button} onClick={onClickHandler}>
          Сгенерировать QR
      </button>

      {result !== '' && (
        <div className={styles.qrWrapper}>
          <QRCodeSVG value={result} size={200}/>
        </div>
        )}
    </div>
  );
}