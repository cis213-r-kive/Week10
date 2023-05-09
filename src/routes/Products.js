import { Link } from 'react-router-dom';
import product from '../data/product';

function Products() {
  return (
    <>
      <h1>Our Products</h1>
      <ul id="products-list">
        {product.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title} (${product.price})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;