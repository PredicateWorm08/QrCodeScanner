import { useState } from "react";
import {QRCodeSVG} from "qrcode.react";
import { GENERATE_DATA } from "../../constants";

import styles from "./qrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('hello');
  const [result, setResult] = useState('');

  const onClickHandler = () => {
  const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(
      GENERATE_DATA, 
      JSON.stringify([...prevData, value])
    );

   setResult(value);
   setValue('');
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.field}>
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
      </div>
      <div className={styles.qrcode}>
      {result !== '' && (
        <div className={styles.qrWrapper}>
          <QRCodeSVG value={result} size={200}/>
        </div>
        )}
      </div>
    </div>
  );
}