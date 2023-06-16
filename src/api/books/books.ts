import { Book } from "../types";
import { SPACE_API_URL } from "../../const/conf";

export const getBooks = (
  page: number,
  query: string
): Promise<{
  error: string;
  total: string;
  page: string;
  books: Book[];
}> => {
  return fetch(`${SPACE_API_URL}/search/${query}?page=${page}`).then((res) => res.json());
};

export const getNewBooks = (): Promise<{
  total: string;
  books: Book[];
}> => {
  return fetch(`${SPACE_API_URL}/new`).then((res) => res.json());
};
