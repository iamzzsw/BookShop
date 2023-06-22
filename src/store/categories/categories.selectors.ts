import { RootStore } from "../index";
import { State } from "./categories.types";

export const getCategoriesSlice = (store: RootStore): State => store.categories;

export const isBookFavorite = (store: RootStore): boolean =>
  !!store.categories.favorite.find((item) => item.isbn13 === store.book.book?.isbn13);

export const isBookInCart = (store: RootStore): boolean =>
  !!store.categories.cart.find((item) => item.isbn13 === store.book.book?.isbn13);

export const getTotalPrice = (store: RootStore): number =>
  store.categories.cart.reduce((total, item) => {
    const price = item.count * Number(item.price.slice(1));
    return total + price;
  }, 0);

export const getUser = (store: RootStore): State["user"] => store.categories.user;

export const getReviews = (store: RootStore): State['reviews'] => store.categories.reviews;
