import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Home from './routes/Home';
import ProductDetail from './routes/ProductDetail';
import Products from './routes/Products';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
