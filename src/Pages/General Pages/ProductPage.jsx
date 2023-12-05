import React from 'react';
import Counter from '../../Components/Counter/Counter';
import { products } from '../../data/Products';

const ProductPage = () => {
  const filteredProducts = products.filter((product) => {
    switch (product.id) {
      case 1:
        return true;
      default:
        return false;
    }
  });
  
  const product = filteredProducts[0];

  return (
    <>
      <div className='bg-slate-300'>
        <div>
          <img src={product.imageURL} alt={product.name} />
          <h1>{product.name}</h1>
          <hr />
          <h3>{product.price}</h3>
          <Counter />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
