import { useParams } from 'react-router-dom';

import product from '../data/product';

function ProductDetail() {
  const params = useParams();
  const productId = params.id;
  const products = product.find((product) => product.id === productId);

  return (
    <main>
      <h1>{products.title}</h1>
      <p id="product-price">${products.price}</p>
      <p>{products.description}</p>
    </main>
  );
}

export default ProductDetail;