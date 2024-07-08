// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
});