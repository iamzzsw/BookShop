import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { State } from "./books.types";
import { getBook, getBooks, getNewBooks } from "./books.action";

const initialState: State = {
  book: null,
  books: [],
  loading: false,
  newBooks: [],

  page: 1,
  query: "",
};

const step = 1;

const book = createSlice({
  name: "books",
  initialState,
  reducers: {
    increasePage: (state) => {
      state.page += step;
    },
    reserBook: (state) => {
      state.book = null;
    },
    setQueryValue: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.page = initialState.page;
      state.books = initialState.books;
    },
    resetQuery: (state) => {
      state.query = initialState.query;
    },
    resetPage: (state) => {
      state.page = initialState.page;
    },
    resetBooks: (state) => {
      state.books = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = state.books.concat(action.payload.books);
      state.loading = false;
    });
    builder.addCase(getNewBooks.fulfilled, (state, action) => {
      state.newBooks = action.payload.books;
    });

    builder.addCase(getBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBook.fulfilled, (state, action) => {
      state.book = action.payload;
    });
  },
});

export const { reserBook, increasePage, resetPage, setQueryValue, resetBooks, resetQuery } =
  book.actions;

export default book.reducer;
