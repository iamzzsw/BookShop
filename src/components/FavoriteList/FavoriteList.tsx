import { useEffect } from "react";
import { Book, ExtendedBook } from "../../api/types";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import Typography from "../Typography/Typography";

import styles from "./FavoriteList.module.css";

interface FavoriteListProps {
  books: ExtendedBook[];
}

const FavoriteList: React.FC<FavoriteListProps> = ({ books }) => {
  useEffect(() => {}, [books]);
  return (
    <>
      <Typography variant="h1">Favorites</Typography>
      <ul className={styles.list}>
        {books.map((book) => (
          <li className={styles.listItem} key={book.isbn13}>
            <FavoriteItem
              isbn13={book.isbn13}
              title={book.title}
              authors={book.authors}
              price={book.price}
              image={book.image}
              url={`/books/${book.isbn13}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FavoriteList;
