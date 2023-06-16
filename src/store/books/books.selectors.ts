import { RootStore } from "../index";
import { State } from "./books.types";

export const getBookSlice = (store: RootStore): State => store.book;

export const getBooks = (store: RootStore): State["books"] | State["newBooks"] =>
  store.book.query ? store.book.books : store.book.newBooks;
