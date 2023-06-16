import { Book, ExtendedBook } from "../../api/types";

export interface State {
  book: ExtendedBook | null;
  books: Book[];
  loading: boolean;
  newBooks: Book[];

  page: number;
  query: string;
}
