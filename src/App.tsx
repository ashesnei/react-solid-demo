import  { useCallback, useState } from 'react';
import { products } from './data';
import type { Category } from './types';
import { ProductFilter } from './components/ProductFilter';
import { useFilteredProducts } from './hooks/useFilteredProducts';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredProducts = useFilteredProducts(products, selectedCategory);

  const handleCategoryChange = useCallback((category: Category | "all")=> {
    setSelectedCategory(category)
  },[] )

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Catálogo de productos</h1>
      <ProductFilter selected={selectedCategory} onChange={handleCategoryChange}/>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - <em>{product.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
