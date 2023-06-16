import { createAsyncThunk } from "@reduxjs/toolkit";

import { getBooks as getBooksApi, getNewBooks as getNewBooksApi } from "../../api/books/books";
import { getBook as getBookApi } from "../../api/book/book";
import { getBookSlice } from "../../store/books/books.selectors";
import { RootStore } from "../index";
import { ExtendedBook } from "../../api/types";

//https://redux-toolkit.js.org/api/createAsyncThunk

export const getBooks = createAsyncThunk("books/getBooks", (arg, thunkAPI) => {
  const { page, query } = getBookSlice(thunkAPI.getState() as RootStore);
  return getBooksApi(page, query);
});

export const getNewBooks = createAsyncThunk("books/getNewBooks", () => {
  return getNewBooksApi();
});

export const getBook = createAsyncThunk("books/getBook", (bookId: ExtendedBook["isbn13"]) =>
  getBookApi(bookId)
);
