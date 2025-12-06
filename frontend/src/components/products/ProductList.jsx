import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
