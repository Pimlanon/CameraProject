import { useEffect, useContext } from 'react';

import { BarcodeContext } from '../../context/BarcodeContext';
import '../../App.css';
import useBarcodeScanner from '../../hooks/useBarcodeScanner';

function Scanner() {
  const { barcode } = useContext(BarcodeContext);

  const { barcodeDetected, ref, showPopup } = useBarcodeScanner();

  useEffect(() => {
    if (barcodeDetected) {
      showPopup(barcode);
    }
  }, [barcodeDetected, barcode, showPopup]);

  console.log(barcode);

  return (
    <section className="all-container">
      {/* <h1 style={{ color: 'white' }}>hello world</h1> */}
      <div
        className={`video-container ${
          barcodeDetected ? 'barcode-detected' : ''
        }`}
      >
        <video ref={ref} className="video-element" />

        {barcodeDetected && <div className="focus-square" />}
      </div>
    </section>
  );
}

export default Scanner;
