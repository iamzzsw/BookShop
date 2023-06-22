import { Book, ExtendedBook, UserDefault } from "../../api/types";
import { ReviewsProps } from "../../components/Reviews/Reviews";

export type ExtendedBookWithCount = ExtendedBook & { count: number };

export interface State {
  cart: ExtendedBookWithCount[];
  favorite: ExtendedBook[];
  book: ExtendedBook | null;
  user: UserDefault | null;
  reviews: ReviewsProps[] | [];

  loading: boolean;
}
