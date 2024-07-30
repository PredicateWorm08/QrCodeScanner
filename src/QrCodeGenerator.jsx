import { useState } from "react";
import {QRCodeSVG} from "qrcode.react";

import "./qrCodeGenerator.css";

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
    <div className="container">
      <input 
        type="text" 
        value={value}
        placeholder="Введите текст..." 
        onChange={onChangeHandler} 
        className="input"
        />
      <button type="button" className="button" onClick={onClickHandler}>
          Сгенерировать QR
      </button>

      {result !== '' && (
        <div className="qrWrapper">
          <QRCodeSVG value={result} size={200}/>
        </div>
        )}
    </div>
  );
}