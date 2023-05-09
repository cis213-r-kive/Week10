import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Root from './routes/Root';
import { Suspense, lazy } from 'react';

const ProductDetail = lazy(() => import('./routes/ProductDetail'));
const Products = lazy(() => import('./routes/Products'));
const NotFound = lazy(() => import('./routes/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} index />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
