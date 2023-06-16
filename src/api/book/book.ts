import { Book, ExtendedBook } from "../types";
import { SPACE_API_URL } from "../../const/conf";

export const getBook = (id: ExtendedBook["isbn13"]): Promise<ExtendedBook> => {
  return fetch(`${SPACE_API_URL}/books/${id}`).then((res) => res.json());
};
