// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TodoList from './features/todos/TodoList';
import Categories from './features/categories/Categories';
import Products from './features/products/Products';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;