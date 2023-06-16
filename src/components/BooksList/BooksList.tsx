import React from "react";

import Card from "../Card/Card";
import styles from "./BooksList.module.css";
import { State } from "../../store/books/books.types";

interface BooksListProps {
  books: State["books"] | State["newBooks"];
}

const BooksList: React.FC<BooksListProps> = ({ books }) => {
  return (
    <ul className={styles.list}>
      {books.map((book) => (
        <li className={styles.listItem} key={book.isbn13}>
          <Card
            isbn13={book.isbn13}
            title={book.title}
            subtitle={book.subtitle}
            price={book.price}
            image={book.image}
            url={`/books/${book.isbn13}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
