import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import product1Image from '../assets/images/Product1.jpg';
import product2Image from '../assets/images/Product2.jpg';
import product3Image from '../assets/images/Product3.jpg';
import product4Image from '../assets/images/Product4.jpg';
import product5Image from '../assets/images/Product5.jpg';
import product6Image from '../assets/images/Product6.jpg';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock product data with images imported from the src folder
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 20, imageUrl: product1Image },
      { id: 2, title: 'Product 2', price: 25, imageUrl: product2Image },
      { id: 3, title: 'Product 3', price: 215, imageUrl: product3Image },
      { id: 4, title: 'Product 4', price: 252, imageUrl: product4Image },
      { id: 5, title: 'Product 5', price: 253, imageUrl: product5Image },
      { id: 6, title: 'Product 6', price: 256, imageUrl: product6Image },
      
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;