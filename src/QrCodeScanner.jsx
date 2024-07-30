import { Scanner } from '@yudiel/react-qr-scanner';

export const QrCodeScanner = () => {
  const scanHandler = (result) => {
    console.log(result);
}
  
const settings = {
  audio: false,
  finder: false,
}

const styleSettings = {
  container: { width: 600, height: 200 }
}

  return (
    <div>
      <Scanner 
      allowMultiple
      onScan={scanHandler}
      components={settings}
      styles={styleSettings}
      />
    </div>
  )
}