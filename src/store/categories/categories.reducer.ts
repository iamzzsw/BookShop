import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ExtendedBookWithCount, State } from "./categories.types";
import { ExtendedBook, UserDefault } from "../../api/types";
import { ReviewsProps } from "../../components/Reviews/Reviews";

const initialState: State = {
  cart: [],
  favorite: [],
  book: null,
  reviews: [],

  loading: false,
  user: null,
};

const categories = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newBook = {
        ...action.payload,
        count: 1,
      };
      state.cart.push(newBook);
    },
    addToFavorite: (state, actions) => {
      state.favorite.push(actions.payload);
    },
    addUser: (state, action: PayloadAction<UserDefault>) => {
      state.user = action.payload;
    },
    resetFavorite: (state, action: PayloadAction<ExtendedBook["isbn13"]>) => {
      let book = state.favorite.find((book) => book.isbn13 === action.payload);
      if (book) {
        state.favorite = state.favorite.filter((book) => book.isbn13 !== action.payload);
      }
    },
    resetCart: (state, action: PayloadAction<ExtendedBook["isbn13"]>) => {
      let book = state.cart.find((book) => book.isbn13 === action.payload);
      if (book) {
        state.cart = state.cart.filter((book) => book.isbn13 !== action.payload);
      }
    },
    addAllBook: (state, action: PayloadAction<ExtendedBook[]>) => {
      state.favorite = action.payload;
    },
    addAllBookToCart: (state, action: PayloadAction<ExtendedBookWithCount[]>) => {
      state.cart = action.payload;
    },
    reserBook: (state) => {
      state.book = null;
    },
    incrementCount: (state, action: PayloadAction<ExtendedBook["isbn13"]>) => {
      let book = state.cart.find((book) => book.isbn13 === action.payload);
      if (book) {
        book.count += 1;
      }
    },
    decrementCount: (state, action: PayloadAction<ExtendedBook["isbn13"]>) => {
      let book = state.cart.find((book) => book.isbn13 === action.payload);
      if (book && book.count > 1) {
        book.count -= 1;
      }
    },
    addReviews: (state, action: PayloadAction<ReviewsProps[]>) => {
      state.reviews = action.payload;
    }
  },
});

export const {
  reserBook,
  addToCart,
  addToFavorite,
  resetFavorite,
  addAllBook,
  resetCart,
  addAllBookToCart,
  incrementCount,
  decrementCount,
  addUser,
  addReviews,
} = categories.actions;

export default categories.reducer;
