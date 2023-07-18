import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BarcodeContext = createContext();

export const BarcodeProvider = ({ children }) => {
  const [barcode, setBarcode] = useState('');

  return (
    <BarcodeContext.Provider value={{ barcode, setBarcode }}>
      {children}
    </BarcodeContext.Provider>
  );
};

BarcodeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
