import { useEffect, useState, useContext } from 'react';
import { useZxing } from 'react-zxing';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BarcodeContext } from '../context/BarcodeContext';

const useBarcodeScanner = () => {
  const { barcode, setBarcode } = useContext(BarcodeContext);
  const [barcodeDetected, setBarcodeDetected] = useState(false);
  const [firstResultDetected, setFirstResultDetected] = useState(false);
  const navigateTo = useNavigate();

  const handleBarcodeScan = (scannedBarcode) => {
    if (!firstResultDetected) {
      let scannedValue = scannedBarcode.getText();

      // Add leading zeros if value is less than 13 characters
      while (scannedValue.length < 13) {
        scannedValue = '0' + scannedValue;
      }

      // Limit the value to 13 characters
      const formattedValue = scannedValue.slice(0, 13);

      setBarcode(formattedValue);
      setFirstResultDetected(true);
      setBarcodeDetected(true);

      showPopup(formattedValue);
    }
  };

  const { ref } = useZxing({
    onResult: handleBarcodeScan,
  });

  const showPopup = (text) => {
    Swal.fire({
      title: 'Barcode : ',
      text: text,
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        content: 'barcode-popup-font', // Add your custom CSS class name here
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigateTo('/scan');
      }
    });
  };

  useEffect(() => {
    return () => {
      if (ref.current && ref.current.srcObject) {
        const tracks = ref.current.srcObject.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, [ref]);

  return { barcodeDetected, ref, showPopup, barcode };
};

export default useBarcodeScanner;
