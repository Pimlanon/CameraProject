//import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ScanAndCardPage from './pages/ScanAndCardPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ScannerPage from './pages/ScannerPage';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/scan" element={<ScanAndCardPage />} />
      <Route path="/product" element={<ProductDetailsPage />} />
      <Route path="/barcode" element={<ScannerPage />} />
    </Routes>
  );
}

export default App;
