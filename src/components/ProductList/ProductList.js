import React from 'react';
import './ProductList.css';

// Mock data for products
const products = [
  { id: 1, name: 'Product 1', category: 'Category A', price: 9.99, stock: 10 },
  { id: 2, name: 'Product 2', category: 'Category B', price: 19.99, stock: 5 },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className="action-button">Edit</button>
                <button className="action-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;