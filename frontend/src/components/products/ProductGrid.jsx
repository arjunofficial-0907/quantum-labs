import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {products?.map((product) => (
      <ProductCard key={product.id} product={product} onClick={onClick} />
    ))}
  </div>
);

export default ProductGrid;
