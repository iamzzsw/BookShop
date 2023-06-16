import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books/books.reducer";
import categoriesReducer from "./categories/categories.reducer";
import { getCategoriesSlice } from "./categories/categories.selectors";
import { ExtendedBook } from "../api/types";
import { sub } from "./subscribers";

const store = configureStore({
  reducer: {
    book: booksReducer,
    categories: categoriesReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(sub);
export default store;
