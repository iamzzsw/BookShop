import { Book, ExtendedBook, UserDefault } from "../../api/types";

export type ExtendedBookWithCount = ExtendedBook & { count: number };

export interface State {
  cart: ExtendedBookWithCount[];
  favorite: ExtendedBook[];
  book: ExtendedBook | null;
  user: UserDefault | null;

  loading: boolean;
}
